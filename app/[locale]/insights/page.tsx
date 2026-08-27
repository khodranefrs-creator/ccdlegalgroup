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
            <div className="mt-14">
              <div className="grid grid-cols-12 gap-x-4 border-b border-line pb-4 md:gap-x-8">
                <span className="col-span-2 md:col-span-1 tech text-basalt/40">nº</span>
                <span className="hidden md:block md:col-span-2 tech text-basalt/40">Categoría</span>
                <span className="col-span-8 md:col-span-7 tech text-basalt/40">Perspectiva</span>
                <span className="col-span-2 md:col-span-2 tech text-basalt/40 text-right">Fecha</span>
              </div>

              {items.map((item, i) => (
                <Reveal key={item.id} delay={i * 60}>
                  <div className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-6 md:gap-x-8 md:py-7 transition-colors duration-300 hover:bg-paper-2">
                    <span className="col-span-2 md:col-span-1 editorial-number text-lg text-basalt/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden md:block md:col-span-2 tech text-basalt/50">
                      {item.category}
                    </span>
                    <span className="col-span-8 md:col-span-7 font-display text-[clamp(1.1rem,2.4vw,1.9rem)] leading-tight font-light">
                      {item.title}
                    </span>
                    <span className="col-span-2 md:col-span-2 text-right">
                      <span className="text-[0.65rem] uppercase tracking-[0.16em] text-basalt/50">
                        {formatDate(item.date, lc)}
                      </span>
                    </span>
                  </div>
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
                  <p className="text-base leading-relaxed text-basalt">
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
