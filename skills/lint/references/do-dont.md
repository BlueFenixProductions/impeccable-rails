# DO / DON'T Rulebook

Concrete, checkable rules distilled from *Design for Developers* (+ 2026 modernizations).
Severity: **error** = a11y / hard rule · **warn** = strong best practice · **info** = polish.
Thresholds mirror `design-formulas:reference` → `tokens.json`.

## Color

| id | sev | check (flag if…) | fix |
|----|-----|------------------|-----|
| `color.contrast.text` | error | text:bg contrast < **4.5:1** (normal) or < **3:1** (large ≥24px / ≥18.66px bold) | raise contrast; pick a darker/lighter weight on the ladder (WCAG 2.2 AA) |
| `color.contrast.ui` | error | UI boundary / icon / focus ring contrast < **3:1** vs adjacent | strengthen the boundary color |
| `color.focus.visible` | error | interactive element has no visible focus state (≥2px, ≥3:1) | add a visible focus outline (WCAG 2.2) |
| `color.semantic.misuse` | warn | status colors misused (e.g. red for success, green for error) | red=danger, green=success, blue=active/info |
| `color.darkmode.inversion` | warn | dark mode built by inverting the weight ladder (100↔800) | use semantic surface/elevation tokens instead |
| `color.oversaturated` | info | pure/oversaturated hue used raw | add slight shade/tone |

## Typography

| id | sev | check (flag if…) | fix |
|----|-----|------------------|-----|
| `type.font.same` | warn | headers AND body use the **same sans** typeface | pair a serif/display header with a sans body (or two distinct fonts) |
| `type.lineheight.body` | warn | paragraph line-height **> 1.75** | set body line-height to **1.5** |
| `type.lineheight.large` | warn | large/heading line-height **> 1.25** | tighten to **~1.15** (large text needs less leading) |
| `type.letterspacing.large` | info | text **> 64px** at default tracking | reduce by **−0.025em / −1px** |
| `type.size.button` | error | button text **< 14px** | set button text ≥ **14px** |
| `type.size.body` | warn | body **< 16px** on desktop | use **16–24px** (base 16) |
| `type.header.eqbody` | warn | header font-size == body size, or header wraps to 2 lines | enlarge headers; shrink so they fit one line |
| `type.weight.smalllight` | warn | very light weight on small text | increase weight on small text; reduce weight on large |
| `type.bold.overuse` | warn | **> 2** bold items in one block | bold only the essential (max 1–2) |
| `type.italic.misuse` | warn | italics on buttons, links, or a full paragraph | reserve italics for quotes/testimonials/one emphasis |
| `type.underline.link` | warn | hyperlinks underlined by default | use color/weight for links; underline on **hover** only |
| `type.underline.large` | info | large text underlined | don't underline large text |
| `type.caps.sentence` | warn | a full sentence/paragraph in ALL-CAPS | caps for titles/labels/buttons only |

## Spacing & layout

| id | sev | check (flag if…) | fix |
|----|-----|------------------|-----|
| `space.baseline` | warn | spacing not a multiple of the baseline (4-pt: 4/8/12/16…) | snap to the nearest baseline step |
| `space.arbitrary` | warn | ad-hoc values (1, 3, 6, 11, 13…) or mismatched gutters in a row | use one consistent spacing/gutter scale |
| `space.button.gap` | info | adjacent buttons not ~**12px** apart | set ~12px between buttons |
| `space.padding.uneven` | info | unequal padding across sides without reason | equalize (e.g. 4/12/24 all sides) |
| `grid.manual.width` | warn | per-element widths hand-set on a single row | use preset column sizing (12-col grid) |
| `divider.redundant` | info | divider added where there's no grouped content to separate | remove; or add space instead |

## Components

| id | sev | check (flag if…) | fix |
|----|-----|------------------|-----|
| `btn.primary.count` | warn | **> 1 primary** button in a view | demote extras to secondary/tertiary |
| `btn.padding` | info | button padding not ~**1em (y) / 2em (x)** | apply 1em/2em em-based padding |
| `border.heavy` | warn | borders too dark/high-contrast, or border + full-opacity shadow together | subtle/reduced-opacity border; drop one of border/shadow |
| `shadow.harsh` | warn | shadow opacity ~full (no subtlety) | use ~**0.15** opacity, no border |
| `icon.size` | warn | icon size ≠ adjacent text size, or mixed icon sizes | match icon height to font (18px→18px) |
| `icon.overuse` | info | too many icons (cluttered) | keep only meaningful icons; ~1em from text |
| `label.placement` | warn | error/warning label at page top/bottom instead of by its element; info label below content | info **above** content; error **below** the element |
| `badge.caps` | warn | badge text ALL-CAPS | capitalize (not all-caps) |
| `badge.length` | info | badge > 1 word (2 only for complex states) | shorten; keep scannable, smaller than buttons |
| `badge.interactive` | warn | badge has click/interaction | badges are non-interactive status only |
| `toast.validation` | warn | toast/alert used for **form validation** | use inline notifications for validation |
| `toast.persist` | warn | toast doesn't auto-dismiss (~5s) or lacks a close button | auto-dismiss ~5s + close button; max 2 on screen |
| `card.layout` | info | card header/body/CTA not in a single column | stack header, body, primary CTA in one column |

## Visual hierarchy

| id | sev | check (flag if…) | fix |
|----|-----|------------------|-----|
| `hier.cta` | warn | primary CTA doesn't stand out (size/color/contrast) | make the primary action visually dominant |
| `hier.clutter` | warn | elements clustered with little/no space (no clear focal point) | add negative space; establish focal points |
| `hier.flat` | info | all text similar size (no size hierarchy) | enlarge the most important text first |
| `hier.proximity` | info | related items spaced apart / unrelated items crowded | group related, separate unrelated |
