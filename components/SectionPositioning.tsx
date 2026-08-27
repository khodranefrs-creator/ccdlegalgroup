import Reveal from "./Reveal";
import { MediaField } from "./VisualBlock";
import { imagesConfig } from "@/config/images";

type PositioningDict = {
  label: string;
  heading1: string;
  heading2: string;
  legalNo: string;
  businessNo: string;
  legalTitle: string;
  businessTitle: string;
  legalBody: string;
  businessBody: string;
  note: string;
  chambersNote: string;
};

export default function SectionPositioning({ t }: { t: PositioningDict }) {
  const cols = [
    { no: t.legalNo, title: t.legalTitle, body: t.legalBody },
    { no: t.businessNo, title: t.businessTitle, body: t.businessBody },
  ];

  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <Reveal>
          <p className="eyebrow text-beige">{t.label}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 gap-x-4 md:gap-x-8 md:items-end">
          <Reveal delay={100} className="col-span-12 md:col-span-8">
            <h2 className="font-display text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.95] font-light">
              <span className="block">{t.heading1}</span>
              <span className="block italic text-beige">{t.heading2}</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="col-span-12 md:col-span-4 md:flex md:justify-end mt-8 md:mt-0">
            <p className="tech text-paper/50 max-w-[16rem] text-right">{t.note}</p>
          </Reveal>
        </div>

        {/* Diptych — numbered disciplines with body copy (not empty labels) */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2">
          {cols.map((c, i) => (
            <Reveal
              key={c.no}
              from="up"
              delay={i * 120}
              className={`group border-b md:border-b-0 border-line-ink py-8 md:py-0 ${
                i === 0 ? "md:border-r md:pr-12" : "md:pl-12 md:border-l"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="editorial-number text-[2rem] text-oxblood">
                  {c.no}
                </span>
                <span className="tech text-beige/80">{c.title}</span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Photoreal stair field — bleeds at the base, document-framed */}
        <div className="mt-16 md:mt-24">
          <Reveal>
            <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 md:items-end">
              <MediaField
                src={imagesConfig.stairInterior}
                alt="Interior de la firma — CCD Legal Group"
                label="El Despacho"
                index="03"
                sizes="(min-width: 768px) 60vw, 100vw"
                className="col-span-12 md:col-span-8 aspect-[16/9] w-full"
                tone="ink"
              />
              <Reveal
                delay={140}
                className="col-span-12 md:col-span-4 mt-6 md:mt-0 md:pb-8"
              >
                <p className="marginalia text-beige/80 text-[1.2rem] leading-relaxed">
                  {t.chambersNote}
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
