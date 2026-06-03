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
