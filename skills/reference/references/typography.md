# Typography

Distilled from *Design for Developers*, modernized for 2026.

## 1. Vocabulary

- **Typeface** = a family of related fonts (e.g. Roboto). In CSS this is `font-family`.
- **Font** = a specific style/weight within a typeface (Roboto Light, Roboto Bold…).
- Pick **one or two** typefaces: one for headers, one for body. Roboto is fine but overused — for a
  more distinctive feel in 2026 reach for variable fonts (Inter, Geist, Source Sans, Open Sans…).

## 2. Serif vs sans

- **Serif** — decorative strokes ("feet"). Use for **headers, hero text, large display**.
- **Sans serif** — none. Use for **body, paragraphs, small text, labels, mobile** (easier to read on screens).
- **Default to sans** when in doubt. **Don't** set headers AND body in the *same* sans (no contrast) —
  pair a serif/display header with a sans body, or two clearly different sans.

## 3. Modular scale (the base sizes)

Base body = **16px**. Sizes follow a modular scale (~**1.618**, golden ratio) so they relate harmoniously:

| Element | em    | px  |
|---------|-------|-----|
| H1      | 3.125 | 50  |
| H2      | 2.618 | 42  |
| H3      | 1.931 | 30  |
| H4      | 1.618 | 25  |
| H5      | 1.194 | 19  |
| Body P  | 1.000 | 16  |
| Small   | 0.667 | 11  |

(Tool: modularscale.com for the ratio; **Utopia.fyi** for the fluid version below.)

## 4. Responsive type — fluid `clamp()` (default)

The book reduced sizes per breakpoint. **In 2026, default to fluid type** with `clamp()` so size
scales smoothly with the viewport — no breakpoint jumps:

```css
/* clamp(MIN, PREFERRED, MAX): MIN=small-screen, MAX=large-screen, PREFERRED scales with vw */
--font-h1:   clamp(2rem,    1.4rem + 3vw,   3.125rem); /* 32 → 50px */
--font-h2:   clamp(1.75rem, 1.3rem + 2.2vw, 2.625rem); /* 28 → 42px */
--font-h3:   clamp(1.5rem,  1.2rem + 1.5vw, 1.875rem); /* 24 → 30px */
--font-body: clamp(1rem,    0.95rem + 0.25vw, 1.125rem); /* 16 → 18px */
```

Derive MIN/MAX from the scale + the book's reduction guidance, then let `clamp` interpolate.

### Step-based fallback (the book's rule, if you can't use clamp)
- **Paragraphs:** desktop 18–24px → tablet ~16px (−10%) → mobile ~14px (−25%). Reduce only 10–25%.
- **Headers:** desktop up to 64px (0%) → tablet ~30px (−50%) → mobile ~25px (−20%). Headers shrink
  much more than paragraphs. **Don't** let a header wrap to a second line; **don't** set headers = body size.

## 5. Line height (leading)

- **Body / paragraphs: 1.5.** Never **> 1.75** (too airy, disjointed).
- **Large text: ~1.15–1.25**, never **> 1.25**. Bigger text needs *less* leading.
- **Headers/titles: ~1.15** (fit closely).
- Rule: line-height **decreases as font size increases**. Longer line lengths need slightly more leading.

## 6. Letter spacing (tracking)

- Regular sizes: leave default.
- **Text above ~64px:** reduce by **−0.025em or −1px** (tighten large display/hero/headings).
- Keep letter spacing **consistent** across the design. Don't space header letters too far apart;
  don't tighten until letters touch.

## 7. Font weight

Roboto-style ramp: Thin · Light · Regular · Text · Medium · **Bold** · **Black**.
- **Increase weight on small text** (labels, toasts, button text) so it stays legible.
- **Reduce weight as size increases** — the larger the font, the less weight it needs.
- **Combine weights** within large headings to make specific words pop.
- **Don't** overuse bold on large text; **don't** use very light weights on small text.

## 8. Emphasis rules

- **Bold:** emphasize the essential only — max **1–2 bold items** per block (e.g. "Login" but not the
  "forgot password" link). Too much bold dilutes emphasis.
- **Italics:** reserve for *testimonials, quotes, references*, or one emphasized phrase. **Never** for
  buttons, links, full paragraphs, or whole lines.
- **Underline:** **don't** underline hyperlinks (use color/weight instead) and **don't** underline large
  text. **Do** use underline to emphasize a core statement, and on hyperlink **hover**. Variants:
  default / double / dotted / wavy.
- **Capitalization:** OK for **titles, headers, buttons, labels, alerts** to draw attention. **Never**
  ALL-CAPS a full sentence or body paragraph (reads unprofessional, hurts readability).

## 9. Legibility checklist

Easy-to-read font · size adequate for audience/age/vision · capitals only for emphasis · dark text on
light bg (and vice-versa) · avoid busy text over busy images · don't drop contrast/size to cram text.

## 10. Text hierarchy levers

Size (biggest = seen first) · position (top first) · color (standout vs blend) · bold/underline (seen
first) · indentation. Order content so titles read first, lead paragraphs second, least-important last.

## 11. Typography schema (style-guide output)

Pick header + body typeface; set H1–H5 + body + small (fluid `clamp` values); define line-height and
letter-spacing per level; provide styled examples. Example:
`H1 Roboto Light 50px / 1.25 / #FFF · H2 Roboto Regular 42px / 1.33 · H3 Roboto Bold 30px / 1.5 ·
Body 16–18px / 1.5`. This is what `/design-formulas:scaffold` emits.
