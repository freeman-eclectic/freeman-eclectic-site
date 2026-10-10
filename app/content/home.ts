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
  { src: "/img/round-sailing-ship-cribbage-board-76513823739.webp", w: 540, h: 352, l: 4.86, t: 5.79, rot: -2.6, z: 1,
    alt: "A round cribbage board with a full-rigged sailing ship carved in relief",
    caption: "A full-rigged ship, left standing in relief." },
  { src: "/img/black-walnut-loon-cribbage-board-img_2837.webp", w: 400, h: 300, l: 65.28, t: 7.93, rot: 2.4, z: 1,
    alt: "A round black walnut cribbage board with a loon carved in the well",
    caption: "A loon in walnut. The carving is cut deep, then finished by hand." },
  { src: "/img/black-walnut-two-fish-cribbage-board-img_2838.webp", w: 380, h: 254, l: 6.67, t: 73.72, rot: 1.8, z: 4,
    alt: "A round black walnut cribbage board with a leaping fish carved in relief",
    caption: "Black walnut, with the fish left standing in relief." },
  { src: "/img/american-flag-hardwood-cutting-board-img_5142.webp", w: 420, h: 212, l: 37.5, t: 77.69, rot: 1.1, z: 2,
    alt: "A striped hardwood cutting board with a small American flag engraved in the corner",
    caption: "A hardwood cutting board, with the flag engraved in the corner." },
  { src: "/img/black-walnut-deer-skull-cribbage-board-img_2836.webp", w: 292, h: 392, l: 72.64, t: 65.29, rot: -2, z: 4,
    minor: true,
    alt: "A round black walnut cribbage board with a deer skull and antlers carved in relief" },
];

export const audiencePrints: PrintSpec[] = [
  { src: "/img/round-duck-and-flag-cribbage-board-img_5227.webp", w: 340, h: 244, l: 61.11, t: 3.88, rot: 2.6, z: 3,
    alt: "A round cribbage board with a duck and a waving flag carved in the well",
    caption: "A duck and a flag, carved into the well." },
  { src: "/img/long-fish-artwork-cribbage-board-img_5141.webp", w: 360, h: 240, l: 10.42, t: 73.79, rot: -1.6, z: 1,
    alt: "A long straight cribbage board with a fish engraved beside the peg track",
    caption: "A long board, with a fish engraved beside the track." },
  { src: "/img/black-walnut-hummingbird-cribbage-board-img_2958.webp", w: 270, h: 180, l: 40.28, t: 67.96, rot: -1.1, z: 3,
    alt: "A round black walnut cribbage board with a hummingbird and a flower carved in the well",
    caption: "A hummingbird in black walnut." },
];

export const pairingPrints: PrintSpec[] = [
  { src: "/img/maple-magnetic-knife-display-board-img_5098.webp", w: 320, h: 166, l: 71.53, t: 1.88, rot: -2.4, z: 2,
    alt: "A maple magnetic knife board holding four kitchen knives",
    caption: "A maple knife board. Magnetic, so the knives stay put." },
  { src: "/img/black-walnut-woodpecker-cribbage-board-img_2943.webp", w: 320, h: 290, l: 71.11, t: 40.62, rot: 2.2, z: 3,
    alt: "A round black walnut cribbage board with a woodpecker on a tree trunk carved in relief",
    caption: "A woodpecker on the trunk, carved in black walnut." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/round-cabin-cribbage-board-img_5143.webp", w: 620, h: 414, l: 4.17, t: 11.54, rot: -1.8, z: 1,
    alt: "A round two-tone cribbage board with a log cabin carved in the well",
    caption: "A log cabin, carved into the well." },
  { src: "/img/round-two-fish-cribbage-board-img_5144.webp", w: 300, h: 200, l: 68.06, t: 66.67, rot: 2.2, z: 3,
    alt: "A round pale hardwood cribbage board with a leaping fish carved in the well",
    caption: "Turned and carved. A fish, leaping." },
  { src: "/img/round-western-mountain-cribbage-board-img_4074.webp", w: 300, h: 200, l: 8.33, t: 74.36, rot: 1.4, z: 2,
    minor: true,
    alt: "A round cribbage board with a western mountain scene carved in relief" },
];

export const quotePrints: PrintSpec[] = [
  { src: "/img/black-walnut-three-pheasant-cribbage-board-img_2835.webp", w: 320, h: 214, l: 6.25, t: 5.56, rot: -2.2, z: 1,
    alt: "A round black walnut cribbage board with three pheasants carved in relief",
    caption: "Three pheasants in black walnut." },
  { src: "/img/personalized-rf-rectangular-cribbage-board-img_5159.webp", w: 270, h: 352, l: 5.28, t: 44.44, rot: 1.6, z: 2,
    alt: "A long straight cribbage board engraved with a monogram",
    caption: "A long board, personalised with a monogram." },
  { src: "/img/lake-superior-sea-arch-slate-coaster-img_5391.webp", w: 178, h: 119, l: 85.14, t: 58.33, rot: -1.6, z: 1,
    minor: true,
    alt: "A slate coaster engraved with a Lake Superior sea arch and rocky shore" },
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
