# The Workbench — the chosen design language

Board F won. Every page of the site is built in this language. This file is the
spec; follow it exactly. Read PHOTOGRAPHY.md too — it describes the real photographs
and carries a caption bank. BRAND-SPEC.md still governs brand, voice and the
"this is not a store" rule.

## The one bug that will silently ruin your page

**Images may ONLY be referenced with `<img src="name.jpg">`.** A CSS
`background-image: url(./name.jpg)` does NOT resolve in these artboards — it
renders as nothing at all, with no error. There must be zero `url(` references
to a .jpg anywhere in your file. Photographs are `<img>` elements, always.

## Skeleton — copy this exactly, substituting your page height H

```html
<div style="width: 1440px; height: Hpx; background: #241E18; position: relative; overflow: hidden">

  <!-- THE BENCH: one continuous dark wood surface, top to bottom -->
  <img src="bench-oak.jpg" alt="" style="position: absolute; inset: 0; width: 1440px; height: Hpx; object-fit: cover; display: block">
  <div style="position: absolute; inset: 0; background: rgba(18,13,9,0.30)"></div>
  <div style="position: absolute; left: 0; right: 0; bottom: 0; height: 220px; background: linear-gradient(180deg, rgba(14,10,7,0) 0%, rgba(14,10,7,0.42) 100%)"></div>

  <!-- everything below sits ON the bench -->
  <div style="position: relative; z-index: 1">
    ... ash strip, then bands, then footer ...
  </div>
</div>
```

The bench `<img>` height MUST equal the root height, or the wood stops partway
down and the rest is flat brown. `bench-oak.jpg` is 1000x3210; `object-fit:
cover` handles any page height.

## helmet — copy verbatim, add nothing but what you genuinely need

```html
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Instrument+Sans:wght@400;500;600&display=swap">
  <style>
    body { margin: 0; background: #1E1A16; color: #F6F1E8;
           font-family: "Instrument Sans", system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    a { color: #B7742E; text-decoration: none; }
    a:hover { color: #8F5820; }
    .ser { font-family: "Newsreader", Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
    .eyebrow { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600; }
    .engrave { text-shadow: 0 -1px 0 rgba(0,0,0,0.85), 0 1px 0 rgba(246,241,232,0.07); }
    .print { position: absolute; background: #F6F1E8; padding: 10px; box-shadow: 16px 16px 0 rgba(0,0,0,0.42); }
    .print img { display: block; object-fit: cover; }
    .print .cap { font-family: "Newsreader", Georgia, serif; font-style: italic; font-size: 13.5px;
                  line-height: 1.35; color: #5C636A; padding-top: 8px; }
    .btn { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 30px;
           font-size: 13px; letter-spacing: 0.13em; text-transform: uppercase; font-weight: 600; }
    .catrow { display: flex; justify-content: space-between; align-items: baseline; gap: 16px;
              padding: 13px 0; font-size: 15px; }
  </style>
</helmet>
```

## The three kinds of object that sit on the bench

**A slate plate** — for the page's most important statement. Dark, engraved.
```
position: absolute; top: Npx; left: Npx; width: Npx; box-sizing: border-box;
padding: 56px 64px; background: #22262A; border: 1px solid rgba(246,241,232,0.11);
box-shadow: 18px 18px 0 rgba(0,0,0,0.45); transform: rotate(-0.4deg); z-index: 2
```
Inside: eyebrow `#C4B27E`; heading `class="ser engrave"` weight 300 colour
`#F6F1E8`; body `#DCD3C4`; hairlines `rgba(246,241,232,0.18)`; inline links
`#C4B27E`; muted `#A8A29A`; the `&middot;` separators `#9C8A5A`.

**An ash plate** — for practical, readable content. Pale, sits like sanded stock.
```
position: absolute; top: Npx; left: Npx; width: Npx; box-sizing: border-box;
padding: 56px 64px; background: #EDE5D7; color: #2B2F33;
box-shadow: 18px 18px 0 rgba(0,0,0,0.45); transform: rotate(0.5deg); z-index: 3
```
Inside: eyebrow `#B7742E` (or `#9C8A5A` for a secondary one); heading
`class="ser"` weight 300 colour `#2B2F33`, italic when it is a warm line; body
`#5C636A`; hairlines `#D9CFBF`; inline links `#B7742E`.

**A print** — a photograph laid on the bench.
```html
<div class="print" style="top: 90px; left: 60px; transform: rotate(-1.8deg); z-index: 1">
  <img src="board-loon-walnut.jpg" alt="..." style="width: 400px; height: 300px; object-fit: cover; object-position: 50% 50%">
  <div class="cap">A loon in walnut. The carving is cut deep, then finished by hand.</div>
</div>
```
Every print img needs an explicit width AND height AND `object-fit: cover`. The print
DIV must also carry `width: <the img width>px`. A print box is shrink-to-fit, so
without that a long caption widens the box past the photograph — pushing it over
a neighbouring plate's text or past the 1440 edge. With it, the box is exactly
`img width + 20px` and captions wrap inside the photograph's width. Most
prints carry a caption; a few deliberately do not. Captions are dry and specific.

## Rotation discipline

Plates rotate between **-0.6deg and +0.7deg** only — they are heavy, they barely
shift. Prints rotate between **-2.6deg and +2.6deg**. Nothing rotates more.
Alternate direction between neighbours so it reads as scatter, not a slant.

## Bands

The page is a stack of bands inside the content wrapper:
```html
<div style="height: 780px; position: relative">  ... plates and prints ... </div>
```
Each band declares `position: relative` so its absolutely positioned children
are placed against it. Children must fit inside the band's stated height —
a print may spill 20-30px into the next band's empty top area, which keeps the
bench feeling continuous, but must never collide with the next band's content.

## The ash strip (header) — identical on every page

92px tall, `background: #EDE5D7`, `color: #2B2F33`,
`box-shadow: 0 8px 0 rgba(0,0,0,0.34)`, `padding: 0 64px`, flex with
`justify-content: space-between`. Left: the pine SVG at 46x39 beside "FREEMAN"
(Newsreader, 21px, uppercase, letter-spacing 0.15em) above "Eclectic"
(Newsreader italic, 23px, `#C79A5F`). Right: a flex row, `gap: 34px`, of
`For Business` / `For Your Table` / `About` / `Contact` at 14px weight 500
colour `#2B2F33`, then a `.btn` at `height: 44px; padding: 0 22px;
background: #2B2F33; color: #F6F1E8` reading "Request a quote".

**Mark the current page**: give that one nav link
`border-bottom: 2px solid #B7742E; padding-bottom: 4px` and weight 600. Only one.

The pine SVG, verbatim (resize via width/height only):
```html
<svg width="46" height="39" viewBox="0 0 54 46" aria-hidden="true" style="display:block">
  <g fill="currentColor">
    <g transform="translate(-4,11) scale(0.66)"><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v9h-4z"/></g>
    <g><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v10h-4z"/></g>
    <g transform="translate(26,14) scale(0.58)"><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v9h-4z"/></g>
  </g>
</svg>
```

## The footer — identical on every page

The last band, 150px, no plate: cream type directly on bare bench.
`border-top: 1px solid rgba(246,241,232,0.14)`, `padding: 0 64px`, flex,
`justify-content: space-between`. Three groups: the wordmark (pine SVG at 32x27,
"FREEMAN" 16px uppercase, "Eclectic" italic 18px `#C79A5F`); the tagline
"Crafted to bring people together." in Newsreader italic 18px `#E4DCCC`; and a
`gap: 24px` row of `info@freeman-eclectic.com` / `Instagram` / `Facebook` at
14px `#DCD3C4` plus `Twin Cities, MN` in `#A69C8C`. Every text group carries
`text-shadow: 0 1px 2px rgba(0,0,0,0.7)` because it sits on wood.

Keep it to this one row. An earlier draft was criticised for a busy footer.

## Hard rules, repeated because they bite

- Zero `url(` references to any .jpg. `<img>` only.
- The bench img height equals the root height.
- Nothing may exceed x=1440. A print's real width is `img width + 20px` of
  padding, so `left + img width + 20 <= 1410` is the safe test.
- Every non-void element closed, every attribute quoted, no self-closed div.
- Keep the `<script src="./support.js"></script>` head line exactly. No
  `<script data-dc-script>` block — these artboards are static.
- Equal grid tracks are authored `repeat(N, minmax(0, 1fr))`.
- Sibling groups use flex/grid with `gap`, never margins or source whitespace.
- No emoji, no dingbats. `&middot;`, `&mdash;` and `&rarr;` are fine.
- No prices, no cart, no shop, no buy. CTAs are only: "Request a quote",
  "Ask about this piece", "Start a commission", "Email us", and the address.
- Never the maker's personal name. The voice is "we". No portraits, no bio.
- Invent no prices, dates, phone numbers, addresses, client names, testimonials
  or statistics.
