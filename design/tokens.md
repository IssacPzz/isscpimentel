# Design Tokens

Source of truth for the site's visual language. Implemented as CSS custom
properties under `@theme` in `app/globals.css` (Tailwind v4 reads `@theme`
and generates matching utilities, e.g. `--color-ink` → `bg-ink` / `text-ink`).
Component code should reference tokens (Tailwind utilities or `var(--token)`)
rather than hardcoding hex values, px, or durations.

Ported from `reference-merged.html` (a static design reference, not a page in
this app) starting 2026-08-27. Structure stays App Router / MDX / RSS — only
the visual system and section designs changed.

## Signature

Two ideas carry the whole identity: **outlined-vs-solid display type** (the
hero name and the footer's closing line each pair a hollow word against a
solid one, using `-webkit-text-stroke` + `paint-order: stroke fill` for a
clean single ring), and **photography as the only color on the page** — see
Color below.

## Color

Paper, ink, and one accent. Every other color that used to add visual
interest (the mist gradients, the wider warm-gray body/muted split) has been
stripped — photographs are what supply color now, not the UI chrome.

| Token | Value | Role |
|---|---|---|
| `--color-canvas` | `#F7F6F3` | Light section background ("paper") |
| `--color-ink` | `#111111` | Primary text / solid display type / dark pill fill |
| `--color-ink-deep` | `#0E0E0D` | Dark section background (photography, footer) |
| `--color-ink-soft` | `#1B1B1E` | Deprecated — was the open-accordion card fill; the accordion is gone, this token has no remaining use |
| `--color-body` | `#111111` | Body copy — same as ink, no separate lighter tone |
| `--color-muted` | `#6B6A65` | Secondary text on light sections (nav, labels, captions, subtitles) |
| `--color-muted-dark` | `#8E8D87` | Secondary text on dark sections |
| `--color-inverse` | `#F7F6F3` | Text on dark fills — same value as canvas |
| `--color-hairline` | `#D8D6D0` | Dividers, borders, on light sections |
| `--color-hairline-inverse` | `#2C2C29` | Dividers, borders, on dark sections |
| `--color-accent` | `#22A45D` | Availability dot only. Used nowhere else. |
| `--color-tag-bg` | `#EEEDE8` | Tag pill fill / row hover background |
| `--color-white-pill` | `#FFFFFF` | Light pill fill (nav badge, ghost buttons) |

No box-shadows anywhere — the system is flat, bordered with `--color-hairline`
/ `--color-hairline-inverse` rather than lifted with shadow.

## Type

One display family plus one monospace, not two body weights:

- **Display** — `Archivo`, weights 400/500/600/900. Everything that isn't
  explicitly monospace: headings, nav links, body paragraphs, buttons.
- **Mono** — `JetBrains Mono`, weights 400/500. Role labels, meta lines,
  section-header slashes' sibling text, captions, timestamps — anything
  that reads as a label rather than prose.

```
--font-display: "Archivo", ui-sans-serif, system-ui, sans-serif;
--font-body: "Archivo", ui-sans-serif, system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

### Scale

| Token | Size | Use |
|---|---|---|
| `--text-2xs` | 0.6875rem / 11px | Tag pills, small mono labels |
| `--text-xs` | 0.75rem / 12px | Meta, captions |
| `--text-sm` | 0.875rem / 14px | Nav links, small labels |
| `--text-base` | 1rem / 16px | Body copy, min size per brief |
| `--text-md` | 1.0625rem / 17px | Body copy, max size per brief |
| `--text-lg` | 1.25rem | Row/card titles, min size |
| `--text-xl` | 1.75rem | Sub-headlines |
| `--text-header` | `clamp(1.625rem, 4.6vw, 3.375rem)` | `/SECTION` headers |
| `--text-hero` | `clamp(3rem, 12.5vw, 10.5rem)` | Hero name (ISSAC / PIMENTEL) — revisited alongside the hero rebuild |

Body measure: max `65ch`, line-height `1.6`. Display line-height: `0.85–0.92`
(tight, since these are always heavy + uppercase).

## Spacing

4px base unit (Tailwind's default scale — `p-4` = 16px, `gap-6` = 24px —
used as-is, not redefined). Section vertical rhythm:

| Token | Value | Use |
|---|---|---|
| `--space-section-y` | `clamp(4.75rem, 10vw, 9.375rem)` | Vertical padding per section |
| `--space-section-y-sm` | `clamp(2.5rem, 6vw, 4rem)` | Tighter sections (nav, footer meta) |
| `--space-gutter` | `clamp(1.25rem, 5vw, 3.75rem)` | Page-edge gutter for the shared content container |

## Radii

| Token | Value | Use |
|---|---|---|
| `--radius-pill` | `999px` | Every button, tag, badge — the only rounded shape in the system |
| `--radius-card` | `0px` | No rounded cards anymore — sharp rectangles, bordered not shadowed |
| `--radius-card-sm` | `0px` | Same, small-tile equivalent |

## Motion

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | All eased transitions |
| `--dur-fast` | `150ms` | Hover states |
| `--dur-base` | `450ms` | Fade-up on scroll |
| `--dur-slow` | `600ms` | Reserved — no accordion left to use this, kept for any future expand/collapse |

Fade-up: opacity 0→1, translateY 20px→0, staggered ~80ms per sibling. Buttons
lift `translateY(-1px)` on hover (no shadow change, since there's no shadow).
All motion is wrapped in `@media (prefers-reduced-motion: no-preference)` —
reduced-motion users get instant state changes, no transform.

## Breakpoints

Tailwind defaults (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280), plus one
custom breakpoint at `900px` for the hero's two-column → stacked layout,
matching the reference exactly rather than snapping to the nearest Tailwind
default.
