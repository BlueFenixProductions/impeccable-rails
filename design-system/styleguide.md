# Fintech Dashboard — Design System Styleguide

**Brief:** Trustworthy, data-dense financial dashboard · seed `#2563EB` · light + dark  
**Generated:** 2026-06-03 · Design Formulas v0.1

---

## Harmony

**Triadic** — three hues evenly spaced on the OKLCH wheel:

| Role | Hue | H° | 500 HEX | 600 HEX | Psychology |
|------|-----|----|---------|---------|------------|
| Primary | Blue | 263° | `#3B82F6` | `#2563EB` ★ seed | Secure · financial · loyal |
| Secondary | Amber | 23° | `#F59E0B` | `#D97706` | Attention · warmth · CTA accent |
| Tertiary | Emerald | 143° | `#10B981` | `#059669` | Success · stable · growth |
| Neutral | Slate | 263° (low C) | `#64748B` | `#475569` | Cool blue-grey · backgrounds · UI chrome |

---

## Color Ladders

### Primary — Blue (H=263°, C_peak=0.227)

| Weight | HEX | OKLCH | Role |
|--------|-----|-------|------|
| 50 | `#EFF6FF` | oklch(0.97 0.045 263) | Page background · subtle fills |
| 100 | `#DBEAFE` | oklch(0.94 0.079 263) | Backgrounds · hover fills |
| 200 | `#BFDBFE` | oklch(0.87 0.125 263) | Borders · dividers · disabled |
| 300 | `#93C5FD` | oklch(0.79 0.170 263) | Input borders · subtle text |
| 400 | `#60A5FA` | oklch(0.70 0.204 263) | Placeholder · icons · **dark-mode primary** |
| 500 | `#3B82F6` | oklch(0.62 0.227 263) | Base interactive |
| **600** | **`#2563EB`** | oklch(0.54 0.216 263) | **Primary CTA · seed · light-mode semantic primary** |
| 700 | `#1D4ED8` | oklch(0.46 0.193 263) | Button BG (AA 6.8:1 w/ white) · hover |
| 800 | `#1E40AF` | oklch(0.38 0.159 263) | Emphasis fills |
| 900 | `#1E3A8A` | oklch(0.30 0.125 263) | High-emphasis headings |
| 950 | `#172554` | oklch(0.22 0.091 263) | Max-contrast · dark fills |

### Secondary — Amber (H=23°, C_peak=0.180)

| Weight | HEX | Role |
|--------|-----|------|
| 50 | `#FFFBEB` | Subtle warning tint |
| 100 | `#FEF3C7` | Warning fill |
| 200 | `#FDE68A` | |
| 300 | `#FCD34D` | |
| 400 | `#FBBF24` | Icons · indicators · **dark-mode secondary** |
| 500 | `#F59E0B` | Warning base |
| **600** | **`#D97706`** | **Semantic secondary · CTA accent** |
| 700 | `#B45309` | Hover |
| 800 | `#92400E` | |
| 900 | `#78350F` | |
| 950 | `#451A03` | |

### Tertiary — Emerald (H=143°, C_peak=0.170)

| Weight | HEX | Role |
|--------|-----|------|
| 50 | `#ECFDF5` | Success background |
| 100 | `#D1FAE5` | Success tint |
| 200 | `#A7F3D0` | |
| 300 | `#6EE7B7` | |
| 400 | `#34D399` | Positive indicator · **dark-mode tertiary** |
| 500 | `#10B981` | Success base |
| **600** | **`#059669`** | **Success action** |
| 700 | `#047857` | Hover |
| 800 | `#065F46` | |
| 900 | `#064E3B` | |
| 950 | `#022C22` | |

### Neutral — Slate (H=263°, very low C)

| Weight | HEX | Role |
|--------|-----|------|
| 50 | `#F8FAFC` | App background (surface-0 light) |
| 100 | `#F1F5F9` | Sidebar · panel fills |
| 200 | `#E2E8F0` | Borders · dividers (light mode) |
| 300 | `#CBD5E1` | Input borders |
| 400 | `#94A3B8` | Placeholder · disabled · muted text dark |
| 500 | `#64748B` | Icons · captions |
| 600 | `#475569` | Muted text (light mode) |
| 700 | `#334155` | Dark-mode borders |
| 800 | `#1E293B` | Body text (light mode) |
| 900 | `#0F172A` | Surface-1 (dark mode card) |
| 950 | `#020617` | Surface-0 (dark mode background) |

---

## Semantic Tokens

| Token | Light | Dark |
|-------|-------|------|
| `--surface-0` | `#F8FAFC` (neutral-50) | `#020617` (neutral-950) |
| `--surface-1` | `#FFFFFF` | `#0F172A` (neutral-900) |
| `--surface-2` | `#F8FAFC` (neutral-50) | `#1E293B` (neutral-800) |
| `--text-strong` | `#020617` | `#F8FAFC` |
| `--text` | `#1E293B` | `#E2E8F0` |
| `--text-muted` | `#475569` | `#94A3B8` |
| `--border` | `#E2E8F0` | `#334155` |
| `--primary` | `#2563EB` | `#60A5FA` |
| `--primary-hover` | `#1D4ED8` | `#93C5FD` |

---

## Contrast Checks (WCAG 2.2)

| Pair | Ratio | Pass |
|------|-------|------|
| text-strong `#020617` on `#FFFFFF` (light) | 19.9:1 | AAA |
| text `#1E293B` on `#FFFFFF` (light) | 13.8:1 | AAA |
| text-muted `#475569` on `#FFFFFF` (light) | 7.2:1 | AAA |
| white on primary-700 `#1D4ED8` (button BG) | 6.8:1 | AA ✓ |
| primary-400 `#60A5FA` on `#020617` (dark) | 8.4:1 | AAA |
| text `#E2E8F0` on `#020617` (dark) | 17.8:1 | AAA |

> **Button note:** Use `primary-700` (#1D4ED8) as the button background with white text to hit AA (6.8:1). `primary-600` gives 5.2:1 — passes AA for large/bold text and UI graphics (≥3:1), but falls short of 4.5:1 for small normal text. The semantic `--primary` token resolves to `primary-600` for non-button use.

---

## Typography

| Level | Typeface | Fluid Size | Size Range | LH | Tracking | Weight |
|-------|----------|-----------|-----------|-----|---------|--------|
| H1 | Playfair Display | `clamp(2rem, 1.4rem + 3vw, 3.125rem)` | 32–50px | 1.15 | -0.025em | 700 |
| H2 | Playfair Display | `clamp(1.75rem, 1.3rem + 2.2vw, 2.625rem)` | 28–42px | 1.15 | -0.025em | 700 |
| H3 | Playfair Display | `clamp(1.5rem, 1.2rem + 1.5vw, 1.875rem)` | 24–30px | 1.2 | — | 600 |
| H4 | Inter | `clamp(1.375rem, 1.15rem + 1vw, 1.563rem)` | 22–25px | 1.2 | — | 600 |
| H5 | Inter | `clamp(1.125rem, 1.05rem + 0.4vw, 1.188rem)` | 18–19px | 1.25 | — | 600 |
| Body | Inter | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` | 16–18px | 1.5 | — | 400 |
| Small | Inter | `clamp(0.6875rem, 0.66rem + 0.1vw, 0.6875rem)` | 11px | 1.5 | — | 500 |

**Pairing rationale:** Playfair Display (serif) for H1–H3 adds authority and gravitas — the "trustworthy" signal in premium fintech (Stripe, Mercury). Inter for H4–small and all UI text keeps data tables and form labels crisp at small sizes. The contrast between serif headers and geometric sans body is visually distinct without conflicting.

---

## Spacing (4-point system)

| Token | px | Common use |
|-------|----|-----------|
| `--space-1` | 4px | Icon gap · fine-grain nudges |
| `--space-2` | 8px | Badge padding · tight component gaps |
| `--space-3` | 12px | Between adjacent buttons |
| `--space-4` | 16px | Card inner padding · form field spacing |
| `--space-5` | 20px | |
| `--space-6` | 24px | Section gaps · card gaps in grid |
| `--space-8` | 32px | Major section separation |
| `--space-10` | 40px | |
| `--space-12` | 48px | Hero / page-level breathing room |

Grid: 12 columns · gutter = `--space-6` (24px)

---

## Component Specs

### Button
- Padding: `1em 2em` (scales with font-size)
- Min font: 14px
- Primary BG (light): `#1D4ED8` (primary-700) · Text: white · Shadow-1 on hover
- Primary BG (dark): `#60A5FA` (primary-400) · Text: `#020617`
- Border-radius: `--radius-md` (8px)

### Badge
| Size | Padding | Font |
|------|---------|------|
| Small | 3px 8px | 13px/500 |
| Medium | 5px 10px | 14px/500 |

- Success: tertiary-100 bg · tertiary-700 text (light) / tertiary-400 bg · tertiary-950 text (dark)
- Info: primary-100 bg · primary-700 text (light) / primary-400 bg · primary-950 text (dark)
- Warning: secondary-100 bg · secondary-800 text
- Error: use standard red (not in ladder — add `#FEE2E2`/`#991B1B` pair)

### Card
- Min-width: 208px · Padding: 16px · Radius: 4px
- Shadow: `var(--shadow-card)`
- BG: `var(--surface-1)`

### Toast
- Auto-dismiss: 5s · Always include close button · Max 2 visible
- Do not use for form validation (use inline labels instead)

### Shadows
| Tier | Value | Use |
|------|-------|-----|
| 0 | `0px 0px 0px 0px rgba(0,0,0,0)` | Flat elements |
| 1 | `0px 5px 10px 0px rgba(0,0,0,0.15)` | Cards · raised elements |
| 2 | `0px 7.5px 15px 5px rgba(0,0,0,0.45)` | Modals · dropdowns |
| card | `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.04)` | Subtle card lift |

---

## Files

| File | Purpose |
|------|---------|
| `tokens.css` | CSS custom properties, light defaults + dark overrides |
| `tokens.json` | Machine-readable resolved tokens |
| `_tokens.scss` | SCSS variables + Vuetify 3 theme maps |
| `tailwind.config.js` | Tailwind theme extension |
| `styleguide.md` | This file |
| `styleguide.html` | Visual specimen (open in browser) |

**Next steps:** Run `design-formulas:lint` to validate, or hand off to `frontend-design` / `impeccable` to build UI on these tokens.
