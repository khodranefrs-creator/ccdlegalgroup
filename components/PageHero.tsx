import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  titleLines,
  lead,
}: {
  eyebrow: string;
  /** lines; last line rendered italic for editorial contrast */
  titleLines: readonly string[];
  lead?: string;
}) {
  return (
    <section className="bg-ivory border-b border-line">
      <div className="mx-auto max-w-[1360px] px-gutter pt-[calc(var(--header-h)+3.5rem)] pb-12 md:pt-[calc(var(--header-h)+6rem)] md:pb-16">
        <Reveal>
          <p className="eyebrow text-oxblood">{eyebrow}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 md:col-span-10">
            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.02] font-medium tracking-[-0.01em]">
                {titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                    {i === titleLines.length - 1 && <span className="text-oxblood">.</span>}
                  </span>
                ))}
              </h1>
            </Reveal>
          </div>
        </div>

        {lead && (
          <Reveal delay={160}>
            <div className="mt-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
              <p className="col-span-12 md:col-span-6 md:col-start-7 max-w-xl text-base leading-relaxed text-navy/70 md:text-lg">
                {lead}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
