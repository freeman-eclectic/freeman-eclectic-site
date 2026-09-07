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
  { src: "/img/board-loon-walnut.jpg", w: 300, h: 226, l: 2.5, t: 3.85, rot: -2.4, z: 1,
    alt: "A turned walnut cribbage board with a loon carved in the well, on a display stand",
    caption: "Turned from a single hardwood blank." },
  { src: "/img/board-tall-ship.jpg", w: 256, h: 290, l: 75.83, t: 5, rot: 2.2, z: 1,
    minor: true,
    alt: "A cherry cribbage board with a full-rigged sailing ship carved in high relief" },
  { src: "/img/coaster-loons-mug.jpg", w: 240, h: 172, l: 4.17, t: 59.62, rot: 1.9, z: 1,
    alt: "An engraved slate coaster beside a stoneware mug, pine sprigs and pinecones",
    caption: "Slate, engraved. The joke is optional; the coffee ring is not." },
  { src: "/img/board-lift-bridge.jpg", w: 270, h: 156, l: 74.72, t: 65.38, rot: -2.1, z: 2,
    alt: "A pale ash cribbage board engraved with the Duluth aerial lift bridge",
    caption: "The Duluth lift bridge, in pale ash." },
];

export const pairingPrints: PrintSpec[] = [
  { src: "/img/board-on-machine.jpg", w: 280, h: 252, l: 76.11, t: 6.98, rot: 2.4, z: 1,
    alt: "A pale ash board with a carved rose still sitting on the machine bed",
    caption: "Still on the bed, before the sanding starts." },
  { src: "/img/cnc-screen.jpg", w: 250, h: 162, l: 77.08, t: 45.12, rot: -2.2, z: 1,
    alt: "A controller screen showing a toolpath for a carved design",
    caption: "A toolpath, drawn and checked before anything is cut." },
  { src: "/img/cutting-stock.jpg", w: 300, h: 190, l: 6.94, t: 74.42, rot: -1.9, z: 1,
    alt: "Cut hardwood stock stacked beside a saw",
    caption: "Hardwood stock, cut and stacked to dry." },
  { src: "/img/hand-tools.jpg", w: 300, h: 180, l: 32.64, t: 75.81, rot: 1.6, z: 2,
    alt: "Carving chisels laid across a pale workbench in daylight",
    caption: "Chisels, for the work a machine will not do." },
  { src: "/img/board-loon-dark.jpg", w: 240, h: 196, l: 58.33, t: 73.95, rot: -1.5, z: 1,
    alt: "A finished turned walnut cribbage board with a carved loon, against a dark grey wall",
    caption: "Sanded, fitted and finished by hand." },
];

export const materialsPrints: PrintSpec[] = [
  { src: "/img/wood-grain.jpg", w: 140, h: 300, l: 86.39, t: 4.07, rot: -2.3, z: 1,
    minor: true,
    alt: "Close ash grain in pale honey tones" },
  { src: "/img/glass-dish.jpg", w: 230, h: 170, l: 6.67, t: 63.7, rot: 1.8, z: 1,
    alt: "A glass dish holding a carved wood inset",
    caption: "A carved inset, set into glass." },
  { src: "/img/coaster-two-harbors.jpg", w: 240, h: 178, l: 29.17, t: 64.81, rot: -1.7, z: 1,
    alt: "An engraved slate coaster beside a mug, a plaid blanket and pinecones",
    caption: "Slate coasters, engraved." },
  { src: "/img/medallion-oak.jpg", w: 220, h: 162, l: 52.78, t: 62.96, rot: 2, z: 1,
    alt: "A turned oak medallion with a carved quatrefoil",
    caption: "Turned oak, cut for a quatrefoil." },
  { src: "/img/board-walleye.jpg", w: 250, h: 172, l: 71.53, t: 65.93, rot: -1.4, z: 1,
    alt: "A cherry cribbage board with a leaping walleye carved in relief",
    caption: "Cherry, with the walleye in relief." },
];

export const standardPrints: PrintSpec[] = [
  { src: "/img/board-lighthouse.jpg", w: 230, h: 280, l: 3.06, t: 10, rot: -2.2, z: 1,
    alt: "A pale ash cribbage board with a lighthouse carved in the well",
    caption: "A lighthouse in ash." },
  { src: "/img/farkle-board.jpg", w: 200, h: 125, l: 3.89, t: 71.43, rot: 1.7, z: 1,
    alt: "A cherry Farkle board with the scoring table engraved into the face",
    caption: "The scoring table, engraved." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/lake-shore.jpg", w: 600, h: 350, l: 3.89, t: 4.69, rot: -1.6, z: 1,
    alt: "A rocky North Shore beach lined with pines and open water",
    caption: "The North Shore. The lighthouses and the loons come from here." },
  { src: "/img/forest-lake.jpg", w: 300, h: 186, l: 8.33, t: 68.75, rot: 1.9, z: 2,
    alt: "A still lake ringed by dense green pines in soft morning light",
    caption: "Lake country, an hour or two north." },
  { src: "/img/board-cabin-lake.jpg", w: 260, h: 162, l: 32.64, t: 70, rot: -1.8, z: 2,
    alt: "A walnut cribbage board carved with a cabin and shoreline scene",
    caption: "A cabin and a shoreline, in walnut." },
];

export const closePrints: PrintSpec[] = [
  { src: "/img/cards-table.jpg", w: 250, h: 166, l: 2.78, t: 14.29, rot: -2.1, z: 1,
    alt: "Hands playing cribbage by lamplight at a wooden table",
    caption: "The table the work is made for." },
  { src: "/img/long-pheasant.jpg", w: 230, h: 120, l: 3.61, t: 71.43, rot: 1.6, z: 1,
    minor: true,
    alt: "A long pale maple cribbage board engraved with a flushing pheasant" },
  { src: "/img/scratched-game.jpg", w: 250, h: 180, l: 78.47, t: 9.52, rot: 2.3, z: 1,
    alt: "A pegged wooden game called Scratched, with pegs standing in play",
    caption: "Pegs, a slope, and an afternoon." },
  { src: "/img/long-paddles.jpg", w: 260, h: 120, l: 77.5, t: 71.43, rot: -1.7, z: 1,
    minor: true,
    alt: "A long pale maple cribbage board engraved with crossed canoe paddles and pines" },
];

/** The two halves of "machines get it precise, hands get it right". */
export const PROCESS_SPLIT = [
  {
    label: "What the machines do",
    body:
      "Hold a line, repeat a design across a whole run, and cut a relief deeper and cleaner " +
      "than a blade alone would. They do the patient, exact, unglamorous part, and they do it " +
      "the same way on the tenth piece as on the first.",
  },
  {
    label: "What the hands do",
    body:
      "Read the grain and set the blank so the figure lands where it should. Choose the depth. " +
      "Break the edges, sand through the grits, and stop when the surface is right rather than " +
      "when the clock says so. Then decide the piece is done.",
  },
];

export const HARDWOODS = ["Cherry", "Walnut", "Maple", "Ash"];

/** The four questions a piece has to pass before it joins the line. */
export const STANDARD_TESTS = [
  { n: "01", test: "Useful, meaningful, or memorable", note: "It earns a place on a table, a wall, or a desk." },
  { n: "02", test: "Original, not fad-driven", note: "Still considered in ten years, not dated in two." },
  { n: "03", test: "Matched to the promise", note: "Material, machining, engraving and finish all hold up." },
  { n: "04", test: "Worth the shop's name on it", note: "We would be glad to see it years from now." },
];
