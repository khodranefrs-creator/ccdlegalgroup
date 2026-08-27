import Link from "next/link";
import Reveal from "./Reveal";
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
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-oxblood">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
                {t.heading} <span className="italic font-normal">{t.headingAccent}</span>
              </h2>
            </div>
            <Link
              href={`${prefix}/insights`}
              className="group-sweep inline-flex items-baseline gap-3"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold">{t.viewAll}</span>
              <span className="font-display text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>

        {published.length > 0 ? (
          <div className="mt-12">
            <div className="grid grid-cols-12 gap-x-4 border-b border-line pb-3 md:gap-x-8">
              <span className="col-span-2 md:col-span-2 eyebrow text-stone">{t.categoryLabel}</span>
              <span className="col-span-6 md:col-span-7 eyebrow text-stone">{t.titleLabel}</span>
              <span className="col-span-2 md:col-span-2 eyebrow text-stone text-right">{t.dateLabel}</span>
              <span className="col-span-2 hidden md:block eyebrow text-stone text-right">{t.readLabel}</span>
            </div>
            {published.map((item, i) => (
              <Reveal delay={i * 60} key={item.id}>
                <Link
                  href={`${prefix}/insights`}
                  className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-6 md:gap-x-8 transition-colors duration-300 hover:bg-ivory-2"
                >
                  <span className="col-span-2 md:col-span-2 text-[0.78rem] uppercase tracking-[0.08em] text-stone">
                    {item.category}
                  </span>
                  <span className="col-span-6 md:col-span-7 font-display text-[1.2rem] font-light leading-snug transition-colors duration-200 group-hover:text-oxblood">
                    {item.title}
                  </span>
                  <span className="col-span-2 md:col-span-2 tabular text-[0.7rem] uppercase tracking-[0.12em] text-stone text-right">
                    {formatDate(item.date, locale)}
                  </span>
                  <span className="col-span-2 hidden md:flex justify-end text-oxblood opacity-0 transition-all duration-300 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-stone">
              {t.sourceNote}
            </p>
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-8 border-t border-line md:gap-x-8">
              <div className="col-span-12 md:col-span-5 pt-8">
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-tight">
                  {t.emptyTitle}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-7 pt-8">
                <p className="text-sm leading-relaxed text-navy/65">{t.emptyBody}</p>
                <Link
                  href={`${prefix}/firm`}
                  className="link-underline mt-5 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] font-semibold"
                >
                  {t.emptyCta} <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
