import Link from "next/link";
import Reveal from "./Reveal";
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
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
          {/* Heading + firm intro text */}
          <Reveal className="col-span-12 md:col-span-6">
            <p className="eyebrow text-oxblood">{t.eyebrow}</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
              {t.heading}{" "}
              <span className="italic font-normal">{t.headingAccent}</span>
            </h2>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:pt-10">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-navy/75">{t.body1}</p>
              <p className="mt-5 text-base leading-relaxed text-navy/75">{t.body2}</p>
              <div className="mt-16">
                <div className="flex items-center gap-5 border-t border-line pt-5">
                  <p className="eyebrow text-stone">{t.metaTitle}</p>
                  <span className="h-3 w-px bg-line-strong" />
                  <p className="tabular text-[0.68rem] uppercase tracking-[0.16em] text-oxblood">
                    {t.meta1} · {t.meta2} · {t.meta3}
                  </p>
                </div>
                <Link
                  href={`${prefix}${t.ctaHref}`}
                  className="group-sweep mt-10 inline-flex items-baseline gap-4"
                >
                  <span className="font-display text-2xl font-light transition-colors duration-300 group-hover:text-oxblood">
                    {t.cta}
                  </span>
                  <span className="h-px w-12 self-center bg-navy/30" />
                  <span className="text-lg font-display transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
