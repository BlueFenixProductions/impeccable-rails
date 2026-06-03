# Spacing & Layout

Distilled from *Design for Developers*. (Spacing math is evergreen — no 2026 changes.)

## 1. What spacing covers

A **spatial system** governs room inside, outside, and between elements: **margins, padding,
distance** (for hierarchy/attention), and **gutters** (space between grid columns). Predictable,
consistent spacing is what makes a design read as *intentional*.

- **Consistency rule:** all elements obey the same spacing steps. If one button has 30px padding,
  they all do.
- **Start generous, then reduce:** begin with abundant white space and trim until it feels right.
  It's easier to remove white space than to add it.

## 2. Baseline unit (the spacing system)

Pick a **baseline unit** and use only **multiples of it** everywhere (padding, margins, gutters,
keylines). Two common systems:

| System | Steps |
|--------|-------|
| **4-point** ⭐ (default) | 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48 … |
| **5-point** | 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60 … |

- **Default to the 4-point system.** Token names map to the steps:
  `space-1=4 · space-2=8 · space-3=12 · space-4=16 · space-5=20 · space-6=24 · space-8=32 · space-10=40 · space-12=48`.
- **~12px between buttons** and adjacent interactive elements.
- **Don't** use arbitrary spacing (1, 3, 11, 9…) — it looks unprofessional. **Do** use equal
  increments on all four sides (e.g. 4 / 12 / 24).

## 3. Grids & columns

- **12-column grid** for websites (it divides cleanly into 2/3/4/6). Apps often use a repeating grid.
- Place every element **within the grid/columns**; set **gutters from the baseline unit**.
- **Use preset column sizing** so widths and gutters stay uniform — **don't** hand-set per-element
  widths on a row (inconsistent widths look clumsy). Example: 3 equal columns with 4px (or a baseline
  multiple) gutters reads clean; ad-hoc 13px/6px gutters do not.
- Typical page regions on a 12-col layout: header/menu, hero/CTA, feature rows (description + media),
  newsletter, footer.

## 4. Dividers (separating content)

Four ways to divide, lightest first:
1. **Negative space** — if 15px is the standard gap, use 30–45px (2–3×) to separate groups.
2. **A single line** — reduce its opacity so it doesn't compete with content.
3. **Color** — group inputs/sections (useful in forms).
4. **Shadows** — subtle depth as a separator.

Add dividers only where there's grouped content to separate; add extra space between the divider and
its elements. Don't divide where there's nothing to divide.

## 5. White space is structural

Negative space is a primary hierarchy tool (see `visual-hierarchy.md`), not leftover. Proximity =
grouping: related elements sit close, unrelated elements get space.
