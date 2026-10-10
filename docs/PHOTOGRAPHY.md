# Photography — Freeman Eclectic's own products

Every photograph on the site comes from the shop's product-image handoff: real pieces,
each presented on the same staged cabin table (fireplace, lake window, pine sprigs,
plaid). They are square, 1254px originals, served as WebP at quality 80 from
`public/img/`. The handoff keeps its own catalog and alt-text suggestions in
`product-image-catalog.csv`; filenames here keep the handoff's slug and source image
number so the two stay easy to reconcile.

`bench-tile.jpg` is the oak texture behind every page, not a photograph.

## Cropping

Every photograph shares one composition: the piece sits in the lower middle of the
frame, the fireplace and window above it. Prints crop with `object-cover` weighted to
`50% 62%`, so a wide strip keeps the piece and loses the fireplace. A crop that cuts
the piece itself is a sign to pick a squarer `w`/`h`, not to move the weighting.

## What the shop makes (from the product images)

- **Round turned cribbage boards** with a carving in the well: loon, deer skull,
  golfer, hummingbird, three pheasants, woodpecker, leaping fish, log cabin,
  full-rigged sailing ship. Several are named as black walnut; for the rest, the wood
  is not recorded, so say "turned cribbage board" and name no species.
- **Long straight cribbage boards**, engraved: a fish, a monogram.
- **Engraved slate coasters** — by far the largest group. North Shore scenes (Split Rock
  Lighthouse, the Duluth lift bridge, sea arches), lakes, wildlife, and Minnesota humour
  ("Sorry... can't hear you over the loons", "Things get a little wild in Two Harbors",
  "Welcome to the Legendary North").
- **Engraved glassware**: rocks glasses, stemless glasses, glass mugs.
- **Wooden games**: Farkle tray, Chinese checkers, marble game, snakes and ladders,
  Frustration Rummy scoring board, Sticks, coin drop, a playing card holder; acrylic
  game boards too.
- **Kitchen and home**: striped hardwood cutting boards, a maple magnetic knife board,
  live-edge family name boards with coat hooks, family plaques.

## Do not use

- Prices or specifications. None are known and none may be invented.
- Any client or family name as if it were a testimonial.
  `heyer-family-live-edge-coat-rack-img_0015.webp` shows a real family's name — caption
  it as an example of personalisation, nothing more.
- The handoff's corporate pieces (All Saints keychain, Callender / RE/MAX bottle
  opener, Anderson cutting board, Round Barn, Heroes Helping Heroes) carry real
  businesses' names, logos and phone numbers. They are not on the site; using one needs
  the shop's say-so first.
- Personal gifts carrying a first name (the Norah and Breckan banks, "Jake loves Uncle
  Jimmy") — same reason.

## Where the photographs go

No photograph appears twice anywhere on the site. Every slot on every page holds a
different image, and `public/img/` holds exactly the images in use. Check before
adding one:

```
grep -ho 'src: "/img/[^"]*' app/content/*.ts | sort | uniq -d
```

Pages are stocked by price and kind:

- **Home** — the largest, most impressive pieces: every turned and carved cribbage
  board, the long boards, the cutting board and the knife board.
- **For Business** — smaller-ticket pieces that order well in quantity: slate
  coasters and engraved glassware. The golfer board is the one exception, as the
  tournament award.
- **For Your Table** — every game, plus coasters; the name board for personalisation.
- **About and Contact** — scenic and wildlife slate coasters.

The handoff still holds well over a hundred unused coasters. To add one, convert the
original with `cwebp -q 80 -m 6`, keep its slug, and drop the `-cabin-setting` suffix.

## Caption bank — true statements you may use verbatim or trim

A loon in walnut. The carving is cut deep, then finished by hand.
Black walnut, with the fish left standing in relief.
A full-rigged ship, left standing in relief.
Split Rock Lighthouse, engraved in slate.
The Duluth lift bridge, engraved in slate.
Slate, engraved. The joke is optional; the coffee ring is not.
Minnesota humour on a slate coaster. These leave the booth fastest.
The scoring table, engraved so nobody argues.
Marbles, a round board, and an afternoon.
Chinese checkers, turned round and drilled for the marbles.
A family name and five hooks, by the door.
Cut and engraved by machine. Sanded, fitted and finished by hand.
