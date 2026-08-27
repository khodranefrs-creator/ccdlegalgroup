import Link from "next/link";
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
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 md:gap-x-12">
          {/* Kicker + heading — asymmetric, quiet */}
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08] font-medium tracking-[-0.01em]">
              {t.heading}
              <span className="text-slate-2"> {t.headingAccent}</span>
            </h2>
          </div>

          {/* Body — placed to the right of the heading, tight line length */}
          <div className="col-span-12 md:col-span-6 md:col-start-6">
            <p className="text-[0.98rem] leading-relaxed text-ink/85">{t.body1}</p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/85">{t.body2}</p>
          </div>

          {/* Meta strip */}
          <div className="col-span-12 md:col-span-6 md:col-start-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-line pt-5">
            <span className="eyebrow">{t.meta1} · {t.meta2} · {t.meta3}</span>
            <Link
              href={`${prefix}${t.ctaHref}`}
              className="ml-auto link-underline text-[0.7rem] font-semibold uppercase tracking-[0.14em]"
            >
              {t.cta}
            </Link>
          </div>

          {/* Office photography — quiet, no caption overlay */}
          <div className="col-span-12 mt-2 md:col-span-8 md:col-start-5">
            <MediaField
              src={imagesConfig.officeInterior}
              alt="Oficina de CCD Legal Group en Madrid"
              sizes="(min-width: 768px) 62vw, 100vw"
              className="aspect-[16/9] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
