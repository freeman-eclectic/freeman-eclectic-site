---
name: workbench
description: The Workbench design language for the Freeman Eclectic site — the dark oak bench, slate and ash plates, tipped photographic prints, and the three-composition responsive rule. Use this skill for ANY visual or front-end work in this repo: adding or editing a page or route, adding a section or band, placing photographs, writing page copy, restyling a component, touching app.css tokens, or reviewing a diff that changes markup. Use it even when the request sounds purely technical ("add a testimonials section", "make the header sticky", "fix the spacing on mobile") — those all end in markup that has to sit on the bench correctly, and there are four specific bugs in this design that are easy to reintroduce and invisible without knowing to look for them.
---

# The Workbench

Freeman Eclectic is a one-person Minnesota craft shop that turns and carves
hardwood games, awards, gifts and keepsakes. This site is one continuous dark
oak workbench running top to bottom. Everything else — plates of ash and slate,
photographs laid down as prints — sits **on** it as an object. That metaphor is
the whole design. When you add something, decide what kind of object it is, and
give it the shadow and the slight rotation that make it read as resting on wood.

Five pages exist: `/` (home), `/for-business`, `/for-your-table`, `/about`,
`/contact`. Business is the primary audience; the table follows.

## The one rule that governs everything: this is not a store

There is no cart, no checkout, no prices. Every path ends in a pre-filled
email, and that was a deliberate decision by the shop owner, not an oversight.
So: never add a price, a `$`, "add to cart", "shop", "buy", a stock count, or a
star rating. The only calls to action are **Request a quote**, **Ask about this
piece**, **Start a commission**, **Email us**, and the address itself.

Route every one of them through `app/lib/mail.ts` — `quoteMail`,
`pieceMail(name)`, `plainMail`. Never hand-write a `mailto:`; the helper is what
keeps the pre-filled body consistent with what the page promises.

Voice is "we". The maker stays offstage: no personal name, no portrait, no
biography, nothing about it being a retirement business. Invent no prices,
dates, phone numbers, client names, testimonials or statistics — if a design
slot wants a fact you do not have, cut the slot rather than fill it.

## Build from the existing components

Everything on all five pages is made of these. Reach for them before writing
new markup, and read `app/components/` when you need the exact signature.

- `Bench` — the page shell. The oak texture, its scrim, the bottom gradient,
  and the `z-10` content wrapper. Every page is wrapped in exactly one.
- `AshStrip` — the header. Derives the current-page marker from `useLocation`.
- `Footer` — one row of cream type on bare wood. Keep it one row; a busy footer
  was rejected once already.
- `Band` — one horizontal section. Takes `h`, the band's height at 1440px.
- `SlatePlate` — dark, engraved. For the page's most important statements.
- `AshPlate` — pale, sanded. For anything practical the visitor must act on.
- `Print` — a photograph. Takes a `PrintSpec`.
- `Eyebrow`, `Btn`, `Wordmark`, and from `Bits.tsx`: `CatRow`, `MaterialsStrip`,
  `OrderSteps`, `TextLink`.

Page copy and photograph coordinates live in `app/content/<page>.ts`, never
inline in the route. That separation is what lets the shop change wording
without touching layout, and the piece list will keep growing.

Use the design tokens by name — `bg-ground-deep`, `text-cream-dim`,
`text-khaki`, `shadow-plate`, `font-serif`. Never a raw hex value in a route or
component; if you need a colour that has no token, that is a signal to discuss
adding one, not to inline it. Full list in `references/tokens.md`.

## The responsive rule: three compositions, two breakpoints

The design was drawn as fixed 1440px compositions — 105 prints placed by
absolute coordinate. Coordinates do not survive a viewport change, so they are
expressed as rules instead:

- **under 768px** — the stack. No absolute positioning. The plate leads full
  width; prints follow in one column. Rotation is damped to 45% of the drawn
  angle, so a photograph still reads as set down by hand but a vertical run
  does not look drunk.
- **768–1279px** — the grid. Plate still leads full width; prints drop into a
  two-column grid below it.
- **1280px and up** — the scatter as drawn, absolutely placed, full rotation,
  overlaps and z-order intact.

`l`, `t` and `w` are **percentages of the band**, not pixels, so the
composition scales continuously above 1280 rather than snapping at one width.
Call sites still pass the artboard's pixel value and the component converts it.
`docs/RESPONSIVE.md` has the reasoning.

Rotation discipline: plates rotate −0.6° to +0.7° only — they are heavy, they
barely shift. Prints rotate −2.6° to +2.6°. Alternate direction between
neighbours so it reads as scatter rather than a slant.

## Four bugs that are easy to reintroduce and hard to see

Each of these shipped at least once during the original build. They are not
hypothetical.

**A print box is shrink-to-fit.** Without a width pinned to the image width, a
long caption stretches the box past its photograph and pushes it over a
neighbour or off the edge. `Print` handles this; if you write a bespoke tile,
pin `width` to the image width yourself.

**A hardcoded line break is a wide-screen decision.** `Crafted to bring<br>people
together.` is right at 1440 and produces a four-line headline with a two-word
orphan at 375. Every `<br>` in a heading must be
`<br className="hidden md:inline" />`.

**`overflow-x-hidden` on `Bench` makes whole-document overflow checks
worthless.** Content that runs past the edge is silently clipped, not reported.
So a passing `scrollWidth <= clientWidth` proves nothing. Audit each absolutely
positioned child against **its own band's right edge**, and do it at 1280 and
1366 as well as 1440 — a plate that fits at 1440 can overrun a narrower band.

**Overriding a component's padding needs the arbitrary-value form.**
`xl:py-[44px]` wins; `xl:py-11` silently loses the class-order fight with the
component's own `xl:py-14` and does nothing.

## Verify before you claim it works

Two scripts in `scripts/` exist because eyeballing missed real defects:

- `extract-band.py <artboard>` reads an approved artboard and prints each
  band's prints and plates as band-relative percentages, pre-formatted. It
  self-checks that bands plus header plus footer equal the artboard's declared
  height.
- `reconcile-artboard.py <artboard> <content.ts>` re-derives every coordinate
  from the artboard and diffs it against what is in the content file.

Then: `npx tsc --noEmit`, `npm run build` (all five routes must prerender), and
a look at 375, 768, 1280 and 1440. Photographs are `loading="lazy"`, so a naive
"is it complete" check reports below-the-fold images as broken — force
`loading='eager'` and wait, or curl the URLs. Do not report that artifact as a
broken image.

Look at the result rather than only measuring it. Several defects here were
geometrically clean and visually wrong.

## Photographs

The site's images are the shop's own work, described piece by piece in
`references/photography.md` along with a bank of true captions. Captions are dry
and specific and name the real piece — "Cherry, with the walleye left standing
in relief", not "Beautiful handcrafted board".

Two standing cautions: the shipped images are 900px at quality 30 and want
replacing with the shop's originals, and `family-sign.jpg` shows a real
customer's surname, so it is the personalisation example only and never a
testimonial.

## Deeper reference

- `references/tokens.md` — every colour, font, shadow and container token
- `references/photography.md` — what each photograph is, plus the caption bank
- `docs/WORKBENCH.md` — plate and print anatomy in full detail
- `docs/RESPONSIVE.md` — why the responsive rule is what it is
- `docs/BRAND-SPEC.md` — voice, the copy bank, category lists
- `design/canvas/*.dc.html` — the approved artboards, the source of truth for
  what a page was drawn to look like
