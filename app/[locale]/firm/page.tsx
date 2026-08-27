import { getDictionary } from "@/config/translations";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import SectionWhy from "@/components/SectionWhy";
import SectionMadrid from "@/components/SectionMadrid";
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
    title: t.meta.firmTitle,
    description: t.meta.firmDescription,
    alternates: { canonical: lc === "es" ? "/firm" : "/en/firm" },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.firmTitle}`,
      description: t.meta.firmDescription,
    },
  };
}

export default async function FirmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.firmPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} />
      <SectionWhy t={t.why} />
      <SectionMadrid locale={lc} t={t.madrid} />
      <SectionContact t={t.contact} form={t.form} />
    </>
  );
}
