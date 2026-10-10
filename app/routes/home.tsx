import type { Route } from "./+types/home";
import { AshStrip } from "~/components/AshStrip";
import { Band, Bench } from "~/components/Bench";
import { Footer } from "~/components/Footer";
import { AshPlate, Btn, Eyebrow, SlatePlate } from "~/components/Plate";
import { CatRow, MaterialsStrip, OrderSteps, TextLink } from "~/components/Bits";
import { Print } from "~/components/Print";
import {
  BANDS,
  BUSINESS_CATEGORIES,
  TABLE_CATEGORIES,
  audiencePrints,
  heroPrints,
  pairingPrints,
  placePrints,
  quotePrints,
} from "~/content/home";
import { EMAIL, pieceMail, plainMail, quoteMail } from "~/lib/mail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeman Eclectic | Crafted to bring people together" },
    {
      name: "description",
      content:
        "Hardwood games, awards, gifts and keepsakes, carved and engraved in a small Minnesota shop and shipped nationwide.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

const photographsInPageOrder = [
  ...heroPrints,
  ...audiencePrints,
  ...pairingPrints,
  ...placePrints,
  ...quotePrints,
];

export default function Home() {
  return (
    <Bench photographs={photographsInPageOrder}>
      <AshStrip />

      {/* 2 · the tagline, on the largest slate plate */}
      <Band h={BANDS.hero} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={20.28} t={330} w={856} rot={-0.5} z={3} className={full}>
            <Eyebrow className="mb-6">Games &middot; Gifts &middot; Custom work</Eyebrow>
            <h1 className="engrave m-0 font-serif text-[clamp(2rem,6.2vw,76px)] font-light leading-[1.04] text-ground text-pretty">
              Crafted to bring{" "}
              <br className="hidden md:inline" />
              people together.
            </h1>
            <p className="mt-7 max-w-[620px] text-[19px] leading-[1.62] text-cream-dim">
              Cribbage boards, family games, engraved slate and glass, and awards with your name
              on them. Made in a small Minnesota shop for the table you gather around.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Btn href={quoteMail} variant="amber">
                Request a quote
              </Btn>
            </div>
            <p className="mt-6 text-[15px] text-cream-dimmer">
              Or write to{" "}
              <a href={plainMail} className="text-tan hover:text-khaki">
                {EMAIL}
              </a>
            </p>
          </SlatePlate>
          {heroPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3 · the two audiences: business on slate and larger, table on ash */}
      <Band h={BANDS.audiences} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={80} w={764} rot={-0.4} z={2} className={full}>
            <Eyebrow className="mb-5">For your business</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.75rem,3.4vw,42px)] font-light leading-[1.12] text-ground">
              Awards, gifts, and wholesale pieces, crafted in Minnesota.
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.6] text-cream-dim">
              Recognition people keep on the desk. We carve and engrave in wood, slate, glass,
              metal, and acrylic, one piece or a full order with every name different.
            </p>
            <div className="mt-7">
              {BUSINESS_CATEGORIES.map((c, i) => (
                <CatRow key={c} tone="slate" last={i === BUSINESS_CATEGORIES.length - 1}>
                  <span>{c}</span>
                </CatRow>
              ))}
            </div>
            <div className="mt-6">
              <TextLink href="/for-business" tone="khaki">
                See business work
              </TextLink>
            </div>
          </SlatePlate>

          <AshPlate l={59.44} t={352} w={520} rot={0.7} z={2} className={full}>
            <Eyebrow tone="amber" className="mb-4">
              For your table
            </Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(1.65rem,3.2vw,40px)] font-light italic leading-[1.1] text-ink">
              Sit down and play.
            </h2>
            <p className="mt-4 text-base leading-[1.6] text-ink-soft">
              Round cribbage boards with 3D carving, plus Farkle, the horse racing game, Wahoo,
              Mancala, Coin Drop, and the License Plate Hunt. Teach one to a kid and you will be
              arguing over the score for years.
            </p>
            <div className="mt-5">
              {TABLE_CATEGORIES.map((c, i) => (
                <CatRow key={c} tone="ash" last={i === TABLE_CATEGORIES.length - 1}>
                  <span>{c}</span>
                </CatRow>
              ))}
            </div>
            <div className="mt-5">
              <TextLink href="/for-your-table">See the games</TextLink>
            </div>
          </AshPlate>

          {audiencePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 4 · the pairing, and the five materials, engraved on one wide plate */}
      <Band h={BANDS.pairing} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={80} w={1312} rot={-0.25} z={1} className={full}>
            <Eyebrow className="mb-5">How the work happens</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.85rem,4.2vw,52px)] font-light leading-[1.12] text-ground">
              Machines get it precise.{" "}
              <br className="hidden md:inline" />
              Hands get it right.
            </h2>
            <p className="mt-6 max-w-[860px] text-lg leading-[1.6] text-cream-dim">
              Modern equipment cuts, carves, and engraves. We sand, fit, and finish by hand, and
              we decide when a piece is done.
            </p>
            <hr className="my-8 h-px border-0 bg-[rgb(246_241_232/0.18)] xl:mt-10 xl:mb-8" />
            <Eyebrow className="mb-4">What we work in</Eyebrow>
            <MaterialsStrip tone="slate" />
          </SlatePlate>
          {pairingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 5 · Minnesota, on a plate beside the lake */}
      <Band h={BANDS.place} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={51.39} t={150} w={636} rot={0.6} z={2} className={full}>
            <Eyebrow className="mb-5">Where it comes from</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.75rem,3.6vw,44px)] font-light leading-[1.14] text-ground">
              Crafted in Minnesota.{" "}
              <br className="hidden md:inline" />
              We ship nationwide.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-cream-dim">
              Everything is made in one small Minnesota shop. Lakes, pines, lighthouses,
              and the Boundary Waters show up in the work because that is the country around us.
            </p>
          </SlatePlate>
          {placePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 6 · request a quote, on ash, with the lead time */}
      <Band h={BANDS.quote} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={29.17} t={90} w={800} rot={0.5} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-5">
              Start here
            </Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(1.8rem,3.8vw,46px)] font-light leading-[1.12] text-ink">
              Tell us what you have in mind.
            </h2>
            <p className="mt-5 text-lg leading-[1.6] text-ink-soft">
              Tell us what it is for, how many, and when you need it. Most orders ship within a few
              weeks, and we will confirm a date with your quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Btn href={quoteMail} variant="ink">
                Request a quote
              </Btn>
              <Btn href={pieceMail()} variant="outline">
                Ask about a piece
              </Btn>
            </div>
            <p className="mt-5 text-[15px] text-ink-soft">
              <a href={plainMail}>{EMAIL}</a>
            </p>
            <hr className="mt-9 mb-6 h-px border-0 bg-line" />
            <Eyebrow tone="brass" className="mb-3.5">
              How an order goes
            </Eyebrow>
            <OrderSteps tone="ash" />
          </AshPlate>
          {quotePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      <Footer />
    </Bench>
  );
}
