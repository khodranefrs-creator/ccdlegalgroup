import Link from "next/link";
import Reveal from "./Reveal";
import { imagesConfig } from "@/config/images";
import { MediaField } from "./VisualBlock";
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
    <section className="bg-mist border-y border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-10">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-slate">{t.sub}</p>
              <Link
                href={`${prefix}/people`}
                className="link-underline mt-8 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em]"
              >
                {t.eyebrow} <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Lawyer directory entry — institutional, not a styled card */}
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-line pt-8 md:gap-x-10">
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display text-[clamp(1.9rem,3vw,2.8rem)] leading-tight font-semibold tracking-[-0.01em]">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] font-medium uppercase tracking-[0.12em] text-slate">
                    {t.role}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow">{t.practiceLabel}</p>
                      <p className="mt-2 text-[0.95rem] leading-snug text-ink">{t.practiceValue}</p>
                    </div>
                    <div>
                      <p className="eyebrow">{t.locationLabel}</p>
                      <p className="mt-2 text-[0.95rem] text-ink">{t.locationValue}</p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="text-[0.95rem] leading-relaxed text-slate">{t.bio}</p>
                    <Link
                      href={`${prefix}/contact`}
                      className="group mt-6 inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-burgundy"
                    >
                      {t.cta} <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                {/* Architectural office image alongside the profile (no fake person) */}
                <div className="col-span-12 md:col-span-5">
                  <MediaField
                    src={imagesConfig.stairInterior}
                    alt="Despacho profesional — CCD Legal Group"
                    caption={t.locationValue}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="aspect-[4/5] w-full"
                  />
                  <p className="mt-3 text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-slate-2">
                    {t.profileNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
