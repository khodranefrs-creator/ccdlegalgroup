import { getDictionary } from "@/config/translations";
import { getServices } from "@/config/services";
import { getInsights } from "@/config/insights";
import { type Locale } from "@/config/site";

import Hero from "@/components/Hero";
import SectionFirmIntro from "@/components/SectionFirmIntro";
import PracticeDirectory from "@/components/PracticeDirectory";
import SectionAdvisory from "@/components/SectionAdvisory";
import SectionPeople from "@/components/SectionPeople";
import SectionWhy from "@/components/SectionWhy";
import SectionInsights from "@/components/SectionInsights";
import SectionMadrid from "@/components/SectionMadrid";
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
      <SectionFirmIntro locale={lc} t={t.firmIntro} />
      <PracticeDirectory locale={lc} t={t.practices} practices={services} />
      <SectionAdvisory locale={lc} t={t.advisory} />
      <SectionPeople locale={lc} t={t.people} />
      <SectionWhy t={t.why} />
      <SectionInsights locale={lc} t={t.insights} items={insights} />
      <SectionMadrid locale={lc} t={t.madrid} />
      <SectionContact locale={lc} t={t.contact} form={t.form} />
    </>
  );
}
