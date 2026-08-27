import Link from "next/link";
import Reveal from "./Reveal";
import { type Locale } from "@/config/site";

type InsightsDict = {
  label: string;
  heading: string;
  viewAll: string;
  sourceNote: string;
};

type InsightItem = {
  id: string;
  category: string;
  title: string;
  date: string;
};

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "short",
  });
}

export default function SectionInsights({
  locale,
  heading,
  items,
}: {
  locale: Locale;
  heading: InsightsDict;
  items: InsightItem[];
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="relative bg-paper-2">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <Reveal>
          <p className="eyebrow text-oxblood">{heading.label}</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-none font-light">
              {heading.heading}
            </h2>
            <Link
              href={`${prefix}/insights`}
              className="group-arrow link-underline inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-semibold"
            >
              <span>{heading.viewAll}</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-line md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 100}
              className="group bg-paper"
            >
              <Link
                href={`${prefix}/insights`}
                className="group flex h-full flex-col p-8 transition-all duration-300 hover:bg-paper md:p-10 md:hover:-translate-y-1"
              >
                <div className="flex items-baseline justify-between">
                  <p className="eyebrow text-stone group-hover:text-oxblood transition-colors duration-300">
                    {item.category}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                    {formatDate(item.date, locale)}
                  </p>
                </div>
                <h3 className="mt-10 font-display text-[1.7rem] leading-tight font-light">
                  {item.title}
                </h3>
                <span className="mt-auto pt-10 flex justify-end">
                  <span className="arrow text-2xl text-ink/40 transition-all duration-300 group-hover:text-oxblood group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-stone">{heading.sourceNote}</p>
        </div>
      </div>
    </section>
  );
}
