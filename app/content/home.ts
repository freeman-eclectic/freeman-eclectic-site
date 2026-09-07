import type { PrintSpec } from "~/components/Print";

/**
 * Home, band by band, as drawn on the approved artboard.
 *
 * `l` and `t` are percentages of the band box (artboard pixel / 1440 for x,
 * / the band's drawn height for y) so the scatter scales continuously above
 * the xl breakpoint instead of snapping at one width. See docs/RESPONSIVE.md.
 */

export const BANDS = {
  hero: 1210,
  audiences: 1030,
  pairing: 640,
  place: 780,
  quote: 720,
} as const;

export const heroPrints: PrintSpec[] = [
  { src: "/img/cards-table.jpg", w: 540, h: 352, l: 4.86, t: 5.79, rot: -2.6, z: 1,
    alt: "Hands playing cribbage by lamplight at a wooden table",
    caption: "Cribbage, played late. This is the table the work is made for." },
  { src: "/img/board-loon-walnut.jpg", w: 400, h: 300, l: 65.28, t: 7.93, rot: 2.4, z: 1,
    alt: "A turned walnut cribbage board with a loon carved in the well",
    caption: "A loon in walnut. The carving is cut deep, then finished by hand." },
  { src: "/img/board-walleye.jpg", w: 380, h: 254, l: 6.67, t: 73.72, rot: 1.8, z: 4,
    alt: "A cherry cribbage board with a leaping walleye carved in relief",
    caption: "Cherry, with the walleye left standing in relief." },
  { src: "/img/long-paddles.jpg", w: 420, h: 212, l: 37.5, t: 77.69, rot: 1.1, z: 2,
    alt: "A long pale maple cribbage board engraved with crossed canoe paddles and pines",
    caption: "A long board in pale maple. Crossed paddles, engraved." },
  { src: "/img/board-lighthouse.jpg", w: 292, h: 392, l: 72.64, t: 65.29, rot: -2, z: 4,
    minor: true,
    alt: "A pale ash cribbage board with a lighthouse carved in the well" },
];

export const audiencePrints: PrintSpec[] = [
  { src: "/img/board-golf.jpg", w: 340, h: 244, l: 61.11, t: 3.88, rot: 2.6, z: 3,
    alt: "A turned walnut cribbage board with a golf ball on a tee carved in the well",
    caption: "Walnut, turned and carved with a golf ball on a tee." },
  { src: "/img/farkle-board.jpg", w: 360, h: 240, l: 10.42, t: 73.79, rot: -1.6, z: 1,
    alt: "A cherry Farkle board with the scoring table engraved into the face",
    caption: "The scoring table, engraved so nobody argues." },
  { src: "/img/coaster-loons-mug.jpg", w: 270, h: 180, l: 40.28, t: 67.96, rot: -1.1, z: 3,
    alt: "An engraved slate coaster beside a stoneware mug, pine sprigs and pinecones",
    caption: "Slate, engraved. Minnesota humour." },
];

export const pairingPrints: PrintSpec[] = [
  { src: "/img/hand-tools.jpg", w: 320, h: 166, l: 71.53, t: 1.88, rot: -2.4, z: 2,
    alt: "Carving chisels laid across a pale workbench in daylight",
    caption: "Chisels, for the work a machine will not do." },
  { src: "/img/board-on-machine.jpg", w: 320, h: 290, l: 71.11, t: 40.62, rot: 2.2, z: 3,
    alt: "A pale ash board with a carved rose still sitting on the machine bed",
    caption: "Still on the bed, before the sanding starts." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/lake-shore.jpg", w: 620, h: 414, l: 4.17, t: 11.54, rot: -1.8, z: 1,
    alt: "A rocky North Shore beach lined with pines and open water",
    caption: "The North Shore. The lighthouses and the loons come from here." },
  { src: "/img/board-cabin-lake.jpg", w: 300, h: 200, l: 68.06, t: 66.67, rot: 2.2, z: 3,
    alt: "A walnut cribbage board carved with a cabin and shoreline scene",
    caption: "A cabin and a shoreline, carved into walnut." },
  { src: "/img/forest-lake.jpg", w: 300, h: 200, l: 8.33, t: 74.36, rot: 1.4, z: 2,
    minor: true,
    alt: "A still lake ringed by dense green pines in soft morning light" },
];

export const quotePrints: PrintSpec[] = [
  { src: "/img/fireplace.jpg", w: 320, h: 214, l: 6.25, t: 5.56, rot: -2.2, z: 1,
    alt: "A warm cabin interior with a wood stove and plank walls",
    caption: "Pieces that end up on a mantel." },
  { src: "/img/workshop.jpg", w: 270, h: 352, l: 5.28, t: 44.44, rot: 1.6, z: 2,
    alt: "A dim rustic shop interior with hand tools on a plank wall",
    caption: "Hand tools on a plank wall." },
  { src: "/img/long-pines.jpg", w: 178, h: 119, l: 85.14, t: 58.33, rot: -1.6, z: 1,
    minor: true,
    alt: "A long pale maple cribbage board engraved with a stand of pines" },
];

export const BUSINESS_CATEGORIES = [
  "Awards & recognition",
  "Client & employee appreciation",
  "Corporate gifts",
  "Wholesale for retailers",
];

export const TABLE_CATEGORIES = [
  "Board games",
  "Kitchen & bar",
  "Gifts & keepsakes",
  "Custom decor",
];
