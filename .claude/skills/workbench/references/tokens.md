# Tokens

Declared in `app/app.css` as Tailwind v4 `@theme`, so each one generates its
utilities automatically: `--color-x` gives `bg-x` / `text-x` / `border-x`,
`--shadow-x` gives `shadow-x`, `--font-x` gives `font-x`, `--container-x`
gives `max-w-x`.

Values were lifted from the approved artboards, not rounded to a grid — if one
looks arbitrary, that is why, and changing it will pull the design off the
drawing.

**This design is light-only.** The page is a dark wood surface, which is not the
same thing as a dark theme, and there is deliberately no dark-mode variant. Do
not add `dark:` variants.


## Paper + type

| token | value | use |
|---|---|---|
| `--color-ground` | `#f6f1e8` | cream: prints, light plate faces |
| `--color-ground-deep` | `#ede5d7` | ash: the header strip, practical plates |
| `--color-ink` | `#2b2f33` | slate charcoal: type on ash |
| `--color-ink-soft` | `#5c636a` | secondary type on ash |
| `--color-line` | `#d9cfbf` | hairline on ash |

## Accents

| token | value | use |
|---|---|---|
| `--color-amber` | `#b7742e` | primary accent on ash |
| `--color-amber-deep` | `#8f5820` | amber, hovered |
| `--color-brass` | `#9c8a5a` | muted labels, separators |
| `--color-tan` | `#c79a5f` | the wordmark's "Eclectic", accents on dark |
| `--color-khaki` | `#c4b27e` | eyebrows on slate |

## The bench and the things resting on it

| token | value | use |
|---|---|---|
| `--color-bench` | `#241e18` | wood, showing through |
| `--color-bench-deep` | `#1e1a16` | the page behind the wood |
| `--color-slate-plate` | `#22262a` | engraved slate plates |
| `--color-slate-edge` | `oklch(96% 0.006 80 / 0.11)` | slate plate border |
| `--color-cream-dim` | `#dcd3c4` | body copy on slate |
| `--color-cream-dimmer` | `#a8a29a` | muted copy on slate |

## Fonts

| token | value | use |
|---|---|---|
| `--font-serif` | `"Newsreader", Georgia, "Times New Roman", serif` |  |
| `--font-sans` | `"Instrument Sans", ui-sans-serif, system-ui, sans-serif` |  |

## The two shadows that make an object sit on the bench

| token | value | use |
|---|---|---|
| `--shadow-plate` | `18px 18px 0 rgb(0 0 0 / 0.45)` |  |
| `--shadow-print` | `16px 16px 0 rgb(0 0 0 / 0.42)` |  |
| `--shadow-strip` | `0 8px 0 rgb(0 0 0 / 0.34)` |  |

## The reference width the scatter coordinates were drawn against

| token | value | use |
|---|---|---|
| `--container-canvas` | `1440px` |  |

## Two conventions worth knowing

`--container-canvas` is 1440px, the width the whole design was drawn against.
`Band` uses it as `max-w-canvas`, and the scatter coordinates are percentages
of it.

The three shadows are what make an object read as resting on the bench rather
than floating: `shadow-plate` for plates, `shadow-print` for photographs,
`shadow-strip` for the header. They are hard offsets with no blur, on purpose —
a soft shadow makes the whole thing look like a web page again.
