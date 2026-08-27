import Link from "next/link";
import Reveal from "./Reveal";
import { VisualBlock } from "./VisualBlock";
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
          {/* Portrait */}
          <Reveal from="left" className="col-span-12 md:col-span-6">
            <div className="relative aspect-[4/5]">
              <VisualBlock
                src={imagesConfig.founderPortrait}
                alt={`${t.titleLine1} ${t.titleLine2}`}
                variant="dark"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>

          {/* Text with connecting vertical line */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-6">
            <Reveal delay={100}>
              <div className="md:border-l md:border-oxblood md:pl-10">
                <p className="eyebrow text-oxblood">{t.label}</p>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] font-light">
                  <span className="block">{t.titleLine1}</span>
                  <span className="block italic">{t.titleLine2}</span>
                </h2>

                <ul className="mt-8 space-y-1">
                  {roles.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.25em] text-stone"
                    >
                      <span className="h-px w-6 bg-oxblood" />
                      {r}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 max-w-sm text-base leading-relaxed text-stone">
                  {t.body}
                </p>

                <Link
                  href={`${prefix}/carolina`}
                  className="group-arrow link-underline mt-8 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-semibold"
                >
                  <span>{t.link}</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
