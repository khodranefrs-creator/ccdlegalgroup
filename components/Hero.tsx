import Link from "next/link";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { siteConfig, type Locale } from "@/config/site";
import { getServices } from "@/config/services";

type HeroDict = {
  eyebrow: string;
  headline1: string;
  headline2: string;
  headlineAccent: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  location: string;
  scroll: string;
};

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

export default function Hero({
  locale,
  t,
  madrid,
}: {
  locale: Locale;
  t: HeroDict;
  madrid: MadridDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const practices = getServices(locale);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1360px] px-gutter pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="border-b border-line pb-4">
          <p className="eyebrow">{t.eyebrow}</p>
        </div>

        {/* Substantial composition */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-10 md:py-14 lg:gap-x-10 lg:py-16">
          {/* Statement + contact */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[1.04] font-semibold tracking-[-0.01em]">
              {t.headline1} {t.headline2}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate md:text-lg">
              {t.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`${prefix}/expertise`}
                className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-burgundy"
              >
                {t.ctaPrimary}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 border border-line-strong px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-ink"
              >
                {t.ctaSecondary}
              </Link>
            </div>

            {/* Practice index — immediate capability signal */}
            <div className="mt-12 border-t border-line pt-6">
              <p className="eyebrow">{madrid.eyebrow}</p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {practices.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`${prefix}/expertise#${p.id}`}
                      className="group flex items-baseline gap-2 text-[0.9rem] leading-snug transition-colors hover:text-burgundy"
                    >
                      <span className="h-1 w-1 self-center bg-slate-2 transition-colors group-hover:bg-burgundy" aria-hidden="true" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photography + office details */}
          <div className="col-span-12 lg:col-span-5">
            <MediaField
              src={imagesConfig.heroArchitecture}
              alt="Arquitectura — sede de CCD Legal Group en Madrid"
              caption={`${madrid.eyebrow} · ${t.location}`}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/5] w-full"
            />

            <div className="mt-5 grid grid-cols-12 gap-y-4 border-t border-line pt-5">
              <div className="col-span-12 sm:col-span-6">
                <p className="eyebrow">{madrid.addressLabel}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {madrid.street}
                  <br />
                  {madrid.cityCountry}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <p className="eyebrow">{madrid.phoneLabel}</p>
                <div className="mt-2 flex flex-col text-sm text-ink">
                  {siteConfig.phones.map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline w-fit">
                      {ph.label}
                    </a>
                  ))}
                  <a href={`mailto:${siteConfig.email}`} className="link-underline w-fit mt-0.5">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal-locator strip */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-gutter py-3.5">
          <a
            href={madrid.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.14em]"
          >
            {madrid.ctaMap} <span aria-hidden="true">↗</span>
          </a>
          <span className="tabular text-[0.7rem] uppercase tracking-[0.14em] text-slate-2">
            {siteConfig.name} · {siteConfig.city}
          </span>
        </div>
      </div>
    </section>
  );
}
