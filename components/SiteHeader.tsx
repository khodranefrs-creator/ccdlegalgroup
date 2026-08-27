"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, type Locale } from "@/config/site";
import LanguageSwitch from "./LanguageSwitch";

type NavDict = {
  firm: string;
  expertise: string;
  carolina: string;
  insights: string;
  contact: string;
  cta: string;
  menu: string;
  close: string;
  city: string;
};

export default function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: NavDict;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const prefix = locale === "es" ? "" : `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: `${prefix}/firm`, label: nav.firm, no: "02" },
    { href: `${prefix}/expertise`, label: nav.expertise, no: "03" },
    { href: `${prefix}/carolina`, label: nav.carolina, no: "04" },
    { href: `${prefix}/insights`, label: nav.insights, no: "05" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-md py-2.5"
            : "border-b border-transparent bg-transparent py-5"
        }`}
        style={{ ["--header-h" as string]: scrolled ? "62px" : "84px" }}
      >
        <div className="mx-auto flex items-center justify-between px-gutter max-w-[1600px]">
          {/* Wordmark */}
          <Link
            href={prefix || "/"}
            className="group flex items-baseline gap-2"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="font-display text-[1.7rem] leading-none font-semibold tracking-tight">
              CCD
            </span>
            <span className="flex flex-col leading-none">
              <span className="hidden lg:block text-[0.48rem] tracking-[0.3em] uppercase opacity-60">
                Legal Group
              </span>
              <span className="hidden md:block lg:hidden text-[0.48rem] tracking-[0.3em] uppercase opacity-60">
                Legal Group
              </span>
            </span>
            <span className="ml-3 hidden xl:block text-[0.55rem] tracking-[0.22em] uppercase opacity-40">
              Madrid · Chamberí
            </span>
          </Link>

          {/* Desktop nav — editorial, numbered */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primaria"
          >
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== `${prefix}` && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-baseline gap-1.5 px-3 py-2 text-[0.74rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? "text-oxblood font-semibold" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <span className="opacity-40 text-[0.55rem] transition-colors group-hover:text-oxblood">
                    {item.no}
                  </span>
                  <span className="link-underline">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-6">
            <LanguageSwitch locale={locale} />

            <Link
              href={`${prefix}/contact`}
              className="hidden md:inline-flex items-center gap-2 bg-ink text-paper rounded-full px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:bg-oxblood"
            >
              {nav.cta}
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col items-end gap-1.5 p-2 -mr-2"
              aria-label={open ? nav.close : nav.menu}
              aria-expanded={open}
            >
              <span
                className={`block h-px bg-current transition-all duration-400 ${
                  open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-400 ${
                  open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu — document index */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-ink text-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <nav
            className="flex h-full flex-col justify-center px-gutter"
            aria-label="Móvil"
          >
            <p className="tech text-paper/40 mb-8">{nav.city} — {nav.cta}</p>
            <div className="space-y-0">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-line-ink py-5"
                  style={{
                    transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  }}
                >
                  <span className="tech text-beige/50">{item.no}</span>
                  <span className="font-display text-4xl font-light leading-none transition-colors duration-300 group-hover:text-beige">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="px-gutter pb-12">
            <div className="border-t border-line-ink pt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="tech text-paper/40">Contacto</span>
              <a
                href={`tel:${siteConfig.phones[0].tel}`}
                className="text-sm text-paper hover:text-beige"
              >
                {siteConfig.phones[0].label}
              </a>
              <a
                href={`mailto:${siteConfig.emails.despacho}`}
                className="link-underline text-sm text-paper/80 hover:text-paper"
              >
                {siteConfig.emails.despacho}
              </a>
              <LanguageSwitch locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
