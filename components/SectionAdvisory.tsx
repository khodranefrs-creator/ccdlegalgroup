import Link from "next/link";
import { type Locale } from "@/config/site";

type Point = { no: string; title: string; body: string };
type AdvisoryDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body1: string;
  body2: string;
  cta: string;
  points: Point[];
};

export default function SectionAdvisory({
  locale,
  t,
}: {
  locale: Locale;
  t: AdvisoryDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="bg-ink text-paper border-b border-line-ink">
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-x-12">
          {/* Left: compact statement */}
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-paper/45">{t.eyebrow}</p>
            <h2 className="sans-title mt-3 text-[1.5rem] leading-tight text-paper md:text-[1.7rem]">
              {t.heading}
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-[0.95rem] leading-relaxed text-paper/70">
              <p>{t.body1}</p>
              <p>{t.body2}</p>
            </div>
            <Link
              href={`${prefix}/contact`}
              className="link-underline mt-8 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-paper"
            >
              {t.cta}
            </Link>
          </div>

          {/* Right: rule-divided points, no numbers */}
          <div className="col-span-12 md:col-span-7">
            <div className="border-t border-line-ink">
              {t.points.map((p) => (
                <div
                  key={p.title}
                  className="grid grid-cols-12 items-baseline gap-x-6 border-b border-line-ink py-5"
                >
                  <span className="col-span-12 sm:col-span-4 font-medium text-paper">
                    {p.title}
                  </span>
                  <span className="col-span-12 sm:col-span-8 text-[0.94rem] leading-relaxed text-paper/60">
                    {p.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
