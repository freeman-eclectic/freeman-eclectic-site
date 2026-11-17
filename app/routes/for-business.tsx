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
  appreciationPrints,
  awardsPrints,
  giftsPrints,
  materialsPrints,
  openingPrints,
  orderPrints,
  wholesalePrints,
} from "~/content/business";
import { EMAIL, plainMail } from "~/lib/mail";
import { CONTACT_FORM_URL } from "~/lib/contactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Business | Freeman Eclectic" },
    {
      name: "description",
      content:
        "Awards, corporate gifts, business-card bottle openers, and wholesale engraving made in a Minnesota shop. Approve a mockup before production.",
    },
  ];
}

/** All business content uses a non-overlapping grid so copy never hides merchandise. */

const photographsInPageOrder = [
  ...openingPrints,
  ...awardsPrints,
  ...appreciationPrints,
  ...giftsPrints,
  ...wholesalePrints,
  ...materialsPrints,
  ...orderPrints,
];

export default function ForBusiness() {
  return (
    <Bench photographs={photographsInPageOrder}>
      <AshStrip />

      <Band h={510} className="py-12 xl:h-auto! xl:py-12">
        <section id="promotional-bottle-openers" aria-labelledby="promotional-openers-heading" className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-10">
          <SlatePlate className="xl:static! xl:w-full! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-4">Promotional / business-card bottle openers</Eyebrow>
            <h2 id="promotional-openers-heading" className="engrave font-serif text-[clamp(1.55rem,2.6vw,32px)] font-light leading-tight text-ground">
              A business card your customer will keep.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream-dim">
              Put your business information on a real, working bottle opener. These flat,
              credit-card-size black stainless-steel openers are useful promotional pieces
              that customers can carry and reach for again, instead of another paper card
              that might end up in the trash.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream-dim">
              We can engrave your logo and business name, a QR code, phone number, website,
              social-media contact, or a person's name. Choose the details that matter most
              and we will prepare a layout for your approval before engraving.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-dimmer">
              For customer giveaways, trade shows, open houses, appreciation gifts,
              and small-business promotions. Ask about quantities and a custom quote.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-dimmer">
              Shown alongside is our actual engraved Freeman Eclectic bottle opener.
              Every customer's layout is customized and approved before engraving.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Btn href={CONTACT_FORM_URL} variant="outline">Ask about promotional bottle openers</Btn>
              <a href={plainMail} className="self-center text-sm text-tan hover:text-khaki">{EMAIL}</a>
            </div>
          </SlatePlate>
          <figure className="mx-auto w-full max-w-[680px] bg-ground p-3 shadow-print xl:p-4">
            <img
              src="/img/freeman-eclectic-bottle-opener-approved-cabin.webp"
              alt="Freeman Eclectic engraved black stainless-steel bottle opener presented on a warm wooden cabin table with a Northwoods lake in the background"
              className="block h-auto w-full"
              loading="eager"
              width={1200}
              height={900}
            />
            <figcaption className="pt-3 font-serif text-base italic text-ink-soft">
              Cabin-scene presentation of our Freeman Eclectic engraved stainless-steel bottle opener.
            </figcaption>
          </figure>
        </section>
      </Band>

      {/* 2 · the opening statement, slate plate with prints crowding it */}
      <Band h={BANDS.opening} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={20.28} t={70} w={856} rot={-0.5} z={3} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-5">For business</Eyebrow>
            <h1 className="engrave m-0 font-serif text-[clamp(1.75rem,3.4vw,42px)] font-light leading-[1.12] text-ground text-pretty">
              Awards, gifts, and wholesale{" "}
              <br className="hidden md:inline" />
              pieces, crafted in Minnesota.
            </h1>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-cream-dim">
              We put your logo and your wording on pieces carved and engraved in wood, slate,
              glass, metal, and acrylic. You see a mockup and approve it before anything is cut.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm text-cream-dimmer">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
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
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 3a · awards and recognition */}
      <Band h={BANDS.awards} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={4.44} t={34} w={668} rot={-0.4} z={2} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-4">Awards &amp; recognition</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              Something that stays on the desk.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              For years of service, a retirement, a tournament, or the volunteer nobody wants to
              lose. Carved hardwood or engraved slate and glass, sized to sit out instead of going
              in a drawer, with the name, the date, and your logo on the face.
            </p>
            <div className="mt-4">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {awardsPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 3b · client and employee appreciation */}
      <Band h={BANDS.appreciation} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={46.11} t={46} w={700} rot={0.5} z={2} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-4">Client &amp; employee appreciation</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              A thank-you they will actually use.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Slate coasters, engraved glasses and mugs, cutting boards, bottle openers, and
              keychains. They go home and get used. Order one for a closing gift or a work
              anniversary, or enough for the whole crew, with a different name on every piece.
            </p>
            <div className="mt-4">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {appreciationPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 3c · corporate gifts */}
      <Band h={BANDS.gifts} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={4.44} t={34} w={690} rot={-0.35} z={2} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-4">Corporate gifts</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              A gift with the state in it.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Cribbage boards, Farkle sets, and coasters engraved with Split Rock, the lift bridge,
              and the lake country. Send them to clients or hand them out at an event. Your logo can
              go small in the corner and let Minnesota do the talking.
            </p>
            <div className="mt-4">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {giftsPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 3d · wholesale for retailers */}
      <Band h={BANDS.wholesale} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={43.06} t={34} w={756} rot={0.45} z={2} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-4">Wholesale for retailers</Eyebrow>
            <h2 className="engrave m-0 mb-3.5 font-serif text-[clamp(1.4rem,2.4vw,30px)] font-light leading-[1.15] text-ground">
              Stock that sells in Minnesota.
            </h2>
            <p className="m-0 text-base leading-[1.6] text-cream-dim">
              Slate coasters with a little Minnesota humor sell fastest at our own craft-show booth.
              We can engrave a batch with your town or your shop&rsquo;s name, and a reorder repeats
              the approved design exactly.
            </p>
            <div className="mt-4">
              <TextLink href={CONTACT_FORM_URL} tone="khaki">
                Request a quote
              </TextLink>
            </div>
          </SlatePlate>
          {wholesalePrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* Promotional opener: a real engraved example and a labeled Freeman Eclectic layout concept. */}
      {/* 4 · materials and capabilities, on one wide slate plate */}
      <Band h={BANDS.materials} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={4.44} t={56} w={1312} rot={-0.25} z={1} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow className="mb-5">Materials and capabilities</Eyebrow>
            <h2 className="engrave m-0 mb-6 font-serif text-[clamp(1.7rem,3.2vw,40px)] font-light leading-[1.1] text-ground">
              Five materials, one shop.
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
              On a large order, the last piece matches the first.
            </p>
          </SlatePlate>
          {materialsPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 5 · how an order goes, on ash, given room */}
      <Band h={BANDS.order} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <AshPlate l={20.83} t={76} w={1040} rot={0.45} z={3} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <Eyebrow tone="amber" className="mb-4">
              How an order goes
            </Eyebrow>
            <h2 className="m-0 mb-3.5 font-serif text-[clamp(1.7rem,3.2vw,40px)] font-light leading-[1.1] text-ink">
              Five steps, and a mockup before anything is cut.
            </h2>
            <p className="mt-0 mb-7 max-w-[700px] text-[16.5px] leading-[1.6] text-ink-soft">
              We're communicating with you every step of the way. You will see the design, the
              wording, and the material before we start, and you will hear from us when it ships.
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
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Btn href={CONTACT_FORM_URL} variant="ink">
                Request a quote
              </Btn>
              <a href={plainMail} className="text-[15px] leading-[1.4] text-ink-soft">
                {EMAIL}
              </a>
            </div>
          </AshPlate>
          {orderPrints.map((s) => (
            <Print key={s.src} spec={s} className="xl:static! xl:w-full! xl:max-w-none! xl:rotate-0!" />
          ))}
        </div>
      </Band>

      {/* 6 · lead times, stated once, plainly */}
      <Band h={BANDS.lead} className="py-12 xl:h-auto! xl:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <SlatePlate l={4.44} t={20} w={1312} rot={0.3} z={1} className="md:col-span-2 xl:static! xl:col-span-3 xl:w-full! xl:max-w-none! xl:rotate-0! xl:px-10 xl:py-9">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-baseline xl:justify-between xl:gap-10">
              <Eyebrow className="flex-none">Lead times</Eyebrow>
              <p className="engrave m-0 font-serif text-[clamp(1.2rem,2vw,26px)] font-light leading-[1.35] text-ground xl:text-right">
                Most orders ship within a few weeks. We will confirm a date with your quote.
              </p>
            </div>
          </SlatePlate>
        </div>
      </Band>

      <Footer />
    </Bench>
  );
}
