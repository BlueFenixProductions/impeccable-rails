---
description: Generate a starter design system from a brand brief — palette (OKLCH→HEX, 50–950), fluid type scale, spacing tokens, and component specs — emitted as CSS variables + tokens.json, SCSS/Vuetify theme, Tailwind config, and an HTML+Markdown styleguide.
argument-hint: "[brand/brief, e.g. 'fintech dashboard, trustworthy, seed #2563EB, light+dark']"
---

# /design-formulas:scaffold

Build a coherent starter design system using the formulas in the **`design-formulas:reference`**
skill. Read `skills/reference/references/tokens.json` and the relevant `references/*.md` for all
values and recipes — do not invent numbers.

## Step 1 — Gather the brief

From `$ARGUMENTS` (or by asking the user, one point at a time, only for what's missing):
- **Purpose / product** and **mood** (e.g. trustworthy, playful, minimal).
- **Seed color** (a HEX or hue) *or* an industry to infer one from `color.md` §3 (psychology).
- **Themes:** light, dark, or both (default: both).
- **Density / personality:** default (4-point spacing, triadic harmony) unless told otherwise.
- **Output targets:** default = all four (CSS+tokens, SCSS/Vuetify, Tailwind, styleguide). Let the
  user narrow if they want.

## Step 2 — Palette (OKLCH → HEX, 50–950)

1. Choose harmony (default **triadic**) per `color.md` §2: derive **secondary** and **tertiary** from
   the seed, plus a **neutral** ramp and a **base** (white/black) for text.
2. For each role color, generate the **11-step 50–950 ladder** using the OKLCH recipe in `color.md` §4
   / `tokens.json` `color.ladder`: hold hue ~constant, set lightness `L` per step, scale chroma by the
   step's `chroma_mult`. **Convert each `oklch(L C H)` step to sRGB HEX** (clamp to gamut). Emit both
   the OKLCH and the HEX.
3. Add **semantic tokens** for light and dark per `color.md` §5 (surface-0/1/2, text-strong/text/muted,
   border, primary, primary-hover). **Do not invert the ladder for dark mode** — map semantic tokens.
4. Sanity-check **contrast** (`color.md` §6): text-on-surface ≥ 4.5:1 (≥3:1 for large/UI). Adjust the
   chosen weight if a pairing fails.

## Step 3 — Typography

- Pick a header typeface (serif/display) + body typeface (sans) per `typography.md` §2.
- Emit the scale (`tokens.json` `typography.scale`) as **fluid `clamp()`** values (default) with
  line-height and letter-spacing per level. Note the step-based fallback if the user can't use clamp.

## Step 4 — Spacing, grid, components

- Spacing: 4-point steps + named tokens (`spacing.tokens`). Grid: 12 columns, gutter from baseline.
- Component specs from `components.md` / `tokens.json.components`: button padding `1em/2em` + min 14px;
  badge small/medium sizes; card 208px/16px/4px + shadow; 3 shadow tiers; toast 5s/max-2.

## Step 5 — Emit outputs

Write a `design-system/` folder (or the path the user gives). For each selected target:

- **`tokens.css`** — `:root { --color-*, --font-*, --space-*, --shadow-* }` with light defaults and a
  `@media (prefers-color-scheme: dark)` / `[data-theme="dark"]` block using the semantic tokens.
- **`tokens.json`** — the resolved, concrete tokens (HEX values, computed clamp strings) — same shape
  as the reference `tokens.json` but with real values, not recipes.
- **`_tokens.scss`** — SCSS `$variables` + maps, **plus a Vuetify theme object** (`theme.themes.light`
  / `.dark` with `primary`, `secondary`, `surface`, `background`, `on-surface`, etc.) for Vue 3 + Vuetify.
- **`tailwind.config.js`** — `theme.extend.colors` with the 50–950 ladders, `fontSize` (fluid),
  `spacing`, `boxShadow`.
- **`styleguide.md`** — human-readable: palette table (weight → HEX → role), type scale, spacing,
  component specs, and the modernization notes.
- **`styleguide.html`** — a single standalone file (inline CSS using the generated `:root` vars):
  color swatch grid (all ladders, with HEX labels), a type-scale specimen, spacing ruler, and sample
  button/badge/card so the system can be eyeballed in a browser.

## Step 6 — Report

Summarize: harmony chosen, the 3–4 role colors with their 500 HEX, header/body typefaces, and the files
written. Offer to run **`design-formulas:lint`** against the result, or hand off to `frontend-design` /
`impeccable` to build UI on top of the tokens.

> Generate from the system, not ad hoc. Every value should trace to the reference. Less is more:
> prefer space and subtle contrast over borders and heavy shadows.
