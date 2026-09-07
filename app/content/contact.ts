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
  { src: "/img/cards-table.jpg", w: 268, h: 200, l: 3.06, t: 5.2, rot: -2.4, z: 1,
    alt: "Hands playing cribbage by lamplight at a wooden table",
    caption: "Cribbage, played late." },
  { src: "/img/workshop.jpg", w: 234, h: 286, l: 79.72, t: 6, rot: 2.3, z: 1,
    alt: "A dim rustic shop interior with hand tools on a plank wall",
    caption: "Hand tools on a plank wall." },
];

export const startingPrints: PrintSpec[] = [
  { src: "/img/board-loon-walnut.jpg", w: 290, h: 200, l: 70.14, t: 69.87, rot: 2.2, z: 2,
    alt: "A turned walnut cribbage board with a loon carved in the well, on a stand",
    caption: "Turned, carved and drilled." },
  { src: "/img/coaster-loons-mug.jpg", w: 300, h: 150, l: 6.67, t: 85.26, rot: -1.9, z: 2,
    alt: "An engraved slate coaster beside a stoneware mug, pine sprigs and pinecones",
    caption: "Slate, engraved. Minnesota humour." },
];

export const findUsPrints: PrintSpec[] = [
  { src: "/img/board-lighthouse.jpg", w: 250, h: 290, l: 58.89, t: 6.25, rot: 2.4, z: 1,
    alt: "A pale ash cribbage board with a lighthouse carved in the well",
    caption: "A lighthouse in ash." },
  { src: "/img/hand-tools.jpg", w: 300, h: 160, l: 71.53, t: 62.5, rot: -2.2, z: 1,
    alt: "Carving chisels laid across a pale workbench in daylight",
    caption: "Chisels, for what a machine will not do." },
];

export const placePrints: PrintSpec[] = [
  { src: "/img/lake-shore.jpg", w: 560, h: 330, l: 4.17, t: 6.06, rot: -1.8, z: 1,
    alt: "A rocky North Shore beach lined with pines and open water",
    caption: "The North Shore. The lighthouses and the loons come from here." },
  { src: "/img/fireplace.jpg", w: 320, h: 145, l: 7.36, t: 67.88, rot: 1.7, z: 2,
    alt: "A warm cabin interior with a wood stove and plank walls",
    caption: "Pieces that end up on a mantel." },
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

/** No confirmed handle yet, so this points at Instagram itself rather than a guess. */
export const INSTAGRAM_URL = "https://www.instagram.com/";

/** Both pages are published under the same name. */
export const SOCIAL_HANDLE = "Freeman Eclectic";
