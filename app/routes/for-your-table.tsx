import { useState, type CSSProperties } from "react";
import type { Route } from "./+types/for-your-table";
import { AshStrip } from "~/components/AshStrip";
import { Band, Bench } from "~/components/Bench";
import { Footer } from "~/components/Footer";
import { AshPlate, Btn, Eyebrow, SlatePlate } from "~/components/Plate";
import { TextLink } from "~/components/Bits";
import { FACEBOOK_URL, INSTAGRAM_URL } from "~/content/contact";
import { GalleryPhotograph } from "~/components/Lightbox";
import { Print } from "~/components/Print";
import {
  ASK_FIELDS,
  BANDS,
  PIECES,
  askPrints,
  gamesPrints,
  giftsPrints,
  openingPrints,
  personalisationPrints,
  type PieceSpec,
} from "~/content/table";
import { EMAIL, plainMail } from "~/lib/mail";
import { COASTER_CATALOG } from "~/content/coasterCatalog";
import { CONTACT_FORM_URL } from "~/lib/contactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Your Table | Freeman Eclectic" },
    {
      name: "description",
      content:
        "Handcrafted games, slate coasters and $10 credit-card bottle openers, made in Minnesota. Browse our designs and ask about your favorite.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

/** Expandable catalog groups: each new game or coaster design belongs in one shelf. */
const GAME_TYPES = [
  {
    name: "Cribbage boards",
    description: "A Freeman Eclectic signature piece: detailed carved boards in a variety of hardwood designs.",
    hero: "/img/black-walnut-loon-cribbage-board-img_2837.webp",
    pieces: PIECES.filter((piece) => /cribbage board/i.test(piece.name)),
  },
  {
    name: "Carbles / Wahoo",
    description: "Wooden marble games made for gathering around the table.",
    hero: "/img/round-wooden-marble-game-board-img_4051.webp",
    pieces: [
      { name: "Carbles / Wahoo game board", src: "/img/round-wooden-marble-game-board-img_4051.webp", w: 230, h: 190, alt: "Round wooden Carbles and Wahoo marble game board", caption: "Carbles / Wahoo. A handmade wooden marble game." },
    ],
  },
  {
    name: "Horse Race Game (Scratch)",
    description: "Compact 10-inch by 6-inch maple Horse Race Game (also called Scratch), with a race track on the front and onboard storage for cards, dice and metal cribbage pegs on the back.",
    hero: "/img/horse-race-scratch-maple-front.webp",
    pieces: [
      { name: "Horse Race Game (Scratch) — Front", src: "/img/horse-race-scratch-maple-front.webp", w: 230, h: 300, alt: "Actual maple Horse Race Game Scratch board showing engraved race lanes, starting gate and finish line on the front", caption: "Actual product photograph. Front: race track and scratched area." },
      { name: "Horse Race Game (Scratch) — Back", src: "/img/horse-race-scratch-maple-back.webp", w: 230, h: 300, alt: "Actual back of the maple Horse Race Game Scratch board with built-in card dice and cribbage peg storage", caption: "Actual product photograph. Back: built-in storage for playing cards, dice and metal pegs." },
    ],
  },
  {
    name: "Farkle",
    description: "Wooden Farkle scoring trays with the rules and scoring right on the board.",
    hero: "/img/wooden-farkle-scoring-tray-img_4049.webp",
    pieces: [
      { name: "Farkle scoring tray", src: "/img/wooden-farkle-scoring-tray-img_4049.webp", w: 230, h: 190, alt: "Handcrafted engraved wooden Farkle scoring board", caption: "Farkle. Engraved wooden scoring tray." },
    ],
  },
  {
    name: "Sticks",
    description: "Our handcrafted wooden contract tile game.",
    hero: "/img/sticks-wooden-contract-tile-game-set-img_3877.webp",
    pieces: PIECES.filter((piece) => piece.name === "Sticks game"),
  },
  {
    name: "Frustration Rummy",
    description: "Wooden scoring boards made for card-night competition.",
    hero: "/img/frustration-rummy-scoring-board-set-img_3875.webp",
    pieces: [
      { name: "Frustration Rummy scoring boards", src: "/img/frustration-rummy-scoring-board-set-img_3875.webp", w: 230, h: 190, alt: "Wooden Frustration Rummy scoring board set", caption: "Frustration Rummy. Wooden scoring boards." },
    ],
  },
  {
    name: "Other games",
    description: "Coin Drop, Mancala, road-trip favorites and new games.",
    hero: "/img/wooden-coin-drop-game-set-img_4042.webp",
    pieces: [
      { name: "Coin Drop", src: "/img/wooden-coin-drop-game-set-img_4042.webp", w: 230, h: 190, alt: "Wooden Coin Drop game", caption: "Coin Drop. A handcrafted tabletop game." },
      ...PIECES.filter((piece) => /dots and boxes|Road Trip Find/i.test(piece.name)),
      { name: "Chinese Checkers", src: "/img/round-wooden-chinese-checkers-board-img_4046.webp", w: 230, h: 190, alt: "Round wooden Chinese Checkers board with marbles", caption: "Chinese Checkers. Round wooden game board." },
    ],
  },
] satisfies { name: string; description: string; hero: string | null; pieces: PieceSpec[] }[];

const COASTER_THEMES = [
  "North Shore & landmarks",
  "Lakes & cabins",
  "Wildlife & outdoors",
  "Coffee & humor",
  "Patriotic & Americana",
  "Personalized & local",
  "Fantasy & Gaming",
  "Wine",
  "Pets",
  "Reading",
  "Other coaster designs",
] as const;

const gamePieces = PIECES.filter((piece) => !/coaster/i.test(piece.name));
/** Each catalog entry has the exact PNG basename customers should ask for. */
const coasterShelves = COASTER_THEMES.map((name) => ({
  name,
  pieces: COASTER_CATALOG.filter((piece) => piece.theme === name),
}));

/** Names match the engraving PNG files received November 16, 2026. */
const BOTTLE_OPENER_COLLECTIONS = [
  { name: "Wildlife & Northwoods", designs: ["BOTTLE OPENER BALD EAGLE","BOTTLE OPENER BLACK LAB","BOTTLE OPENER DEER","BOTTLE OPENER DEER 2","BOTTLE OPENER LOON AND CHICK","BOTTLE OPENER MOOSE","BOTTLE OPENER PHEASANT","BOTTLE OPENER PHEASANT HUNTING"] },
  { name: "Hunting & Fishing", designs: ["BOTTLE OPENER BOAT FISHING","BOTTLE OPENER BOW HUNTER","BOTTLE OPENER DOCK FISHING","BOTTLE OPENER DUCK HUNTER","BOTTLE OPENER ICE FISHING","BOTTLE OPENER ICE HOUSE","BOTTLE OPENER PHEASANT HUNTING 2","BOTTLE OPENER SLEEPING DEER HUNTER","BOTTLE OPENER WALLEYE IN MOONLIGHT","BOTTLE OPENER WALLEYE ON LURE","BOTTLE OPENER WALLEYE UNDER THE SURFACE"] },
  { name: "North Shore & Landmarks", designs: ["BOTTLE OPENER DULUTH LIFT BRIDGE","BOTTLE OPENER FISHING CHARTER LEAVING DULUTH HARBOR","BOTTLE OPENER GOOSE BERRY FALLS","BOTTLE OPENER GRAND MARAIS LIGHT HOUSE","BOTTLE OPENER ICY NORTH SHORE","BOTTLE OPENER ORE SHIP LEAVING DULUTH HARBOR","BOTTLE OPENER ORE SHIP","BOTTLE OPENER PALISADE HEAD","BOTTLE OPENER SHOVEL POINT","BOTTLE OPENER SPLIT ROCK","BOTTLE OPENER TWO HARBORS LIGHT HOUSE"] },
  { name: "Cabin & Outdoor Adventures", designs: ["BOTTLE OPENER BOUNDARY WATERS CANOEIST","BOTTLE OPENER CANOE AND NORTHERN LIGHTS","BOTTLE OPENER MINNESOTA ROOTS","BOTTLE OPENER PORTAGE","BOTTLE OPENER SNOW MOBILE"] },
] as const;

const customPetPhotograph = {
  src: "/img/owl-portrait-slate-coaster-img_5728.webp",
  alt: "A custom slate coaster engraved from a customer's photograph of a favorite pigeon",
  w: 230,
  h: 160,
};

const photographsInPageOrder = [
  ...openingPrints,
  ...gamesPrints,
  ...giftsPrints,
  ...PIECES,
  customPetPhotograph,
  ...personalisationPrints,
  ...askPrints,
];

export default function ForYourTable() {
  const [selectedCoasterTheme, setSelectedCoasterTheme] = useState<string>(coasterShelves[0]?.name ?? "Other coaster designs");
  const [selectedGameType, setSelectedGameType] = useState<string>("Cribbage boards");
  return (
    <Bench photographs={photographsInPageOrder}>
      <AshStrip />

      {/* 2 · the opening: "Sit down and play." on ash, prints crowding it */}
      <Band h={BANDS.opening} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <AshPlate l={20.83} t={62} w={850} rot={0.5} z={3} className="md:col-span-2 xl:static! xl:col-span-4 xl:w-full! xl:rotate-0! xl:px-12 xl:py-9">
            <Eyebrow tone="amber" className="mb-5">
              For your table
            </Eyebrow>
            <h1 className="m-0 font-serif text-[clamp(1.9rem,4.4vw,54px)] font-light italic leading-[1.08] text-ink text-pretty">
              Sit down and play.
            </h1>
            <p className="mt-[22px] max-w-[680px] text-[17.5px] leading-[1.6] text-ink-soft">
              You teach a kid cribbage on a Saturday and argue over the score for years. We build
              games for that: cribbage, Farkle, Wahoo, Mancala, Coin Drop, the horse racing game,
              and the License Plate Hunt for the drive up north.
            </p>
            <nav aria-label="Explore handmade collections" className="mt-5 flex flex-wrap gap-3">
              <a href="#table-games" className="border border-ink px-4 py-2 text-sm font-semibold text-ink hover:bg-ground">Games</a>
              <a href="#table-coasters" className="border border-ink px-4 py-2 text-sm font-semibold text-ink hover:bg-ground">Slate coasters</a>
              <a href="#table-bottle-openers" className="border border-amber-deep bg-amber-deep px-4 py-2 text-sm font-semibold text-white hover:bg-amber">Scenic bottle openers</a>
            </nav>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 text-[15px] text-ink-soft">
              <TextLink href={CONTACT_FORM_URL}>Ask about a piece</TextLink>
              <span className="text-brass" aria-hidden="true">
                &middot;
              </span>
              <a href={plainMail}>{EMAIL}</a>
            </p>
          </AshPlate>
          {openingPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      <Band h={740} className="py-12 xl:h-auto! xl:py-12">
        <div className="xl:px-14">
          {/* Approved cabin-scene opener example plus individual engraving design previews. */}
          <section id="table-bottle-openers" aria-labelledby="bottle-openers-heading" className="mt-20 scroll-mt-20">
            <div className="bg-ground-deep p-7 text-ink md:p-10">
              <Eyebrow tone="amber" className="mb-3">For your table</Eyebrow>
              <h2 id="bottle-openers-heading" className="font-serif text-[clamp(1.6rem,3vw,36px)] font-light italic">
                Credit-card bottle openers
              </h2>
              <div className="mt-6 grid grid-cols-1 items-center gap-7 md:grid-cols-2">
                <figure className="m-0 bg-ground p-3 shadow-print">
                  <img
                    src="/img/bottle-opener-deer.webp"
                    alt="Deer scenic engraving preview on a landscape black stainless-steel credit-card bottle opener in a rustic cabin scene"
                    width={1200}
                    height={900}
                    loading="eager"
                    className="block h-auto w-full"
                  />
                  <figcaption className="pt-3 text-sm italic text-ink-soft">
                    Deer scenic bottle opener design preview. Browse the other available landscapes,
                    wildlife and outdoor designs by theme below.
                  </figcaption>
                </figure>
                <div>
                  <p className="font-serif text-2xl italic leading-snug text-ink">
                    Detailed scenes, engraved across the metal — not an ordinary bottle opener.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    Each $10 opener is a slim black stainless-steel card, carefully engraved with
                    detailed Northwoods wildlife, lakes, landmarks, and outdoor scenes.
                    Browse the named designs by theme below and ask for your favorite.
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">
                    The preview images show each design using its production engraving artwork, presented
                    consistently on the same opener and cabin background. These are digital previews,
                    rather than photographs of individually finished openers.
                  </p>
                </div>
              </div>
              <h3 className="mt-10 font-serif text-2xl italic text-ink">Choose a scenic collection</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                Open only the subject that interests you. All 35 currently listed designs include a scenic preview. Each category can be opened
                individually so you only see the designs that interest you.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
                {BOTTLE_OPENER_COLLECTIONS.map((group) => (
                  <details key={group.name} className="group border border-line bg-ground p-5 open:shadow-print">
                    <summary className="cursor-pointer font-serif text-xl italic marker:text-amber">
                      {group.name} <span className="font-sans text-sm not-italic text-ink-soft">({group.designs.length})</span>
                    </summary>
                    <ul className="mt-5 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
                      {group.designs.map((name) => (
                        <li key={name} className="min-w-0 border border-line bg-ground-deep p-2.5">
                          <img
                            src={`/img/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.webp`}
                            alt={`${name.replace(/^BOTTLE OPENER /, "")} engraved bottle opener design preview in a Northwoods cabin setting`}
                            width={720}
                            height={540}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                          <span className="mt-3 block text-sm font-semibold leading-snug text-ink">{name}</span>
                          <a
                            className="mt-2 inline-block text-sm text-amber-deep underline underline-offset-2"
                            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Bottle opener inquiry: " + name)}`}
                          >
                            Ask about this design
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Band>

      {/* 3a · board games on ash, kitchen & bar engraved on slate */}
      <Band h={BANDS.games} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-6 xl:gap-10">
          <AshPlate l={4.44} t={26} w={620} rot={-0.5} z={3} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:rotate-0! xl:px-9 xl:py-9">
            <Eyebrow tone="amber" className="mb-4">
              Board games
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.5rem,2.6vw,30px)] font-light italic leading-[1.15] text-ink">
              The board comes out after supper.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-ink-soft">
              Cribbage boards for two players or four, so nobody at the table sits out. The round
              ones have the peg holes drilled around the rim and a loon, a cabin, or a ship carved
              in 3D at the center. Farkle trays with the scoring table engraved in, Chinese
              checkers, and snakes and ladders.
            </p>
            <div className="mt-4.5">
              <TextLink href={CONTACT_FORM_URL}>Ask about a game</TextLink>
            </div>
          </AshPlate>

          {/* the only plate drawn far enough right that its 700px would clip
              between 1280 and 1370; capped as a share of the band instead */}
          <SlatePlate
            l={48.89}
            t={296}
            w={700}
            rot={0.5}
            z={4}
            className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-9 xl:py-9"
          >
            <Eyebrow className="mb-4">Kitchen &amp; bar</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.5rem,2.6vw,30px)] font-light leading-[1.15] text-ground">
              Slate, glass, and a coffee ring.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Slate coasters are the first thing to sell out at our craft-show booth. We also
              engrave mugs, rocks glasses, and stemless glasses with a lake scene or a line of
              Minnesota humor, and make hardwood cutting boards that stay out on the counter.
            </p>
            <div className="mt-4.5">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Ask about a piece
              </TextLink>
            </div>
          </SlatePlate>

          {gamesPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:col-span-2 xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 3b · gifts & keepsakes on ash, custom decor engraved on slate */}
      <Band h={BANDS.gifts} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={50} t={22} w={620} rot={0.45} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4">
              Gifts &amp; keepsakes
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.5rem,2.6vw,30px)] font-light italic leading-[1.15] text-ink">
              Something to hand over.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-ink-soft">
              For a wedding, a retirement, or a cabin housewarming. A cribbage board in black
              walnut, or a set of coasters with the name of their lake. Add a name and a date and
              it becomes a keepsake.
            </p>
            <div className="mt-4.5">
              <TextLink href={CONTACT_FORM_URL}>Ask about a gift</TextLink>
            </div>
          </AshPlate>

          <SlatePlate l={4.44} t={274} w={636} rot={-0.45} z={4} className={full}>
            <Eyebrow className="mb-4">Custom decor</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.5rem,2.6vw,30px)] font-light leading-[1.15] text-ground">
              For the wall and the door.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Live-edge family name boards with coat hooks, plaques, and engraved scenes of
              cabins, pines, and lighthouses. Tell us about the room and we will draw something
              for it.
            </p>
            <div className="mt-4.5">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Ask about custom decor
              </TextLink>
            </div>
          </SlatePlate>

          {giftsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* The collection is organized by product family, then by type or theme. */}
      <Band h={BANDS.pieces} className="py-12 xl:h-auto! xl:py-16">
        <div className="xl:px-14">
          <AshPlate rot={0.35} z={3} className="xl:static! xl:w-full!">
            <Eyebrow tone="amber" className="mb-4.5">For your table · the collection</Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.55rem,2.9vw,34px)] font-light italic leading-[1.12] text-ink">
              Games and coasters, made to be used.
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.6] text-ink-soft">
              Browse the games by type and the slate coasters by theme. See a design you like?
              Tell us its name when you inquire. We make each piece in our Minnesota shop.
            </p>
            <nav aria-label="Browse For Your Table" className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a href="#table-games" className="font-semibold">Browse games</a>
              <a href="#table-coasters" className="font-semibold">Browse coasters</a>
              <a href="#table-bottle-openers" className="font-semibold">Browse bottle openers</a>
            </nav>
          </AshPlate>

          <section id="table-games" aria-labelledby="table-games-heading" className="mt-14 scroll-mt-20">
            <h2 id="table-games-heading" className="font-serif text-3xl italic text-ground">Games</h2>
            <p className="mt-2 max-w-2xl text-cream-dim">
              Choose your favorite tabletop game. More designs will join these collections as we make them.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {GAME_TYPES.map((game) => (
                <button
                  key={game.name}
                  type="button"
                  aria-pressed={selectedGameType === game.name}
                  onClick={() => setSelectedGameType(game.name)}
                  className={`overflow-hidden border bg-ground text-left text-ink shadow-print transition-colors hover:border-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${selectedGameType === game.name ? "border-amber ring-2 ring-amber" : "border-line"}`}
                >
                  {game.hero ? (
                    <img src={game.hero} alt={`Example of Freeman Eclectic ${game.name}`} width={700} height={480} loading="lazy" className="block aspect-[4/3] w-full object-contain bg-ground-deep" />
                  ) : (
                    <span className="flex aspect-[4/3] w-full items-center justify-center bg-ground-deep px-5 text-center text-sm italic text-cream-dim">Photograph of our newer maple and cribbage-peg board coming soon</span>
                  )}
                  <span className="block p-5">
                    <span className="block font-serif text-xl">{game.name}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-soft">{game.description}</span>
                    <span className="mt-3 block text-sm font-semibold text-amber-deep">{game.pieces.length > 0 ? `See ${game.pieces.length} ${game.pieces.length === 1 ? "example" : "examples"}` : "Finished product photograph coming soon"}</span>
                  </span>
                </button>
              ))}
            </div>
            {GAME_TYPES.filter((game) => game.name === selectedGameType).map((game) => (
              <section key={game.name} id="selected-game-type" aria-label={`${game.name} product photographs`} className="mt-12 scroll-mt-20">
                <h3 className="font-serif text-2xl italic text-ground">{game.name} — photographs</h3>
                <p className="mt-2 max-w-2xl text-sm text-cream-dim">
                  Browse the examples below. Product photographs show completed work; any concept preview is explicitly labeled. Select an image to view it larger.
                </p>
                {game.pieces.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10">
                    {game.pieces.map((piece, i) => <PieceTile key={piece.src} piece={piece} index={i} />)}
                  </div>
                ) : (
                  <p className="mt-6 border border-line/40 bg-slate-plate p-6 text-cream-dim">
                    More photographs of our handmade games will be added as new designs become available.
                  </p>
                )}
              </section>
            ))}
          </section>

          <section id="table-coasters" aria-labelledby="table-coasters-heading" className="mt-20 scroll-mt-20">
            <h2 id="table-coasters-heading" className="font-serif text-3xl italic text-ground">Slate coasters</h2>
            <p className="mt-2 max-w-2xl text-cream-dim">
              Find a design by theme. Every coaster has its own name so you can request the exact design.
            </p>
            <p className="mt-3 text-sm text-cream-dim">
              Select a theme to view just those coasters. You can switch themes at any time.
            </p>
            <nav aria-label="Choose a coaster theme" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {coasterShelves.map((shelf) => (
                <button
                  key={shelf.name}
                  type="button"
                  aria-pressed={selectedCoasterTheme === shelf.name}
                  onClick={() => setSelectedCoasterTheme(shelf.name)}
                  className={`border px-5 py-4 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${selectedCoasterTheme === shelf.name ? "border-amber bg-ground text-ink" : "border-line/40 bg-slate-plate text-ground hover:border-khaki hover:bg-ground hover:text-ink"}`}
                >
                  {shelf.pieces[0] ? (
                    <img src={shelf.pieces[0].src} alt={shelf.pieces[0].caption?.includes("production artwork preview") ? `Production engraving artwork preview for ${shelf.name}` : `Finished slate coaster example in ${shelf.name}`} width={700} height={480} loading="lazy" className="mb-3 block aspect-[4/3] w-full object-contain bg-ground-deep" />
                  ) : (
                    <span className="mb-3 flex aspect-[4/3] w-full items-center justify-center bg-ground-deep px-3 text-center text-xs font-normal italic text-cream-dim">Coaster photograph coming soon</span>
                  )}
                  <span className="block">{shelf.name}</span>
                  <span className={`mt-1 block text-xs font-normal ${selectedCoasterTheme === shelf.name ? "text-ink-soft" : "text-cream-dim"}`}>
                    {shelf.pieces.length > 0 ? `${shelf.pieces.length} ${shelf.pieces.length === 1 ? "design" : "designs"}` : "More designs coming soon"}
                  </span>
                </button>
              ))}
              <a href="#custom-pet-coasters" className="border border-line/40 bg-slate-plate px-5 py-4 text-left text-sm font-semibold text-ground hover:border-khaki hover:bg-ground hover:text-ink">
                <span className="block">Custom pet portraits</span>
                <span className="mt-1 block text-xs font-normal text-cream-dim">Made from your photo</span>
              </a>
            </nav>
            {coasterShelves.filter((shelf) => shelf.name === selectedCoasterTheme).map((shelf) => (
              <section key={shelf.name} id="selected-coaster-theme" className="mt-10 scroll-mt-20" aria-label={shelf.name}>
                <h3 className="font-serif text-2xl italic text-ground">{shelf.name}</h3>
                {shelf.pieces.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10">
                    {shelf.pieces.map((piece, j) => <PieceTile key={piece.src} piece={piece} index={j} />)}
                  </div>
                ) : (
                  <div className="mt-6 border border-line/40 bg-slate-plate p-6 text-cream-dim">
                    We are adding designs to this collection. <TextLink href={CONTACT_FORM_URL}>Ask about a custom coaster</TextLink>.
                  </div>
                )}
              </section>
            ))}
          </section>

          <section id="custom-pet-coasters" aria-labelledby="custom-pets-heading" className="mt-20 scroll-mt-20">
            <div className="bg-ground-deep p-7 text-ink md:p-10">
              <Eyebrow tone="amber" className="mb-3">Custom photo engraving</Eyebrow>
              <h2 id="custom-pets-heading" className="font-serif text-[clamp(1.6rem,3vw,36px)] font-light italic">
                Your favorite pet, made into a keepsake.
              </h2>
              <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-ink-soft">
                This pigeon coaster was a one-of-a-kind commission, engraved from a customer's
                photograph of a favorite bird. We can also explore a portrait of your own dog,
                cat, or other much-loved pet. Send us a clear photo and we'll discuss what works
                best on slate.
              </p>
              <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <figure className="m-0 bg-ground p-3 shadow-print">
                  <GalleryPhotograph {...customPetPhotograph} />
                  <figcaption className="pt-3 font-serif text-base italic text-ink-soft">
                    Custom pigeon portrait — made from a customer's photo.
                  </figcaption>
                </figure>
                <div className="flex h-full flex-col justify-center gap-4 border border-line p-7">
                  <h3 className="font-serif text-2xl italic text-ink">Have a favorite dog?</h3>
                  <p className="m-0 text-base leading-relaxed text-ink-soft">
                    A favorite photograph can be the starting point for a personal engraved
                    coaster. Each pet portrait is discussed individually, rather than sold
                    as a standard design.
                  </p>
                  <div><TextLink href={CONTACT_FORM_URL}>Ask about a custom pet coaster</TextLink></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Band>

      {/* 5 · personalisation, with the name board as the example */}
      <Band h={BANDS.personalisation} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={4.44} t={22} w={800} rot={-0.4} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4.5">
              Personalisation
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.55rem,2.9vw,34px)] font-light italic leading-[1.12] text-ink">
              Put the name on it.
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.6] text-ink-soft">
              We can engrave a name, a date, or a place on most pieces: along the edge of a long
              cribbage board, across the face of a slate coaster, or down the side of a glass. Send
              the wording and we will send back a mockup before anything is cut.
            </p>
          </AshPlate>
          {personalisationPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 6 · how to ask: there is no cart, by design */}
      <Band h={BANDS.ask} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={23.61} t={24} w={830} rot={0.5} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4.5">
              How to ask
            </Eyebrow>
            <h2 className="m-0 mb-4 font-serif text-[clamp(1.55rem,2.8vw,32px)] font-light leading-[1.14] text-ink">
              Ask, and we will write back.
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-ink-soft">
              There is no checkout on this site. Email us or send a message, and the people who
              make the pieces will answer.
            </p>
            <hr className="mt-[30px] mb-6 h-px border-0 bg-line" />
            <Eyebrow tone="brass" className="mb-3">
              The note asks two things
            </Eyebrow>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-4 md:grid-cols-2">
              {ASK_FIELDS.map(({ label, detail }) => (
                <div key={label} className="py-2">
                  <p className="m-0 text-[15.5px] font-semibold leading-[1.4] text-ink">{label}</p>
                  <p className="m-0 text-sm leading-[1.5] text-ink-soft">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap gap-3.5">
              <Btn href={CONTACT_FORM_URL} variant="ink">
                Ask about a piece
              </Btn>
              <Btn href={plainMail} variant="outline">
                Email us
              </Btn>
            </div>
            <p className="mt-4.5 text-[15px] leading-[1.5] text-ink-soft">
              <a href={plainMail}>{EMAIL}</a>
              <span className="text-brass">&nbsp;&middot;&nbsp;</span>
              Or send us a message on{" "}
              <a href={INSTAGRAM_URL}>Instagram</a> or{" "}
              <a href={FACEBOOK_URL}>Facebook</a>.
            </p>
          </AshPlate>
          {askPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      <Footer />
    </Bench>
  );
}

/** index % 3, so a tile's tilt is stable no matter how the list grows. */
const TILTS = [-1.4, 0.8, -0.5];

/**
 * One piece in the grid: the same print anatomy as the scatter, but filling a
 * grid column instead of being placed by coordinate, plus the quiet ask link.
 */
function PieceTile({ piece, index }: { piece: PieceSpec; index: number }) {
  const { name, src, alt, caption, w, h } = piece;
  return (
    <figure
      style={{ "--rot": `${TILTS[index % TILTS.length]}deg` } as CSSProperties}
      className="m-0 rotate-[var(--rot)] bg-ground p-2.5 shadow-print"
    >
      <GalleryPhotograph src={src} alt={alt} w={w} h={h} />
      <figcaption className="pt-2 font-serif text-[13.5px] italic leading-[1.35] text-ink-soft">
        {caption}
      </figcaption>
      <TextLink href={CONTACT_FORM_URL}>Ask about this piece</TextLink>
    </figure>
  );
}

/**
 * Shape-only illustration, deliberately not a product photograph or a substitute
 * for an exact customer's production engraving. The card's opening is on the right.
 */
function CreditCardOpenerIllustration() {
  return (
    <svg
      viewBox="0 0 560 350"
      role="img"
      aria-label="Illustration of a black credit-card-format bottle opener with an opening on the right"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="credit-card-metal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#34383b" />
          <stop offset="0.55" stopColor="#111417" />
          <stop offset="1" stopColor="#24282a" />
        </linearGradient>
        <mask id="credit-card-cutout">
          <rect width="560" height="350" fill="black" />
          <rect x="30" y="42" width="500" height="266" rx="21" fill="white" />
          <path
            d="M 422 106 C 453 78 497 92 500 118 L 500 228 C 496 250 461 262 431 242
               L 405 220 C 391 207 389 184 404 174 C 416 166 419 156 410 145
               C 397 129 405 118 422 106 Z"
            fill="black"
          />
        </mask>
      </defs>
      <rect x="10" y="20" width="540" height="310" rx="28" fill="#d3c7b4" opacity=".4" />
      <rect width="560" height="350" fill="url(#credit-card-metal)" mask="url(#credit-card-cutout)" />
      <g fill="#dfd7c9" fontFamily="Georgia,serif" textAnchor="middle">
        <text x="214" y="135" fontSize="30" letterSpacing="3">FREEMAN</text>
        <text x="214" y="178" fontSize="32" letterSpacing="2">ECLECTIC</text>
        <text x="214" y="217" fontSize="15" letterSpacing="2">CREDIT-CARD</text>
        <text x="214" y="239" fontSize="15" letterSpacing="2">BOTTLE OPENER</text>
      </g>
      <text x="280" y="342" textAnchor="middle" fontSize="13" fill="#756a5d">
        Format illustration — engraving varies by design
      </text>
    </svg>
  );
}
