# Shared spec — Freeman Eclectic homepage variants

You are authoring ONE artboard file for a design canvas. Six variants of the same
homepage. They must share a design language and differ radically in STRUCTURE.

## The single most important rule

This site is NOT an online store. There is no cart, no checkout, no e-commerce.
Every path ends in an email. So:

- NEVER show a price, a "$", an "Add to cart", a "Shop now", a "Buy", a star
  rating, a stock count, a sale badge, or a product card with a button under it.
- Pieces are shown as PHOTOGRAPHS WITH CAPTIONS, not as products for sale.
- The only calls to action in the whole page are, in these words:
  "Request a quote", "Ask about this piece", "Start a commission",
  "Email us", "info@freeman-eclectic.com".
- One primary action (Request a quote), repeated down the page. Not three
  competing buttons in one band.

## Lean hard on images

Images are the point. The user's one stated virtue: "leaning heavily on images
is a virtue." Aim for images to carry more of the page than type does. Full
bleed, large scale, overlap, varied crop. Avoid a page that is mostly cream
background with small photos in boxes.

## Brand

A one-person Minnesota craft shop (a retirement business), voice is "we", the
maker stays offstage. No names, no portraits, no biography. CNC and laser
equipment, finished by hand. "Crafted" is the deliberate word. Never name a
machine or a brand of machine; name capabilities only.

Feel: rustic, warm, approachable. "Minnesota backwoods, not corporate office in
Minneapolis." Sturdy and unhurried. Not modern, not startup, not minimal-tech.

Two audiences, two doors. For Business is PRIMARY, For Your Table is secondary.

## Copy bank — use these, do not invent facts

Site tagline:        Crafted to bring people together.
Business subhead:    Awards, gifts, and wholesale pieces, crafted in Minnesota.
Table heading:       Sit down and play.
Pairing line:        Machines get it precise. Hands get it right.
Place:               Crafted in Minnesota. We ship nationwide.
Lead time:           Most orders ship within a few weeks. We will confirm a date with your quote.
Materials strip:     Wood · Slate · Glass · Metal · Acrylic
Business categories: Awards & recognition / Client & employee appreciation / Corporate gifts / Wholesale for retailers
Table categories:    Board games / Kitchen & bar / Gifts & keepsakes / Custom decor
Order steps:         Tell us → Mockup → Approve → Make → Ship
Capabilities:        engrave on slate, glass, wood, metal and acrylic; cut and carve
                     hardwoods; personalize; small-batch production
Real pieces to name: cribbage boards, Farkle, Wahoo, Mancala, Coin Drop,
                     License Plate Hunt, slate coasters, engraved drinkware,
                     cutting boards
Themes in the work:  cabins, lakes, the North Shore, the Boundary Waters,
                     lighthouses, wildlife, local history, respectful patriotic work
Nav:                 For Business · For Your Table · About · Contact · [Request a quote]
Contact:             info@freeman-eclectic.com · Instagram · Facebook · Twin Cities, MN · freeman-eclectic.com
Top-bar facts:       Crafted in Minnesota / Small batches, finished by hand / We ship nationwide

Write real, specific sentences in this voice: warm, plain, confident, short.
Talk about materials, craft, and the occasion a piece is made for. Never
oversell, never apologize for price, no exclamation marks, no lorem ipsum, no
"Welcome to our website". Humor may be dry and light, never mean.
Do not invent prices, dates, addresses, phone numbers, client names, testimonial
quotes, or statistics. If a design slot wants one, cut the slot.
Do NOT write anything that implies buying on the site.

## Palette (light theme; dark bands are allowed as photo scrims)

ground        #F6F1E8   page background
ground-deep   #EDE5D7   alternating sections
slate         #2B2F33   headings, body
slate-soft    #5C636A   secondary text
amber         #B7742E   Table accent, links, primary buttons
brass         #9C8A5A   Business accent, rules, small labels
line          #D9CFBF   hairlines
pine          #26332A   dark bands, top bar, footer
On dark photos: cream #F6F1E8 text, #DCD3C4 body, #C79A5F / #C4B27E accents.

## Type

Headings: Newsreader (serif), weight 300 or 400, tight leading. Italic for warmth.
Body/labels: Instrument Sans, 400/500/600.
Load both with one <link> to fonts.googleapis.com inside <helmet>.
Eyebrow labels: 11-12px, uppercase, letter-spacing 0.18em, weight 600.
Body copy 16-19px, line-height ~1.6. Big display headings 46-90px.

## Wordmark (paste as-is, resize via width/height)

<svg width="52" height="44" viewBox="0 0 54 46" aria-hidden="true" style="display:block">
  <g fill="currentColor">
    <g transform="translate(-4,11) scale(0.66)"><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v9h-4z"/></g>
    <g><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v10h-4z"/></g>
    <g transform="translate(26,14) scale(0.58)"><path d="M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z"/><path d="M24 33h4v9h-4z"/></g>
  </g>
</svg>

Beside it: "FREEMAN" in Newsreader, uppercase, letter-spacing 0.14em, above
"Eclectic" in Newsreader italic, in amber or a warm tan on dark grounds.

## Images — reference by bare filename, double-quoted src

<img src="cribbage.jpg" alt="..."> or CSS url(./cribbage.jpg). No paths, no
leading slash. Available (all landscape 880px wide unless noted):

cards-table.jpg    dark, moody, warm: hands playing cribbage by a lit tree at night. BEST HERO.
cribbage.jpg       a light hardwood cribbage board with copper pegs + a card deck, on dark wood
cutting-board.jpg  top-down: a plain rectangular board on near-black planks, cleaver + fork
board-veg.jpg      top-down: a round board on grey planks, tomatoes, asparagus, greens
whiskey.jpg        a glass of whiskey on a black slate coaster, dark wood, one engraved disc
hand-tools.jpg     carving chisels laid across a pale workbench, daylight
chisel.jpg         wide crop, tool close-up on wood
shavings.jpg       TALL. a hand plane buried in curled shavings at a craft-show table
workshop.jpg       TALL. dim rustic shed interior, hand tools on a plank wall, window light
cabin-window.jpg   a pine-walled cabin room, bench under a bright window
fireplace.jpg      a warm cabin interior, wood stove, string lights, plank walls
lake-shore.jpg     the North Shore: rocky beach, pines, open water
forest-lake.jpg    a still lake, dense green pines, soft morning
lake-rocks.jpg     TALL. lake edge, boulders
wood-grain.jpg     TALL. close ash grain, pale honey — a TEXTURE
wood-slab.jpg      TALL. close ash grain, pale honey — a TEXTURE

Every image must be object-fit: cover inside a sized box, never stretched.
Reuse of one image within your artboard is fine; a photo used at two very
different crops reads as two photos.

## File format — Design Component (.dc.html). Follow exactly.

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Instrument+Sans:wght@400;500;600&display=swap">
  <style>
    body { margin: 0; background: #F6F1E8; color: #2B2F33; font-family: "Instrument Sans", system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    a { color: #B7742E; text-decoration: none; }
    a:hover { color: #8F5820; }
    /* your classes here */
  </style>
</helmet>
<div style="width: 1440px; background: #F6F1E8">
  ... your page ...
</div>
</x-dc>
</body>
</html>

Hard rules:
- Keep the <script src="./support.js"></script> head line EXACTLY as written.
- Do NOT add a <script data-dc-script> block. These artboards are static.
- Root element is a single div, fixed `width: 1440px`, with a background color.
- Close every non-void element. Quote every attribute. No self-closed <div/>.
- No emoji, no dingbat glyphs. Icons are inline stroke SVG on a 20/24px grid,
  one consistent style, or nothing.
- Use `display: flex` / `display: grid` with `gap:` for any group of siblings
  (nav items, category lists, button pairs, photo rows). Never space siblings
  with margins or source whitespace.
- Grid columns must be authored as `grid-template-columns: repeat(N, minmax(0, 1fr))`
  when the tracks are equal.
- Put distinctive per-element styling in inline `style="..."`. Put only the
  reset, fonts, link colors and 3-6 repeated helper classes in <helmet>.
- Define `a` and `a:hover` colors in <helmet> (done above).
- No AI-slop tropes: no decorative gradient backgrounds (photo scrim gradients
  are fine and expected), no rounded-corner card with a coloured left border,
  no Inter/Roboto/Arial, no drop-shadow on everything.
- Minimum 44px tall for anything clickable.
- No fabricated logos or client names.

## Every variant includes, in some form

A header with the wordmark and the nav. A statement of what the shop is. Both
doors, with For Business given more weight than For Your Table. The pairing
idea (machines + hands). The five materials. The Minnesota / ships-nationwide
fact. One clear way to start a conversation. A restrained footer — an earlier
draft was criticised for a busy footer, so keep it to one line or one short row.

Order and emphasis are YOURS to decide — that is what makes the variants differ.
