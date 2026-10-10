import type { Route } from "./+types/for-business";
import { AshStrip } from "~/components/AshStrip";
import { Band, Bench } from "~/components/Bench";
import { Footer } from "~/components/Footer";
import { AshPlate, Btn, Eyebrow, SlatePlate } from "~/components/Plate";
import { CatRow, MaterialsStrip, TextLink } from "~/components/Bits";
import { Print } from "~/components/Print";
import {
  BANDS,
  CAPABILITIES,
  ORDER_STEPS,
  QUOTE_ASKS,
  appreciationPrints,
  awardsPrints,
  giftsPrints,
  materialsPrints,
  openingPrints,
  orderPrints,
  quotePrints,
  wholesalePrints,
} from "~/content/business";
import { EMAIL, plainMail, quoteMail } from "~/lib/mail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Business — Freeman Eclectic" },
    {
      name: "description",
      content:
        "Awards, client and employee gifts, corporate gifts, and wholesale runs, turned, carved and engraved in one small Minnesota shop. A mockup before anything is cut.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

const photographsInPageOrder = [
  ...openingPrints,
  ...awardsPrints,
  ...appreciationPrints,
  ...giftsPrints,
  ...wholesalePrints,
  ...materialsPrints,
  ...orderPrints,
  ...quotePrints,
];

export default function ForBusiness() {
  return (
    <Bench photographs={photographsInPageOrder}>
      <AshStrip />

      {/* 2 · the opening statement, slate plate with prints crowding it */}
      <Band h={BANDS.opening} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={20.28} t={70} w={856} rot={-0.5} z={3} className={full}>
            <Eyebrow className="mb-5">For business</Eyebrow>
            <h1 className="engrave m-0 font-serif text-[clamp(1.75rem,3.4vw,42px)] font-light leading-[1.12] text-ground text-pretty">
              Awards, gifts, and wholesale
              <br className="hidden md:inline" />
              pieces, crafted in Minnesota.
            </h1>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-cream-dim">
              Commissioning means the piece is made for you &mdash; your mark, your words, your
              count. We turn, carve, and engrave in wood, slate, glass, metal, and acrylic, and you
              approve a mockup before anything is cut. Nothing here is picked off a shelf.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm text-cream-dimmer">
              <TextLink href={quoteMail} tone="khaki">
                Request a quote
              </TextLink>
              <span className="text-brass" aria-hidden="true">
                &middot;
              </span>
              <a href={plainMail} className="text-tan hover:text-khaki">
                {EMAIL}
              </a>
            </p>
          </SlatePlate>
          {openingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3a · awards and recognition */}
      <Band h={BANDS.awards} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={34} w={668} rot={-0.4} z={2} className={full}>
            <Eyebrow className="mb-4">Awards &amp; recognition</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              Something that stays on the desk.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              For service years, sales records, retirements, and the volunteer nobody wants to lose.
              Turned hardwood, engraved slate, or glass with a carved wood inset &mdash; sized to sit
              out rather than go in a drawer. Names, dates, and a mark go on the face.
            </p>
            <div className="mt-4">
              <TextLink href={quoteMail} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {awardsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3b · client and employee appreciation */}
      <Band h={BANDS.appreciation} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={46.11} t={46} w={700} rot={0.5} z={2} className={full}>
            <Eyebrow className="mb-4">Client &amp; employee appreciation</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              A thank-you they will actually use.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Slate coasters, engraved drinkware, cutting boards, and small carved pieces &mdash;
              things that go home and get used. Good for a closing gift, a work anniversary, or the
              whole crew at once. We can put a different name on every piece, or hold one design
              across the run.
            </p>
            <div className="mt-4">
              <TextLink href={quoteMail} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {appreciationPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3c · corporate gifts */}
      <Band h={BANDS.gifts} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={34} w={690} rot={-0.35} z={2} className={full}>
            <Eyebrow className="mb-4">Corporate gifts</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              A gift with the state in it.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Cribbage boards, Farkle, coasters, and carved scenes of the North Shore, the lift
              bridge, and the lake country. Sent to a client, handed out at an event, or set on the
              table at a conference. The place comes through without a logo having to shout.
            </p>
            <div className="mt-4">
              <TextLink href={quoteMail} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {giftsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3d · wholesale for retailers */}
      <Band h={BANDS.wholesale} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={43.06} t={34} w={756} rot={0.45} z={2} className={full}>
            <Eyebrow className="mb-4">Wholesale for retailers</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              Stock that sells in Minnesota.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Slate coasters and long cribbage boards move fastest, and we can run them in a batch
              with your town or your shop&rsquo;s name engraved. A reorder repeats the same design,
              so the shelf looks the same in spring as it did in December.
            </p>
            <div className="mt-4">
              <TextLink href={quoteMail} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {wholesalePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 4 · materials and capabilities, on one wide slate plate */}
      <Band h={BANDS.materials} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={56} w={1312} rot={-0.25} z={1} className={full}>
            <Eyebrow className="mb-5">Materials and capabilities</Eyebrow>
            <h2 className="engrave m-0 mb-6 font-serif text-[clamp(1.7rem,3.2vw,40px)] font-light leading-[1.1] text-ground">
              Five materials, one bench.
            </h2>
            <MaterialsStrip tone="slate" />
            <hr className="mt-7 mb-6 h-px border-0 bg-[rgb(246_241_232/0.18)]" />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {CAPABILITIES.map((c) => (
                <div key={c.label} className="min-w-0">
                  <Eyebrow className="mb-2 text-[11px]">{c.label}</Eyebrow>
                  <p className="m-0 text-[15px] leading-[1.5] text-cream-dim">{c.copy}</p>
                </div>
              ))}
            </div>
            <hr className="mt-7 mb-5 h-px border-0 bg-[rgb(246_241_232/0.18)]" />
            <p className="m-0 font-serif text-[17px] italic leading-[1.4] text-[#e4dccc]">
              A design is held steady across a run, so the tenth piece matches the first.
            </p>
          </SlatePlate>
          {materialsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 5 · how an order goes, on ash, given room */}
      <Band h={BANDS.order} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={20.83} t={76} w={1040} rot={0.45} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4">
              How an order goes
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.7rem,3.2vw,40px)] font-light leading-[1.1] text-ink">
              Five steps, and a mockup before anything is cut.
            </h2>
            <p className="mt-0 mb-7 max-w-[700px] text-[16.5px] leading-[1.6] text-ink-soft">
              Nothing is cut until you have seen it. Every step happens over email, and you will
              always know which one you are on.
            </p>
            <div>
              {ORDER_STEPS.map((s, i) => (
                <CatRow key={s.n} tone="ash" last={i === ORDER_STEPS.length - 1}>
                  <span className="flex flex-none basis-auto items-baseline gap-4 xl:basis-[300px]">
                    <span className="font-serif text-2xl leading-[1.25] text-brass">{s.n}</span>
                    <span className="font-serif text-2xl leading-[1.25] text-ink">{s.name}</span>
                  </span>
                  <span className="text-[15.5px] leading-[1.5] text-ink-soft">{s.copy}</span>
                </CatRow>
              ))}
            </div>
          </AshPlate>
          {orderPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 6 · lead times, stated once, plainly */}
      <Band h={BANDS.lead} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={20} w={1312} rot={0.3} z={1} className={full}>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-baseline xl:justify-between xl:gap-10">
              <Eyebrow className="flex-none">Lead times</Eyebrow>
              <p className="engrave m-0 font-serif text-[clamp(1.2rem,2vw,26px)] font-light leading-[1.35] text-ground xl:text-right">
                Most orders ship within a few weeks. We will confirm a date with your quote.
              </p>
            </div>
          </SlatePlate>
        </div>
      </Band>

      {/* 7 · request a quote, on ash */}
      <Band h={BANDS.quote} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={27.78} t={50} w={792} rot={0.5} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4">
              Start here
            </Eyebrow>
            <h2 className="m-0 mb-4 font-serif text-[clamp(1.7rem,3.2vw,40px)] font-light leading-[1.12] text-ink">
              Tell us what it is for, how many, and when.
            </h2>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-11">
              <div className="min-w-0 flex-auto">
                <p className="mt-0 mb-6 text-[17px] leading-[1.6] text-ink-soft">
                  Most of a quote comes down to three answers. Send them and we will come back with a
                  quote and a date.
                </p>
                <Btn href={quoteMail} variant="ink">
                  Request a quote
                </Btn>
                <p className="mt-4 mb-0 text-[15px] leading-[1.4] text-ink-soft">
                  <a href={plainMail}>{EMAIL}</a>
                </p>
              </div>
              <div className="md:flex-none md:basis-[250px]">
                <Eyebrow tone="brass" className="mb-3 text-[11px]">
                  The quote asks for
                </Eyebrow>
                <div>
                  {QUOTE_ASKS.map((a, i) => (
                    <div
                      key={a.label}
                      className={`py-2 ${i === QUOTE_ASKS.length - 1 ? "" : "border-b border-line"}`}
                    >
                      <p className="m-0 text-[15.5px] font-semibold leading-[1.4] text-ink">
                        {a.label}
                      </p>
                      <p className="m-0 text-sm leading-[1.5] text-ink-soft">{a.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
