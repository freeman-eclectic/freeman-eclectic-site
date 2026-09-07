import type { ReactNode } from "react";

/** A ruled row in a category list. */
export function CatRow({
  children,
  tone = "slate",
  last,
}: {
  children: ReactNode;
  tone?: "slate" | "ash";
  last?: boolean;
}) {
  const rule =
    tone === "slate" ? "border-[rgb(246_241_232/0.18)]" : "border-line";
  const text = tone === "slate" ? "text-[#e4dccc]" : "text-ink";
  return (
    <div
      className={`flex items-baseline justify-between gap-4 py-3 text-[15px] ${text} ${
        last ? "" : `border-b ${rule}`
      }`}
    >
      {children}
    </div>
  );
}

/** Wood · Slate · Glass · Metal · Acrylic — the five, set large. */
export function MaterialsStrip({ tone = "slate" }: { tone?: "slate" | "ash" }) {
  const items = ["Wood", "Slate", "Glass", "Metal", "Acrylic"];
  const text = tone === "slate" ? "text-ground engrave" : "text-ink";
  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 md:gap-x-6">
      {items.map((m, i) => (
        <span key={m} className="flex items-baseline gap-5 md:gap-6">
          <span className={`font-serif text-2xl md:text-[30px] ${text}`}>{m}</span>
          {i < items.length - 1 ? (
            <span className="font-serif text-2xl text-brass md:text-[30px]" aria-hidden="true">
              &middot;
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

/** Tell us → Mockup → Approve → Make → Ship */
export function OrderSteps({ tone = "ash" }: { tone?: "slate" | "ash" }) {
  const steps = ["Tell us", "Mockup", "Approve", "Make", "Ship"];
  const text = tone === "slate" ? "text-ground" : "text-ink";
  return (
    <ol className="m-0 flex list-none flex-wrap items-baseline gap-x-3 gap-y-1 p-0">
      {steps.map((s, i) => (
        <li key={s} className="flex items-baseline gap-3">
          <span className={`font-serif text-xl ${text}`}>{s}</span>
          {i < steps.length - 1 ? (
            <span className="font-serif text-lg text-brass" aria-hidden="true">
              &rarr;
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** A quiet text link — never a button. Used for "Ask about this piece". */
export function TextLink({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "khaki";
}) {
  const c = tone === "khaki" ? "text-khaki hover:text-tan" : "text-amber hover:text-amber-deep";
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.06em] ${c}`}
    >
      {children} <span aria-hidden="true">&nbsp;&rarr;</span>
    </a>
  );
}
