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
    <section className="bg-ink text-paper border-b border-line-ink">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <p className="eyebrow text-paper/50">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-paper/70">{t.headingAccent}</span>
              </h2>
              <div className="mt-7 max-w-md space-y-5 text-[0.98rem] leading-relaxed text-paper/70">
                <p>{t.body1}</p>
                <p>{t.body2}</p>
              </div>
              <Link
                href={`${prefix}/contact`}
                className="link-underline mt-9 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-paper"
              >
                {t.cta} <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Advisory points — rule-divided list */}
            <div className="col-span-12 md:col-span-6 lg:col-span-7 md:col-start-7 lg:col-start-8">
              <div className="border-t border-line-ink">
                {t.points.map((p, i) => (
                  <Reveal
                    key={p.no}
                    delay={i * 50}
                    className="grid grid-cols-12 items-baseline gap-x-4 border-b border-line-ink py-5 md:gap-x-6"
                  >
                    <span className="col-span-2 tabular text-[0.72rem] text-paper/40">{p.no}</span>
                    <div className="col-span-10 md:col-span-4">
                      <span className="font-display text-[1.35rem] leading-tight text-paper">{p.title}</span>
                    </div>
                    <p className="col-span-10 md:col-span-6 md:col-start-7 text-[0.92rem] leading-relaxed text-paper/60">
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
