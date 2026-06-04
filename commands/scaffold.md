---
description: Generate a starter design system from a brand brief — palette (OKLCH→HEX, 50–950), fluid type scale, spacing tokens, and component specs — emitted as CSS variables + tokens.json, SCSS/Vuetify theme, Tailwind config, and an HTML+Markdown styleguide.
argument-hint: "[brand/brief, e.g. 'fintech dashboard, trustworthy, seed #2563EB, light+dark']"
---

# /design-formulas:scaffold

Build a coherent starter design system using the formulas in the **`design-formulas:reference`**
skill. Read `skills/reference/references/tokens.json` and the relevant `references/*.md` for all
values and recipes — do not invent numbers. For the styleguide's structure and the build order, follow
`references/process.md` (logo → palette → typography → imagery/icons → grid → components).

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
   border, primary, primary-hover, primary-contrast) **plus status tokens** (`--success` `--warning`
   `--danger` `--info` — map to mid-weights; add a dedicated red for danger). **Do not invert the ladder
   for dark mode** — map semantic tokens.
4. **Verify contrast with the bundled tool — do NOT estimate ratios by eye.** Run
   `python3 ${CLAUDE_PLUGIN_ROOT}/scripts/contrast.py "<fg>/<bg>" ...` for every text/surface and
   button pair (e.g. `text/surface-1`, `text-muted/surface-1`, `white/primary-600`, dark-theme pairs).
   Use its exact ratios + AA/AAA verdicts in the styleguide. If a pairing fails 4.5:1 (3:1 large/UI),
   pick a darker/lighter weight and re-run.

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
- **`styleguide.md`** — human-readable, ordered as the source of truth (per `process.md` §2):
  **logo** (placeholder + size/placement/variation rules), **color palette** (each ladder weight → HEX →
  role; primary ≤3), **typography** (H1–H5 + body, progressive px, line-height/tracking; ≤2 fonts),
  **imagery & iconography** (style-by-role: outline=nav, solid=forms), **spacing scale**, **components**
  with their **states** (default/hover/active/disabled/loading; +success/error/warning for inputs), the
  **exact contrast table** from the tool, and the modernization notes.
- **`components.css`** — copy `${CLAUDE_PLUGIN_ROOT}/assets/components.css`; it already binds to the
  generated token variables (`--surface-*`, `--text-*`, `--primary*`, status tokens, `--space-*`,
  `--shadow-*`), giving real components with **all states** (hover/focus/active/disabled/loading;
  valid/error for inputs; tabs/accordion/table/toast variants). No edits needed — it inherits the brief's palette.
- **`styleguide.html`** — a single standalone file (inline `tokens.css` + `components.css`): color swatch
  grid (all ladders, HEX labels), type-scale specimen, spacing ruler, and a **live component-states
  gallery** (button hover/disabled/loading, input focus/error, checkbox/radio/toggle, tabs, table with
  zebra/hover, badges, toast variants) so states can be eyeballed and interacted with in a browser.

## Step 6 — Report

Summarize: harmony chosen, the 3–4 role colors with their 500 HEX, header/body typefaces, and the files
written. Offer to run **`design-formulas:lint`** against the result, or hand off to `frontend-design` /
`impeccable` to build UI on top of the tokens.

> Generate from the system, not ad hoc. Every value should trace to the reference. Less is more:
> prefer space and subtle contrast over borders and heavy shadows.
