import Link from "next/link";
import Reveal from "./Reveal";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { siteConfig, type Locale } from "@/config/site";

type MadridDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body: string;
  addressLabel: string;
  street: string;
  cityCountry: string;
  phoneLabel: string;
  emailLabel: string;
  ctaContact: string;
  ctaMap: string;
  mapsUrl: string;
};

export default function SectionMadrid({
  locale,
  t,
}: {
  locale: Locale;
  t: MadridDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
          {/* City photography */}
          <Reveal from="left" className="col-span-12 lg:col-span-7">
            <MediaField
              src={imagesConfig.cityWide}
              alt="Madrid — sede de CCD Legal Group, Príncipe de Vergara 132"
              corner={`${siteConfig.city} · ${siteConfig.province}`}
              caption="Príncipe de Vergara 132 · Chamberí"
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="aspect-[16/10] w-full"
            />
          </Reveal>

          {/* Location details */}
          <div className="col-span-12 lg:col-span-5 lg:pl-10">
            <Reveal delay={100}>
              <p className="eyebrow text-oxblood">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.02] font-medium">
                {t.heading} <span className="italic font-normal">{t.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-navy/70">{t.body}</p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 space-y-6 border-t border-line pt-6">
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-stone">{t.addressLabel}</span>
                  <span className="font-display text-xl font-light leading-tight">
                    {t.street}
                    <br />
                    {t.cityCountry}
                  </span>
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-stone">{t.phoneLabel}</span>
                  <span className="flex flex-col">
                    {siteConfig.phones.map((ph) => (
                      <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline font-display text-xl font-light">
                        {ph.label}
                      </a>
                    ))}
                  </span>
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-stone">{t.emailLabel}</span>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline font-display text-xl font-light">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href={`${prefix}/contact`}
                  className="inline-flex items-center gap-3 bg-navy px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood"
                >
                  {t.ctaContact} <span>→</span>
                </Link>
                <a
                  href={t.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.72rem] uppercase tracking-[0.16em] font-semibold"
                >
                  {t.ctaMap}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
