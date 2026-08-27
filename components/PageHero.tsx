import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  titleLines,
  lead,
}: {
  eyebrow: string;
  titleLines: readonly string[];
  lead?: string;
}) {
  return (
    <section className="bg-paper border-b border-line">
      <div className="mx-auto max-w-[1360px] px-gutter pt-[calc(var(--header-h)+2.5rem)] pb-12 md:pt-[calc(var(--header-h)+4.5rem)] md:pb-16">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>

        <div className="mt-7 grid grid-cols-12 gap-x-6 md:gap-x-8">
          <div className="col-span-12 md:col-span-9">
            <Reveal delay={60}>
              <h1 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>
          </div>
        </div>

        {lead && (
          <Reveal delay={120}>
            <div className="mt-8 grid grid-cols-12 gap-x-6 md:gap-x-8">
              <p className="col-span-12 md:col-span-6 md:col-start-7 max-w-xl text-base leading-relaxed text-slate md:text-lg">
                {lead}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
