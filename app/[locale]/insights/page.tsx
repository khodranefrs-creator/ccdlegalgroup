import { getDictionary } from "@/config/translations";
import { getInsights, insightsConfig } from "@/config/insights";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionContact from "@/components/SectionContact";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  return {
    title: t.meta.insightsTitle,
    description: t.meta.insightsDescription,
    alternates: {
      canonical: lc === "es" ? "/insights" : "/en/insights",
    },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.insightsTitle}`,
      description: t.meta.insightsDescription,
    },
  };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.insightsPage;
  const items = getInsights(lc);
  const published = insightsConfig.filter((i) => i.published);
  const prefix = lc === "es" ? "" : `/${lc}`;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} number="05" />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-gutter py-16 md:py-24">
          {published.length > 0 ? (
            <div className="grid grid-cols-1 gap-px overflow-hidden bg-line md:grid-cols-3">
              {items.map((item, i) => (
                <Reveal key={item.id} delay={i * 80} className="bg-paper">
                  <article className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-paper-2 md:p-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="eyebrow text-stone group-hover:text-oxblood">
                        {item.category}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-stone">
                        {formatDate(item.date, lc)}
                      </p>
                    </div>
                    <h2 className="mt-10 font-display text-[1.7rem] leading-tight font-light">
                      {item.title}
                    </h2>
                    <span className="mt-auto pt-10 flex justify-end">
                      <span className="arrow text-2xl text-ink/40 transition-all duration-300 group-hover:text-oxblood group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <p className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight font-light">
                    {p.emptyTitle}
                  </p>
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-base leading-relaxed text-stone">
                    {p.emptyBody}
                  </p>
                  <a
                    href={`${prefix}/contact`}
                    className="link-underline mt-6 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-semibold"
                  >
                    {p.emptyCta} <span>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <SectionContact locale={lc} t={t.contact} />
    </>
  );
}
