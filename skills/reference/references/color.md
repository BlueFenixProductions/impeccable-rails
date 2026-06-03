# Color

Distilled from *Design for Developers*, modernized for 2026.

## 1. Theory (the teaching — unchanged)

- **Primary:** red, blue, yellow. **Secondary** (mix of two primaries): orange, purple, green.
  **Tertiary** (between primary & secondary): vermillion, amber, chartreuse, teal, violet, magenta.
- **Hue** = the color itself (position on the wheel). **Temperature:** reds/oranges/yellows are *warm*
  (advance, demand attention — use for warnings & key actions); blues/greens/purples are *cool*
  (recede — use for backgrounds, passive UI).
- **Saturation** = purity. Pure hues are often too intense; balance with tint/tone/shade.
- **Tint** = + white (lightens; lower priority, subtext, backgrounds).
  **Tone** = + grey (calmer, recedes; reduce priority of components).
  **Shade** = + black (darkens; stronger contrast, higher priority, headers/titles).
- Always add a little shade so colors don't read oversaturated.

## 2. Harmonies (how to pick a palette)

| Harmony | Pick | Use for |
|---------|------|---------|
| **Monochrome** | one hue + tint/tone/shade | calm, minimal; darks = titles/buttons, lights = bg/borders |
| **Analogous** | the hue ± its two neighbors (3 total) | gentle, cohesive |
| **Complementary** | hue + its opposite | high pop between two colors |
| **Triadic** ⭐ | 3 hues evenly spaced (triangle) | balanced + contrasty; **default for UI**: primary + secondary + a tertiary often used for backgrounds |
| **Tetradic** | two complementary pairs | rich, harder to balance |

**Default recipe:** triadic primary / secondary / tertiary + a **base** (white or black) for text.

## 3. Color psychology (pick by message)

red = danger / important · orange = friendly / fun · yellow = positive / energetic ·
green = success / stable / balanced · teal = communication / trust · blue = secure / financial / loyal ·
purple = creative / mystery / luxury · magenta = creativity / youth ·
white = clean / simple · black = power / authority / corporate. Bright (green/yellow/pink) = youthful;
dark blue/black = business.

## 4. Weight ladder — **50–950** (default)

Every palette color expands into an 11-step ladder. **Generate the steps in OKLCH** for perceptually
even lightness, then convert each step to HEX for output. (The book taught this as tint→shade in
RGB/HEX; OKLCH gives even, predictable steps and is the 2026 default — CSS Color 4, Tailwind v4.)

### Generation recipe (OKLCH → HEX)
For a chosen base hue `H` (OKLCH hue angle) and peak chroma `C`:

| Step | Lightness `L` | Chroma | Typical role (light mode) |
|------|---------------|--------|---------------------------|
| 50   | 0.97 | 0.20·C | page background, subtle fills |
| 100  | 0.94 | 0.35·C | backgrounds, hover fills |
| 200  | 0.87 | 0.55·C | borders, dividers, disabled |
| 300  | 0.79 | 0.75·C | inputs borders, subtle text |
| 400  | 0.70 | 0.90·C | placeholder, icons |
| 500  | 0.62 | 1.00·C | **base / primary** interactive |
| 600  | 0.54 | 0.95·C | button hover / active |
| 700  | 0.46 | 0.85·C | strong fills, pressed |
| 800  | 0.38 | 0.70·C | body text on light, emphasis |
| 900  | 0.30 | 0.55·C | headings, high emphasis |
| 950  | 0.22 | 0.40·C | max-contrast text / titles |

- `L` is `oklch(L C H)` lightness 0–1; clamp final HEX to sRGB gamut.
- Keep `H` ~constant; a tiny hue shift toward yellow in lights / toward blue in darks reads more natural (optional).
- **Mapping to the book's 100–800:** book-100↔ladder-100 … book-800↔ladder-800; 50 and 900/950 are the
  added extremes. Roles match the book (lighter = bg/labels/tags, darker = text/headers/hovers).

## 5. Dark mode — semantic tokens (NOT inversion)

The book said "invert the ladder (100↔800)". **Don't.** Naive inversion over-darkens and flattens
hierarchy. Instead define **semantic tokens** mapped per theme:

| Token | Light theme | Dark theme |
|-------|-------------|------------|
| `--surface-0` (app bg) | neutral-50 | neutral-950 |
| `--surface-1` (card) | white | neutral-900 |
| `--surface-2` (elevated/popover) | neutral-50 | neutral-800 |
| `--text-strong` (headings) | neutral-950 | neutral-50 |
| `--text` (body) | neutral-800 | neutral-200 |
| `--text-muted` (subtext) | neutral-600 | neutral-400 |
| `--border` | neutral-200 | neutral-700 |
| `--primary` | primary-600 | primary-400 |
| `--primary-hover` | primary-700 | primary-300 |

Elevation in dark mode comes from **lighter surfaces**, not bigger shadows. Pick the per-step weights
from the ladder; components reference the *semantic* token, never a raw weight.

## 6. Contrast & accessibility — WCAG 2.2

- **Contrast ratio** between foreground & background runs 1:1 (none) to 21:1 (black on white).
- **AA minimums:** **4.5:1** normal text · **3:1** large text (≥24px, or ≥18.66px/14pt **bold**) ·
  **3:1** for UI component boundaries, icons, and graphical objects.
- **AAA:** 7:1 normal / 4.5:1 large (optional, for high-accessibility targets).
- **WCAG 2.2 additions worth honoring in tokens:** minimum **target size 24×24px** for interactive
  controls; a visible **focus appearance** (≥2px, ≥3:1 against adjacent colors).
- Quick check: view the design in **greyscale** — if hierarchy survives, contrast is doing its job.
- **APCA** (perceptual contrast, lightness-aware) is the candidate algorithm for the draft WCAG 3.0 —
  *emerging, not yet normative*. Cite 4.5:1 as the standard; treat APCA as supplementary.

## 7. Building the color schema (style-guide output)

For each role color (primary / secondary / tertiary / base): the full 50–950 ladder with HEX values,
plus a one-line usage note per weight band. This schema is what `/design-formulas:scaffold` emits and
what later component/typography decisions reference.
