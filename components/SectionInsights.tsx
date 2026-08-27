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
    <section className="bg-paper border-b border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
            </div>
            <Link
              href={`${prefix}/insights`}
              className="link-underline inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em]"
            >
              {t.viewAll} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {published.length > 0 ? (
          <div className="mt-8">
            <div className="grid grid-cols-12 gap-x-4 border-b border-line pb-3 md:gap-x-6">
              <span className="col-span-3 md:col-span-2 eyebrow">{t.dateLabel}</span>
              <span className="col-span-4 hidden md:block eyebrow">{t.categoryLabel}</span>
              <span className="col-span-7 md:col-span-5 eyebrow">{t.titleLabel}</span>
              <span className="col-span-2 hidden md:block eyebrow text-right">{t.readLabel}</span>
            </div>
            {published.map((item, i) => (
              <Reveal delay={i * 50} key={item.id}>
                <Link
                  href={`${prefix}/insights`}
                  className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-6 transition-colors duration-200 hover:bg-mist md:gap-x-6"
                >
                  <span className="col-span-3 md:col-span-2 tabular text-[0.8rem] uppercase tracking-[0.04em] text-slate">
                    {formatDate(item.date, locale)}
                  </span>
                  <span className="col-span-4 hidden text-[0.8rem] uppercase tracking-[0.08em] text-slate-2 md:block">
                    {item.category}
                  </span>
                  <span className="col-span-9 md:col-span-5 font-display text-[1.15rem] leading-snug transition-colors duration-200 group-hover:text-burgundy">
                    {item.title}
                  </span>
                  <span className="col-span-2 hidden justify-end md:flex text-slate-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
            <p className="mt-6 text-[0.74rem] uppercase tracking-[0.12em] text-slate-2">{t.sourceNote}</p>
          </div>
        ) : (
          <Reveal delay={80}>
            <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line pt-12 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-tight font-semibold">
                  {t.emptyTitle}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-7">
                <p className="text-[0.95rem] leading-relaxed text-slate">{t.emptyBody}</p>
                <Link
                  href={`${prefix}/firm`}
                  className="link-underline mt-6 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em]"
                >
                  {t.emptyCta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
