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
  return (
    <header className="relative z-20 bg-ground-deep text-ink shadow-strip">
      <div className="mx-auto flex max-w-canvas flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10 xl:h-23 xl:flex-nowrap xl:px-16 xl:py-0">
        <Link to="/" className="flex items-center gap-4 text-ink hover:text-ink" aria-label="Freeman Eclectic, home">
          <Wordmark size={46} />
          <span className="leading-none">
            <span className="block font-serif text-[21px] uppercase tracking-[0.15em]">Freeman</span>
            <span className="mt-0.5 block font-serif text-[23px] italic text-tan">Eclectic</span>
          </span>
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-x-6 gap-y-1 xl:w-auto xl:gap-x-[34px]">
          {NAV.map(({ to, label }) => {
            const current = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-current={current ? "page" : undefined}
                className={`flex min-h-11 items-center text-sm text-ink hover:text-amber-deep ${
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
            className="mt-2 h-11 min-h-11 w-full px-[22px] sm:mt-0 sm:w-auto"
          >
            Request a quote
          </Btn>
        </nav>
      </div>
    </header>
  );
}
