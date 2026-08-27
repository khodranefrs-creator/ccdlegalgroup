"use client";

import { useState } from "react";
import Link from "next/link";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { type Locale } from "@/config/site";
import Reveal from "./Reveal";

type ExpertiseDict = {
  label: string;
  headingTop: string;
  headingBottom: string;
  intro: string;
  clauseLabel: string;
  consult: string;
};

type ServiceItem = {
  id: string;
  verified: boolean;
  name: string;
  description: string;
};

const IMAGE_MAP: Record<string, string> = {
  "legal-advisory": imagesConfig.officeInterior,
  "workplace-accidents": imagesConfig.stairInterior,
  "traffic-accidents": imagesConfig.cityWide,
  "business-advisory": imagesConfig.cityWide,
};

export default function SectionExpertise({
  locale,
  heading,
  services,
}: {
  locale: Locale;
  heading: ExpertiseDict;
  services: ServiceItem[];
}) {
  const [active, setActive] = useState(0);
  const prefix = locale === "es" ? "" : `/${locale}`;
  const current = services[active];

  return (
    <section id="expertise" className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Left — heading + interactive photo panel */}
          <div className="col-span-12 md:col-span-6">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="eyebrow text-oxblood">{heading.label}</p>
                <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.95] font-light">
                  {heading.headingTop}
                  <br />
                  <span className="italic">{heading.headingBottom}</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">
                  {heading.intro}
                </p>
              </Reveal>

              {/* Interactive photo panel */}
              <div className="relative mt-10 hidden md:block">
                <MediaField
                  src={IMAGE_MAP[current?.id] ?? imagesConfig.officeInterior}
                  alt={current?.name ?? ""}
                  label={current?.verified ? heading.label : heading.clauseLabel}
                  index={`0${active + 1}`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] w-full transition-opacity duration-500"
                />
                <div className="pointer-events-none absolute inset-0 grid items-end p-6">
                  <span className="stamp border-ink/30 text-ink/70 bg-paper/60 backdrop-blur-sm">
                    {heading.clauseLabel} 0{active + 1}
                  </span>
                </div>
              </div>

              {/* Mobile photo panel */}
              <div className="relative mt-10 md:hidden">
                <MediaField
                  src={IMAGE_MAP[current?.id] ?? imagesConfig.officeInterior}
                  alt={current?.name ?? ""}
                  label={heading.label}
                  index={`0${active + 1}`}
                  sizes="100vw"
                  className="aspect-[16/9] w-full"
                />
              </div>
            </div>
          </div>

          {/* Right — clause index (ledger, not cards) */}
          <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
            <div className="border-t border-line">
              {services.map((s, i) => {
                const isActive = active === i;
                return (
                  <div key={s.id} className="border-b border-line">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-start gap-5 py-7 text-left md:py-8"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`editorial-number text-[1.6rem] leading-none transition-all duration-400 ${
                          isActive
                            ? "text-oxblood translate-x-1"
                            : "text-ink/35 group-hover:translate-x-1 group-hover:text-ink/60"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-none transition-all duration-400 ${
                            isActive
                              ? "font-medium italic text-oxblood"
                              : "font-light group-hover:text-ink/80"
                          }`}
                        >
                          {s.name}
                        </span>
                        <span
                          className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                        >
                          <span className="overflow-hidden">
                            <span className="block max-w-md pt-3 text-sm leading-relaxed text-ink/60">
                              {s.description}
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="pt-1">
                        <span
                          className={`arrow text-xl transition-all duration-300 ${
                            isActive
                              ? "text-oxblood translate-x-1"
                              : "text-ink/30 group-hover:text-oxblood"
                          }`}
                        >
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <Link
              href={`${prefix}/expertise`}
              className="group-arrow link-underline mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-semibold"
            >
              <span>{heading.consult}</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
