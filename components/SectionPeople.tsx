import Link from "next/link";
import Reveal from "./Reveal";
import { type Locale } from "@/config/site";

type PeopleDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  sub: string;
  name: string;
  role: string;
  roleLabel1: string;
  roleLabel2: string;
  roleLabel3: string;
  practiceLabel: string;
  practiceValue: string;
  locationLabel: string;
  locationValue: string;
  bio: string;
  cta: string;
  profileNote: string;
};

export default function SectionPeople({
  locale,
  t,
}: {
  locale: Locale;
  t: PeopleDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow text-oxblood">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
                {t.heading}{" "}
                <span className="italic font-normal">{t.headingAccent}</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-navy/70">{t.sub}</p>
              <Link
                href={`${prefix}/people`}
                className="group-sweep mt-8 inline-flex items-baseline gap-3"
              >
                <span className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold">
                  {t.eyebrow}
                </span>
                <span className="font-display text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 lg:col-start-7">
              {/* Profile — typographic, no fake person photo */}
              <Reveal delay={100} className="border border-line bg-ivory-2">
                {/* header bar with monogram */}
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-line bg-ivory">
                    <span className="font-display text-lg font-semibold">CCD</span>
                  </span>
                  <div className="flex items-center gap-4">
                    {[t.roleLabel1, t.roleLabel2, t.roleLabel3].map((r) => (
                      <span key={r} className="text-[0.62rem] uppercase tracking-[0.16em] text-stone">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-8">
                  <div>
                    <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-sm text-stone">{t.role}</p>
                    <p className="mt-6 text-sm leading-relaxed text-navy/70">
                      {t.bio}
                    </p>
                  </div>
                  <div className="space-y-5 border-t border-line pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                    <div>
                      <p className="eyebrow text-stone">{t.practiceLabel}</p>
                      <p className="mt-2 text-sm text-navy">{t.practiceValue}</p>
                    </div>
                    <div>
                      <p className="eyebrow text-stone">{t.locationLabel}</p>
                      <p className="mt-2 text-sm text-navy">{t.locationValue}</p>
                    </div>
                    <Link
                      href={`${prefix}/contact`}
                      className="group inline-flex items-center gap-3 bg-navy px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood"
                    >
                      {t.cta} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Note re: verified profile */}
              <Reveal delay={180}>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-stone/80">
                  {t.profileNote}
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
