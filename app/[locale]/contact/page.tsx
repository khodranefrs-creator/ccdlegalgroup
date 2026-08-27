import { getDictionary } from "@/config/translations";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
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
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
    alternates: { canonical: lc === "es" ? "/contact" : "/en/contact" },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.contactTitle}`,
      description: t.meta.contactDescription,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.contactPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} />
      <SectionContact t={t.contact} form={t.form} />
      <SectionMadrid locale={lc} t={t.madrid} />
    </>
  );
}
