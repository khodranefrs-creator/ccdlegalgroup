import Link from "next/link";
import Reveal from "./Reveal";
import { MediaField } from "./VisualBlock";
import { imagesConfig } from "@/config/images";
import { type Locale } from "@/config/site";

type CarolinaDict = {
  label: string;
  titleLine1: string;
  titleLine2: string;
  role1: string;
  role2: string;
  role3: string;
  body: string;
  link: string;
};

export default function SectionCarolina({
  locale,
  t,
}: {
  locale: Locale;
  t: CarolinaDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const roles = [t.role1, t.role2, t.role3];

  return (
    <section className="relative overflow-hidden bg-paper-2">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Photographic field */}
          <Reveal from="left" className="col-span-12 md:col-span-6">
            <MediaField
              src={imagesConfig.founderPortrait ?? imagesConfig.officeInterior}
              alt={`${t.titleLine1} ${t.titleLine2} — CCD Legal Group`}
              label={t.label}
              index="04"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          {/* Text */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-6">
            <Reveal delay={100}>
              <div className="md:border-l md:border-oxblood md:pl-10">
                <p className="eyebrow text-oxblood">{t.label}</p>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] font-light">
                  <span className="block">{t.titleLine1}</span>
                  <span className="block italic">{t.titleLine2}</span>
                </h2>
              </div>
            </Reveal>

            {/* Roles as ledger */}
            <Reveal delay={160}>
              <ul className="mt-8 border-t border-line">
                {roles.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="editorial-number text-ink/25 text-sm">0{i + 1}</span>
                    <span className="font-display text-2xl font-light text-ink/80">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-ink/70">
                {t.body}
              </p>
              <Link
                href={`${prefix}/carolina`}
                className="group-arrow link-underline mt-8 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-semibold"
              >
                <span>{t.link}</span>
                <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
