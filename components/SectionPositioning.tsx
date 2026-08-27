import Reveal from "./Reveal";

type PositioningDict = {
  label: string;
  heading1: string;
  heading2: string;
  legalNo: string;
  businessNo: string;
  legalTitle: string;
  businessTitle: string;
  body: string;
  note: string;
};

export default function SectionPositioning({ t }: { t: PositioningDict }) {
  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        {/* Eyebrow */}
        <Reveal>
          <p className="eyebrow text-beige">{t.label}</p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={100}>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.95] font-light">
            <span className="block">{t.heading1}</span>
            <span className="block italic text-beige">{t.heading2}</span>
          </h2>
        </Reveal>

        {/* LEGAL / BUSINESS split */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2">
          {/* LEGAL */}
          <Reveal
            from="up"
            className="group border-b border-line-ink md:border-b-0 py-8 md:py-0 md:border-r md:pr-12"
          >
            <div className="flex items-baseline gap-4">
              <span className="editorial-number text-beige/80 text-2xl">
                {t.legalNo}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] opacity-50">
                {t.legalTitle}
              </span>
            </div>
          </Reveal>

          {/* BUSINESS */}
          <Reveal
            from="up"
            delay={120}
            className="group py-8 md:py-0 md:pl-12"
          >
            <div className="flex items-baseline gap-4">
              <span className="editorial-number text-beige/80 text-2xl">
                {t.businessNo}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] opacity-50">
                {t.businessTitle}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Shared connecting rule */}
        <div className="relative mt-8">
          <div className="hairline !bg-line-ink" />
        </div>

        {/* Body + note */}
        <div className="mt-12 grid grid-cols-12 gap-x-4 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
              {t.body}
            </p>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-beige/90">
              {t.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
