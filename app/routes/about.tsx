import type { Route } from "./+types/about";
import { AshStrip } from "~/components/AshStrip";
import { Band, Bench } from "~/components/Bench";
import { Footer } from "~/components/Footer";
import { AshPlate, Btn, Eyebrow, SlatePlate } from "~/components/Plate";
import { CatRow, MaterialsStrip, TextLink } from "~/components/Bits";
import { Print } from "~/components/Print";
import {
  BANDS,
  HARDWOODS,
  PROCESS_SPLIT,
  STANDARD_TESTS,
  closePrints,
  materialsPrints,
  openingPrints,
  pairingPrints,
  placePrints,
  standardPrints,
} from "~/content/about";
import { EMAIL, plainMail, quoteMail } from "~/lib/mail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About the shop — Freeman Eclectic" },
    {
      name: "description",
      content:
        "How the work happens: turned, cut, carved and engraved by machine, then sanded, fitted and finished by hand. Wood, slate, glass, metal and acrylic, crafted in Minnesota.",
    },
  ];
}

/** Below xl a band is ordinary flow; the wrapper only grids the prints there. */
const flow = "flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-8 xl:block";
const full = "md:col-span-2";

export default function About() {
  return (
    <Bench>
      <AshStrip />

      {/* 2 · the opening statement, with prints crowding the plate */}
      <Band h={BANDS.opening} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={20.28} t={56} w={856} rot={-0.5} z={3} className={full}>
            <Eyebrow className="mb-5">About the shop</Eyebrow>
            <h1 className="engrave m-0 font-serif text-[clamp(1.6rem,3.1vw,38px)] font-light leading-[1.14] text-ground text-pretty">
              We make distinctive,{" "}
              <br className="hidden md:inline" />
              heirloom-quality pieces{" "}
              <br className="hidden md:inline" />
              &mdash; made to be used.
            </h1>
            <p className="mt-[22px] max-w-[660px] text-[17px] leading-[1.6] text-cream-dim">
              Pieces that bring people together, reflect the character of Minnesota, and are worthy
              of being used, shared, and passed down. That sentence is the whole brief. Everything
              that leaves the bench is measured against it.
            </p>
            <p className="mt-5 text-[15px] leading-[1.4] text-cream-dimmer">
              Crafted in Minnesota. We ship nationwide.
            </p>
          </SlatePlate>
          {openingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 3 · the pairing, given the fullest treatment on the site */}
      <Band h={BANDS.pairing} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={50} w={1000} rot={-0.35} z={2} className={full}>
            <Eyebrow className="mb-5">How the work happens</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.85rem,4.2vw,48px)] font-light leading-[1.12] text-ground">
              Machines get it precise.{" "}
              <br className="hidden md:inline" />
              Hands get it right.
            </h2>
            <p className="mt-[22px] max-w-[800px] text-lg leading-[1.6] text-cream-dim">
              We turn on the lathe, cut, carve, and engrave with modern equipment. Then we sand,
              fit, and finish by hand. The machines hold a tolerance all day. They do not decide
              the grain, the depth of a cut, or when a piece is done.
            </p>
            <hr className="mt-9 mb-[30px] h-px border-0 bg-[rgb(246_241_232/0.18)]" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-11">
              {PROCESS_SPLIT.map(({ label, body }) => (
                <div key={label} className="min-w-0">
                  <Eyebrow className="mb-2 text-[11px]">{label}</Eyebrow>
                  <p className="m-0 text-[15.5px] leading-[1.5] text-cream-dim">{body}</p>
                </div>
              ))}
            </div>
          </SlatePlate>
          {pairingPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 4 · what we work in: the five materials, and the hardwoods */}
      <Band h={BANDS.materials} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={4.44} t={40} w={1160} rot={0.4} z={2} className={full}>
            <Eyebrow className="mb-[18px]">What we work in</Eyebrow>
            <div className="mb-[26px]">
              <MaterialsStrip tone="slate" />
            </div>
            <hr className="mt-0 mb-[26px] h-px border-0 bg-[rgb(246_241_232/0.18)]" />
            <div className="flex flex-col items-start gap-8 md:flex-row md:gap-14">
              <div className="shrink-0">
                <Eyebrow className="mb-2 text-[11px]">The hardwoods</Eyebrow>
                <p className="engrave m-0 flex flex-wrap items-baseline gap-x-3 font-serif text-[22px] leading-[1.2] text-ground md:text-[26px]">
                  {HARDWOODS.map((wood, i) => (
                    <span key={wood} className="flex items-baseline gap-3">
                      {wood}
                      {i < HARDWOODS.length - 1 ? (
                        <span className="text-brass" aria-hidden="true">
                          &middot;
                        </span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </div>
              <p className="m-0 min-w-0 text-base leading-[1.6] text-cream-dim">
                Chosen because they age well. Cherry darkens, walnut holds a deep relief, maple
                takes a fine engraved line, and ash keeps a pale open grain. The finish is put on
                to be renewed later, not to hide anything now.
              </p>
            </div>
          </SlatePlate>
          {materialsPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 5 · the standard, on ash */}
      <Band h={BANDS.standard} className="py-12 xl:py-0">
        <div className={flow}>
          <AshPlate l={20.83} t={60} w={1076} rot={0.5} z={3} className={full}>
            <Eyebrow tone="amber" className="mb-[18px]">
              The standard
            </Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(1.6rem,2.95vw,36px)] font-light leading-[1.15] text-ink">
              What has to be true before a piece joins the line.
            </h2>
            <p className="mt-3.5 text-[16.5px] leading-[1.6] text-ink-soft">
              Not everything we make gets made twice. Four questions decide it.
            </p>
            <div className="mt-[26px]">
              {STANDARD_TESTS.map(({ n, test, note }, i) => (
                <CatRow key={n} tone="ash" last={i === STANDARD_TESTS.length - 1}>
                  <span className="flex w-full flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between md:gap-5">
                    <span className="flex items-baseline gap-4 xl:flex-none xl:basis-[400px]">
                      <span className="font-serif text-xl leading-[1.4] text-brass">{n}</span>
                      <span className="font-serif text-xl leading-[1.4] text-ink">{test}</span>
                    </span>
                    <span className="text-[15.5px] leading-[1.5] text-ink-soft">{note}</span>
                  </span>
                </CatRow>
              ))}
            </div>
          </AshPlate>
          {standardPrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 6 · rooted in place */}
      <Band h={BANDS.place} className="py-12 xl:py-0">
        <div className={flow}>
          <SlatePlate l={48.61} t={80} w={676} rot={0.6} z={3} className={full}>
            <Eyebrow className="mb-5">Where it comes from</Eyebrow>
            <h2 className="engrave m-0 font-serif text-[clamp(1.65rem,3.25vw,40px)] font-light leading-[1.14] text-ground">
              Crafted in Minnesota.{" "}
              <br className="hidden md:inline" />
              We ship nationwide.
            </h2>
            <p className="mt-[22px] text-[17px] leading-[1.6] text-cream-dim">
              Everything is made in one small shop near the Twin Cities. The North Shore, the
              Boundary Waters, lakes, cabins, pines, lighthouses and wildlife turn up in the work
              because that is the country around it.
            </p>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-cream-dim">
              Local history shows up too, and we take on respectful patriotic work the same way we
              take on anything else &mdash; carefully, and without slogans.
            </p>
          </SlatePlate>
          {placePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      {/* 7 · a quiet close: two doors, one action */}
      <Band h={BANDS.close} className="py-12 xl:py-0">
        <div className={flow}>
          {/* the artboard draws this plate at 44/56 padding; the plate's default 56/64 spills the band */}
          <AshPlate
            l={22.22}
            t={60}
            w={800}
            rot={0.5}
            z={3}
            className={`${full} xl:px-[56px] xl:py-[44px]`}
          >
            <Eyebrow tone="amber" className="mb-[18px]">
              Two doors, one bench
            </Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(1.6rem,2.95vw,36px)] font-light leading-[1.14] text-ink">
              Tell us what you have in mind.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-ink-soft">
              A run of awards for your company, or one board for your own table &mdash; it starts
              the same way.
            </p>
            <div className="mt-[30px] flex flex-wrap items-center gap-x-8 gap-y-3">
              <Btn href={quoteMail} variant="ink">
                Request a quote
              </Btn>
              <TextLink href="/for-business">For Business</TextLink>
              <TextLink href="/for-your-table">For Your Table</TextLink>
            </div>
            <p className="mt-[18px] text-[15px] leading-[1.4] text-ink-soft">
              <a href={plainMail}>{EMAIL}</a>
            </p>
          </AshPlate>
          {closePrints.map((s) => (
            <Print key={s.src} spec={s} />
          ))}
        </div>
      </Band>

      <Footer />
    </Bench>
  );
}
