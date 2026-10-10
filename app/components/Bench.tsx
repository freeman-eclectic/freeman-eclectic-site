import type { ReactNode } from "react";
import { Gallery, type LightboxItem } from "./Lightbox";

/**
 * The page shell: one continuous oak surface, top to bottom.
 *
 * The wood is a seamlessly tiling 1200x363 texture at a fixed 1440px scale, so
 * the grain stays the same physical size at every viewport width and repeats on
 * both axes without a seam. (The artboards carried a 300KB pre-tiled image only
 * because the canvas runtime cannot resolve CSS url(); the web can.)
 *
 * `photographs` is every photograph on the page in page order; clicking any of
 * them opens a lightbox that steps through the lot.
 */
export function Bench({
  photographs,
  children,
}: {
  photographs: LightboxItem[];
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bench">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/img/bench-tile.jpg')] bg-[length:1440px_auto] bg-repeat"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[rgb(18_13_9/0.30)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-[rgb(14_10_7/0.42)]"
      />
      <div className="relative z-10">
        <Gallery items={photographs}>{children}</Gallery>
      </div>
    </div>
  );
}

/**
 * One horizontal band of the page.
 *
 * Below xl a band is ordinary flow and sizes itself. At xl it becomes the fixed
 * 1440-tall stage the scatter was drawn against, scaling with the viewport so
 * percentage-placed prints keep their relationships between 1280 and 1440+.
 */
export function Band({
  h,
  children,
  className = "",
}: {
  /** the band's drawn height at 1440px wide */
  h: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative mx-auto w-full max-w-canvas px-6 md:px-10 xl:px-0 xl:h-[var(--bh)] ${className}`}
      style={{ "--bh": `${h}px` } as React.CSSProperties}
    >
      {children}
    </section>
  );
}
