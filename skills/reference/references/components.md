# Components (v1)

Distilled from *Design for Developers*. Values are the book's; usage notes condensed.
v1 covers the 8 most-used components + borders/shadows/icons. Long-tail components are future scope.

## Buttons

Three types by action priority:
- **Primary** — the main action. Vibrant color, larger. **Avoid >1 primary per page/view.**
- **Secondary** — alternative actions. Subtler / lighter / smaller background.
- **Tertiary** — passive, rarely-used actions. Simple outline or no background.

**Spacing formula:** padding **1em top/bottom, 2em left/right**. Resize font-size *and* padding
together in **em** so the button stays proportional across viewports.
**Minimum button text: 14px** (smaller is hard to tap on mobile/click on desktop).
Ample padding + clear contrast against the background makes the button findable.

## Borders

Separate content — but sparingly. **Less is more; when in doubt, no border.**
- Use a **subtle** border color; reduce opacity so attention stays on content.
- **Don't** make borders too light or too dark vs their background.
- Patterns: **border-bottom** to mark the active nav/menu item; **border** to show an active/focused
  input; **border-radius** to add curves (apply consistently to buttons/inputs/components).
- A shadow can replace a border (see below).

## Shadows (depth)

Adds depth so an element stands out; apply **gradually, minimally**. Darker/larger = more depth.
Can replace borders (the shadow outlines the element). Use for: button hover, active/focused input,
cascading/overlapping elements, separating sections.

Three depth tiers:
| Tier | `box-shadow` |
|------|--------------|
| 0 (flat) | `0px 0px 0px 0px rgba(0,0,0,0)` |
| 1 (raised) | `0px 5px 10px 0px rgba(0,0,0,0.15)` |
| 2 (elevated) | `0px 7.5px 15px 5px rgba(0,0,0,0.45)` |

**Do:** light shadow, no border, opacity **~0.15** is great. **Don't:** full-opacity shadow + a border.
Offset on the Y axis for natural depth. (Tool: brumm.af/shadows.)

## Inputs

Three stacked UI elements: **Label** (titles the input) · **Input** (the field, with placeholder) ·
**Helper text** (context/assistance below). Best presented with all three combined. Show focus with a
border (see Borders).

## Forms

Components share one consistent style matching the site: input, radio, checkbox, textarea, button
groups, submit. **Labeling inputs and grouping sections** matters more than color/style. Use dividers
(color / negative space) to group related inputs.

## Labels (feedback)

Hidden until the user needs them. Three types — **error · success · information** — each with a
meaningful color. Placement is the rule:
- **Information labels → ABOVE** the content they refer to (read first; e.g. form requirements).
- **Error/warning labels → BELOW the specific element** with the error, so the focused element stays
  in place and following content shifts down.
- **Don't** dump warnings at the top or bottom of the page — put them **next to the related element**.

## Icons

- Match icon size to text: **18px font → 18px icon height**. Don't mix icon sizes; don't use
  low-contrast icons on a colored background.
- Space icons **~1em** from text, equally.
- Add icons to text inputs (e.g. user icon by username) and to action buttons/labels for visual cues.
- **Don't overuse** — too many icons make the UI cluttered. Sometimes an icon can replace text entirely.

## Badges (status)

**Label + background container + optional icon.** Conveys status/progress/completion.
- **Semantic colors:** positive = green (approved/complete/success/new/licensed); informational/active
  = blue (active/in use/live/published); negative = red (error/rejected/alert/failed).
- **Sizing:**
  - **Small** (default): padding **3px/.188rem × 8px/.5rem**, font-size **13px/.813rem**.
  - **Medium**: padding **5px/.313rem × 10px/.625rem**, font-size **14px/.875rem** (use for hierarchy).
- **Do:** short, scannable text; **capitalize**; keep **smaller than buttons**. **Don't:** ALL-CAPS
  (hurts readability); more than one word (two only for states like "Partially shipped"); add
  interaction to a badge; misuse semantic colors. Can sit inside a button as a counter.

## Toasts / Alerts (transient feedback)

**Icon + title + message + optional action (ghost button/link) + optional timestamp + close button.**
Inform of a recent operation's success/failure.
- **Dismiss automatically after ~5 seconds**; always provide a **close** button so users can dismiss sooner.
- **Show at most 2 at once** — fade out the older when a third arrives.
- **Do:** short concise text; include resolution steps / next actions; on resource creation, a CTA to the new entity.
- **Don't:** use toasts for **form validation** (use inline notifications); make them permanent UI;
  use them for marketing/up-sell.

## Cards

Box container holding info/actions about **one subject**. Only the **container** is required; optional:
media, thumbnail, header text, subhead, supporting text, buttons, icons.
- **Sizing:** width **208px / 13rem** (height varies with content); inner padding **16px / 1rem**;
  border-radius **4px / .25rem**.
- **Shadow:** `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.04)`.
- **Responsive text:** mobile header **24–28px** / body **16–18px**; desktop header **34–38px** /
  body **20–21px**.
- Header, body, and primary CTA in a **single column**; on larger screens move media left and crop
  only non-essential parts.
- **Do:** subtle shadows for elevation; dividers to separate regions; correct heading level;
  white space between elements; keep media/primary/supporting hierarchy (primary text larger).
  **Don't:** too much info; same radius on inner elements and container; too-dark shadows; center-align text.

---

# Components (v0.2 — long-tail)

Same source/treatment. Form controls, navigation, data, and display components.

## Checkbox

Select **one or more** from a list. Parts: **group label · checkbox (3 states: unchecked /
checked / indeterminate) · item label** (wraps the clickable box).
- **Sizing:** desktop box **16px**, gap **8px**, font **14px**; mobile box **25px**, font **16px** (bigger tap target).
- **Indeterminate** = parent of a multi-level group where only some children are checked.
- **Do:** wrap the label around the box (whole item clickable); frame wording positively; start capitalized.
  **Don't:** multiple checkboxes on one line; lowercase labels with full stops; confusing "enable to turn off" phrasing.

## Radio

Choose **exactly one** of mutually-exclusive options. Parts: **group label · input · label**.
- **Sizing:** small **~6px**, medium **~8px**, large **~20px**; font **16px** mobile, up to **24px** large.
- **Do:** label wraps the item (click target); capitalize; default-select the most common option;
  use radios (not a dropdown) when **≤5 options**. **Don't:** let options overflow to extra lines; negative phrasing.

## Textarea

Freeform multi-line entry. Parts: **label · character indicator · multi-line input · help text**.
States: focus / valid / disabled / invalid.
- **Sizing:** height **100px** (≈50 cols, 4 rows); horizontal padding **16px**; label↔input↔helper spacing
  ratio **2:1**; inner **8px / 4px**.
- At the character limit, turn the **border red** and color excess text differently. Size proportional to expected answer.
- **Do:** use for longform; show max-char count (and "N remaining"). **Don't:** use for single values;
  full-page-width on desktop; rely on placeholder as the label.

## Toggle

On/off switch for a setting. Parts: **label · switch**. **Takes effect immediately** (no Save/Submit).
- **Sizing:** desktop track **48px**, knob ~**24px**, font **14px**; mobile track **48px**, knob ~**26px**, font **16px**.
- **Do:** short direct labels; high-contrast color to signal the on state. **Don't:** add "on/off" text by the
  label; use question labels; put "ON/OFF" text inside the graphic.

## Dropdown / Select

Pick from a list. Parts: **label · container · placeholder · arrow**. States: selected / open / error.
- **Use when ≥5 options** (fewer → radios). **Sizing:** height **40px**, font **16px**, padding **8px/16px**,
  radius **4px**, border **1px**.
- **Do:** generic "Select"/"Choose …"; alphabetical/logical order; type-ahead for long lists.
  **Don't:** pre-select a default (risks accidental submit); use for <5 options; pad with unnecessary options.

## Submit button

Submits form data. Parts: **label · button**. Padding **H:V ratio 2:1**, radius **4px**, inner **8px**.
- **Do:** describe the exact action ("Create account"); keep clearly distinct from secondary actions;
  place primary + secondary at the **bottom-left** of the form. **Don't:** technical copy ("Submit");
  ALL-CAPS; redundant copy ("Create new account"); make it look like a secondary action.

## Breadcrumbs

Show location in a hierarchy; jump to a parent. Parts: **page link · separator**.
- Use for **nested ≥2 levels**; separator must be **">" or "/"**. The **current page is the last item and
  NOT a link**. **Sizing:** font **14px** — always **smaller than the main nav** (nav 18px → breadcrumb 14px); gap **8px**.
- **Don't:** replace global/local nav (secondary only); use on flat 1–2-level sites; other separators; on mobile, trim to the last level.

## Tables

Display structured rows × columns. Parts: **search · header row · sorting · row checkbox · columns ·
rows · pagination**.
- **Header** uses a **medium-weight** font; **font 14px**. **Header opacity 100%, body rows 60%** (same color).
  **Zebra-stripe** large tables; mark hover/selected rows clearly. Row heights ~**32px short / 48px default**, cell padding **16px**.
- **Do:** generous cell padding; clear header↔row contrast; **left-align text, right-align numbers**;
  color significant data. **Don't:** unnecessary borders; infinite scroll / "load more" (use **pagination**);
  same data type split across columns; overflow text (truncate with ellipsis + tooltip + resizable column).
  Mobile: collapse rows into cards; keep header row fixed on scroll, lock first column on horizontal scroll.

## Lists

Vertical groupings. Parts: **style indicator (ordered/unordered) · list items · text**. **Font 14px**, spacing **8px/16px**.
- **Do:** start items **capitalized**; indent sub-items; **bullets** when order doesn't matter, **numbers**
  for priority/sequence; alphabetical/logical order. **Don't:** start lowercase; put child items at the parent's level.

## Tooltips

Non-essential extra info on hover/focus/tap. Parts: **container · text**.
- **Sizing:** width **208px / 13rem** (height varies), padding **16px**, radius **4px**, keep **≥16px from the
  browser edge**. Appear on hover/focus/touch, auto-dismiss after a short duration.
- **Do:** short descriptive text; place near the element; add an arrow when icons are close; center-align short
  text; show a shortcut key if one exists. **Don't:** restate visible UI text; add shadows, rich media, or UI
  components; crop the tooltip.

## Accordions

Stacked headers that reveal/hide panels. Parts: **header · caret icon · panel · summary text (optional)**.
- **Sizing:** header (primary) font **15px / .93rem, opacity 87%**; summary (secondary) **12px / .75rem, opacity 54%**;
  caret wrapper **≥16×16px**, placed at the **end** of the header; **rotate the caret** when expanded; consistent
  spacing between accordions; whole header is the expand target.
- **Do:** allow multiple sections open at once; use the **caret** (most familiar). **Don't:** other icons; icon at the
  start; make only the caret the target; use accordions when users need most of the content at once.

## Tabs

Switch between same-context views. Parts: **container · tab item (icon + short text) · active indicator (2px)**.
- **Sizing:** font **14px min**, line-height **24px**; **active weight SemiBold/600**, inactive **Regular/400**;
  wrap icons in a **40×40** container, icon **above** the label, vertically aligned + horizontally centered.
  High contrast on the active tab + indicator; low contrast (still readable) on inactive.
- **Don't:** drop text labels for icons-only; nest tabs; stack tabs vertically; icon > 40×40.

## Iconography

Symbols for features/content, read at a glance, on a 1:1 square.
- **Grid & sizes:** start on a **24×24** grid; common sizes **20 / 24 / 32 / 40px**; need more → multiples of **8**;
  large feature icons on an **80×80** grid (more detail OK).
- **Style by role:** **outline @ 24×24** for primary navigation (fill when selected); **solid @ 20×20** for buttons/forms.
  Keep one consistent style across a set.
- **Touch targets:** **24px icon → 48px** target; **20px icon → 40px** target.
- **CSS:** set icon `width/height: 1.5em` so it scales with the parent `font-size` (16px font → 24×24, 20px → ~32×32).
- **Use SVG or icon fonts** (never raster images — they don't scale). Center-align with adjacent text, same color.
  Add a label/tooltip for standalone icons. **Don't** alter universally-understood icons (hamburger, trash, etc.).

## Avatars

Represent a person: **image · initials · icon**. **Rounded, never square** (industry standard).
- **Status dot → lower-right; notification badge → upper-right.** Add a **subtle gray border** so the avatar
  separates from a same-color background. Keep good contrast for initials/icon avatars.
- Same image/initials/placeholder for a given person everywhere. Onboarding progress → a ring around the avatar.
- **Do:** provide **initials** fallback when no image; offer a basic crop tool (face centered, not touching the edge).
  **Don't:** gendered placeholder avatars; square avatars; oversize relative to context.
