import Reveal from "./Reveal";

type ProcessStep = {
  no: string;
  title: string;
  body: string;
};

type ProcessDict = {
  label: string;
  heading1: string;
  heading2: string;
  intro: string;
  steps: readonly ProcessStep[];
};

export default function SectionProcess({ t }: { t: ProcessDict }) {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 md:items-end">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow text-oxblood">{t.label}</p>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,6vw,5.4rem)] leading-[0.95] font-light">
              <span className="block">{t.heading1}</span>
              <span className="block italic text-oxblood">{t.heading2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4 md:col-start-9 mt-6 md:mt-0">
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">{t.intro}</p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-16 md:mt-24">
          {t.steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 80}>
              <div className="group grid grid-cols-12 items-baseline gap-x-4 border-t border-line py-8 md:py-10">
                <div className="col-span-2 md:col-span-1">
                  <span className="editorial-number text-[1.8rem] leading-none text-ink/25 transition-colors duration-300 group-hover:text-oxblood">
                    {s.no}
                  </span>
                </div>
                <h3 className="col-span-10 md:col-span-4 font-display text-[clamp(1.6rem,3.4vw,2.8rem)] leading-none font-light transition-transform duration-500 ease-out group-hover:translate-x-1">
                  {s.title}
                </h3>
                <div className="col-span-12 md:col-span-6 md:col-start-7 mt-4 md:mt-0">
                  <span className="hidden md:block h-px w-px bg-line" />
                  <p className="max-w-md text-base leading-relaxed text-ink/60">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
