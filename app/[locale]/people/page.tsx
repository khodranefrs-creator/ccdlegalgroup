import { getDictionary } from "@/config/translations";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import SectionPeople from "@/components/SectionPeople";
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
    title: t.meta.peopleTitle,
    description: t.meta.peopleDescription,
    alternates: { canonical: lc === "es" ? "/people" : "/en/people" },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.peopleTitle}`,
      description: t.meta.peopleDescription,
    },
  };
}

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.peoplePage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} />
      <SectionPeople locale={lc} t={t.people} />
      <SectionMadrid locale={lc} t={t.madrid} />
      <SectionContact t={t.contact} form={t.form} />
    </>
  );
}
