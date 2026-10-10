import { Wordmark } from "./Wordmark";
import { INSTAGRAM_URL } from "~/content/contact";
import { EMAIL, plainMail } from "~/lib/mail";

/**
 * The bench does not end: one row of cream type directly on bare wood.
 * Deliberately one row — an earlier draft was criticised for a busy footer.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-[rgb(246_241_232/0.14)]">
      <div className="mx-auto flex max-w-canvas flex-col items-start gap-6 px-6 py-10 md:px-10 xl:h-[150px] xl:flex-row xl:items-center xl:justify-between xl:gap-10 xl:px-16 xl:py-0">
        <div className="on-wood flex items-center gap-3 text-ground">
          <Wordmark size={32} tone="cream" />
          <span className="font-serif text-base uppercase tracking-[0.14em]">Freeman</span>
          <span className="font-serif text-lg italic text-tan">Eclectic</span>
        </div>
        <p className="on-wood m-0 font-serif text-lg italic text-[#e4dccc]">
          Crafted to bring people together.
        </p>
        <div className="on-wood flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-cream-dim">
          <a href={plainMail} className="flex min-h-11 items-center text-cream-dim hover:text-tan">
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            className="flex min-h-11 items-center text-cream-dim hover:text-tan"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/p/Freeman-Eclectic-61572489123732/"
            className="flex min-h-11 items-center text-cream-dim hover:text-tan"
          >
            Facebook
          </a>
          <span className="text-[#a69c8c]">Twin Cities, MN</span>
        </div>
      </div>
    </footer>
  );
}
