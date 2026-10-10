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
  { src: "/img/wooden-playing-card-holder-img_4040.webp", w: 240, h: 176, l: 2.78, t: 2.08, rot: -2.4, z: 1,
    alt: "A wooden playing card holder with a hand of cards standing in it",
    caption: "A card holder, cut to keep a full hand standing." },
  { src: "/img/wooden-farkle-scoring-tray-img_4049.webp", w: 240, h: 180, l: 79.17, t: 2.5, rot: 2.3, z: 1,
    alt: "A wooden Farkle tray with the scoring table engraved into the floor",
    caption: "The scoring table, engraved so nobody argues." },
  { src: "/img/round-wooden-marble-game-board-img_4051.webp", w: 210, h: 140, l: 3.89, t: 52.5, rot: 1.9, z: 2,
    alt: "A round wooden marble game board with coloured marbles and a die",
    caption: "Marbles, a round board, and an afternoon." },
  { src: "/img/coffee-is-like-duct-tape-slate-coaster-img_5631.webp", w: 260, h: 140, l: 75.83, t: 52.08, rot: -2.1, z: 2,
    alt: "A slate coaster engraved “Coffee is like duct tape, it fixes everything”",
    caption: "Slate, engraved. Coffee, like duct tape, fixes everything." },
];

export const gamesPrints: PrintSpec[] = [
  { src: "/img/round-wooden-chinese-checkers-board-img_4046.webp", w: 300, h: 200, l: 50.42, t: 3, rot: 2.4, z: 2,
    alt: "A round wooden Chinese checkers board with coloured marbles set in play",
    caption: "Chinese checkers, turned round and drilled for the marbles." },
  { src: "/img/wooden-snakes-ladders-game-set-img_3872.webp", w: 276, h: 180, l: 74.58, t: 3.67, rot: -2.2, z: 2,
    alt: "A wooden snakes and ladders board engraved across its face, with numbered tokens and a die",
    caption: "Snakes and ladders, engraved across the whole board." },
  { src: "/img/four-in-a-row-acrylic-game-board-img_3881.webp", w: 320, h: 160, l: 6.67, t: 55, rot: 1.7, z: 2,
    alt: "A clear acrylic four-in-a-row game board",
    caption: "Four in a row, cut in clear acrylic." },
];

export const giftsPrints: PrintSpec[] = [
  { src: "/img/aitkin-lake-slate-coaster-img_5501.webp", w: 270, h: 180, l: 3.89, t: 2.67, rot: -2.2, z: 2,
    alt: "A slate coaster engraved with a lake scene and the name Aitkin Lake",
    caption: "Slate, engraved. Aitkin Lake, by name." },
  { src: "/img/life-at-the-lake-is-superior-slate-coaster-img_5621.webp", w: 268, h: 172, l: 27.78, t: 4.33, rot: 1.9, z: 2,
    alt: "A slate coaster engraved “Life at the lake is Superior” with a cabin on the shore",
    caption: "“Life at the lake is Superior”, on slate." },
  { src: "/img/north-shore-good-coffee-bear-slate-coaster-img_5643.webp", w: 290, h: 150, l: 75.69, t: 56.67, rot: 2.1, z: 2,
    alt: "A slate coaster engraved with a North Shore bear holding a coffee mug",
    caption: "A North Shore bear and his coffee, engraved in slate." },
];

export const personalisationPrints: PrintSpec[] = [
  { src: "/img/heyer-family-live-edge-coat-rack-img_0015.webp", w: 452, h: 172, l: 63.06, t: 8.84, rot: 1.8, z: 2,
    alt: "A live-edge family name board with a carved cross and five coat hooks",
    caption: "An example of personalisation — a family name carved into live-edge wood, with five hooks by the door." },
];

export const askPrints: PrintSpec[] = [
  { src: "/img/largemouth-bass-slate-coaster-img_5477.webp", w: 240, h: 180, l: 3.89, t: 4.21, rot: -2.2, z: 1,
    alt: "A slate coaster engraved with a largemouth bass underwater",
    caption: "A largemouth bass, engraved in slate." },
  { src: "/img/north-shore-less-screen-time-bear-canoe-slate-coaster-img_5636.webp", w: 250, h: 150, l: 4.17, t: 52.63, rot: 1.7, z: 2,
    alt: "A slate coaster engraved with a North Shore bear paddling a canoe",
    caption: "A North Shore bear in a canoe, engraved in slate." },
  { src: "/img/moonlit-loon-slate-coaster-img_5461.webp", w: 186, h: 100, l: 83.33, t: 73.68, rot: 2.3, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a loon under a full moon" },
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
    name: "cribbage board with a tall ship",
    src: "/img/round-sailing-ship-cribbage-board-76513823739.webp",
    w: 230,
    h: 200,
    alt: "A round cribbage board with a full-rigged sailing ship carved in relief",
    caption: "Turned cribbage board. A full-rigged tall ship.",
  },
  {
    name: "black walnut cribbage board with a loon",
    src: "/img/black-walnut-loon-cribbage-board-img_2837.webp",
    w: 230,
    h: 200,
    alt: "A round black walnut cribbage board with a loon carved in the well",
    caption: "Turned cribbage board, black walnut. A loon on the water.",
  },
  {
    name: "black walnut cribbage board with a deer skull",
    src: "/img/black-walnut-deer-skull-cribbage-board-img_2836.webp",
    w: 230,
    h: 200,
    alt: "A round black walnut cribbage board with a deer skull and antlers carved in relief",
    caption: "Turned cribbage board, black walnut. A deer skull, cut deep.",
  },
  {
    name: "black walnut cribbage board with a leaping fish",
    src: "/img/black-walnut-two-fish-cribbage-board-img_2838.webp",
    w: 230,
    h: 200,
    alt: "A round black walnut cribbage board with a leaping fish carved in relief",
    caption: "Turned cribbage board, black walnut. A fish in relief.",
  },
  {
    name: "black walnut cribbage board with a woodpecker",
    src: "/img/black-walnut-woodpecker-cribbage-board-img_2943.webp",
    w: 230,
    h: 200,
    alt: "A round black walnut cribbage board with a woodpecker on a tree trunk carved in relief",
    caption: "Turned cribbage board, black walnut. A woodpecker on the trunk.",
  },
  {
    name: "black walnut cribbage board with three pheasants",
    src: "/img/black-walnut-three-pheasant-cribbage-board-img_2835.webp",
    w: 230,
    h: 186,
    alt: "A round black walnut cribbage board with three pheasants carved in relief",
    caption: "Turned cribbage board, black walnut. Three pheasants.",
  },
  {
    name: "black walnut cribbage board with a hummingbird",
    src: "/img/black-walnut-hummingbird-cribbage-board-img_2958.webp",
    w: 230,
    h: 186,
    alt: "A round black walnut cribbage board with a hummingbird and a flower carved in the well",
    caption: "Turned cribbage board, black walnut. A hummingbird.",
  },
  {
    name: "cribbage board with a log cabin",
    src: "/img/round-cabin-cribbage-board-img_5143.webp",
    w: 230,
    h: 186,
    alt: "A round two-tone cribbage board with a log cabin carved in the well",
    caption: "Turned cribbage board. A log cabin in relief.",
  },
  {
    name: "cribbage board with a duck and a flag",
    src: "/img/round-duck-and-flag-cribbage-board-img_5227.webp",
    w: 230,
    h: 186,
    alt: "A round cribbage board with a duck and a waving flag carved in the well",
    caption: "Turned cribbage board. A duck and a flag.",
  },
  {
    name: "cribbage board with a western mountain scene",
    src: "/img/round-western-mountain-cribbage-board-img_4074.webp",
    w: 230,
    h: 186,
    alt: "A round cribbage board with a western mountain scene carved in relief",
    caption: "Turned cribbage board. A western mountain scene.",
  },
  {
    name: "dots and boxes acrylic board",
    src: "/img/dots-and-boxes-acrylic-game-board-img_3882.webp",
    w: 230,
    h: 120,
    alt: "A clear acrylic dots and boxes game board",
    caption: "Dots and boxes, engraved on clear acrylic.",
  },
  {
    name: "Road Trip Find acrylic board",
    src: "/img/road-trip-find-acrylic-game-board-img_3880.webp",
    w: 230,
    h: 120,
    alt: "A clear acrylic Road Trip Find game board with the alphabet down both sides",
    caption: "Road Trip Find, engraved on clear acrylic. For the drive up north.",
  },
  {
    name: "Farm Island Lake loons slate coaster",
    src: "/img/farm-island-lake-two-loons-slate-coaster-img_5504.webp",
    w: 230,
    h: 120,
    alt: "A slate coaster engraved with two loons and the name Farm Island Lake",
    caption: "Slate coaster. Two loons on Farm Island Lake.",
  },
  {
    name: "cabin and loon slate coaster",
    src: "/img/cabin-loon-slate-coaster-img_5407.webp",
    w: 230,
    h: 120,
    alt: "A slate coaster engraved with a cabin, a dock and a loon",
    caption: "Slate coaster. A cabin, a dock and a loon.",
  },
  {
    name: "owl slate coaster",
    src: "/img/owl-portrait-slate-coaster-img_5728.webp",
    w: 230,
    h: 160,
    alt: "A slate coaster engraved with an owl",
    caption: "Slate coaster. An owl.",
  },
  {
    name: "highland cow slate coaster",
    src: "/img/highland-cow-portrait-slate-coaster-img_5543.webp",
    w: 230,
    h: 175,
    alt: "A slate coaster engraved with a highland cow",
    caption: "Slate coaster. A highland cow.",
  },
  {
    name: "cardinal slate coaster",
    src: "/img/cardinal-slate-coaster-img_5434.webp",
    w: 230,
    h: 190,
    alt: "A pale slate coaster engraved with a cardinal on a branch",
    caption: "Slate coaster. A cardinal on the branch.",
  },
  {
    name: "eagle slate coaster",
    src: "/img/eagle-over-lake-slate-coaster-img_5455.webp",
    w: 230,
    h: 175,
    alt: "A slate coaster engraved with an eagle in flight over a lake",
    caption: "Slate coaster. An eagle over the lake.",
  },
  {
    name: "Mount Rushmore slate coaster",
    src: "/img/mount-rushmore-eagle-slate-coaster-img_5444.webp",
    w: 230,
    h: 225,
    alt: "A slate coaster engraved with Mount Rushmore, an eagle and the flag",
    caption: "Slate coaster. Mount Rushmore and an eagle.",
  },
  {
    name: "North Shore bear slate coaster",
    src: "/img/north-shore-live-wild-bear-cabin-slate-coaster-img_5625.webp",
    w: 230,
    h: 225,
    alt: "A slate coaster engraved “North Shore: live wild, breathe deep” with a bear at a cabin",
    caption: "Slate coaster. North Shore, live wild.",
  },
  {
    name: "Bigfoot slate coaster",
    src: "/img/bigfoot-believes-in-me-slate-coaster-img_5637.webp",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved “I don’t believe in humans but they believe in me” with Bigfoot",
    caption: "Slate coaster, engraved. Bigfoot has his doubts about us.",
  },
  {
    name: "Bigfoot’s North Shore tips slate coaster",
    src: "/img/north-shore-bigfoots-tips-slate-coaster-img_5640.webp",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved with Bigfoot’s tips for the North Shore",
    caption: "Slate coaster, engraved. Bigfoot’s tips for the North Shore.",
  },
  {
    name: "moose scenery slate coaster",
    src: "/img/i-came-for-the-scenery-moose-slate-coaster-img_5641.webp",
    w: 380,
    h: 240,
    alt: "A slate coaster engraved “I came for the scenery, I stayed because you people are hard to find” with a moose",
    caption: "Slate coaster, engraved. A moose who came for the scenery.",
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
