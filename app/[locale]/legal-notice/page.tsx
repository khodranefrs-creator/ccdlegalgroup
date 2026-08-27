import { getDictionary } from "@/config/translations";
import { type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
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
    title: t.meta.legalTitle,
    description: t.meta.legalDescription,
    alternates: { canonical: lc === "es" ? "/legal-notice" : "/en/legal-notice" },
  };
}

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const l = t.legal;

  const sections = [
    { t: l.bodyTitle, b: l.body1 },
    { t: l.bodyTitle2, b: l.body2 },
    { t: l.bodyTitle3, b: l.body3 },
    { t: l.bodyTitle4, b: l.body4 },
  ];

  return (
    <>
      <PageHero eyebrow={l.eyebrow} titleLines={l.titleLines} />
      <section className="bg-paper border-b border-line">
        <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">{l.eyebrow}</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              {sections.map((s, i) => (
                <div key={i} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-xl font-semibold">{s.t}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SectionContact t={t.contact} form={t.form} />
    </>
  );
}
