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
    title: t.meta.privacyTitle,
    description: t.meta.privacyDescription,
    alternates: { canonical: lc === "es" ? "/privacy" : "/en/privacy" },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.privacy;

  const sections = [
    { t: p.bodyTitle, b: p.body1 },
    { t: p.bodyTitle2, b: p.body2 },
    { t: p.bodyTitle3, b: p.body3 },
    { t: p.bodyTitle4, b: p.body4 },
  ];

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} />
      <section className="bg-paper border-b border-line">
        <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">{p.eyebrow}</p>
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
