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
| **`/design-formulas:scaffold`** | command | Brief → starter design system. Emits CSS vars + `tokens.json`, SCSS/Vuetify theme, Tailwind config, and an HTML + Markdown styleguide. |
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

**v0.2 (current):** Color, Typography, Spacing/Layout, Visual Hierarchy basics, and the **full
Component chapter** — buttons, borders, shadows, icons, inputs, forms, labels, dividers, **checkbox,
radio, textarea, toggle, dropdown, submit button**, badges, toasts, **breadcrumbs, tables, lists,
tooltips**, cards, **accordions, tabs, iconography, avatars**.

**Later:** the full Design-Process / Design-System chapters (wireframing, logo, style-guide assembly)
beyond what `scaffold` needs, and publishing to a shared/remote marketplace (v1 installs from this local repo).

## Provenance

Formulas are distilled from *Design for Developers* for reference and education. Buy the book to
support the authors. Modernizations and token generation are this plugin's own.
