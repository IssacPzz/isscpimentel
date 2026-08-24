# Design Tokens

Source of truth for the site's visual language. Implemented as CSS custom
properties under `@theme` in `app/globals.css` (Tailwind v4 reads `@theme`
and generates matching utilities, e.g. `--color-ink` → `bg-ink` / `text-ink`).
Component code should reference tokens (Tailwind utilities or `var(--token)`)
rather than hardcoding hex values, px, or durations.

## Signature

One idea carries the whole identity: **outlined-vs-solid display type**.
The hero name (ISSAC outline / PIMENTEL solid) and every ghost-word behind a
section header use the same `-webkit-text-stroke` outline technique. It's
introduced once at full scale in the hero, then echoed at low opacity behind
every `/SECTION` label — so the page reads as one system, not a hero
treatment bolted onto generic sections below it.

## Color

Warm off-white / near-black, one accent. No blues, no purples — kept
deliberately narrow so the outline/solid type trick stays the loudest thing
on the page.

| Token | Value | Role |
|---|---|---|
| `--color-canvas` | `#FAFAF7` | Light section background |
| `--color-mist-1` | `#E7E9EA` | Atmospheric bg gradient stop 1 |
| `--color-mist-2` | `#F3F1EC` | Atmospheric bg gradient stop 2 |
| `--color-mist-3` | `#DCE0DE` | Atmospheric bg gradient stop 3 |
| `--color-ink` | `#131315` | Primary text / solid display type / dark pill fill |
| `--color-ink-soft` | `#1B1B1E` | Dark card fill (project placeholders, open accordion card) |
| `--color-body` | `#1A1A1A` | Body copy (near-black, high contrast) |
| `--color-muted` | `#444444` | Captions, meta, secondary labels (no lighter than #444) |
| `--color-inverse` | `#F7F6F3` | Text on dark fills |
| `--color-hairline` | `rgba(19,19,21,0.10)` | Dividers, card borders |
| `--color-hairline-inverse` | `rgba(247,246,243,0.14)` | Dividers on dark fills |
| `--color-accent` | `#33C17A` | Availability dot only. Used nowhere else. |
| `--color-tag-bg` | `#EFEEE9` | Tag pill fill |
| `--color-white-pill` | `#FFFFFF` | Light pill fill (nav badge, social pills) |

Ghost word opacity: `0.06` on light sections, `0.10` on atmospheric sections
(mist backgrounds need a touch more contrast to read at all).

## Type

Two families, both geometric:

- **Display** — `Inter Tight`, weights 700/800/900. Hero name, section
  headers, ghost words, big headline in the footer CTA. Always uppercase,
  tracking `-0.03em` at display sizes.
- **Body** — `Inter`, weights 400/500. Paragraphs, nav links, captions, tags.

```
--font-display: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
--font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
```

### Scale

| Token | Size | Use |
|---|---|---|
| `--text-2xs` | 0.6875rem / 11px | Tag pills, superscript nav counts |
| `--text-xs` | 0.75rem / 12px | Meta, captions |
| `--text-sm` | 0.875rem / 14px | Nav links, small labels |
| `--text-base` | 1rem / 16px | Body copy, min size per brief |
| `--text-md` | 1.0625rem / 17px | Body copy, max size per brief |
| `--text-lg` | 1.25rem | Card titles |
| `--text-xl` | 1.75rem | Sub-headlines |
| `--text-header` | `clamp(2.25rem, 6vw, 3.75rem)` | `/SECTION` headers |
| `--text-ghost` | `clamp(4.5rem, 16vw, 13rem)` | Ghost word behind headers |
| `--text-hero` | `clamp(3rem, 12.5vw, 10.5rem)` | Hero name (ISSAC / PIMENTEL) |

Body measure: max `65ch`, line-height `1.6`. Display line-height: `0.92`
(tight, since these are always heavy + uppercase).

## Spacing

4px base unit (Tailwind's default scale — `p-4` = 16px, `gap-6` = 24px —
used as-is, not redefined). Section vertical rhythm:

| Token | Value | Use |
|---|---|---|
| `--space-section-y` | `clamp(4rem, 9vw, 7.5rem)` | Vertical padding per section |
| `--space-section-y-sm` | `clamp(2.5rem, 6vw, 4rem)` | Tighter sections (nav, footer meta) |

## Radii

| Token | Value | Use |
|---|---|---|
| `--radius-pill` | `999px` | Every button, tag, badge |
| `--radius-card` | `20px` | Work cards, accordion open card |
| `--radius-card-sm` | `14px` | Photography tiles, small cards |

## Shadow

| Token | Value | Use |
|---|---|---|
| `--shadow-pill` | `0 1px 2px rgba(19,19,21,0.06)` | Resting white pill |
| `--shadow-card` | `0 24px 48px -28px rgba(19,19,21,0.35), 0 2px 6px rgba(19,19,21,0.06)` | Resting card |
| `--shadow-hover` | `0 16px 32px -16px rgba(19,19,21,0.28)` | Hover lift (cards + buttons) |

## Motion

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | All eased transitions |
| `--dur-fast` | `150ms` | Hover states |
| `--dur-base` | `450ms` | Fade-up on scroll |
| `--dur-slow` | `600ms` | Accordion expand/collapse |

Fade-up: opacity 0→1, translateY 20px→0, staggered ~80ms per sibling.
Cards/buttons lift `translateY(-2px)` on hover. All motion is wrapped in
`@media (prefers-reduced-motion: no-preference)` — reduced-motion users get
instant state changes, no transform.

## Breakpoints

Tailwind defaults (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280). Hero type
and ghost words are fluid (`clamp`/`vw`) rather than breakpoint-stepped, so
they scale continuously instead of jumping at the two extremes brief called
out as risk zones (narrow mobile, ultra-wide desktop).
