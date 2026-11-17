import { Link, useLocation } from "react-router";
import { Wordmark } from "./Wordmark";
import { Btn } from "./Plate";

const NAV = [
  { to: "/for-business", label: "For Business" },
  { to: "/for-your-table", label: "For Your Table" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

/** The header: a strip of sanded ash laid across the top of the bench. */
export function AshStrip() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <header className="relative z-20 bg-ground-deep text-ink shadow-strip">
      <div className={`mx-auto flex max-w-canvas flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 md:px-8 xl:flex-nowrap xl:px-12 xl:py-0 ${isHome ? "py-4 xl:h-[104px]" : "py-2 xl:h-[68px]"}`}>
        <Link to="/" className="flex shrink-0 items-center gap-2.5 text-ink hover:text-ink" aria-label="Freeman Eclectic, home">
          <Wordmark size={isHome ? 54 : 35} />
          <span className="leading-none">
            <span className={`block font-serif uppercase tracking-[0.13em] ${isHome ? "text-[23px] md:text-[27px]" : "text-[17px]"}`}>Freeman</span>
            <span className={`mt-0.5 block font-serif italic text-tan ${isHome ? "text-[26px] md:text-[30px]" : "text-[19px]"}`}>Eclectic</span>
          </span>
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-x-4 gap-y-0 xl:w-auto xl:gap-x-6">
          {NAV.map(({ to, label }) => {
            const current = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-current={current ? "page" : undefined}
                className={`flex min-h-9 items-center text-[13px] text-ink hover:text-amber-deep ${
                  current
                    ? "border-b-2 border-amber font-semibold"
                    : "border-b-2 border-transparent font-medium"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Btn
            href="/contact"
            variant="ink"
            className="mt-1 h-9 min-h-9 w-full px-4 text-[13px] sm:mt-0 sm:w-auto"
          >
            Request a quote
          </Btn>
        </nav>
      </div>
    </header>
  );
}
