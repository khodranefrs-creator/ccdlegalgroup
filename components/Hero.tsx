"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { imagesConfig } from "@/config/images";
import { VisualBlock } from "./VisualBlock";
import { type Locale } from "@/config/site";

type HeroDict = {
  eyebrow: string;
  line1_1: string;
  line1_2: string;
  line2_1: string;
  line2_2: string;
  bottom: string;
  bottom2: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scroll: string;
};

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: HeroDict;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const prefix = locale === "es" ? "" : `/${locale}`;

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduced.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  }

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper pt-[var(--header-h)]"
    >
      {/* Eyebrow — top */}
      <div className="mx-auto w-full max-w-[1600px] px-gutter pt-6">
        <p
          className="eyebrow text-stone animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {t.eyebrow}
        </p>
      </div>

      {/* Core — headline + image */}
      <div className="relative mx-auto w-full max-w-[1600px] flex-1 px-gutter">
        <div className="grid min-h-0 grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Headline (center-left, one word breaks grid) */}
          <div className="col-span-12 flex flex-col justify-center md:col-span-9 py-10 md:py-0">
            <h1 className="font-display text-[clamp(3.2rem,11vw,10.5rem)] leading-[0.92] font-light tracking-[-0.02em]">
              <span
                className="block animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                {t.line1_1}
              </span>
              <span
                className="block translate-x-[0.04em] italic text-oxblood animate-fade-up"
                style={{ animationDelay: "0.32s" }}
              >
                {t.line1_2}
              </span>
              <span
                className="block ml-[1.1em] animate-fade-up"
                style={{ animationDelay: "0.44s" }}
              >
                {t.line2_1}
              </span>
              <span
                className="block ml-[1.1em] italic text-oxblood animate-fade-up"
                style={{ animationDelay: "0.56s" }}
              >
                {t.line2_2}
              </span>
            </h1>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up" style={{ animationDelay: "0.72s" }}>
              <Link
                href={`${prefix}/contact`}
                className="group inline-flex items-center gap-3 bg-oxblood text-paper rounded-full px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 hover:bg-oxblood-deep"
              >
                {t.ctaPrimary}
                <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`${prefix}/firm`}
                className="link-underline text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-ink"
              >
                {t.ctaSecondary}
              </Link>
            </div>

            {/* Mobile-only visual crop */}
            <div className="mt-12 md:hidden animate-fade-up" style={{ animationDelay: "0.85s" }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <VisualBlock
                  src={imagesConfig.heroArchitecture}
                  alt="Arquitectura madrileña — CCD Legal Group"
                  variant="oxblood"
                  label="Madrid"
                  sizes="100vw"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* Image block (right, lower, art-directed) — parallax */}
          <div className="col-span-12 md:col-span-3 hidden md:flex flex-col justify-end pb-2">
            <div
              className="relative aspect-[3/4] w-full animate-clip-in"
              style={{
                animationDelay: "0.5s",
                transform: `translate(${tilt.x * -6}px, ${tilt.y * -6}px)`,
                transition: "transform 0.4s ease-out",
              }}
            >
              <VisualBlock
                src={imagesConfig.heroArchitecture}
                alt="Arquitectura madrileña — CCD Legal Group"
                variant="oxblood"
                label="Madrid"
                sizes="(min-width: 768px) 22vw, 100vw"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — firm identity + scroll */}
      <div className="relative mx-auto w-full max-w-[1600px] px-gutter pb-8 pt-8">
        <div className="hairline mb-6" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight font-medium">
              {t.bottom}
            </p>
            <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight font-medium text-oxblood">
              {t.bottom2}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-stone">
              {t.scroll}
            </span>
            <span className="scroll-line block h-16 w-px bg-line" />
          </div>
        </div>

        {/* subtle full width ink band at very bottom */}
        <div className="absolute -bottom-8 left-0 right-0 h-px bg-line" />
      </div>
    </section>
  );
}
