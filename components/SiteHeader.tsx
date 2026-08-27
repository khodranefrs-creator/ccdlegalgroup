"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getServices } from "@/config/services";
import { getSearchIndex } from "@/config/search";
import { siteConfig, type Locale } from "@/config/site";
import LanguageSwitch from "./LanguageSwitch";

export type NavDict = {
  about: string;
  practices: string;
  people: string;
  insights: string;
  contact: string;
  cta: string;
  menu: string;
  close: string;
  city: string;
  back: string;
  search: string;
  openSearch: string;
  closeSearch: string;
  searchPlaceholder: string;
  searchHint: string;
  searchResults: string;
  searchNone: string;
  searchNoneBody: string;
  searchPractice: string;
  searchPeople: string;
  searchInsight: string;
  searchPage: string;
  searchGo: string;
};

export default function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: NavDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const practices = getServices(locale);
  const index = getSearchIndex(locale);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const navItems = [
    { href: `${prefix}/firm`, label: nav.about, id: "about" },
    { href: `${prefix}/expertise`, label: nav.practices, id: "practices", mega: true },
    { href: `${prefix}/people`, label: nav.people, id: "people" },
    { href: `${prefix}/insights`, label: nav.insights, id: "insights" },
    { href: `${prefix}/contact`, label: nav.contact, id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          searchOpen
            ? "bg-ink text-paper"
            : menuOpen
            ? "bg-ink text-paper"
            : "bg-paper/95 text-ink backdrop-blur-sm border-b border-line"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-gutter">
          {/* Logo / wordmark */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-3"
            aria-label={siteConfig.name}
          >
            <span className="font-display text-[1.15rem] font-semibold leading-none tracking-tight">
              CCD Legal Group
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
            onMouseLeave={() => setMegaOpen(false)}
          >
            {navItems.map((item) =>
              item.mega ? (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setMegaOpen(true)}
                  onFocus={() => setMegaOpen(true)}
                  className={`relative pb-1 text-[0.82rem] font-medium transition-colors duration-200 ${
                    megaOpen || isActive(item.href)
                      ? "text-burgundy"
                      : "text-ink hover:text-ink/60"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-burgundy transition-transform duration-300 ${
                      megaOpen || isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setMegaOpen(false)}
                  className={`relative pb-1 text-[0.82rem] font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-burgundy"
                      : "text-ink hover:text-ink/60"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-burgundy transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center gap-2 text-[0.78rem] font-medium transition-colors hover:text-burgundy"
              aria-label={searchOpen ? nav.closeSearch : nav.openSearch}
              aria-expanded={searchOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-current">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">{nav.search}</span>
            </button>

            <div className="hidden lg:block">
              <LanguageSwitch locale={locale} />
            </div>

            <Link
              href={`${prefix}/contact`}
              className="hidden items-center gap-2 bg-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-burgundy md:inline-flex"
            >
              {nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 lg:hidden"
              aria-label={menuOpen ? nav.close : nav.menu}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
              <span className="text-[0.78rem] font-medium">
                {menuOpen ? nav.close : nav.menu}
              </span>
            </button>
          </div>
        </div>

        {/* Mega menu — practices */}
        {megaOpen && (
          <div
            className="hidden border-t border-line bg-paper text-ink lg:block"
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-x-10 px-gutter py-10">
              <div className="col-span-3">
                <p className="eyebrow">{nav.practices}</p>
                <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-slate">
                  {nav.practices}
                </p>
                <Link
                  href={`${prefix}/expertise`}
                  className="link-underline mt-6 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.14em]"
                >
                  {nav.practices}
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-2 gap-x-10">
                {practices.map((p) => (
                  <Link
                    key={p.id}
                    href={`${prefix}/expertise#${p.id}`}
                    className="group flex flex-col justify-center border-b border-line py-5 first:border-t"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="sans-title text-[1.15rem] leading-tight transition-colors duration-200 group-hover:text-burgundy">
                        {p.name}
                      </span>
                    </span>
                    <span className="mt-1 max-w-[52ch] text-[0.85rem] leading-relaxed text-slate">
                      {p.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && <SearchOverlay locale={locale} nav={nav} index={index} onClose={() => setSearchOpen(false)} />}

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink text-paper lg:hidden">
          <div className="h-[72px]" />
          <nav className="flex-1 overflow-y-auto px-gutter pt-4 pb-10">
            <div className="mt-2 border-t border-line-ink">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-line-ink">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-3 py-5"
                    >
                      <span className="sans-title text-[1.6rem] leading-none text-paper transition-colors group-hover:text-paper/70">
                        {item.label}
                      </span>
                    </Link>
                    {item.mega && (
                      <span className="text-[0.7rem] uppercase tracking-[0.14em] text-paper/40">
                        {String(practices.length)}
                      </span>
                    )}
                  </div>
                  {item.mega && (
                    <div className="mb-3 flex flex-col gap-1 border-t border-line-ink pt-3">
                      {practices.map((p) => (
                        <Link
                          key={p.id}
                          href={`${prefix}/expertise#${p.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="py-1.5 text-[0.92rem] text-paper/65 transition-colors hover:text-paper"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-2 border-t border-line-ink pt-8 text-sm text-paper/75">
              <a href={`tel:${siteConfig.phones[0].tel}`} className="link-underline w-fit text-base">
                {siteConfig.phones[0].label}
              </a>
              <a href={`tel:${siteConfig.phones[1].tel}`} className="link-underline w-fit text-base">
                {siteConfig.phones[1].label}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="link-underline block w-fit">
                {siteConfig.email}
              </a>
              <p className="pt-3 text-[0.85rem] text-paper/55">{siteConfig.address.primary}</p>
              <div className="pt-2">
                <LanguageSwitch locale={locale} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Search overlay                                                      */
/* ------------------------------------------------------------------ */

function SearchOverlay({
  locale,
  nav,
  index,
  onClose,
}: {
  locale: Locale;
  nav: NavDict;
  index: ReturnType<typeof getSearchIndex>;
  onClose: () => void;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const normalized = q.trim().toLowerCase();
  const results = normalized
    ? index.filter((e) => e.query.toLowerCase().includes(normalized)).slice(0, 10)
    : [];

  const typeLabel = (t: string) => {
    switch (t) {
      case "practice":
        return nav.searchPractice;
      case "person":
        return nav.searchPeople;
      case "insight":
        return nav.searchInsight;
      default:
        return nav.searchPage;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper"
      role="dialog"
      aria-modal="true"
      aria-label={nav.search}
    >
      <div className="mx-auto w-full max-w-[900px] px-gutter pt-24 md:pt-32">
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="border-b border-line-ink"
        >
          <label htmlFor="firm-search" className="eyebrow text-paper/45">
            {nav.search}
          </label>
          <div className="flex items-center gap-4 pb-3 pt-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-paper/60">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id="firm-search"
              ref={inputRef}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={nav.searchPlaceholder}
              className="w-full bg-transparent font-sans text-[clamp(1.4rem,4vw,2.2rem)] font-medium text-paper outline-none placeholder:text-paper/30"
            />
            <button
              type="button"
              onClick={onClose}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-paper/55 transition-colors hover:text-paper"
              aria-label={nav.closeSearch}
            >
              {nav.close} ✕
            </button>
          </div>
        </form>

        <div className="pb-24 pt-6">
          {!normalized ? (
            <p className="text-sm text-paper/50">{nav.searchHint}</p>
          ) : results.length === 0 ? (
            <div>
              <p className="font-sans text-xl text-paper">{nav.searchNone}</p>
              <p className="mt-3 max-w-md text-sm text-paper/55">{nav.searchNoneBody}</p>
              <Link
                href={`${prefix}/contact`}
                onClick={onClose}
                className="mt-6 inline-flex items-center bg-paper px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper/85"
              >
                {nav.contact}
              </Link>
            </div>
          ) : (
            <div>
              <p className="eyebrow text-paper/45">
                {nav.searchResults} · {results.length}
              </p>
              <ul className="mt-4 border-t border-line-ink">
                {results.map((r) => (
                  <li key={`${r.type}-${r.label}-${r.href}`} className="border-b border-line-ink py-4">
                    <Link
                      href={r.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between gap-6"
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-sans text-[1.1rem] text-paper transition-colors group-hover:text-paper/75">
                          {r.label}
                        </span>
                        {r.sublabel && (
                          <span className="mt-0.5 block truncate text-sm text-paper/50">{r.sublabel}</span>
                        )}
                      </span>
                      <span className="shrink-0 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-paper/40">
                        {typeLabel(r.type)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-paper/55 transition-colors hover:text-paper"
      >
        {nav.closeSearch}
      </button>
    </div>
  );
}
