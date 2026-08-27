import Link from "next/link";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { type Locale } from "@/config/site";

type HeroDict = {
  eyebrow: string;
  headline1: string;
  headlineAccent: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  location: string;
  scroll: string;
};

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: HeroDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="relative bg-ivory">
      {/* rule above the fold */}
      <div className="mx-auto max-w-[1360px] px-gutter pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+5.5rem)]">
        {/* top metadata */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <p className="eyebrow text-stone">{t.eyebrow}</p>
          <p className="tabular text-[0.68rem] uppercase tracking-[0.18em] text-stone/80">
            {t.location}
          </p>
        </div>

        {/* main composition */}
        <div className="grid grid-cols-12 gap-x-4 gap-y-10 py-12 md:gap-x-8 md:py-16 lg:gap-y-0">
          {/* Statement */}
          <div className="col-span-12 lg:col-span-7 lg:pr-12">
            <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.6rem)] leading-[1.02] font-medium tracking-[-0.01em]">
              {t.headline1}{" "}
              <span className="italic font-normal text-oxblood">{t.headlineAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy/70 md:text-lg">
              {t.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href={`${prefix}/contact`}
                className="group inline-flex items-center gap-3 bg-navy px-7 py-4 text-[0.72rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood"
              >
                {t.ctaPrimary}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={`${prefix}/firm`}
                className="link-underline inline-flex items-center text-[0.72rem] uppercase tracking-[0.16em] font-semibold text-navy"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Photograph */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end">
            <MediaField
              src={imagesConfig.heroArchitecture}
              alt="Arquitectura — Madrid, sede de CCD Legal Group"
              corner="Madrid"
              caption="Príncipe de Vergara 132 · Chamberí"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full md:aspect-[5/6]"
            />
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-gutter py-4">
          <div className="flex items-center gap-6 text-[0.66rem] uppercase tracking-[0.2em] text-stone/80">
            <span>Civil</span>
            <span className="h-3 w-px bg-line-strong" />
            <span>Criminal</span>
            <span className="h-3 w-px bg-line-strong" />
            <span>Family</span>
            <span className="h-3 w-px bg-line-strong" />
            <span>Immigration</span>
            <span className="h-3 w-px bg-line-strong" />
            <span className="hidden sm:inline">Business</span>
          </div>
          <span className="tabular text-[0.66rem] uppercase tracking-[0.2em] text-stone/80">
            {t.scroll} ↓
          </span>
        </div>
      </div>
    </section>
  );
}
