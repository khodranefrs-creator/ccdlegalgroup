"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getServices } from "@/config/services";
import { siteConfig, type Locale } from "@/config/site";
import LanguageSwitch from "./LanguageSwitch";

type NavDict = {
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
  const [scrolled, setScrolled] = useState(false);

  const practices = getServices(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-navy text-ivory shadow-[0_1px_0_var(--color-line-navy)]"
            : "bg-transparent text-navy"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1360px] items-center justify-between px-gutter transition-[padding] duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-3"
            aria-label={siteConfig.name}
          >
            <span className="flex h-9 w-9 items-center justify-center border border-current">
              <span className="font-display text-lg font-semibold leading-none">CCD</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
                CCD Legal Group
              </span>
              <span
                className={`block text-[0.58rem] uppercase tracking-[0.24em] ${
                  scrolled || menuOpen ? "text-ivory/60" : "text-stone/70"
                }`}
              >
                {nav.city} · Legal & Business
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
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
                  className={`relative text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive(item.href) ? "text-oxblood-2 font-semibold" : "opacity-85 hover:opacity-100"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                >
                  {item.label}
                  <span
                    className={`absolute -left-0.5 -right-0.5 bottom-[-4px] h-px origin-left scale-x-0 bg-oxblood-2 transition-transform duration-300 ${
                      megaOpen || isActive(item.href) ? "scale-x-100" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setMegaOpen(false)}
                  className={`relative text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive(item.href) ? "text-oxblood-2 font-semibold" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -left-0.5 -right-0.5 bottom-[-4px] h-px origin-left scale-x-0 bg-oxblood-2 transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitch locale={locale} />
            <Link
              href={`${prefix}/contact`}
              className="hidden items-center gap-2 bg-oxblood px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood-2 md:inline-flex"
            >
              {nav.cta}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] lg:hidden"
              aria-label={menuOpen ? nav.close : nav.menu}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
              <span className="hidden sm:inline">{menuOpen ? nav.close : nav.menu}</span>
            </button>
          </div>
        </div>

        {/* Mega navigation — practices */}
        {megaOpen && (
          <div
            className="hidden border-t border-line-navy bg-ivory text-navy lg:block"
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-x-8 px-gutter py-8">
              <div className="col-span-3">
                <p className="eyebrow text-stone">{nav.practices}</p>
                <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-navy/70">
                  {nav.practices}
                </p>
                <Link
                  href={`${prefix}/expertise`}
                  className="link-underline mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] font-semibold"
                >
                  {nav.practices} →
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-2 gap-x-8">
                {practices.map((p) => (
                  <Link
                    key={p.id}
                    href={`${prefix}/expertise#${p.id}`}
                    className="group flex items-baseline gap-4 border-b border-line py-3.5 last:border-b-0"
                  >
                    <span className="tabular text-[0.7rem] text-stone">{p.no}</span>
                    <span className="font-display text-xl font-light transition-colors duration-200 group-hover:text-oxblood">
                      {p.name}
                    </span>
                    <span className="ml-auto translate-x-[-4px] opacity-0 transition-all duration-300 font-display group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-navy text-ivory lg:hidden">
          {/* scroll space for header */}
          <div className="h-20" />
          <nav className="flex-1 overflow-y-auto px-gutter pt-6 pb-10">
            <p className="eyebrow text-ivory/50">{nav.menu}</p>
            <div className="mt-6 border-t border-line-navy">
              {navItems.map((item, i) => (
                <div key={item.id} className="border-b border-line-navy">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-5 py-6"
                  >
                    <span className="tabular text-[0.7rem] text-ivory/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[clamp(1.8rem,7vw,3rem)] font-light transition-colors group-hover:text-oxblood-2">
                      {item.label}
                    </span>
                  </Link>
                  {item.mega && (
                    <div className="ml-16 mb-2 flex flex-col gap-1">
                      {practices.map((p) => (
                        <Link
                          key={p.id}
                          href={`${prefix}/expertise#${p.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="text-[0.8rem] text-ivory/60 hover:text-ivory"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-1 text-sm text-ivory/70">
              <a href={`tel:${siteConfig.phones[0].tel}`} className="link-underline inline-block">
                {siteConfig.phones[0].label}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline block"
              >
                {siteConfig.email}
              </a>
              <p className="pt-3 text-ivory/50">{siteConfig.address.primary}</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
