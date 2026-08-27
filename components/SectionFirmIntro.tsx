import Link from "next/link";
import Reveal from "./Reveal";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
import { type Locale } from "@/config/site";

type FirmIntroDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body1: string;
  body2: string;
  metaTitle: string;
  meta1: string;
  meta2: string;
  meta3: string;
  cta: string;
  ctaHref: string;
};

export default function SectionFirmIntro({
  locale,
  t,
}: {
  locale: Locale;
  t: FirmIntroDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="bg-mist border-y border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
          {/* Heading + intro text */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/85">
                {t.body1}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/85">
                {t.body2}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-line pt-6">
                <p className="eyebrow">{t.metaTitle}</p>
                <div className="flex items-center gap-5">
                  <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">
                    {t.meta1} · {t.meta2} · {t.meta3}
                  </p>
                </div>
                <Link
                  href={`${prefix}${t.ctaHref}`}
                  className="link-underline ml-auto inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em]"
                >
                  {t.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Office image — institutional, not a creative split */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal from="none" className="h-full">
              <MediaField
                src={imagesConfig.officeInterior}
                alt="Oficina de CCD Legal Group en Madrid"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
