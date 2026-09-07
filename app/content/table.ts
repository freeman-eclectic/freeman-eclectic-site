import type { PrintSpec } from "~/components/Print";

/**
 * For Your Table, band by band, as drawn on the approved artboard.
 *
 * `l` and `t` are percentages of the band box (artboard pixel / 1440 for x,
 * / the band's drawn height for y) so the scatter scales continuously above
 * the xl breakpoint instead of snapping at one width. See docs/RESPONSIVE.md.
 *
 * The pieces band is the one exception: it is a repeating list that will grow,
 * so it is a real responsive grid rather than a scatter, and its drawn height
 * is kept here only for the record.
 */

export const BANDS = {
  opening: 480,
  games: 600,
  gifts: 600,
  pieces: 1806,
  personalisation: 294,
  ask: 570,
} as const;

export const openingPrints: PrintSpec[] = [
  { src: "/img/cards-table.jpg", w: 240, h: 176, l: 2.78, t: 2.08, rot: -2.4, z: 1,
    alt: "Hands playing cribbage by lamplight at a wooden table at night",
    caption: "Cribbage, played late. This is the table the work is made for." },
  { src: "/img/board-loon-walnut.jpg", w: 240, h: 180, l: 79.17, t: 2.5, rot: 2.3, z: 1,
    alt: "A turned walnut cribbage board with a loon carved in the well, on a display stand",
    caption: "A loon in walnut, cut deep." },
  { src: "/img/scratched-game.jpg", w: 210, h: 140, l: 3.89, t: 52.5, rot: 1.9, z: 2,
    alt: "A pegged wooden game called Scratched with pegs standing in play",
    caption: "Scratched. Pegs, a slope, and an afternoon." },
  { src: "/img/coaster-loons-mug.jpg", w: 260, h: 140, l: 75.83, t: 52.08, rot: -2.1, z: 2,
    alt: "An engraved slate coaster beside a stoneware mug, pine sprigs and pinecones",
    caption: "Slate, engraved. Minnesota humour." },
];

export const gamesPrints: PrintSpec[] = [
  { src: "/img/board-lift-bridge.jpg", w: 300, h: 200, l: 50.42, t: 3, rot: 2.4, z: 2,
    alt: "A pale ash cribbage board engraved with the Duluth aerial lift bridge",
    caption: "The Duluth lift bridge, engraved into pale ash." },
  { src: "/img/board-loon-grey.jpg", w: 276, h: 180, l: 74.58, t: 3.67, rot: -2.2, z: 2,
    alt: "A turned walnut cribbage board with a carved loon against a grey wall",
    caption: "Turned, carved, then drilled for the pegs." },
  { src: "/img/coaster-two-harbors.jpg", w: 320, h: 160, l: 6.67, t: 55, rot: 1.7, z: 2,
    alt: "A slate coaster beside a mug, a plaid blanket and pinecones",
    caption: "Slate, engraved. The joke is optional; the coffee ring is not." },
];

export const giftsPrints: PrintSpec[] = [
  { src: "/img/cross-roses.jpg", w: 270, h: 180, l: 3.89, t: 2.67, rot: -2.2, z: 2,
    alt: "A pale carved cross covered in roses, on a grey wall",
    caption: "Roses carved over the whole face of the cross." },
  { src: "/img/fireplace.jpg", w: 268, h: 172, l: 27.78, t: 4.33, rot: 1.9, z: 2,
    alt: "A warm cabin interior with a wood stove, string lights and plank walls",
    caption: "Pieces that end up on a mantel." },
  { src: "/img/medallion-oak.jpg", w: 290, h: 150, l: 75.69, t: 56.67, rot: 2.1, z: 2,
    alt: "A turned oak medallion with a carved quatrefoil on a wood surface",
    caption: "Turned oak, cut for a quatrefoil." },
];

export const personalisationPrints: PrintSpec[] = [
  { src: "/img/family-sign.jpg", w: 452, h: 172, l: 63.06, t: 8.84, rot: 1.8, z: 2,
    alt: "A personalised oak name board with three coat hooks",
    caption:
      "An example of personalisation — a name engraved in oak, with three hooks by the door." },
];

export const askPrints: PrintSpec[] = [
  { src: "/img/hand-tools.jpg", w: 240, h: 180, l: 3.89, t: 4.21, rot: -2.2, z: 1,
    alt: "Carving chisels laid across a pale workbench in daylight",
    caption: "Chisels, for the work a machine will not do." },
  { src: "/img/workshop.jpg", w: 250, h: 150, l: 4.17, t: 52.63, rot: 1.7, z: 2,
    alt: "A dim rustic shop interior with hand tools on a plank wall",
    caption: "Hand tools on a plank wall." },
  { src: "/img/long-pines.jpg", w: 186, h: 100, l: 83.33, t: 73.68, rot: 2.3, z: 1,
    minor: true,
    alt: "A long pale maple cribbage board engraved with a stand of pines" },
];

/**
 * One piece in the grid. `name` is what goes into the pre-filled email, so it
 * has to read as a thing a person would ask for; `w` and `h` are the drawn crop,
 * kept only for the tile's aspect ratio.
 */
export type PieceSpec = {
  name: string;
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
};

/** The pieces, in the order they are laid out on the artboard. */
export const PIECES: PieceSpec[] = [
  {
    name: "walnut cribbage board with a loon",
    src: "/img/board-loon-walnut.jpg",
    w: 230,
    h: 200,
    alt: "A turned walnut cribbage board with a loon carved in the well",
    caption: "Turned cribbage board, walnut. A loon on the water.",
  },
  {
    name: "ash cribbage board with a lighthouse",
    src: "/img/board-lighthouse.jpg",
    w: 230,
    h: 200,
    alt: "A pale ash cribbage board with a lighthouse carved in the well",
    caption: "Turned cribbage board, ash. A North Shore lighthouse.",
  },
  {
    name: "cherry cribbage board with a tall ship",
    src: "/img/board-tall-ship.jpg",
    w: 230,
    h: 200,
    alt: "A cherry cribbage board with a full-rigged sailing ship carved in high relief",
    caption: "Turned cribbage board, cherry. A full-rigged tall ship.",
  },
  {
    name: "cherry cribbage board with a walleye",
    src: "/img/board-walleye.jpg",
    w: 230,
    h: 200,
    alt: "A cherry cribbage board with a leaping walleye carved in high relief",
    caption: "Turned cribbage board, cherry. A walleye in relief.",
  },
  {
    name: "walnut cribbage board with a cabin and shoreline",
    src: "/img/board-cabin-lake.jpg",
    w: 230,
    h: 200,
    alt: "A walnut cribbage board carved with a cabin and shoreline scene",
    caption: "Turned cribbage board, walnut. A cabin and a shoreline.",
  },
  {
    name: "walnut cribbage board with a golf ball on a tee",
    src: "/img/board-golf.jpg",
    w: 230,
    h: 186,
    alt: "A turned walnut cribbage board with a golf ball on a tee carved in the well",
    caption: "Turned cribbage board, walnut. A golf ball on a tee.",
  },
  {
    name: "walnut cribbage board with a deep-cut loon",
    src: "/img/board-loon-dark.jpg",
    w: 230,
    h: 186,
    alt: "A turned walnut cribbage board with a carved loon against a dark grey wall",
    caption: "Turned cribbage board, walnut. A loon, cut deep.",
  },
  {
    name: "ash cribbage board with a leaping fish",
    src: "/img/board-fish-ash.jpg",
    w: 230,
    h: 186,
    alt: "An ash cribbage board with a leaping fish carved in relief",
    caption: "Turned cribbage board, ash. A leaping fish.",
  },
  {
    name: "walnut cribbage board with a rose-covered cross",
    src: "/img/board-cross-relief.jpg",
    w: 230,
    h: 186,
    alt: "A walnut cribbage board with a rose-covered cross carved in the well",
    caption: "Turned cribbage board, walnut. A rose-covered cross.",
  },
  {
    name: "turned oak medallion",
    src: "/img/medallion-oak.jpg",
    w: 230,
    h: 186,
    alt: "A turned oak medallion with a carved quatrefoil",
    caption: "Turned oak medallion, cut for a quatrefoil.",
  },
  {
    name: "long maple cribbage board with crossed paddles",
    src: "/img/long-paddles.jpg",
    w: 230,
    h: 120,
    alt: "A long pale maple cribbage board engraved with crossed canoe paddles and pines",
    caption: "Long cribbage board, maple. Crossed paddles and pines.",
  },
  {
    name: "long maple cribbage board with the Duluth lift bridge",
    src: "/img/long-bridge.jpg",
    w: 230,
    h: 120,
    alt: "A long pale maple cribbage board engraved with the Duluth lift bridge",
    caption: "Long cribbage board, maple. The Duluth lift bridge.",
  },
  {
    name: "long maple cribbage board with a pheasant",
    src: "/img/long-pheasant.jpg",
    w: 230,
    h: 120,
    alt: "A long pale maple cribbage board engraved with a flushing pheasant",
    caption: "Long cribbage board, maple. A flushing pheasant.",
  },
  {
    name: "long maple cribbage board with a stand of pines",
    src: "/img/long-pines.jpg",
    w: 230,
    h: 120,
    alt: "A long pale maple cribbage board engraved with a stand of pines",
    caption: "Long cribbage board, maple. A stand of pines.",
  },
  {
    name: "glass dish with a carved wood inset",
    src: "/img/glass-dish.jpg",
    w: 230,
    h: 160,
    alt: "A glass dish holding a carved wood inset",
    caption: "Glass dish with a carved wood inset.",
  },
  {
    name: "cherry Farkle board",
    src: "/img/farkle-board.jpg",
    w: 230,
    h: 175,
    alt: "A cherry Farkle board with the scoring table engraved into the face",
    caption: "Farkle board, cherry. The scoring table engraved in.",
  },
  {
    name: "Scratched pegged game",
    src: "/img/scratched-game.jpg",
    w: 230,
    h: 190,
    alt: "A pegged wooden game called Scratched with pegs standing in play",
    caption: "Scratched. Pegs, a slope, and an afternoon.",
  },
  {
    name: "Minnesota-shaped cribbage board",
    src: "/img/mn-boards-bench.jpg",
    w: 230,
    h: 175,
    alt: "Minnesota-shaped cribbage boards on a bench outdoors with pegs standing in them",
    caption: "Minnesota, cut to shape and drilled for two.",
  },
  {
    name: "carved cross covered in roses",
    src: "/img/cross-roses.jpg",
    w: 230,
    h: 225,
    alt: "A pale carved cross covered in roses",
    caption: "Carved cross. Roses over the whole face.",
  },
  {
    name: "walnut crucifix",
    src: "/img/cross-walnut.jpg",
    w: 230,
    h: 225,
    alt: "A dark walnut crucifix on weathered grey boards",
    caption: "Walnut crucifix, carved and hand-finished.",
  },
  {
    name: "loons slate coaster",
    src: "/img/coaster-loons-mug.jpg",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved with a loon joke, beside a stoneware mug and pinecones",
    caption: "Slate coaster, engraved. “Sorry... can’t hear you over the loons.”",
  },
  {
    name: "Legendary North slate coaster",
    src: "/img/coaster-legendary-north.jpg",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved with a lumberjack and an ox, beside a mug of coffee",
    caption: "Slate coaster, engraved. “Welcome to the Legendary North.”",
  },
  {
    name: "Two Harbors slate coaster",
    src: "/img/coaster-two-harbors.jpg",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved with a Two Harbors line, with a mug, a plaid blanket and pinecones",
    caption: "Slate coaster, engraved. “Things get a little wild in Two Harbors.”",
  },
];

/** The two things the pre-filled note asks for. */
export const ASK_FIELDS = [
  {
    label: "Which piece",
    detail: "Name it, or describe it. A photo of something close helps.",
  },
  {
    label: "When",
    detail: "The date you need it in hand. Most orders ship within a few weeks.",
  },
];
