import Link from "next/link";
import Reveal from "./Reveal";
import { MediaField } from "./VisualBlock";
import { imagesConfig } from "@/config/images";
import { type Locale } from "@/config/site";

type FirmDict = {
  label: string;
  title: string;
  roles: string;
  founder: string;
  body: string;
  link: string;
  rooms: string;
  roomsSub: string;
  chambers: string;
  chambersSub: string;
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
          <Reveal className="col-span-12 md:col-span-3">
            <p className="eyebrow text-oxblood mb-6 md:mb-0">{t.label}</p>
          </Reveal>
          <Reveal
            delay={120}
            className="col-span-12 md:col-span-5 md:col-start-8 flex md:justify-end"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ink/40">
              {t.rooms} — {t.roomsSub}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-4 md:mt-16 md:gap-x-8">
          {/* Photo field — the chambers */}
          <Reveal from="left" className="col-span-12 md:col-span-5">
            <div className="relative">
              <MediaField
                src={imagesConfig.officeInterior}
                alt={`${t.chambers} — CCD Legal Group`}
                label={t.chambers}
                index="02"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[4/5] w-full"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="tech text-ink/50">{t.chambersSub}</p>
                <span className="h-px flex-1 mx-4 bg-ink/15" />
                <p className="tech text-oxblood">CCD</p>
              </div>
            </div>
          </Reveal>

          {/* Text block */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-10 md:mt-0">
            <Reveal delay={100}>
              <p className="eyebrow text-oxblood">{t.title}</p>
              <h3 className="mt-4 font-display text-[clamp(2rem,5vw,4.2rem)] leading-[1.02] font-light">
                {t.title}
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-8 bg-oxblood" />
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink/60">
                  {t.roles} · {t.founder}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70 md:text-[1.05rem]">
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
