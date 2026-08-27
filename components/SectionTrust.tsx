import Reveal from "./Reveal";

type TrustRow = {
  no: string;
  title: string;
  body: string;
};

type TrustDict = {
  label: string;
  heading: string;
  intro: string;
  rows: readonly TrustRow[];
  footnote: string;
};

export default function SectionTrust({ t }: { t: TrustDict }) {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="eyebrow text-oxblood">{t.label}</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[0.98] font-light max-w-md">
              {t.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60">
              {t.intro}
            </p>
          </Reveal>

          <div className="col-span-12 md:col-span-6 mt-12 md:mt-0">
            <div className="border-t border-line">
              {t.rows.map((r, i) => (
                <Reveal
                  key={r.no}
                  delay={i * 80}
                  className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-line py-7"
                >
                  <span className="col-span-2 md:col-span-2 editorial-number text-ink/25 transition-colors duration-300 group-hover:text-oxblood">
                    {r.no}
                  </span>
                  <span className="col-span-10 md:col-span-5 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-none font-light">
                    {r.title}
                  </span>
                  <span className="col-span-12 md:col-span-5 md:col-start-7 mt-3 md:mt-0 text-sm leading-relaxed text-ink/60">
                    {r.body}
                  </span>
                </Reveal>
              ))}
              <div className="hairline" />
            </div>
            <Reveal delay={200}>
              <p className="mt-6 text-[0.62rem] uppercase tracking-[0.22em] text-ink/40">
                {t.footnote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
