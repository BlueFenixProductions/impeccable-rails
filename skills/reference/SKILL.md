---
name: reference
description: Concrete design numbers and formulas for building UI — use when you need exact values for type scale / font sizes, line-height, letter-spacing, spacing and grid systems, color weight ladders (50–950), color harmony (triadic/analogous/complementary), OKLCH palette generation, contrast/WCAG ratios, shadow depth values, button/badge/card/input padding and sizing, or visual-hierarchy levers. Pulls precise tokens so designs use intentional, consistent values instead of guessed ones. Pairs with impeccable and frontend-design when implementing interfaces.
---

# Design Formulas — Reference

This skill is a **lookup layer**. When you need a concrete design value, read the relevant
reference file rather than guessing. All values are distilled from *Design for Developers*
(Twarog & Moller) and **modernized for 2026** (OKLCH, fluid type, semantic dark-mode tokens,
50–950 weights, WCAG 2.2).

## How to use

1. Identify what you need a number for, then open the matching file in `references/`:
   - **Color** — harmony, OKLCH weight ladders (50–950), dark-mode tokens, contrast/WCAG → `references/color.md`
   - **Typography** — modular scale, fluid `clamp()` sizes, line-height, letter-spacing, weights → `references/typography.md`
   - **Spacing & layout** — 4/5-point systems, grids/12-col, gutters, baseline units → `references/spacing-layout.md`
   - **Components** — buttons, borders, shadows, icons, inputs, forms, labels, dividers, checkbox, radio, textarea, toggle, dropdown, submit, badges, toasts, breadcrumbs, tables, lists, tooltips, cards, accordions, tabs, iconography, avatars → `references/components.md`
   - **Visual hierarchy** — size/contrast/proximity/alignment/negative-space, F/Z patterns → `references/visual-hierarchy.md`
   - **Process & styleguide** — wireframing rules, styleguide build order (logo→palette→type→imagery→grid→components), component states, design-system concepts → `references/process.md`
2. For a single machine-readable source of all default tokens, use `references/tokens.json`.

## Principles (so the numbers make sense)

- **Pick values from a system, never ad hoc.** A type scale, a spacing step, a weight on the ladder.
- **Hierarchy is built from size, weight, color, and space** — not decoration.
- **Less is more:** prefer space and subtle contrast over borders and heavy shadows.
- **The numbers are defaults, not laws.** They produce a coherent baseline; adjust with intent.

## Modernizations applied (vs the 2024 source)

| Topic | This skill uses |
|-------|-----------------|
| Color generation | OKLCH steps → HEX output (book's tint/tone/shade teaching kept) |
| Responsive type | Fluid `clamp()` default; −10–25%/breakpoint as fallback |
| Dark mode | Semantic surface/elevation tokens (NOT weight inversion) |
| Weight ladder | 50–950 default; 100–800 kept as a mapping |
| Accessibility | WCAG 2.2, 4.5:1 unchanged; APCA noted as emerging |
