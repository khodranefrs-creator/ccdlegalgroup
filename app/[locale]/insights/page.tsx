import { getDictionary } from "@/config/translations";
import { getInsights } from "@/config/insights";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import SectionInsights from "@/components/SectionInsights";
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
    alternates: { canonical: lc === "es" ? "/insights" : "/en/insights" },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.insightsTitle}`,
      description: t.meta.insightsDescription,
    },
  };
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

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} />
      <SectionInsights locale={lc} t={t.insights} items={items} />
      <SectionContact locale={lc} t={t.contact} form={t.form} />
    </>
  );
}
