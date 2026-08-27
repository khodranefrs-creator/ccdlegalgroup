import Link from "next/link";
import { type Locale } from "@/config/site";

type InsightsDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  viewAll: string;
  categoryLabel: string;
  titleLabel: string;
  dateLabel: string;
  readLabel: string;
  sourceNote: string;
  emptyTitle: string;
  emptyBody: string;
  emptyCta: string;
};

type InsightItem = {
  id: string;
  published: boolean;
  category: string;
  title: string;
  date: string;
};

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function SectionInsights({
  locale,
  t,
  items,
}: {
  locale: Locale;
  t: InsightsDict;
  items: InsightItem[];
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const published = items.filter((i) => i.published);

  return (
    <section className="bg-paper border-b border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        {/* Quiet header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="sans-title mt-3 text-[1.5rem] leading-tight text-ink md:text-[1.7rem]">
              {t.heading}
            </h2>
          </div>
          <Link
            href={`${prefix}/insights`}
            className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            {t.viewAll}
          </Link>
        </div>

        {published.length > 0 ? (
          <div className="mt-8">
            <div className="grid grid-cols-12 gap-x-5 border-b border-line pb-3 md:gap-x-8">
              <span className="col-span-3 md:col-span-2 eyebrow">{t.dateLabel}</span>
              <span className="col-span-4 hidden md:block eyebrow">{t.categoryLabel}</span>
              <span className="col-span-7 md:col-span-5 eyebrow">{t.titleLabel}</span>
              <span className="col-span-2 hidden md:block eyebrow text-right">{t.readLabel}</span>
            </div>
            {published.map((item) => (
              <Link
                key={item.id}
                href={`${prefix}/insights`}
                className="group grid grid-cols-12 items-baseline gap-x-5 border-b border-line py-5 transition-colors duration-200 hover:bg-mist md:gap-x-8"
              >
                <span className="col-span-3 md:col-span-2 tabular text-[0.8rem] tracking-[0.02em] text-slate">
                  {formatDate(item.date, locale)}
                </span>
                <span className="col-span-4 hidden text-[0.8rem] uppercase tracking-[0.1em] text-slate-2 md:block">
                  {item.category}
                </span>
                <span className="col-span-9 md:col-span-5 text-[1rem] leading-snug text-ink transition-colors duration-200 group-hover:text-burgundy">
                  {item.title}
                </span>
                <span className="col-span-2 hidden justify-end text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate transition-opacity duration-200 opacity-0 group-hover:opacity-100 md:flex">
                  {t.readLabel}
                </span>
              </Link>
            ))}
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.12em] text-slate-2">{t.sourceNote}</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-8 border-t border-line pt-12 md:gap-x-12">
            <div className="col-span-12 md:col-span-5">
              <h3 className="font-display text-[1.6rem] leading-tight font-medium text-ink">
                {t.emptyTitle}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7">
              <p className="text-[0.95rem] leading-relaxed text-slate">{t.emptyBody}</p>
              <Link
                href={`${prefix}/firm`}
                className="link-underline mt-6 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                {t.emptyCta}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
