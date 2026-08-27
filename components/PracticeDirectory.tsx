"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { type Locale } from "@/config/site";

type Practice = {
  id: string;
  no: string;
  name: string;
  summary: string;
  services: string[];
};

type PracticesDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  servicesLabel: string;
  consult: string;
  explore: string;
  note: string;
};

const PRAC_IMG: Record<string, string> = {
  civil: imagesConfig.officeInterior,
  criminal: imagesConfig.stairInterior,
  family: imagesConfig.officeInterior,
  immigration: imagesConfig.stairInterior,
  advisory: imagesConfig.cityWide,
};

export default function PracticeDirectory({
  locale,
  t,
  practices,
}: {
  locale: Locale;
  t: PracticesDict;
  practices: Practice[];
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return practices[0]?.id ?? "";
    const id = window.location.hash.replace("#", "");
    return practices.some((p) => p.id === id) ? id : practices[0]?.id ?? "";
  });

  // Respond to hash changes (e.g. #civil from navigation links)
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (practices.some((p) => p.id === id)) {
        setActive(id);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [practices]);

  const current = practices.find((p) => p.id === active) ?? practices[0];

  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8 md:items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow text-oxblood">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
                {t.heading}{" "}
                <span className="italic font-normal">{t.headingAccent}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-sm leading-relaxed text-navy/65">{t.intro}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8 lg:gap-x-12">
          {/* Left rail — category navigation */}
          <div className="col-span-12 lg:col-span-4">
            <nav className="border-t border-line" aria-label={t.eyebrow}>
              {practices.map((p) => {
                const isActive = p.id === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className={`group flex w-full items-baseline gap-4 border-b border-line py-4 text-left transition-colors duration-300 ${
                      isActive ? "text-oxblood" : "hover:text-oxblood"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="tabular text-[0.7rem] opacity-60">{p.no}</span>
                    <span
                      className={`font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight transition-all duration-300 ${
                        isActive ? "font-medium" : "font-normal"
                      }`}
                    >
                      {p.name}
                    </span>
                    <span
                      className={`ml-auto text-lg font-display transition-all duration-300 ${
                        isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-8 border-t border-line pt-5 hidden lg:block">
              <Link
                href={`${prefix}/contact`}
                className="group-sweep inline-flex items-baseline gap-3"
              >
                <span className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold">
                  {t.consult}
                </span>
                <span className="text-lg font-display transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right content area */}
          <div className="col-span-12 lg:col-span-8">
            <div
              key={current.id}
              className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8 animate-fade-in"
            >
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow text-stone">{t.servicesLabel}</p>
                <h3 className="mt-4 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-tight">
                  {current.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
                  {current.summary}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <MediaField
                  src={PRAC_IMG[current.id]}
                  alt={current.name}
                  corner={current.no}
                  caption={current.name}
                  sizes="(min-width: 768px) 36vw, 100vw"
                  className="aspect-[4/3] w-full"
                />
              </div>

              {/* Services */}
              <div className="col-span-12">
                <div className="border-t border-line">
                  {current.services.map((s, i) => (
                    <div
                      key={s}
                      className="group flex items-baseline gap-4 border-b border-line py-3.5"
                    >
                      <span className="tabular text-[0.62rem] uppercase text-stone">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.15rem] font-light">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`${prefix}/contact`}
                    className="inline-flex items-center gap-3 bg-navy px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood"
                  >
                    {t.consult} <span>→</span>
                  </Link>
                  <a
                    href={`${prefix}/expertise#${current.id}`}
                    className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold link-underline"
                  >
                    {t.explore}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-[0.72rem] uppercase tracking-[0.16em] text-stone">
            {t.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
