---
name: lint
description: Check a UI design against the Design-for-Developers DO/DON'T rulebook — use when asked to review, critique, lint, or sanity-check a design, component, CSS/tokens, or screenshot for concrete rule violations (contrast below 4.5:1, line-height too loose, button text under 14px, arbitrary spacing off the baseline, ALL-CAPS body, underlined links, same font for headers and body, oversized/wrapping headers, misused badges/toasts, weak hierarchy). Complements impeccable and design:design-critique by contributing this specific numeric rubric, not replacing their judgment.
---

# Impeccable Rails — Lint

Run the book's concrete DO/DON'T rules against a design and report violations. This is a **rubric**,
not a critique engine: it catches *measurable* rule breaks. For taste, layout, and holistic critique,
defer to `impeccable` / `design:design-critique` — run this alongside them, not instead.

## How to use

1. Identify the **target**: a CSS/SCSS/token file, a component's markup+styles, a described design, or
   a screenshot. Gather the concrete values you can (font sizes, line-heights, colors, paddings).
2. Read `references/do-dont.md` — the full rule table (id · category · severity · check · fix).
3. Evaluate each applicable rule. For values you can't measure (e.g. exact contrast from a screenshot),
   say so and flag for manual check rather than guessing.
4. For numeric rules, **pull the thresholds from the `impeccable-rails:reference` skill**
   (`tokens.json`) so lint and scaffold agree.

## Output

A findings list, grouped by severity:
- **error** — accessibility / breaks a hard rule (e.g. contrast < 4.5:1, button text < 14px).
- **warn** — strong best-practice violation (e.g. line-height 1.9 on paragraphs, arbitrary spacing).
- **info** — preference / polish (e.g. could tighten letter-spacing on a 72px hero).

For each finding: `id` · the offending value · the rule · the **fix** (with the correct value from the
reference). End with a one-line tally (`N errors, M warnings, K info`). If nothing is wrong, say so —
don't invent findings.
