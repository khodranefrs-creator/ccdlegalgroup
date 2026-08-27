import { getDictionary } from "@/config/translations";
import { getServices } from "@/config/services";
import { getInsights } from "@/config/insights";
import { type Locale } from "@/config/site";

import Hero from "@/components/Hero";
import SectionIntro from "@/components/SectionIntro";
import SectionFirm from "@/components/SectionFirm";
import SectionPositioning from "@/components/SectionPositioning";
import SectionExpertise from "@/components/SectionExpertise";
import SectionMatters from "@/components/SectionMatters";
import SectionCarolina from "@/components/SectionCarolina";
import SectionTrust from "@/components/SectionTrust";
import SectionInsights from "@/components/SectionInsights";
import SectionContact from "@/components/SectionContact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const services = getServices(lc);
  const insights = getInsights(lc);

  return (
    <>
      <Hero locale={lc} t={t.hero} />
      <SectionIntro t={t.intro} />
      <SectionFirm locale={lc} t={t.firm} />
      <SectionPositioning t={t.positioning} />
      <SectionExpertise locale={lc} heading={t.expertise} services={services} />
      <SectionMatters t={t.matters} />
      <SectionCarolina locale={lc} t={t.carolina} />
      <SectionTrust t={t.trust} />
      <SectionInsights locale={lc} heading={t.insights} items={insights} />
      <SectionContact locale={lc} t={t.contact} />
    </>
  );
}
