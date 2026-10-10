import type { PrintSpec } from "~/components/Print";

/**
 * About, band by band, as drawn on the approved artboard.
 *
 * `l` and `t` are percentages of the band box (artboard pixel / 1440 for x,
 * / the band's drawn height for y) so the scatter scales continuously above
 * the xl breakpoint instead of snapping at one width. See docs/RESPONSIVE.md.
 */

export const BANDS = {
  opening: 520,
  pairing: 860,
  materials: 540,
  standard: 560,
  place: 640,
  close: 420,
} as const;

export const openingPrints: PrintSpec[] = [
  { src: "/img/round-two-fish-cribbage-board-img_5144.webp", w: 300, h: 226, l: 2.5, t: 3.85, rot: -2.4, z: 1,
    alt: "A round pale hardwood cribbage board with a leaping fish carved in the well",
    caption: "Turned and carved. A fish, leaping." },
  { src: "/img/aerial-lift-bridge-ship-slate-coaster-img_5452.webp", w: 256, h: 290, l: 75.83, t: 5, rot: 2.2, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a ship under the Duluth aerial lift bridge" },
  { src: "/img/coffee-tastes-better-at-the-cabin-glass-mug-img_5611.webp", w: 240, h: 172, l: 4.17, t: 59.62, rot: 1.9, z: 1,
    alt: "A glass mug engraved “Coffee tastes better at the cabin”",
    caption: "“Coffee tastes better at the cabin”, engraved on a glass mug." },
  { src: "/img/historic-lakeside-mansion-slate-coaster-img_5489.webp", w: 270, h: 156, l: 74.72, t: 65.38, rot: -2.1, z: 2,
    alt: "A slate coaster engraved with a historic lakeside mansion",
    caption: "A lakeside mansion, engraved in slate." },
];

export const pairingPrints: PrintSpec[] = [
  { src: "/img/frustration-rummy-scoring-board-set-img_3875.webp", w: 280, h: 252, l: 76.11, t: 6.98, rot: 2.4, z: 1,
    alt: "A wooden Frustration Rummy scoring board with pegs, beside a card of rules",
    caption: "Frustration Rummy. Every contract engraved in order, down the board." },
  { src: "/img/combine-harvester-slate-coaster-img_5423.webp", w: 250, h: 162, l: 77.08, t: 45.12, rot: -2.2, z: 1,
    alt: "A slate coaster engraved with a combine harvesting a field",
    caption: "A combine at harvest, engraved in slate." },
  { src: "/img/sticks-wooden-contract-tile-game-set-img_3877.webp", w: 300, h: 190, l: 6.94, t: 74.42, rot: -1.9, z: 1,
    alt: "The wooden Sticks game: engraved contract tiles, a jar and a rules card",
    caption: "Sticks. Every contract tile cut and engraved." },
  { src: "/img/wooden-playing-card-holder-img_4040.webp", w: 300, h: 180, l: 32.64, t: 75.81, rot: 1.6, z: 2,
    alt: "A wooden playing card holder with a hand of cards standing in it",
    caption: "A card holder, cut to keep a full hand standing." },
  { src: "/img/long-fish-artwork-cribbage-board-img_5141.webp", w: 240, h: 196, l: 58.33, t: 73.95, rot: -1.5, z: 1,
    alt: "A long straight cribbage board with a fish engraved beside the peg track",
    caption: "Sanded, fitted and finished by hand." },
];

export const materialsPrints: PrintSpec[] = [
  { src: "/img/starry-north-shore-slate-coaster-img_5286.webp", w: 140, h: 300, l: 86.39, t: 4.07, rot: -2.3, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a starry sky over the North Shore" },
  { src: "/img/lake-life-is-superior-stemless-glass-img_5344.webp", w: 230, h: 170, l: 6.67, t: 63.7, rot: 1.8, z: 1,
    alt: "A stemless glass engraved “Lake life is Superior”",
    caption: "“Lake life is Superior”, engraved on a stemless glass." },
  { src: "/img/crossed-paddles-compass-rocks-glass-img_5293.webp", w: 240, h: 178, l: 29.17, t: 64.81, rot: -1.7, z: 1,
    alt: "A rocks glass engraved with crossed paddles, a compass and pines",
    caption: "Crossed paddles and a compass, engraved in glass." },
  { src: "/img/american-flag-hardwood-cutting-board-img_5142.webp", w: 220, h: 162, l: 52.78, t: 62.96, rot: 2, z: 1,
    alt: "A striped hardwood cutting board with a small American flag engraved in the corner",
    caption: "Striped hardwood, with the flag engraved in the corner." },
  { src: "/img/underwater-fish-slate-coaster-img_5478.webp", w: 250, h: 172, l: 71.53, t: 65.93, rot: -1.4, z: 1,
    alt: "A slate coaster engraved with a fish underwater",
    caption: "A fish underwater, engraved in slate." },
];

export const standardPrints: PrintSpec[] = [
  { src: "/img/black-walnut-golfer-cribbage-board-img_2944.webp", w: 230, h: 280, l: 3.06, t: 10, rot: -2.2, z: 1,
    alt: "A round black walnut cribbage board with a golfer mid-swing carved in relief",
    caption: "Black walnut, carved with a golfer mid-swing." },
  { src: "/img/vintage-tractor-driver-slate-coaster-img_5559.webp", w: 200, h: 125, l: 3.89, t: 71.43, rot: 1.7, z: 1,
    alt: "A slate coaster engraved with a farmer on a vintage tractor",
    caption: "A vintage tractor, in slate." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/aurora-lake-slate-coaster-img_5373.webp", w: 600, h: 350, l: 3.89, t: 4.69, rot: -1.6, z: 1,
    alt: "A slate coaster engraved with the northern lights over a lake",
    caption: "Northern lights over the lake, engraved in slate." },
  { src: "/img/island-lake-slate-coaster-img_5397.webp", w: 300, h: 186, l: 8.33, t: 68.75, rot: 1.9, z: 2,
    alt: "A slate coaster engraved with a pine island on a lake",
    caption: "An island lake, engraved in slate." },
  { src: "/img/cabin-canoe-slate-coaster-img_5406.webp", w: 260, h: 162, l: 32.64, t: 70, rot: -1.8, z: 2,
    alt: "A slate coaster engraved with a cabin, a dock and a canoe",
    caption: "A cabin, a dock and a canoe, in slate." },
];

export const closePrints: PrintSpec[] = [
  { src: "/img/better-to-wake-at-the-lake-glass-mug-img_5607.webp", w: 250, h: 166, l: 2.78, t: 14.29, rot: -2.1, z: 1,
    alt: "A glass mug engraved “It’s better to wake at the lake”",
    caption: "“It’s better to wake at the lake”, on a glass mug." },
  { src: "/img/lone-lake-dock-slate-coaster-img_5502.webp", w: 230, h: 120, l: 3.61, t: 71.43, rot: 1.6, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a dock and the name Lone Lake" },
  { src: "/img/round-wooden-marble-game-board-img_4051.webp", w: 250, h: 180, l: 78.47, t: 9.52, rot: 2.3, z: 1,
    alt: "A round wooden marble game board with colored marbles and a die",
    caption: "Marbles, a round board, and an afternoon." },
  { src: "/img/foggy-dock-slate-coaster-img_5372.webp", w: 260, h: 120, l: 77.5, t: 71.43, rot: -1.7, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a dock in the fog" },
];

/** The two halves of "machines get it precise, hands get it right". */
export const PROCESS_SPLIT = [
  {
    label: "What the machines do",
    body:
      "Hold a line, repeat a design across a whole order, and cut a relief deeper and cleaner " +
      "than a hand chisel would. They do the exact, repetitive part, the same way on the " +
      "last piece as on the first.",
  },
  {
    label: "What the hands do",
    body:
      "Read the grain and set the blank so the figure lands where it should. Choose the depth. " +
      "Break the edges, sand through the grits, and stop when the surface feels right, " +
      "however long that takes.",
  },
];

export const HARDWOODS = ["Cherry", "Walnut", "Maple"];

/** The four questions a piece has to pass before it joins the line. */
export const STANDARD_TESTS = [
  { n: "01", test: "Useful or memorable", note: "Someone will use it, play it, or hang it up." },
  { n: "02", test: "Our own design", note: "It will still look good after the trend has passed." },
  { n: "03", test: "Worth the price", note: "The material, carving, engraving, and finish all hold up." },
  { n: "04", test: "Worth our name", note: "We would be glad to see it on a shelf years from now." },
];
