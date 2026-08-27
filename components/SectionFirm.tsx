import Link from "next/link";
import Reveal from "./Reveal";
import { VisualBlock } from "./VisualBlock";
import { imagesConfig } from "@/config/images";
import { type Locale } from "@/config/site";

type FirmDict = {
  label: string;
  title: string;
  roles: string;
  founder: string;
  body: string;
  link: string;
};

export default function SectionFirm({
  locale,
  t,
}: {
  locale: Locale;
  t: FirmDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="relative bg-paper-2">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-36">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 md:items-end">
          {/* Label */}
          <Reveal className="col-span-12 md:col-span-3">
            <p className="eyebrow text-oxblood mb-6 md:mb-0">{t.label}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-4 md:mt-16 md:gap-x-8">
          {/* Portrait — taller than wide, art block */}
          <Reveal from="left" className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <VisualBlock
                src={imagesConfig.founderPortrait}
                alt="Carolina Cutilla Díaz — CCD Legal Group"
                variant="dark"
                label={t.title}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>

          {/* Text block */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-10 md:mt-0">
            <Reveal delay={100}>
              <h3 className="font-display text-[clamp(2rem,5vw,4.2rem)] leading-[1.02] font-light">
                {t.title}
              </h3>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-oxblood">
                {t.roles} · {t.founder}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-stone md:text-[1.05rem]">
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
