import type { Route } from "./+types/contact";
import { AshStrip } from "~/components/AshStrip";
import { Band, Bench } from "~/components/Bench";
import { Footer } from "~/components/Footer";
import { AshPlate, Btn, Eyebrow, SlatePlate } from "~/components/Plate";
import { CatRow, TextLink } from "~/components/Bits";
import { Print } from "~/components/Print";
import {
  BANDS,
  BUSINESS_TELL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SOCIAL_HANDLE,
  TABLE_TELL,
  type TellRow,
  findUsPrints,
  openingPrints,
  placePrints,
  startingPrints,
} from "~/content/contact";
import { EMAIL, pieceMail, plainMail, quoteMail } from "~/lib/mail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — Freeman Eclectic" },
    {
      name: "description",
      content:
        "No form to fill in. Email the shop directly, or send a message on Instagram or Facebook. Crafted in Minnesota, shipped nationwide.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

export default function Contact() {
  return (
    <Bench>
      <AshStrip />

      {/* 2 · the opening: one email, no form */}
      <Band h={BANDS.opening} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={20} t={56} w={836} rot={-0.5} z={3} className={full}>
            <Eyebrow className="mb-5">Contact</Eyebrow>
            <h1 className="engrave m-0 font-serif text-[clamp(1.75rem,3.4vw,42px)] font-light leading-[1.12] text-ground text-pretty">
              Send us an email.
              <br className="hidden md:inline" />{" "}
              That is the whole of it.
            </h1>
            <p className="mt-[22px] max-w-[700px] text-[17px] leading-[1.6] text-cream-dim">
              There is no form to fill in and nothing to sign up for. An email reaches the shop
              directly. Tell us what you have in mind, in as many or as few words as suits you.
            </p>
            <p className="mt-[22px] text-sm font-semibold tracking-[0.06em] text-cream-dimmer">
              <a href={plainMail} className="text-khaki hover:text-tan">
                Email us <span aria-hidden="true">&rarr;</span>
              </a>
              <span className="font-normal text-brass" aria-hidden="true">
                &nbsp;&middot;&nbsp;
              </span>
              <a href={plainMail} className="font-normal tracking-normal text-tan hover:text-khaki">
                {EMAIL}
              </a>
            </p>
          </SlatePlate>
          {openingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3 · the two starting points, side by side. Business is the larger plate */}
      <Band h={BANDS.starting} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={36} w={748} rot={-0.4} z={3} className={full}>
            <Eyebrow className="mb-[18px]">For a business enquiry</Eyebrow>
            <h2 className="engrave m-0 mb-4 font-serif text-[clamp(1.4rem,2.7vw,34px)] font-light leading-[1.12] text-ground">
              Three things, and we can quote it.
            </h2>
            <p className="mt-0 mb-[26px] text-[16.5px] leading-[1.6] text-cream-dim">
              Send it as it stands &mdash; there is no form and no account to make. We will come
              back with a quote and a date.
            </p>
            <Eyebrow tone="brass" className="mb-3 text-[11px]">
              Tell us
            </Eyebrow>
            <div>
              {BUSINESS_TELL.map((row, i) => (
                <TellLine
                  key={row.label}
                  row={row}
                  tone="slate"
                  last={i === BUSINESS_TELL.length - 1}
                />
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Btn href={quoteMail} variant="amber">
                Request a quote
              </Btn>
            </div>
            <p className="mt-4 text-[15px] leading-[1.4] text-cream-dimmer">
              <a href={plainMail} className="text-tan hover:text-khaki">
                {EMAIL}
              </a>
            </p>
          </SlatePlate>

          <AshPlate l={60.28} t={40} w={508} rot={0.65} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-4">
              For your own table
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.25rem,2.4vw,30px)] font-light italic leading-[1.1] text-ink">
              Two things, and we can answer.
            </h2>
            <p className="mt-0 mb-[22px] text-base leading-[1.6] text-ink-soft">
              A cribbage board, a Farkle set, coasters, or something you saw and would rather have
              in a different wood. Write and ask.
            </p>
            <Eyebrow tone="brass" className="mb-3 text-[11px]">
              Tell us
            </Eyebrow>
            <div>
              {TABLE_TELL.map((row, i) => (
                <TellLine
                  key={row.label}
                  row={row}
                  tone="ash"
                  last={i === TABLE_TELL.length - 1}
                />
              ))}
            </div>
            <div className="mt-[22px]">
              <TextLink href={pieceMail()}>Ask about this piece</TextLink>
            </div>
          </AshPlate>

          {startingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 4 · where to find us: the three places, all arriving at the same bench */}
      <Band h={BANDS.findUs} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={124} w={736} rot={-0.45} z={2} className={full}>
            <Eyebrow className="mb-[18px]">Where to find us</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.3rem,2.6vw,32px)] font-light leading-[1.15] text-ground">
              Email, or a message on either page.
            </h2>
            <p className="mt-0 mb-6 text-[16.5px] leading-[1.6] text-cream-dim">
              All three arrive at the same bench. Email is the surest, and a message on Instagram or
              Facebook does the job just as well.
            </p>
            <div>
              <CatRow tone="slate">
                <span className="font-semibold">Email</span>
                <a href={plainMail} className="text-tan hover:text-khaki">
                  {EMAIL}
                </a>
              </CatRow>
              <CatRow tone="slate">
                <span className="font-semibold">Instagram</span>
                <a href={INSTAGRAM_URL} className="text-tan hover:text-khaki">
                  {SOCIAL_HANDLE}
                </a>
              </CatRow>
              <CatRow tone="slate" last>
                <span className="font-semibold">Facebook</span>
                <a href={FACEBOOK_URL} className="text-tan hover:text-khaki">
                  {SOCIAL_HANDLE}
                </a>
              </CatRow>
            </div>
          </SlatePlate>
          {findUsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 5 · where we are, and how it gets to you */}
      <Band h={BANDS.place} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={48.61} t={66} w={676} rot={0.6} z={2} className={full}>
            <Eyebrow className="mb-5">Where we are, and how it gets to you</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.55rem,3.1vw,38px)] font-light leading-[1.14] text-ground">
              Crafted in Minnesota.
              <br className="hidden md:inline" />{" "}
              We ship nationwide.
            </h2>
            <p className="mt-[22px] text-[17px] leading-[1.6] text-cream-dim">
              Everything is made in one small shop near the Twin Cities, Minnesota. Orders are
              packed and sent anywhere in the country, with tracking; local delivery around the Twin
              Cities is possible if you would rather not ship.
            </p>
            <hr className="mt-[34px] mb-[26px] h-px border-0 bg-[rgb(246_241_232/0.18)]" />
            <Eyebrow tone="brass" className="mb-3.5 text-[11px]">
              Lead time
            </Eyebrow>
            <p className="engrave m-0 font-serif text-[21px] font-light leading-[1.4] text-ground">
              Most orders ship within a few weeks. We will confirm a date with your quote.
            </p>
          </SlatePlate>
          {placePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      <Footer />
    </Bench>
  );
}

/** One line of what a pre-filled email already asks: the label, then the hint under it. */
function TellLine({
  row,
  tone,
  last,
}: {
  row: TellRow;
  tone: "slate" | "ash";
  last?: boolean;
}) {
  const slate = tone === "slate";
  return (
    <div
      className={`py-2.5 ${
        last ? "" : `border-b ${slate ? "border-[rgb(246_241_232/0.18)]" : "border-line"}`
      }`}
    >
      <div
        className={`text-base font-semibold leading-[1.4] ${slate ? "text-ground" : "text-ink"}`}
      >
        {row.label}
      </div>
      <div
        className={`text-[14.5px] leading-[1.5] ${slate ? "text-cream-dimmer" : "text-ink-soft"}`}
      >
        {row.hint}
      </div>
    </div>
  );
}
