# Component States

The **state contract** for interactive components — which states each has and what changes. The
ready-to-use implementation is bundled at `assets/components.css` (token-driven; binds to the variables
`/impeccable-rails:scaffold` emits). States follow the book + the 2026 rules (WCAG 2.2 focus, semantic status).

## Universal rules

- **Focus:** every interactive control needs a **visible focus state** — `:focus-visible`, ring ≥**2px**
  at ≥**3:1** contrast (WCAG 2.2). Never remove the outline without replacing it.
- **Hover** signals "actionable" — usually a **shade** shift (darker on light themes) and/or a subtle
  **shadow lift**.
- **Disabled:** reduced opacity (~.5), `cursor:not-allowed`, no hover/shadow, not focusable.
- **Status colors** bind to semantic tokens: `--success` (green), `--warning` (amber), `--danger`
  (red), `--info` (blue). Don't hard-code hues.

## State matrix

| Component | States (what changes) |
|-----------|------------------------|
| **Button** | default · **hover** (→ `--primary-hover` + `--shadow-1`) · **active** (1px press) · **focus-visible** (ring) · **disabled** (.5 + no-allowed) · **loading** (spinner, text hidden, pointer-events off). Variants: primary / secondary / tertiary |
| **Input / Textarea** | default · **focus** (border→`--primary` + 3px ring) · **valid** (border→`--success`) · **error** (border→`--danger`, help text→danger, message **below** the field) · **disabled** (muted bg) |
| **Checkbox / Radio** | unchecked · **checked** (fill `--primary` + glyph) · **indeterminate** (checkbox only) · **focus-visible** · **disabled** |
| **Toggle** | **off** (`--border`) · **on** (`--primary`, knob slides) · focus-visible. Immediate effect, no Save |
| **Select / Dropdown** | default · focus · **open** · **error** (border→`--danger` + feedback). Neutral placeholder, no pre-selected default |
| **Badge** | static variants: `--success` / `--info` / `--danger` (tinted bg + colored text). Non-interactive |
| **Card** | default · **hover** (`is-interactive` → `--shadow-1` + 2px lift) when the whole card is a target |
| **Tabs** | **active** (`--text-strong`, weight **600**, 2px `--primary` underline) · **inactive** (`--text-muted`, weight 400) · **hover** · focus-visible |
| **Accordion** | **collapsed** · **expanded** (caret rotates 180°) · header **hover** (→`--primary`) |
| **Table row** | default · **zebra** (even rows `--surface-2`) · **hover** (primary 6% tint) · **selected** (primary 12% tint); header has 2px bottom border |
| **Avatar** | base + optional **status dot** (online=`--success`, offline=muted) lower-right; notification badge upper-right |
| **Tooltip** | hidden · **shown** on hover/focus-within (no shadow, ≤208px) |
| **Toast** | enter · auto-dismiss ~5s · variants via left border: info / success / warning / danger |

## Usage

`/impeccable-rails:scaffold` resolves `components.css` against the brief's tokens and includes it so the
styleguide shows **live, interactive** states. To use directly: ship `assets/components.css` after your
tokens.css — it reads the same `--surface-*`, `--text-*`, `--primary*`, `--space-*`, `--shadow-*`, and
status variables. Class prefix is `df-` (`.df-btn`, `.df-input`, `.df-field.is-error`, `.df-tab[aria-selected]`…).
