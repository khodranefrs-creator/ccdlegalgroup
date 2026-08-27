import Reveal from "./Reveal";
import { MediaField } from "./VisualBlock";
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
  const rows = [
    {
      title: t.col1Title,
      body: t.col1Body,
      img: imagesConfig.mattersGrid.personal,
      n: "01",
    },
    {
      title: t.col2Title,
      body: t.col2Body,
      img: imagesConfig.mattersGrid.professional,
      n: "02",
    },
    {
      title: t.col3Title,
      body: t.col3Body,
      img: imagesConfig.mattersGrid.business,
      n: "03",
    },
  ];

  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 md:items-end">
          <Reveal className="col-span-12 md:col-span-9">
            <p className="eyebrow text-beige">{t.label}</p>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,6vw,5.6rem)] leading-[0.95] font-light">
              <span className="block">{t.heading1}</span>
              <span className="block italic text-beige">{t.heading2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-3 mt-8 md:mt-0 md:flex md:justify-end">
            <p className="tech text-paper/50">{t.legend}</p>
          </Reveal>
        </div>

        {/* Ledger rows — not cards */}
        <div className="mt-16 md:mt-24">
          {rows.map((r, i) => (
            <Reveal key={r.n} delay={i * 90}>
              <div className="group grid grid-cols-12 items-center gap-x-4 gap-y-4 border-t border-line-ink py-8 md:py-10">
                <div className="col-span-2 md:col-span-1">
                  <span className="editorial-number text-[1.8rem] leading-none text-oxblood transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {r.n}
                  </span>
                </div>
                <p className="col-span-4 md:col-span-2 font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-none font-light transition-colors duration-300 group-hover:text-beige">
                  {r.title}
                </p>
                <p className="col-span-6 md:col-span-5 text-sm leading-relaxed text-paper/60">
                  {r.body}
                </p>
                <div className="col-span-12 md:col-span-4 mt-4 md:mt-0">
                  <MediaField
                    src={r.img}
                    alt={r.title}
                    label={`${t.label} — ${r.n}`}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[16/9] md:aspect-[2/1] w-full"
                    tone="ink"
                  />
                </div>
              </div>
            </Reveal>
          ))}
          <div className="hairline !bg-line-ink" />
        </div>

        {/* Footnote */}
        <div className="mt-10 flex items-center gap-4">
          <div className="hairline !bg-line-ink flex-1" />
          <p className="tech text-beige/70 text-right">{t.footnote}</p>
        </div>
      </div>
    </section>
  );
}
