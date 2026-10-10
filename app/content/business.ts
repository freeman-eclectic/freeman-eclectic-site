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
  { src: "/img/callender-remax-bottle-opener-img_5569.webp", w: 320, h: 196, l: 3.75, t: 5.17, rot: -2.4, z: 1,
    alt: "A black metal bottle opener engraved with a RE/MAX agent’s team name and contact details",
    caption: "A bottle opener for a RE/MAX team, engraved in metal." },
  { src: "/img/round-barn-trading-company-stemless-glass-img_5325.webp", w: 256, h: 280, l: 75.83, t: 5.86, rot: 2.3, z: 1,
    alt: "A stemless glass engraved with the Round Barn Trading Company mark",
    caption: "Round Barn Trading Company’s mark, engraved on a stemless glass." },
  { src: "/img/anderson-hometown-team-cutting-board-img_5339.webp", w: 240, h: 176, l: 12.22, t: 54.48, rot: 1.9, z: 1,
    alt: "A hardwood cutting board with the Anderson Home Teams and RE/MAX marks engraved in the corner",
    caption: "A cutting board for Anderson Home Teams, their mark in the corner." },
  { src: "/img/all-saints-lock-and-key-keychain-img_5655.webp", w: 250, h: 150, l: 72.92, t: 64.48, rot: -2.1, z: 2,
    alt: "A wooden keychain engraved with the All Saints Lock and Key logo and phone number",
    caption: "A wooden keychain, engraved with the shop’s logo and number." },
];

export const awardsPrints: PrintSpec[] = [
  { src: "/img/black-walnut-golfer-cribbage-board-img_2944.webp", w: 290, h: 216, l: 55.28, t: 5.5, rot: 2.5, z: 3,
    alt: "A round black walnut cribbage board with a golfer mid-swing carved in relief",
    caption: "Black walnut, carved with a golfer mid-swing. A tournament piece." },
  { src: "/img/round-barn-trading-co-slate-coaster-img_5324.webp", w: 250, h: 160, l: 78.61, t: 39.5, rot: -2, z: 1,
    alt: "A slate coaster engraved with the Round Barn Trading Co. barn and name",
    caption: "Round Barn Trading Co., engraved in slate." },
];

export const appreciationPrints: PrintSpec[] = [
  { src: "/img/legendary-north-lumberjack-longhorn-slate-coaster-img_5649.webp", w: 270, h: 210, l: 3.89, t: 4.4, rot: -2.2, z: 1,
    alt: "A slate coaster engraved “Welcome to the Legendary North” with a lumberjack and an ox",
    caption: "Minnesota humour on a slate coaster. These leave the booth fastest." },
  { src: "/img/heroes-helping-heroes-rocks-glass-img_5110.webp", w: 250, h: 186, l: 29.17, t: 30, rot: 1.8, z: 3,
    alt: "A rocks glass engraved “Heroes Helping Heroes” with a vertical American flag",
    caption: "A rocks glass for Heroes Helping Heroes, the flag engraved down the side." },
  { src: "/img/aerial-lift-bridge-ship-slate-coaster-img_5433.webp", w: 330, h: 124, l: 3.89, t: 63.2, rot: 1.5, z: 2,
    alt: "A slate coaster engraved with a boat under the Duluth aerial lift bridge",
    caption: "A boat under the lift bridge, engraved in slate." },
];

export const giftsPrints: PrintSpec[] = [
  { src: "/img/1776-liberty-bell-rocks-glass-img_5290.webp", w: 280, h: 240, l: 54.86, t: 4.62, rot: 2.3, z: 3,
    alt: "A rocks glass engraved with the Liberty Bell and 1776",
    caption: "The Liberty Bell and 1776, engraved on a rocks glass." },
  { src: "/img/aerial-lift-bridge-tall-ship-slate-coaster-img_5488.webp", w: 250, h: 172, l: 78.47, t: 38.97, rot: -2.1, z: 1,
    alt: "A slate coaster engraved with a tall ship passing under the Duluth aerial lift bridge",
    caption: "The Duluth lift bridge, engraved in slate." },
];

export const wholesalePrints: PrintSpec[] = [
  { src: "/img/back-on-the-north-shore-slate-coaster-img_5639.webp", w: 330, h: 176, l: 3.89, t: 8.11, rot: -1.8, z: 1,
    alt: "A slate coaster engraved “Back on the North Shore, where my wifi is weak but my soul is strong” with an Adirondack chair and a loon",
    caption: "“Back on the North Shore.” Slate, engraved." },
  { src: "/img/five-personalized-monogram-slate-coasters-img_5653.webp", w: 200, h: 240, l: 29.72, t: 12.97, rot: 1.8, z: 3,
    alt: "A set of five slate coasters, each engraved with its own initial and surname",
    caption: "Five coasters, five initials, five names. One order, personalised piece by piece." },
];

export const materialsPrints: PrintSpec[] = [
  { src: "/img/up-north-is-my-happy-place-glass-mug-img_5609.webp", w: 280, h: 200, l: 75.97, t: 1.75, rot: -2.3, z: 2,
    alt: "A glass mug engraved “Up north is my happy place”",
    caption: "“Up north is my happy place”, engraved on a glass mug." },
];

export const orderPrints: PrintSpec[] = [
  { src: "/img/bald-eagle-and-american-flag-slate-coaster-img_0125.webp", w: 230, h: 158, l: 3.06, t: 3.81, rot: -2.2, z: 1,
    alt: "A slate coaster engraved with a bald eagle over the American flag",
    caption: "A bald eagle over the flag, engraved in slate." },
  { src: "/img/up-north-and-unplugged-glass-mug-img_5610.webp", w: 240, h: 180, l: 79.17, t: 4.76, rot: 2.3, z: 4,
    alt: "A glass mug engraved “Up north and unplugged”",
    caption: "“Up north and unplugged”, engraved on a glass mug." },
  { src: "/img/celebrating-americas-250th-rocks-glass-img_0138.webp", w: 280, h: 140, l: 2.08, t: 65.87, rot: 1.8, z: 1,
    alt: "A rocks glass engraved with a seal celebrating America’s 250th anniversary",
    caption: "A rocks glass, engraved for America’s 250th." },
];

export const quotePrints: PrintSpec[] = [
  { src: "/img/bourbon-goes-in-wisdom-comes-out-rocks-glass-img_5292.webp", w: 300, h: 178, l: 4.31, t: 4.29, rot: -2.2, z: 1,
    alt: "A rocks glass engraved “Bourbon goes in, wisdom comes out”",
    caption: "“Bourbon goes in, wisdom comes out.” A rocks glass, engraved." },
  { src: "/img/split-rock-lighthouse-slate-coaster-img_5454.webp", w: 250, h: 290, l: 78.47, t: 6.43, rot: 2.3, z: 2,
    alt: "A slate coaster engraved with Split Rock Lighthouse on its cliff",
    caption: "Split Rock Lighthouse, engraved in slate." },
  { src: "/img/things-get-wild-two-harbors-bigfoot-moose-slate-coaster-img_5617.webp", w: 230, h: 210, l: 3.47, t: 48.21, rot: 1.7, z: 2,
    alt: "A slate coaster engraved “Things get a little wild in Two Harbors”, with Bigfoot riding a moose",
    caption: "Slate, engraved. The joke is optional; the coffee ring is not." },
  { src: "/img/can-t-hear-you-over-the-loons-bigfoot-slate-coaster-img_5638.webp", w: 230, h: 130, l: 79.86, t: 68.93, rot: -2, z: 1,
    minor: true,
    alt: "A slate coaster engraved “Sorry... can’t hear you over the loons”, with Bigfoot lounging by a lake" },
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
