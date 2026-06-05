#!/usr/bin/env python3
"""WCAG 2.2 contrast calculator — dependency-free.

The /impeccable-rails:scaffold command runs this to report EXACT contrast ratios
instead of estimating them (estimates drift by up to ~1.5 and shouldn't be trusted).

Usage:
  python3 contrast.py "#1E293B" "#FFFFFF"            # one pair
  python3 contrast.py "#1E293B/#FFFFFF" "#FFF/#2563EB"   # many pairs (fg/bg)
  echo "#fff #2563eb" | python3 contrast.py -          # pairs from stdin

Output per pair: ratio + AA/AAA verdicts for normal text (4.5/7), large text (3/4.5),
and UI/graphics (3:1).
"""
import sys, re

def _lin(c):
    c /= 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

def _lum(hx):
    hx = hx.strip().lstrip('#')
    if len(hx) == 3:
        hx = ''.join(ch * 2 for ch in hx)
    if len(hx) != 6 or not re.fullmatch(r'[0-9a-fA-F]{6}', hx):
        raise ValueError(f"bad hex: {hx!r}")
    r, g, b = (int(hx[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * _lin(r) + 0.7152 * _lin(g) + 0.0722 * _lin(b)

def ratio(fg, bg):
    a, b = _lum(fg), _lum(bg)
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)

def verdicts(r):
    return {
        "normal_AA": r >= 4.5, "normal_AAA": r >= 7.0,
        "large_AA": r >= 3.0, "large_AAA": r >= 4.5,
        "ui_graphics": r >= 3.0,
    }

def _pairs(args):
    if args == ['-']:
        args = sys.stdin.read().split()
    out = []
    for tok in args:
        if '/' in tok:
            fg, bg = tok.split('/', 1)
            out.append((fg, bg))
        else:
            out.append((tok,))
    # merge bare tokens into consecutive fg,bg pairs
    flat, buf = [], []
    for p in out:
        if len(p) == 2:
            flat.append(p)
        else:
            buf.append(p[0])
            if len(buf) == 2:
                flat.append((buf[0], buf[1])); buf = []
    return flat

def main():
    pairs = _pairs(sys.argv[1:])
    if not pairs:
        print(__doc__); return 1
    worst = None
    for fg, bg in pairs:
        r = ratio(fg, bg)
        v = verdicts(r)
        tag = "AAA" if v["normal_AAA"] else ("AA" if v["normal_AA"] else
              ("AA-large" if v["large_AA"] else "FAIL"))
        print(f"{fg:>9} on {bg:<9}  {r:5.2f}:1   text:{tag:8} ui:{'ok' if v['ui_graphics'] else 'FAIL'}")
        worst = r if worst is None else min(worst, r)
    if worst is not None and len(pairs) > 1:
        print(f"--- worst pair: {worst:.2f}:1")
    return 0

if __name__ == "__main__":
    sys.exit(main())
