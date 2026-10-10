import type { CSSProperties } from "react";
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
import { EMAIL, pieceMail, plainMail } from "~/lib/mail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Your Table | Freeman Eclectic" },
    {
      name: "description",
      content:
        "Cribbage boards, family games, engraved slate coasters and glassware, and custom decor, made in a small Minnesota shop. Ask about any piece by email.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

const photographsInPageOrder = [
  ...openingPrints,
  ...gamesPrints,
  ...giftsPrints,
  ...PIECES,
  ...personalisationPrints,
  ...askPrints,
];

export default function ForYourTable() {
  return (
    <Bench photographs={photographsInPageOrder}>
      <AshStrip />

      {/* 2 · the opening: "Sit down and play." on ash, prints crowding it */}
      <Band h={BANDS.opening} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={20.83} t={62} w={850} rot={0.5} z={3} className={full}>
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
            <p className="mt-3 flex flex-wrap items-center gap-x-3 text-[15px] text-ink-soft">
              <TextLink href={pieceMail()}>Ask about a piece</TextLink>
              <span className="text-brass" aria-hidden="true">
                &middot;
              </span>
              <a href={plainMail}>{EMAIL}</a>
            </p>
          </AshPlate>
          {openingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3a · board games on ash, kitchen & bar engraved on slate */}
      <Band h={BANDS.games} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={4.44} t={26} w={620} rot={-0.5} z={3} className={full}>
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
              <TextLink href={pieceMail()}>Ask about a game</TextLink>
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
            className={`${full} xl:max-w-[50.5%]`}
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
              <TextLink href={pieceMail()} tone="khaki">
                Ask about a piece
              </TextLink>
            </div>
          </SlatePlate>

          {gamesPrints.map((s) => (
            <Print key={s.src} spec={s} />
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
              <TextLink href={pieceMail()}>Ask about a gift</TextLink>
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
              <TextLink href={pieceMail()} tone="khaki">
                Ask about custom decor
              </TextLink>
            </div>
          </SlatePlate>

          {giftsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/*
        4 · the pieces.
        The one band that is a real grid rather than the drawn scatter: it is a
        repeating list that will grow, so it goes 1 column, 2 at md, 3 at xl, and
        the band is released from its drawn height to flow with the list.
      */}
      <Band h={BANDS.pieces} className="py-12 xl:h-auto! xl:py-16">
        <div className="xl:px-14">
          <AshPlate rot={0.35} z={3} className="xl:static! xl:w-full!">
            <Eyebrow tone="amber" className="mb-4.5">
              The pieces
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.55rem,2.9vw,34px)] font-light italic leading-[1.12] text-ink">
              Pick one out and ask about it.
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.6] text-ink-soft">
              We made every one of these. If something here is close to what you want, ask about
              it and we will tell you what it takes to make one for you.
            </p>
          </AshPlate>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:mt-16 xl:grid-cols-3 xl:gap-10">
            {PIECES.map((piece, i) => (
              <PieceTile key={piece.src} piece={piece} index={i} />
            ))}
          </div>
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
              <Btn href={pieceMail()} variant="ink">
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
      <TextLink href={pieceMail(name)}>Ask about this piece</TextLink>
    </figure>
  );
}
