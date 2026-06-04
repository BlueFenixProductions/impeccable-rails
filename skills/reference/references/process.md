# Design Process & Styleguide Assembly

Distilled from *Design for Developers* (Design Process, Implementation, Design System chapters).
This is the **methodology** layer — how to go from blank page to a documented system. The numeric
rules it references live in the other files; this one is about *order and completeness*.

## 1. Wireframe first (low fidelity)

A wireframe is a **simple, low-fidelity layout** showing where navigation, text, and graphics go.
Keep it focused on **one problem at a time**. Why wireframe before visuals:
- **Clarification** — decide where elements sit.
- **Usability** — surface architecture/flow flaws early.
- **Save time** — find and fix issues cheaply; iterate fast.
- **Validation** — confirm business rules and interactions are visually supported.

### Aesthetic wireframe rules
- **Avoid clutter:** no high-fidelity images; use plain boxes or lorem ipsum, not real copy.
- **Color sparingly:** shades of **gray** + **one** primary + **one** accent. Gray shades carry the
  hierarchy (on dark bg a lighter gray = more important; on light bg the reverse). Primary color marks
  the actions you want to stand out; **ghost/outline** buttons for secondary actions.
- **Proportional sizes:** size conveys hierarchy — don't neglect size relationships between elements.
- **Communicate clearly:** a button should look like a button, an input like an input. Strip a component's
  features until nothing can be removed without breaking its perceived purpose.
- **Don't** use plain black-and-white or doodle style (neither communicates the final design).

## 2. Styleguide = the source of truth

A styleguide collects every design decision so the visual language stays consistent — "what code
guidelines are to developers." It contains: **color palette · typography · spacing · icons · imagery ·
components**. Every component used in the product belongs here, with its states.

### Build order (the Implementation recipe)
1. **Logo** → 2. **Color palette** → 3. **Typography** → 4. **Imagery & iconography** →
5. **Layout grid** → 6. **Components**.

### What each section must specify
- **Logo:** size, placement, and **acceptable variations**; explicitly prevent stretching, condensing,
  re-aligning, or altering.
- **Color palette:** at least **primary, secondary, tertiary, neutral, accent**. Keep **primary ≤ 3**
  colors. Primary = brand/primary actions; secondary = less-important actions; accent = success/warning/
  danger; neutral = passive backgrounds, titles, body text (use neutral *shades* for text color). See `color.md`.
- **Typography:** font families + sizes for **H1–H6 and body**; sizes in **px**, **progressive**
  (14/16/18/20…), **avoid intermediate sizes like 15px**; define line-height, letter-spacing, and text
  color (neutral shades). **Use ≤ 2 fonts.** See `typography.md`.
- **Imagery:** rules for illustration/photo use — editing preferences (filters, brightness, contrast,
  backgrounds) for consistency.
- **Iconography:** style-by-role (line/outline icons for primary nav, solid icons for form elements/
  support text) and the allowed sizes. See `components.md` → Iconography.
- **Spacing:** a clear scale (small increments) used for all margin/padding, vertical and horizontal. See `spacing-layout.md`.
- **Components:** appearance, sizes, and **all states** — default, **hover, click/active, disabled,
  loading**, plus **success/error/warning** for inputs. Components must align with the colors, spacing,
  and fonts defined above. The styleguide is their single source of truth.

## 3. Design system (scaling beyond a styleguide)

A design system = reusable components + patterns + standards = the "connective tissue" of a platform.
Beyond the styleguide it adds: **branding guidelines, layout guidelines, interactive-element behavior,
and templates** (pre-built page layouts). Benefits: **consistency, efficiency, flexibility, scalability**.

- Building one from scratch takes a team months-to-years and is never "done" (it evolves). For small
  teams/solo work, **start from an established system** rather than building from zero.
- The book recommends **Flowbite** (open-source component library on **Tailwind CSS** utility classes,
  with a Figma kit and **SVG Hero Icons**). This aligns with this plugin's defaults — the **50–950**
  weight ladder and Tailwind interop come for free, and SVG icons match the iconography rule. Treat
  Flowbite/Tailwind as a sensible starting kit, not a requirement.

## 4. Closing principle (from the book)

Know the rules and their purpose first — *then* bend them to fit your product. "Before bending these
rules, you'll be aware that they exist, what their purpose is, and accommodate them accordingly — that
is what makes a great designer." Defaults here are a coherent baseline, not laws.
