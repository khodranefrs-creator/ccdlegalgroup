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
    <section className="bg-mist border-y border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
          {/* City photography */}
          <Reveal className="col-span-12 lg:col-span-7">
            <MediaField
              src={imagesConfig.cityWide}
              alt="Madrid — sede de CCD Legal Group, Príncipe de Vergara 132"
              caption={`${siteConfig.city} · ${t.street}`}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="aspect-[16/10] w-full"
            />
          </Reveal>

          {/* Location details */}
          <div className="col-span-12 lg:col-span-5 lg:pl-4">
            <Reveal delay={80}>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,3.1rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate">{t.body}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-9 space-y-6 border-t border-line pt-6">
                <div className="grid grid-cols-12 gap-4">
                  <span className="col-span-4 eyebrow">{t.addressLabel}</span>
                  <div className="col-span-8">
                    <p className="text-[0.98rem] leading-snug text-ink">
                      {t.street}
                      <br />
                      {t.cityCountry}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <span className="col-span-4 eyebrow">{t.phoneLabel}</span>
                  <div className="col-span-8 flex flex-col text-[0.98rem] text-ink">
                    {siteConfig.phones.map((ph) => (
                      <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline w-fit">
                        {ph.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <span className="col-span-4 eyebrow">{t.emailLabel}</span>
                  <div className="col-span-8">
                    <a href={`mailto:${siteConfig.email}`} className="link-underline text-[0.98rem] text-ink">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={`${prefix}/contact`}
                  className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-burgundy"
                >
                  {t.ctaContact} <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={t.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line-strong px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-ink"
                >
                  {t.ctaMap} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
