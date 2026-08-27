"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
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
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-10 md:items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-[0.95rem] leading-relaxed text-slate">{t.intro}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
          {/* Left rail — practice index */}
          <div className="col-span-12 lg:col-span-5">
            <nav className="border-t border-line" aria-label={t.eyebrow}>
              {practices.map((p) => {
                const isActive = p.id === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className={`group flex w-full items-center justify-between gap-5 border-b border-line py-5 text-left transition-colors duration-300 ${
                      isActive ? "text-burgundy" : "text-ink hover:text-burgundy"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="flex min-w-0 items-center gap-5">
                      <span className="tabular text-[0.72rem] font-medium text-slate-2">
                        {p.no}
                      </span>
                      <span className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] leading-tight">
                        {p.name}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-xl transition-all duration-300 ${
                        isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-8 border-t border-line pt-5">
              <p className="max-w-[48ch] text-[0.74rem] uppercase leading-relaxed tracking-[0.12em] text-slate-2">
                {t.note}
              </p>
            </div>
          </div>

          {/* Right content area */}
          <div className="col-span-12 lg:col-span-7">
            <div key={current.id} className="animate-fade-in border-t border-line">
              {/* Overview */}
              <div className="border-b border-line py-8">
                <p className="eyebrow">{t.servicesLabel}</p>
                <h3 className="mt-4 font-display text-[clamp(1.7rem,2.6vw,2.3rem)] leading-tight font-semibold">
                  {current.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
                  {current.summary}
                </p>
              </div>

              {/* Services */}
              <div className="py-8">
                <p className="eyebrow">{t.servicesLabel} · {t.heading}</p>
                <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {current.services.map((s) => (
                    <li key={s} className="flex items-baseline gap-3 border-b border-line py-2.5">
                      <span className="h-1 w-1 shrink-0 self-center bg-slate-2" aria-hidden="true" />
                      <span className="text-[0.98rem] text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <Link
                  href={`${prefix}/contact`}
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-burgundy"
                >
                  {t.consult} <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
                <a
                  href={`${prefix}/expertise#${current.id}`}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate transition-colors hover:text-ink"
                >
                  {t.explore} →
                </a>
              </div>
            </div>

            {/* Related practices */}
            <div className="mt-10">
              <p className="eyebrow">{t.heading}</p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-4">
                {related.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className="text-[0.9rem] text-ink transition-colors hover:text-burgundy"
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
