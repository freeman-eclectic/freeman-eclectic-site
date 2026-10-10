import type { PrintSpec } from "~/components/Print";

/**
 * Contact, band by band, as drawn on the approved artboard.
 *
 * `l` and `t` are percentages of the band box (artboard pixel / 1440 for x,
 * / the band's drawn height for y) so the scatter scales continuously above
 * the xl breakpoint instead of snapping at one width. See docs/RESPONSIVE.md.
 */

export const BANDS = {
  opening: 500,
  starting: 780,
  findUs: 640,
  place: 660,
} as const;

export const openingPrints: PrintSpec[] = [
  { src: "/img/wooden-coin-drop-game-set-img_4042.webp", w: 268, h: 200, l: 3.06, t: 5.2, rot: -2.4, z: 1,
    alt: "A wooden coin drop game box with numbered slots and a pile of wooden coins",
    caption: "A coin drop game, cut and numbered." },
  { src: "/img/meet-me-at-the-dock-glass-mug-img_5608.webp", w: 234, h: 286, l: 79.72, t: 6, rot: 2.3, z: 1,
    alt: "A glass mug engraved “Meet me at the dock”",
    caption: "“Meet me at the dock”, engraved on a glass mug." },
];

export const startingPrints: PrintSpec[] = [
  { src: "/img/personalized-rf-rectangular-cribbage-board-img_5159.webp", w: 290, h: 200, l: 70.14, t: 69.87, rot: 2.2, z: 2,
    alt: "A long straight cribbage board engraved with a monogram",
    caption: "A long board, personalised with a monogram." },
  { src: "/img/lake-patio-freighter-slate-coaster-img_5396.webp", w: 300, h: 150, l: 6.67, t: 85.26, rot: -1.9, z: 2,
    alt: "A slate coaster engraved with a porch view of two Adirondack chairs, a lantern, and a freighter on the lake",
    caption: "Two chairs, a lantern, and a freighter going by. Slate, engraved." },
];

export const findUsPrints: PrintSpec[] = [
  { src: "/img/wooden-farkle-scoring-tray-img_4049.webp", w: 250, h: 290, l: 58.89, t: 6.25, rot: 2.4, z: 1,
    alt: "A wooden Farkle tray with the scoring table engraved into the floor",
    caption: "The scoring table, engraved so nobody argues." },
  { src: "/img/angler-on-dock-slate-coaster-img_5317.webp", w: 300, h: 160, l: 71.53, t: 62.5, rot: -2.2, z: 1,
    alt: "A slate coaster engraved with an angler on a dock",
    caption: "An angler on the dock, in slate." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/lake-shoreline-slate-coaster-img_5401.webp", w: 560, h: 330, l: 4.17, t: 6.06, rot: -1.8, z: 1,
    alt: "A slate coaster engraved with a pine shoreline mirrored in a lake",
    caption: "A pine shoreline, mirrored in slate. The North Shore turns up in the work a lot." },
  { src: "/img/heyer-family-live-edge-coat-rack-img_0015.webp", w: 320, h: 145, l: 7.36, t: 67.88, rot: 1.7, z: 2,
    alt: "A live-edge family name board with a carved cross and five coat hooks",
    caption: "A family name and five hooks, by the door." },
];

/** What a pre-filled email already asks for. One row per line the mail helper writes. */
export type TellRow = { label: string; hint: string };

export const BUSINESS_TELL: TellRow[] = [
  { label: "What it is for", hint: "An award, a client gift, a run for the shelf." },
  { label: "How many", hint: "A count, or a range if you are still deciding." },
  { label: "When you need it", hint: "The date it has to be in hand." },
];

export const TABLE_TELL: TellRow[] = [
  { label: "Which piece", hint: "The one you saw, or the idea of it." },
  { label: "When", hint: "The date you would like it by." },
];

export const FACEBOOK_URL = "https://www.facebook.com/p/Freeman-Eclectic-61572489123732/";

export const INSTAGRAM_URL = "https://www.instagram.com/eclecticfreeman/";

/** Both pages are published under the same name. */
export const SOCIAL_HANDLE = "Freeman Eclectic";
