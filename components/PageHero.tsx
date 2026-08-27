import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  titleLines,
  lead,
  number,
}: {
  eyebrow: string;
  /** lines; last line rendered italic for editorial contrast */
  titleLines: readonly string[];
  lead?: string;
  number?: string;
}) {
  return (
    <section className="relative bg-paper pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+5rem)]">
      <div className="mx-auto max-w-[1600px] px-gutter pb-16 pt-6 md:pb-24">
        <Reveal>
          <p className="eyebrow text-oxblood">{eyebrow}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 md:col-span-10">
            <Reveal delay={100}>
              <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)] leading-[0.93] font-light tracking-[-0.02em]">
                {titleLines.map((line, i) => (
                  <span
                    key={i}
                    className={`block ${
                      i === titleLines.length - 1 ? "italic text-oxblood" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>
          </div>

          {number && (
            <Reveal
              from="right"
              delay={150}
              className="col-span-2 hidden md:flex md:items-end md:justify-end"
            >
              <span className="editorial-number text-[3rem] text-oxblood">
                {number}
              </span>
            </Reveal>
          )}
        </div>

        {lead && (
          <Reveal delay={200}>
            <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-4 md:gap-x-8">
              <p className="col-span-12 md:col-span-6 md:col-start-7 max-w-xl text-base leading-relaxed text-stone md:text-lg">
                {lead}
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-14 md:mt-20">
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
