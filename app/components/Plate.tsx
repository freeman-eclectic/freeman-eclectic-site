import type { CSSProperties, ReactNode } from "react";

type PlateProps = {
  children: ReactNode;
  /** scatter box at xl, as a percentage of the band */
  l?: number;
  t?: number;
  w?: number;
  rot?: number;
  z?: number;
  className?: string;
};

const scatter = ({ l, t, w, rot, z }: PlateProps) =>
  ({
    "--l": l != null ? `${l}%` : undefined,
    "--t": t != null ? `${t}px` : undefined,
    // unitless: the box below converts it to a percentage of the 1440 reference,
    // so a plate scales with the band instead of keeping its drawn pixel width
    "--w": w != null ? String(w) : undefined,
    "--rot": `${rot ?? 0}deg`,
    zIndex: z ?? 2,
  }) as CSSProperties;

/** Positioned at xl, ordinary flow below it. */
const box =
  "relative w-full box-border " +
  "xl:absolute xl:left-[var(--l)] xl:top-[var(--t)] xl:w-[calc(var(--w)*100%/1440)] xl:rotate-[var(--rot)]";

/** Engraved slate: the page's most important statements. */
export function SlatePlate(props: PlateProps) {
  return (
    <div
      style={scatter(props)}
      className={`${box} bg-slate-plate border border-slate-edge shadow-plate p-8 md:p-12 xl:px-[72px] xl:py-16 ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}

/** Sanded ash: anything practical the visitor has to read and act on. */
export function AshPlate(props: PlateProps) {
  return (
    <div
      style={scatter(props)}
      className={`${box} bg-ground-deep text-ink shadow-plate p-8 md:p-12 xl:px-16 xl:py-14 ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "khaki",
  className = "",
}: {
  children: ReactNode;
  tone?: "khaki" | "amber" | "brass";
  className?: string;
}) {
  const colour =
    tone === "amber" ? "text-amber" : tone === "brass" ? "text-brass" : "text-khaki";
  return (
    <p className={`m-0 text-xs font-semibold uppercase tracking-[0.18em] ${colour} ${className}`}>
      {children}
    </p>
  );
}

export function Btn({
  children,
  href,
  variant = "amber",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "amber" | "ink" | "outline" | "cream";
  className?: string;
}) {
  const styles = {
    amber: "bg-amber text-white hover:bg-amber-deep",
    ink: "bg-ink text-ground hover:bg-black",
    outline: "border border-ink text-ink hover:bg-ink hover:text-ground",
    cream: "border border-[rgb(246_241_232/0.55)] text-ground hover:bg-[rgb(246_241_232/0.1)]",
  }[variant];
  return (
    <a
      href={href}
      className={`inline-flex h-13 min-h-[52px] items-center justify-center px-[30px] text-[13px] font-semibold uppercase tracking-[0.13em] transition-colors ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
