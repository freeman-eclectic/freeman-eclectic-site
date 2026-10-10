import type { CSSProperties } from "react";
import { GalleryPhotograph } from "./Lightbox";

export type PrintSpec = {
  src: string;
  alt: string;
  caption?: string;
  /** intrinsic size the photograph was cropped to */
  w: number;
  h: number;
  /** scatter position, as a percentage of the band box */
  l: number;
  t: number;
  rot: number;
  z?: number;
  /** drop from the mid-width grid when the composition gets crowded */
  minor?: boolean;
};

/**
 * A photograph laid on the bench.
 *
 * Three compositions, two breakpoints:
 *   base  — in flow, full width, barely tilted
 *   md    — in flow, inside a two-column grid
 *   xl    — absolutely placed by percentage, at full tilt: the drawn scatter
 *
 * The box is pinned to the image width so a long caption cannot widen it —
 * that bug bit the artboards and is easy to reintroduce.
 */
export function Print({ spec, className = "" }: { spec: PrintSpec; className?: string }) {
  const { src, alt, caption, w, h, l, t, rot, z = 1, minor } = spec;

  const vars = {
    "--l": `${l}%`,
    "--t": `${t}%`,
    "--rot": `${rot}deg`,
    "--w": String(w),
    zIndex: z,
  } as CSSProperties;

  return (
    <figure
      style={vars}
      className={[
        "bg-ground p-2.5 shadow-print m-0",
        // base: in flow, centred, tilt damped so a stack does not look drunk
        "relative w-full max-w-[calc(var(--w)*1px)] mx-auto rotate-[calc(var(--rot)*0.45)]",
        // md: still in flow, the grid places it
        "md:mx-0",
        // xl: the scatter as drawn
        "xl:absolute xl:left-[var(--l)] xl:top-[var(--t)] xl:w-[calc(var(--w)*100%/1440)] xl:max-w-none xl:mx-0 xl:rotate-[var(--rot)]",
        minor ? "hidden md:block" : "",
        className,
      ].join(" ")}
    >
      <GalleryPhotograph src={src} alt={alt} w={w} h={h} />
      {caption ? (
        <figcaption className="font-serif italic text-[13.5px] leading-[1.35] text-ink-soft pt-2">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
