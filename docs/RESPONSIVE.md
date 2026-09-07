# The scatter, made responsive

Settled by building the home hero band for real and testing it at 375, 768,
1100, 1280 and 1440. The proof is `app/routes/home.tsx` plus
`app/components/{Bench,Plate,Print}.tsx`.

## The problem

The approved artboards are fixed 1440px compositions: 105 prints and 54 other
absolutely positioned elements placed with 1,522 hardcoded pixel values. The
design's character is objects scattered on a bench at slight angles, expressed
as absolute coordinates. Coordinates do not survive a viewport change, so they
have to become rules.

## The rule: three compositions, two breakpoints

**base, under 768px — the stack.** No absolute positioning. The plate leads at
full width; prints follow in a single column, each capped at its own intrinsic
width and centred. Rotation is damped to 45% of the drawn angle: enough that a
photograph still reads as an object set down by hand, not enough that a vertical
run looks drunk.

**md, 768-1279px — the grid.** The plate stays full width and still leads.
Prints drop into a two-column grid beneath it, keeping the damped rotation.
Prints marked `minor` in the data appear here but are the first thing to cut if
a band gets crowded.

**xl, 1280px and up — the scatter as drawn.** Prints and plates go absolute,
placed by percentage of the band box, at their full drawn rotation, with the
overlaps and z-order intact. The band takes its drawn height.

## Why percentages, not pixels

At xl each print carries `left` and `top` as a percentage of the band, converted
once from the artboard (pixel / 1440 for x, pixel / band height for y). The
composition then scales continuously from 1280 to 1440 and beyond instead of
snapping at one width, so there is no third breakpoint to maintain. Verified: at
1280 the widest print's right edge lands at 1233, and no width from 375 up
produces horizontal overflow.

## Widths scale too, not just positions

The first version of this rule made *positions* percentages and left *widths* as
drawn pixels. That is broken: a 1312px plate placed at 4.44% sits at 57px and
ends at 1369, which overruns a 1280px band by 89px. Every page had two to five
plates doing this, up to 104px over.

So `--w` is stored unitless and the component resolves it as
`calc(var(--w)*100%/1440)`. Call sites still pass the artboard's pixel value, so
the data stays traceable to the drawing, and the box scales with the band. Prints
use the same conversion, and their images take height from `aspect-ratio` rather
than a fixed pixel height, which would otherwise distort a scaled width.

**The trap that hid this:** `Bench` carries `overflow-x-hidden`, so the document
never reported horizontal overflow — the content was being clipped instead. A
whole-document overflow check is therefore worthless here. Audit each absolutely
positioned child against **its own band's right edge**, at 1280 and 1366 as well
as 1440. Verified clean on all five pages at 1280, 1366 and 1440.

## What carries the numbers

Coordinates live in `app/content/*.ts` as plain data, one `PrintSpec` per
photograph — `{src, alt, caption, w, h, l, t, rot, z, minor}`. The components
read them as CSS custom properties, so Tailwind's breakpoint variants do the
recomposition and the data never mentions a breakpoint. Adding or moving a
photograph is a data edit.

## Two traps found while proving it

**A hardcoded line break is a wide-screen decision.** `Crafted to bring<br>people
together.` is right at 1440 and wrong at 375, where it produced a four-line
headline with a two-word orphan. Every `<br>` in a headline must be
`<br className="hidden md:inline" />`. There are more of these in the artboards.

**A print box is shrink-to-fit.** Without an explicit width equal to the image
width, a long caption widens the box past its photograph and pushes it over a
neighbour or off the edge. `Print` pins it. This already bit the artboards once.

## Still open

The header is legible at 375 but takes three rows; it wants a proper collapsed
menu. Hover and focus states, transitions, and the 404 page are undefined. None
of these block the remaining four pages.
