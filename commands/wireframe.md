---
description: Generate a low-fidelity, grayscale wireframe for a page from a short description — gray-shade hierarchy + one primary accent for the key action, lorem/box placeholders, 12-column grid and 4-point spacing. Outputs a standalone HTML wireframe (optionally an ASCII sketch). The low-fi step that precedes /scaffold.
argument-hint: "[page + sections, e.g. 'SaaS landing: nav, hero, 3 features, pricing, footer' or 'login form']"
---

# /impeccable-rails:wireframe

Produce a **low-fidelity wireframe** — the first step of the book's process (wireframe → styleguide →
prototype). Follow the aesthetic-wireframe rules in the **`impeccable-rails:reference`** skill
(`references/process.md` §1) and the grid/spacing in `references/spacing-layout.md`.

**Rules (non-negotiable for a wireframe):**
- **Grayscale + one accent.** Convey hierarchy with **gray shades and size**, never full color. Use the
  single `--wf-primary` only for the **one key action**; secondary actions are ghost/outline.
- **No real content.** Use **lorem ipsum or boxes** — bars for headings, lorem for body, the diagonal
  `▢ image` placeholder for media. Never high-fidelity images or final copy.
- **Proportional sizing** for hierarchy; **button looks like a button, input like an input.**
- **Strip to essentials** — remove anything that doesn't clarify *where things go and how they rank*.
- Lay out on the **12-column grid** with **4-point spacing**; choose **F-pattern** for info-heavy pages,
  **Z-pattern** for sparse/landing pages (`references/visual-hierarchy.md`).

## Steps

1. **Parse the brief** from `$ARGUMENTS` (page type + sections). If only a page type is given, infer the
   conventional sections (e.g. landing = nav · hero + primary CTA · feature row · social proof · pricing ·
   footer; login = centered card with labels/inputs/primary button/secondary link; dashboard = sidebar +
   topbar + stat cards + table). Ask only if the page is ambiguous.
2. **Choose the scan pattern** (F or Z) and place the **one** primary CTA on its path.
3. **Read the kit:** `${CLAUDE_PLUGIN_ROOT}/assets/wireframe-kit.css`. **Inline it** into a single
   self-contained `wireframe.html` (no external files). Build each section from the kit's classes
   (`wf-nav`, `wf-grid` + `c1..c12`, `wf-box`, `wf-img`, `wf-h1/h2/h3`, `wf-line`, `wf-btn` /
   `wf-btn-primary`, `wf-input`, `wf-label`, `wf-avatar`, `wf-card`). Add short `wf-note` callouts where a
   layout choice needs explaining.
4. **Write** `wireframe.html` to the path given (or `./wireframe/`). Keep it grayscale; the only colored
   element should be the single primary action.
5. **(Optional)** If the user asks for `--ascii`, also emit a quick box-drawing sketch in a fenced block
   for fast terminal review.

## Report

List the sections laid out, the scan pattern chosen, and where the single primary CTA sits. Then offer
the natural next step: **`/impeccable-rails:scaffold`** to turn the approved wireframe into a high-fidelity
design system (palette, type, tokens), or hand off to `frontend-design` / `impeccable` to build it for real.

> A wireframe answers "where does everything go and what ranks first?" — nothing more. If you're reaching
> for color or real copy, you've left low fidelity. Save that for `/scaffold`.
