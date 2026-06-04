# design-formulas

Concrete, **opinionated design formulas for developers** — the numbers and rules that make a UI
look intentional, packaged so Claude (and you) can apply them consistently.

Distilled from *Design for Developers* (Adrian Twarog & George Moller, 2024) and **modernized for
2026**. The book's prose principles are things Claude already knows; what this plugin adds is the
book's dense layer of **exact numeric formulas** plus its **DO/DON'T rules**, captured as data.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| **`reference`** | skill | The keystone. Numeric formulas as curated tables + a machine-readable `tokens.json`. Auto-loads when concrete design numbers are needed. |
| **`/design-formulas:scaffold`** | command | Brief → starter design system. Emits CSS vars + `tokens.json`, SCSS/Vuetify theme, Tailwind config, and an HTML + Markdown styleguide. Computes exact WCAG ratios via `scripts/contrast.py`. |
| **`/design-formulas:wireframe`** | command | Page description → low-fidelity grayscale wireframe HTML (one primary accent, 12-col grid, lorem/boxes). The low-fi step before `scaffold`. |
| **`lint`** | skill | Runs the book's DO/DON'T checklist against a design. Complements (does not replace) `impeccable` / `design:design-critique`. |

`scaffold` and `lint` both read `reference` — that's the only hard link. "Used with `impeccable` /
`frontend-dev`" means Claude pulls `reference` in alongside them; skills can't import each other, so
this plugin makes **no edits** to other skills.

## The 5 modernizations (vs the 2024 book)

1. **OKLCH** generates the weight ladders (perceptually-even lightness steps); output is still **HEX**.
   The book's tint/tone/shade teaching is kept verbatim.
2. **Fluid `clamp()`** type is the default (Utopia-style); the book's −10–25%/breakpoint rule is the
   step-based fallback.
3. **Dark mode = semantic surface/elevation tokens** — *replaces* the book's "invert weights 100↔800"
   advice, which is now an anti-pattern.
4. **50–950** weight ladder is the default (Tailwind interop); the book's 100–800 is kept as a mapping.
5. **WCAG 2.2** labeling (book said 2.0). 4.5:1 is unchanged; adds target-size (24px) and focus
   appearance. APCA is noted as emerging / not-yet-normative.

## Install

The repo doubles as a single-plugin marketplace (`.claude-plugin/marketplace.json`):

```bash
claude plugin marketplace add ~/Documents/GitHub/design-formulas
claude plugin install design-formulas@design-formulas      # --scope user (default)
```

Then **restart Claude Code** (plugins load at startup). Confirm with `claude plugin list` or
`/help` that `design-formulas:reference`, `design-formulas:lint`, and `/design-formulas:scaffold`
are available. Cost: ~361 tokens always-on (the skill descriptions); skills/command bodies load
only when invoked.

## Scope

**v0.3 (current) — the whole book is now in:**
- **Color, Typography, Spacing/Layout, Visual Hierarchy.**
- **Full Component chapter** — buttons, borders, shadows, icons, inputs, forms, labels, dividers,
  checkbox, radio, textarea, toggle, dropdown, submit, badges, toasts, breadcrumbs, tables, lists,
  tooltips, cards, accordions, tabs, iconography, avatars.
- **Process & styleguide assembly** (`process.md`) — wireframing rules, the build order
  (logo→palette→type→imagery→grid→components), component states, design-system concepts.
- **`scripts/contrast.py`** — `/scaffold` computes exact WCAG 2.2 ratios instead of estimating them.

**v0.4 added:** `/design-formulas:wireframe` — low-fidelity grayscale wireframes (`assets/wireframe-kit.css`).

**v0.5 adds:** **per-component state CSS** — `assets/components.css` (a token-driven library covering
hover/focus/active/disabled/loading, valid/error inputs, and tab/accordion/table/toast variants),
`states.md` (the state-matrix contract), and **status semantic tokens** (`--success/--warning/--danger/--info`).
`/scaffold` now ships live, interactive component states in its styleguide.

**Later:** publishing to a shared/remote marketplace (currently installs from this local repo).

## Credits & license

This plugin distills **factual** design guidance and numeric formulas from ***Design for Developers*
by Adrian Twarog & George Moller** (EnhanceUI). It references facts and ideas — type-scale ratios,
spacing steps, contrast minimums, component sizings — not the book's specific text or illustrations,
which remain © their authors. The code, prose, token files, CSS, and the 2026 modernizations are this
project's own work.

- **Buy the book / the authors' other works:** https://enhanceui.gumroad.com/
- **Attribution note:** the EnhanceUI store lists **Adrian Twarog**; **George Moller** is credited as
  co-author in the book itself (cover + foreword) though not on the store page.

Licensed under the **Apache License 2.0** — see [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE).
If these formulas are useful to you, please buy the book to support the authors.
