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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: `${prefix}/firm`, label: nav.firm },
    { href: `${prefix}/expertise`, label: nav.expertise },
    { href: `${prefix}/carolina`, label: nav.carolina },
    { href: `${prefix}/insights`, label: nav.insights },
    { href: `${prefix}/contact`, label: nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-sm py-3"
            : "border-b border-transparent bg-transparent py-5"
        }`}
        style={{ ["--header-h" as string]: scrolled ? "64px" : "84px" }}
      >
        <div className="mx-auto flex items-center justify-between px-gutter max-w-[1600px]">
          {/* Logo */}
          <Link
            href={prefix || "/"}
            className="group flex items-baseline gap-2"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="font-display text-[1.6rem] leading-none font-semibold tracking-tight">
              CCD
            </span>
            <span className="hidden sm:block text-[0.55rem] tracking-[0.28em] uppercase opacity-55 leading-none w-24">
              Legal Group
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== `${prefix}` && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-[0.78rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? "text-oxblood font-semibold" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-6">
            <LanguageSwitch locale={locale} />

            <Link
              href={`${prefix}/contact`}
              className="hidden md:inline-flex items-center gap-2 border border-ink/25 rounded-full px-5 py-2 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-all duration-400 hover:border-oxblood hover:text-oxblood hover:tracking-[0.2em]"
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

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-ink text-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-center px-gutter" aria-label="Mobile">
          <div className="space-y-1">
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
                <span className="text-[0.65rem] text-beige/70">
                  0{i + 1}
                </span>
                <span className="font-display text-5xl font-light leading-none transition-colors duration-300 group-hover:text-beige">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`tel:${siteConfig.phones[0].tel}`}
              className="text-sm text-beige"
            >
              {siteConfig.phones[0].label}
            </a>
            <a
              href={`mailto:${siteConfig.emails.despacho}`}
              className="text-sm text-beige"
            >
              {siteConfig.emails.despacho}
            </a>
            <LanguageSwitch locale={locale} />
          </div>
        </nav>
      </div>
    </>
  );
}
