"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { type Locale } from "@/config/site";

type HeroDict = {
  filed: string;
  city: string;
  district: string;
  est: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scroll: string;
  legal: string;
  business: string;
  advisory: string;
};

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: HeroDict;
}) {
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper">
      {/* Top metadata strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-gutter pt-[calc(var(--header-h)+1.25rem)]">
        <div className="flex items-center justify-between">
          <span className="stamp border-ink/30 text-ink/70">
            {t.filed}
          </span>
          <span className="tech text-ink/40 hidden sm:block">
            {t.city} · {t.district}
          </span>
        </div>
      </div>

      {/* Main composition */}
      <div className="relative mx-auto w-full max-w-[1600px] flex-1 px-gutter">
        <div className="grid min-h-0 grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Headline — tall, spans left */}
          <div className="col-span-12 md:col-span-9 lg:col-span-8 flex flex-col justify-center py-10 md:py-0">
            <h1 className="font-display text-[clamp(3rem,10.5vw,10rem)] leading-[0.9] font-light tracking-[-0.02em]">
              <span className="block">{t.line1}</span>
              <span className="block italic text-oxblood">{t.line2}</span>
              <span className="block translate-x-[0.03em]">{t.line3}</span>
              <span className="block italic text-oxblood translate-x-[0.04em]">
                {t.line4}
              </span>
            </h1>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="group inline-flex items-center gap-3 bg-ink text-paper rounded-full px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 hover:bg-oxblood"
              >
                {t.ctaPrimary}
                <span className="transition-transform duration-400 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href={`${prefix}/firm`}
                className="link-underline text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-ink"
              >
                {t.ctaSecondary}
              </Link>
            </div>

            {/* Mobile visual field */}
            <div className="mt-14 md:hidden">
              <MediaField
                src={imagesConfig.heroArchitecture}
                alt="Arquitectura madrileña al atardecer — CCD Legal Group"
                label={`${t.city} — Chamberí`}
                index="01"
                sizes="100vw"
                className="aspect-[16/10] w-full"
              />
            </div>
          </div>

          {/* Photoreal tall field — right, bleeding to gutter edge */}
          <div className="col-span-12 md:col-span-3 lg:col-span-4 hidden md:flex flex-col justify-end gap-4 md:pb-2">
            <MediaField
              src={imagesConfig.heroArchitecture}
              alt="Arquitectura madrileña al atardecer — CCD Legal Group"
              label={`${t.city} — Chamberí`}
              index="01"
              priority
              sizes="(min-width: 768px) 32vw, 100vw"
              className="aspect-[3/4] w-full"
            />
          </div>
        </div>
      </div>

      {/* Case-file footer strip */}
      <div className="relative mx-auto w-full max-w-[1600px] px-gutter pb-7">
        <div className="hairline mb-5" />
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[clamp(1.1rem,2vw,1.6rem)] leading-tight font-medium">
              Cutilla Díaz & Cons
            </p>
            <p className="font-display text-[clamp(1.1rem,2vw,1.6rem)] leading-tight font-medium text-oxblood">
              Abogados
            </p>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[0.6rem] uppercase tracking-[0.22em] text-ink/50">
            <span>{t.legal}</span>
            <span className="h-3 w-px bg-ink/20" />
            <span>{t.business}</span>
            <span className="h-3 w-px bg-ink/20" />
            <span>{t.advisory}</span>
          </div>

          <div className="flex items-center gap-3 text-ink/50">
            <span className="tech">{t.scroll}</span>
            <span className="scroll-line block h-12 w-px bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
