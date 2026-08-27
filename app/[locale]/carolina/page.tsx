import { getDictionary } from "@/config/translations";
import { imagesConfig } from "@/config/images";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { MediaField } from "@/components/VisualBlock";
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
    title: t.meta.carolinaTitle,
    description: t.meta.carolinaDescription,
    alternates: {
      canonical: lc === "es" ? "/carolina" : "/en/carolina",
    },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.carolinaTitle}`,
      description: t.meta.carolinaDescription,
    },
  };
}

export default async function CarolinaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.carolinaPage;
  const roles = [p.role1, p.role2, p.role3];

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} number="04" />

      {/* Founder profile */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-gutter py-16 md:py-28">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
            {/* Portrait */}
            <Reveal from="left" className="col-span-12 lg:col-span-7">
              <MediaField
                src={imagesConfig.founderPortrait ?? imagesConfig.officeInterior}
                alt={`${p.titleLines[0]} ${p.titleLines[1]} — CCD Legal Group`}
                label={p.chambersTitle}
                index="04"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="relative aspect-[4/5] lg:aspect-[3/4]"
              />
            </Reveal>

            {/* Text */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-14 lg:mt-2">
              {/* Positioning */}
              <Reveal delay={100}>
                <div className="border-l border-oxblood pl-8">
                  <p className="eyebrow text-oxblood">{p.positioningLabel}</p>
                  <h2 className="mt-4 font-display text-4xl font-light leading-none md:text-5xl">
                    {p.positioningTitle}
                  </h2>
                </div>
              </Reveal>

              {/* Roles */}
              <Reveal delay={180}>
                <div className="mt-12 border-t border-line pt-8">
                  <p className="eyebrow text-stone">{p.rolesLabel}</p>
                  <ul className="mt-6 space-y-4">
                    {roles.map((r) => (
                      <li
                        key={r}
                        className="flex items-baseline gap-4 font-display text-2xl font-light text-ink/80"
                      >
                        <span className="h-px w-8 bg-oxblood shrink-0 translate-y-[-4px]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bio — editorial statement */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-gutter py-20 md:py-32">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow text-oxblood">{p.bioLabel}</p>
              <h2 className="mt-6 font-display text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.02] font-light max-w-xs">
                {p.bioTitle}
              </h2>
            </Reveal>
            <div className="col-span-12 md:col-span-7 md:col-start-6 mt-10 md:mt-0">
              <Reveal delay={100}>
                <p className="font-display text-[clamp(1.3rem,2.6vw,2.1rem)] leading-snug font-light text-ink">
                  {p.bioBody1}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone">
                  {p.bioBody2}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-12 text-[0.65rem] uppercase tracking-[0.25em] text-stone/70">
                  {p.note}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionContact locale={lc} t={t.contact} />
    </>
  );
}
