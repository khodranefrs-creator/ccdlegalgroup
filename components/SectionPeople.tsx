import Link from "next/link";
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
  bio2?: string;
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
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 md:gap-x-12">
          {/* Attorney profile — name as the heading, not a generic section H2 */}
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.3rem)] leading-[1.02] font-medium tracking-[-0.01em] text-ink">
              {t.name}
            </h2>
            <p className="mt-3 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-slate">
              {t.role}
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6">
              <div>
                <p className="eyebrow">{t.practiceLabel}</p>
                <p className="mt-2 text-[0.95rem] leading-snug text-ink">{t.practiceValue}</p>
              </div>
              <div>
                <p className="eyebrow">{t.locationLabel}</p>
                <p className="mt-2 text-[0.95rem] text-ink">{t.locationValue}</p>
              </div>
            </div>

            <div className="mt-8 max-w-xl space-y-4 border-t border-line pt-6">
              <p className="text-[0.98rem] leading-relaxed text-slate">{t.bio}</p>
              {t.bio2 && (
                <p className="text-[0.98rem] leading-relaxed text-slate">{t.bio2}</p>
              )}
            </div>

            <p className="mt-6 max-w-xl text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-slate-2">
              {t.profileNote}
            </p>

            <Link
              href={`${prefix}/contact`}
              className="mt-8 inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-burgundy"
            >
              {t.cta}
            </Link>
          </div>

          {/* Office imagery beside the profile — no fake person */}
          <div className="col-span-12 lg:col-span-5">
            <MediaField
              src={imagesConfig.stairInterior}
              alt="Despacho profesional — CCD Legal Group"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
