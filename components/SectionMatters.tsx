import Reveal from "./Reveal";
import { VisualBlock } from "./VisualBlock";
import { imagesConfig } from "@/config/images";

type MattersDict = {
  label: string;
  heading1: string;
  heading2: string;
  legend: string;
  col1Title: string;
  col1Body: string;
  col2Title: string;
  col2Body: string;
  col3Title: string;
  col3Body: string;
  footnote: string;
};

export default function SectionMatters({ t }: { t: MattersDict }) {
  const cols = [
    {
      title: t.col1Title,
      body: t.col1Body,
      img: imagesConfig.mattersGrid.personal,
      variant: "dark" as const,
      n: "01",
    },
    {
      title: t.col2Title,
      body: t.col2Body,
      img: imagesConfig.mattersGrid.professional,
      variant: "oxblood" as const,
      n: "02",
    },
    {
      title: t.col3Title,
      body: t.col3Body,
      img: imagesConfig.mattersGrid.business,
      variant: "beige" as const,
      n: "03",
    },
  ];

  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-9">
            <p className="eyebrow text-beige">{t.label}</p>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,6vw,5.6rem)] leading-[0.95] font-light">
              <span className="block">{t.heading1}</span>
              <span className="block italic text-beige">{t.heading2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-3 md:flex md:items-end md:justify-end mt-8 md:mt-0">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-paper/50">
              {t.legend}
            </p>
          </Reveal>
        </div>

        {/* Visual grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line-ink">
          {cols.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 120}
              className="group md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <VisualBlock
                  src={c.img}
                  alt={c.title}
                  variant={c.variant}
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-light">{c.title}</h3>
                <span className="editorial-number text-beige/70 text-sm">{c.n}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="hairline !bg-line-ink flex-1" />
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-beige/80 text-right">
            {t.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
