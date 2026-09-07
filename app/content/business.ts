import type { PrintSpec } from "~/components/Print";

/**
 * For Business, band by band, as drawn on the approved artboard.
 *
 * `l` and `t` are percentages of the band box (artboard pixel / 1440 for x,
 * / the band's drawn height for y) so the scatter scales continuously above
 * the xl breakpoint instead of snapping at one width. See docs/RESPONSIVE.md.
 */

export const BANDS = {
  opening: 580,
  awards: 400,
  appreciation: 500,
  gifts: 390,
  wholesale: 370,
  materials: 570,
  order: 630,
  lead: 150,
  quote: 560,
} as const;

export const openingPrints: PrintSpec[] = [
  { src: "/img/mn-boards-bench.jpg", w: 320, h: 196, l: 3.75, t: 5.17, rot: -2.4, z: 1,
    alt: "Minnesota-shaped cribbage boards drying on a bench with pegs standing in them",
    caption: "Minnesota, cut to shape and drilled for two. A batch, part-way through." },
  { src: "/img/board-loon-dark.jpg", w: 256, h: 280, l: 75.83, t: 5.86, rot: 2.3, z: 1,
    alt: "A turned walnut cribbage board with a carved loon, against a dark grey wall",
    caption: "A loon in walnut, cut deep." },
  { src: "/img/coaster-two-harbors.jpg", w: 240, h: 176, l: 12.22, t: 54.48, rot: 1.9, z: 1,
    alt: "An engraved slate coaster beside a mug, a plaid blanket and pinecones",
    caption: "Slate, engraved. The joke is optional; the coffee ring is not." },
  { src: "/img/board-fish-ash.jpg", w: 250, h: 150, l: 72.92, t: 64.48, rot: -2.1, z: 2,
    alt: "An ash cribbage board with a leaping fish carved in relief",
    caption: "Ash, with the fish left standing." },
];

export const awardsPrints: PrintSpec[] = [
  { src: "/img/board-golf.jpg", w: 290, h: 216, l: 55.28, t: 5.5, rot: 2.5, z: 3,
    alt: "A turned walnut cribbage board with a golf ball on a tee carved in the well",
    caption: "Walnut, turned and carved with a golf ball on a tee. A tournament piece." },
  { src: "/img/medallion-oak.jpg", w: 250, h: 160, l: 78.61, t: 39.5, rot: -2, z: 1,
    alt: "A turned oak medallion with a carved quatrefoil",
    caption: "Turned oak, cut for a quatrefoil." },
];

export const appreciationPrints: PrintSpec[] = [
  { src: "/img/coaster-legendary-north.jpg", w: 270, h: 210, l: 3.89, t: 4.4, rot: -2.2, z: 1,
    alt: "A slate coaster engraved with a lumberjack and an ox, beside a mug of coffee",
    caption: "Minnesota humour on a slate coaster. These leave the booth fastest." },
  { src: "/img/glass-dish.jpg", w: 250, h: 186, l: 29.17, t: 30, rot: 1.8, z: 3,
    alt: "A glass dish holding a carved wood inset",
    caption: "A carved inset, set into glass." },
  { src: "/img/family-sign.jpg", w: 330, h: 124, l: 3.89, t: 63.2, rot: 1.5, z: 2,
    alt: "A personalised oak name board with three coat hooks",
    caption: "A family name and three hooks, by the door." },
];

export const giftsPrints: PrintSpec[] = [
  { src: "/img/board-tall-ship.jpg", w: 280, h: 240, l: 54.86, t: 4.62, rot: 2.3, z: 3,
    alt: "A cherry cribbage board with a full-rigged sailing ship carved in high relief",
    caption: "Cherry, with a full-rigged ship left standing in relief." },
  { src: "/img/board-lift-bridge.jpg", w: 250, h: 172, l: 78.47, t: 38.97, rot: -2.1, z: 1,
    alt: "A pale ash cribbage board engraved with the Duluth aerial lift bridge",
    caption: "The Duluth lift bridge, in ash." },
];

export const wholesalePrints: PrintSpec[] = [
  { src: "/img/long-bridge.jpg", w: 330, h: 176, l: 3.89, t: 8.11, rot: -1.8, z: 1,
    alt: "A long pale maple cribbage board engraved with the Duluth lift bridge",
    caption: "Pale maple, the lift bridge engraved. A long board, drilled for two." },
  { src: "/img/cross-roses.jpg", w: 200, h: 240, l: 29.72, t: 12.97, rot: 1.8, z: 3,
    alt: "A pale carved cross covered in roses, on a grey wall",
    caption: "Roses carved over the whole face of the cross." },
];

export const materialsPrints: PrintSpec[] = [
  { src: "/img/board-on-machine.jpg", w: 280, h: 200, l: 75.97, t: 1.75, rot: -2.3, z: 2,
    alt: "A pale ash board with a carved rose still sitting on the machine bed",
    caption: "Still on the bed, before sanding." },
];

export const orderPrints: PrintSpec[] = [
  { src: "/img/cnc-screen.jpg", w: 230, h: 158, l: 3.06, t: 3.81, rot: -2.2, z: 1,
    alt: "A controller screen showing a toolpath for a carved design",
    caption: "The mockup, once it has become a path the bench can follow." },
  { src: "/img/board-loon-walnut.jpg", w: 240, h: 180, l: 79.17, t: 4.76, rot: 2.3, z: 4,
    alt: "A turned walnut cribbage board with a loon carved in the well, on a stand",
    caption: "Turned, carved and drilled." },
  { src: "/img/long-pheasant.jpg", w: 280, h: 140, l: 2.08, t: 65.87, rot: 1.8, z: 1,
    alt: "A long pale maple cribbage board engraved with a flushing pheasant",
    caption: "A long board in pale maple." },
];

export const quotePrints: PrintSpec[] = [
  { src: "/img/fireplace.jpg", w: 300, h: 178, l: 4.31, t: 4.29, rot: -2.2, z: 1,
    alt: "A warm cabin interior with a wood stove and plank walls",
    caption: "Pieces that end up on a mantel." },
  { src: "/img/board-lighthouse.jpg", w: 250, h: 290, l: 78.47, t: 6.43, rot: 2.3, z: 2,
    alt: "A pale ash cribbage board with a lighthouse carved in the well",
    caption: "A lighthouse in ash." },
  { src: "/img/workshop.jpg", w: 230, h: 210, l: 3.47, t: 48.21, rot: 1.7, z: 2,
    alt: "A dim rustic shop interior with hand tools on a plank wall",
    caption: "Hand tools on a plank wall." },
  { src: "/img/coaster-loons-mug.jpg", w: 230, h: 130, l: 79.86, t: 68.93, rot: -2, z: 1,
    minor: true,
    alt: "An engraved slate coaster beside a stoneware mug, pine sprigs and pinecones" },
];

/** The five columns under the materials strip. */
export const CAPABILITIES = [
  {
    label: "Turning",
    copy: "Round boards and bowls turned from a single hardwood blank on the lathe.",
  },
  {
    label: "Cutting & carving",
    copy: "Hardwoods cut to shape and carved in deep relief. Cherry, walnut, maple, ash.",
  },
  {
    label: "Engraving",
    copy: "On all five materials — wood, slate, glass, metal and acrylic.",
  },
  {
    label: "Personalisation",
    copy: "Names, dates, a mark, and lines of text, added piece by piece.",
  },
  {
    label: "Small-batch runs",
    copy: "Ten pieces or a few hundred, made in batches as the bench allows.",
  },
];

/** How an order goes, numbered, with what happens at each step. */
export const ORDER_STEPS = [
  { n: "01", name: "Tell us", copy: "What it is for, how many, and when you need it." },
  { n: "02", name: "Mockup", copy: "We draw it up and send a proof, with the material named." },
  { n: "03", name: "Approve", copy: "You confirm the art, the wording, and the count." },
  { n: "04", name: "Make", copy: "Turned, cut, carved, engraved, then sanded and finished by hand." },
  { n: "05", name: "Ship", copy: "Packed and sent, with tracking. We ship nationwide." },
];

/** The three answers the quote email asks for. */
export const QUOTE_ASKS = [
  { label: "What it is for", copy: "An award, a gift, a run." },
  { label: "How many", copy: "A count, or a range." },
  { label: "When", copy: "The date you need it." },
];
