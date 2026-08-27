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
      <div className="mx-auto max-w-[1360px] px-gutter pt-[calc(var(--header-h)+2.5rem)] pb-10 md:pt-[calc(var(--header-h)+4rem)] md:pb-14">
        <p className="eyebrow">{eyebrow}</p>

        <div className="mt-6 grid grid-cols-12 gap-x-8 md:gap-x-12">
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {lead && (
          <div className="mt-7 grid grid-cols-12 gap-x-8 md:gap-x-12">
            <p className="col-span-12 md:col-span-6 md:col-start-7 max-w-xl text-base leading-relaxed text-slate md:text-lg">
              {lead}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
