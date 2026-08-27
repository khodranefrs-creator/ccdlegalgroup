import Link from "next/link";
import Reveal from "./Reveal";
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
    <section className="bg-navy text-ivory border-t border-line-navy">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-32">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <p className="eyebrow text-ivory/50">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
                {t.heading}{" "}
                <span className="italic font-normal text-ivory/80">{t.headingAccent}</span>
              </h2>
              <div className="mt-8 max-w-md space-y-5 text-[0.98rem] leading-relaxed text-ivory/70">
                <p>{t.body1}</p>
                <p>{t.body2}</p>
              </div>
              <Link
                href={`${prefix}/contact`}
                className="group-sweep mt-10 inline-flex items-baseline gap-3 text-ivory"
              >
                <span className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold">
                  {t.cta}
                </span>
                <span className="font-display text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Advisory points — ruled editorial grid */}
            <div className="col-span-12 md:col-span-6 lg:col-span-7 md:col-start-7 lg:col-start-8">
              <div className="border-t border-line-navy">
                {t.points.map((p, i) => (
                  <Reveal
                    key={p.no}
                    delay={i * 60}
                    className="grid grid-cols-12 items-baseline gap-x-4 border-b border-line-navy py-5 md:py-6"
                  >
                    <span className="col-span-2 tabular text-[0.7rem] text-ivory/40">{p.no}</span>
                    <div className="col-span-10 md:col-span-4">
                      <span className="font-display text-[1.25rem] font-light text-ivory">{p.title}</span>
                    </div>
                    <p className="col-span-10 md:col-span-6 md:col-start-7 text-sm leading-relaxed text-ivory/60">
                      {p.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
