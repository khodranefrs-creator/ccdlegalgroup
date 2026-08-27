import { getDictionary } from "@/config/translations";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import FirmPhilosophy from "@/components/FirmPhilosophy";
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
    alternates: {
      canonical: lc === "es" ? "/firm" : "/en/firm",
    },
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

  const pillars = [
    { no: p.philosophyNo, title: p.philosophyTitle, body: p.philosophyBody },
    { no: p.approachNo, title: p.approachTitle, body: p.approachBody },
    { no: p.commitmentNo, title: p.commitmentTitle, body: p.commitmentBody },
  ];

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} number="02" />
      <FirmPhilosophy
        pillars={pillars}
        dict={{
          quote: p.quote,
          quoteLabel: p.quoteLabel,
          methodLabel: p.methodLabel,
          methodHeading: p.methodHeading,
          methodSub: p.methodSub,
        }}
      />
      <SectionContact locale={lc} t={t.contact} />
    </>
  );
}
