import { getDictionary } from "@/config/translations";
import { getServices } from "@/config/services";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
    title: t.meta.expertiseTitle,
    description: t.meta.expertiseDescription,
    alternates: {
      canonical: lc === "es" ? "/expertise" : "/en/expertise",
    },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.expertiseTitle}`,
      description: t.meta.expertiseDescription,
    },
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.expertisePage;
  const services = getServices(lc);

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        titleLines={p.titleLines}
        lead={p.lead}
        number="03"
      />

      {/* Services list */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-gutter py-16 md:py-24">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
            {/* Sticky index rail */}
            <div className="col-span-12 md:col-span-3">
              <div className="md:sticky md:top-28">
                <p className="eyebrow text-oxblood">{p.eyebrow}</p>
                <p className="mt-4 font-display text-5xl font-light leading-none md:text-6xl">
                  {String(services.length).padStart(2, "0")}
                  <span className="text-oxblood">.</span>
                </p>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-basalt">
                  {p.label}
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="col-span-12 md:col-span-9 mt-12 md:mt-0">
              <div className="border-t border-line">
                {services.map((s, i) => (
                  <Reveal
                    key={s.id}
                    delay={i * 60}
                    className="group grid grid-cols-12 items-center gap-x-4 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-2 md:py-12"
                  >
                    <div id={s.id} className="col-span-2 md:col-span-2">
                      <span className="editorial-number text-[1.6rem] text-oxblood transition-transform duration-500 ease-out group-hover:translate-x-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-6">
                      <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.9rem)] leading-none font-light transition-all duration-300 group-hover:italic">
                        {s.name}
                      </h2>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-basalt">
                        {s.description}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:col-start-9 mt-4 md:mt-0 hidden md:flex md:justify-end">
                      <a
                        href="#contacto"
                        className="link-underline group-arrow inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-ink/70 group-hover:text-oxblood"
                      >
                        <span>{p.askLabel}</span>
                        <span className="arrow">→</span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Note */}
              <Reveal>
                <div className="mt-10 flex items-start gap-4">
                  <span className="editorial-number text-oxblood text-lg">i</span>
                  <p className="max-w-2xl text-sm leading-relaxed text-basalt">{p.note}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionContact locale={lc} t={t.contact} />
    </>
  );
}
