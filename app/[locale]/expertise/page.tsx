import { getDictionary } from "@/config/translations";
import { getServices } from "@/config/services";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import PracticeDirectory from "@/components/PracticeDirectory";
import SectionAdvisory from "@/components/SectionAdvisory";
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
    title: t.meta.practicesTitle,
    description: t.meta.practicesDescription,
    alternates: { canonical: lc === "es" ? "/expertise" : "/en/expertise" },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.practicesTitle}`,
      description: t.meta.practicesDescription,
    },
  };
}

export default async function PracticesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.practicesPage;
  const services = getServices(lc);

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} />
      <PracticeDirectory locale={lc} t={t.practices} practices={services} />
      <SectionAdvisory locale={lc} t={t.advisory} />
      <SectionContact locale={lc} t={t.contact} form={t.form} />
    </>
  );
}
