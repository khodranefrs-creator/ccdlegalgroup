"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const related = practices.filter((p) => p.id !== current.id);

  return (
    <section className="bg-paper border-b border-line" id="practices">
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        {/* Quiet header */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-6 md:gap-x-12 md:items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="sans-title mt-3 text-[1.5rem] leading-tight text-ink md:text-[1.7rem]">
              {t.heading}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-[0.95rem] leading-relaxed text-slate">{t.intro}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10 md:gap-x-12">
          {/* Left rail — index, no numbers */}
          <div className="col-span-12 lg:col-span-5">
            <nav className="border-t border-line" aria-label={t.eyebrow}>
              {practices.map((p) => {
                const isActive = p.id === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className={`group flex w-full items-center justify-between gap-5 border-b border-line py-5 text-left transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-slate hover:text-ink"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="font-display text-[1.35rem] leading-tight font-medium">
                      {p.name}
                    </span>
                    <span
                      className={`h-px shrink-0 transition-all duration-300 ${
                        isActive ? "w-8 bg-burgundy" : "w-0 bg-ink group-hover:w-8"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </nav>
            <p className="mt-6 max-w-[52ch] text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-slate-2">
              {t.note}
            </p>
          </div>

          {/* Right content area */}
          <div className="col-span-12 lg:col-span-7">
            <div key={current.id} className="animate-fade-in border-t border-line">
              {/* Services */}
              <div className="py-8">
                <p className="eyebrow">{t.servicesLabel}</p>
                <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
                  {current.services.map((s) => (
                    <li
                      key={s}
                      className="py-2.5 text-[0.98rem] text-ink"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How we assist */}
              <div className="border-t border-line py-8">
                <p className="text-[0.98rem] leading-relaxed text-slate">
                  {current.summary}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <Link
                  href={`${prefix}/contact`}
                  className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-burgundy"
                >
                  {t.consult}
                </Link>
                <a
                  href={`${prefix}/expertise#${current.id}`}
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate transition-colors hover:text-ink"
                >
                  {t.explore}
                </a>
              </div>
            </div>

            {/* Other practices — plain text links, no arrows */}
            <div className="mt-10">
              <p className="eyebrow">{t.heading}</p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-4">
                {related.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className="text-[0.95rem] text-ink transition-colors hover:text-burgundy"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
