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

        {/* Editorial index — ruled rows, not cards */}
        <div className="mt-14">
          <div className="grid grid-cols-12 gap-x-4 border-b border-line pb-4 md:gap-x-8">
            <span className="col-span-2 md:col-span-1 tech text-ink/40">nº</span>
            <span className="hidden md:block md:col-span-2 tech text-ink/40">Categoría</span>
            <span className="col-span-8 md:col-span-7 tech text-ink/40">Perspectiva</span>
            <span className="col-span-2 md:col-span-2 tech text-ink/40 text-right">Fecha</span>
          </div>

          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Link
                href={`${prefix}/insights`}
                className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-6 md:gap-x-8 md:py-7 transition-colors duration-300 hover:bg-paper"
              >
                <span className="col-span-2 md:col-span-1 editorial-number text-lg text-ink/35 transition-colors group-hover:text-oxblood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden md:block md:col-span-2 tech text-ink/45 group-hover:text-oxblood">
                  {item.category}
                </span>
                <span className="col-span-8 md:col-span-7 font-display text-[clamp(1.1rem,2.4vw,1.9rem)] leading-tight font-light transition-all duration-300 group-hover:italic group-hover:text-oxblood">
                  {item.title}
                </span>
                <span className="col-span-2 md:col-span-2 text-right">
                  <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink/45">
                    {formatDate(item.date, locale)}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-xs text-ink/45">{heading.sourceNote}</p>
          <Link
            href={`${prefix}/insights`}
            className="group inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-oxblood"
          >
            <span>{heading.viewAll}</span>
            <span className="arrow transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
