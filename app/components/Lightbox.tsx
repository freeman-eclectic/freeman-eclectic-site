import {
  createContext,
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { TextLink } from "~/components/Bits";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/components/ui/dialog";
import { CONTACT_FORM_URL } from "~/lib/contactForm";
import { withBasePath } from "~/lib/withBasePath";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
  w: number;
  h: number;
  /** the piece being asked about; omit it and the ask link is omitted too */
  name?: string;
};

/**
 * Every photograph on a page, in one lightbox.
 *
 * Wrap a page's content in this with its photographs in page order; any
 * `GalleryPhotograph` inside then opens the lightbox at itself, and previous /
 * next walk the whole page. The same photograph can appear twice on a page (a
 * scatter print and a piece tile), so items are merged by `src`: the first
 * keeps its place, the later one fills in what it adds, like the piece name.
 */
export function Gallery({ items, children }: { items: LightboxItem[]; children: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uniqueItems = useMemo(() => mergeItemsBySrc(items), [items]);
  const openAtSrc = useMemo(
    () => (src: string) => {
      const index = uniqueItems.findIndex((item) => item.src === src);
      if (index >= 0) setOpenIndex(index);
    },
    [uniqueItems],
  );

  return (
    <GalleryContext.Provider value={openAtSrc}>
      {children}
      <Lightbox items={uniqueItems} index={openIndex} onIndexChange={setOpenIndex} />
    </GalleryContext.Provider>
  );
}

/**
 * A photograph's image, which opens the page's gallery when clicked. Outside a
 * `Gallery` it is just the image.
 */
export function GalleryPhotograph({
  src,
  alt,
  w,
  h,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
}) {
  const openAtSrc = useContext(GalleryContext);
  const image = (
    <img
      src={withBasePath(src)}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full object-cover object-[50%_62%]"
      style={{ aspectRatio: `${w} / ${h}` }}
    />
  );
  if (!openAtSrc) return image;

  return (
    <button
      type="button"
      onClick={() => openAtSrc(src)}
      aria-label={`View larger: ${alt}`}
      className="block w-full cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
    >
      {image}
    </button>
  );
}

/**
 * A gallery lightbox, built on shadcn's Dialog.
 *
 * Opening it dims the bench and lays one photograph down on top as a large
 * print: cream mat, hard shadow, the barest tilt. Previous / next sit on the
 * wood beneath it in cream type; arrow keys do the same thing. The ask link
 * stays with the piece, so the only call to action is still an email.
 *
 * The parent owns which print is open (`index`, or null for closed).
 */
function Lightbox({
  items,
  index,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const openIndex = index !== null && index >= 0 && index < items.length ? index : null;
  const total = items.length;

  const moveBy = (delta: number) =>
    openIndex !== null && onIndexChange((openIndex + delta + total) % total);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") moveBy(-1);
    if (event.key === "ArrowRight") moveBy(1);
  };

  return (
    <Dialog
      open={openIndex !== null}
      onOpenChange={(isOpen) => (isOpen ? null : onIndexChange(null))}
    >
      <DialogContent
        surface="bare"
        showCloseButton={false}
        onKeyDown={onKeyDown}
        onOpenAutoFocus={focusTheDialogItself}
        className="max-w-[min(100%-2rem,1040px)] gap-0 sm:max-w-[min(100%-2rem,1040px)]"
      >
        {openIndex !== null ? (
          <LightboxBody
            item={items[openIndex]}
            index={openIndex}
            total={total}
            onPrevious={() => moveBy(-1)}
            onNext={() => moveBy(1)}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function LightboxBody({
  item,
  index,
  total,
  onPrevious,
  onNext,
}: {
  item: LightboxItem;
  index: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div
      style={{ "--aspect": String(item.w / item.h) } as CSSProperties}
      className={`relative mx-auto pt-12 ${printWidthClasses}`}
    >
      <DialogClose className={closeButtonClasses}>
        <XIcon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        <span className="sr-only">Close</span>
      </DialogClose>

      <DialogTitle className="sr-only">{item.caption ?? item.alt}</DialogTitle>
      <DialogDescription className="sr-only">
        Photograph {index + 1} of {total}. Use the arrow keys to move between them.
      </DialogDescription>

      <LightboxPrint key={item.src} item={item} index={index} />

      <nav
        aria-label="Gallery"
        className="on-wood mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-1 md:mt-9"
      >
        <button type="button" onClick={onPrevious} className={navButtonClasses}>
          <ChevronLeftIcon className="size-4" strokeWidth={2} aria-hidden="true" />
          Previous
        </button>
        <p className="m-0 order-last w-full text-center font-serif text-[15px] italic text-cream-dimmer sm:order-none sm:w-auto">
          {index + 1} of {total}
        </p>
        <button type="button" onClick={onNext} className={navButtonClasses}>
          Next
          <ChevronRightIcon className="size-4" strokeWidth={2} aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}

/**
 * As wide as the photograph can be while still fitting under the nav: the full
 * dialog width, or the height left over times the aspect ratio, whichever is
 * smaller. The nav shares the width so it sits squarely under the print.
 */
const printWidthClasses = "w-[min(100%,calc((100dvh-18rem)*var(--aspect)))]";

/** Radix would focus the close button, which draws a ring the moment a print opens; the dialog itself is focusable and takes the arrow keys. */
const focusTheDialogItself = (event: Event) => {
  event.preventDefault();
  (event.currentTarget as HTMLElement | null)?.focus();
};

const closeButtonClasses =
  "on-wood absolute top-0 right-0 inline-flex size-11 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-ground opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tan";

const navButtonClasses =
  "inline-flex min-h-11 cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-semibold uppercase tracking-[0.13em] text-ground transition-colors hover:text-tan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tan";

/** The large print alternates its tilt so flipping through reads as one print set down after another. */
const PRINT_TILTS = [-0.5, 0.5];

function LightboxPrint({ item, index }: { item: LightboxItem; index: number }) {
  const { src, alt, caption, w, h, name } = item;
  return (
    <figure
      style={{ "--rot": `${PRINT_TILTS[index % PRINT_TILTS.length]}deg` } as CSSProperties}
      className="m-0 w-full rotate-[var(--rot)] bg-ground p-3 shadow-print md:p-4"
    >
      <img
        src={withBasePath(src)}
        alt={alt}
        width={w}
        height={h}
        decoding="async"
        className="block h-auto w-full object-cover object-[50%_62%]"
        style={{ aspectRatio: `${w} / ${h}` }}
      />
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-2.5">
        {caption ? (
          <span className="font-serif text-[15px] italic leading-[1.35] text-ink-soft">
            {caption}
          </span>
        ) : null}
        {name ? <TextLink href={CONTACT_FORM_URL}>Ask about this piece</TextLink> : null}
      </figcaption>
    </figure>
  );
}

const GalleryContext = createContext<((src: string) => void) | null>(null);

function mergeItemsBySrc(items: LightboxItem[]) {
  const itemsBySrc = new Map<string, LightboxItem>();
  for (const item of items) {
    itemsBySrc.set(item.src, { ...itemsBySrc.get(item.src), ...item });
  }
  return [...itemsBySrc.values()];
}
