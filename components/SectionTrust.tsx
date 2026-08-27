import Reveal from "./Reveal";

type TrustDict = {
  label: string;
  heading: string;
  principles: readonly { title: string; body: string }[];
};

export default function SectionTrust({ t }: { t: TrustDict }) {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="eyebrow text-oxblood">{t.label}</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[0.98] font-light max-w-md">
              {t.heading}
            </h2>
          </Reveal>

          {/* Principles */}
          <div className="col-span-12 md:col-span-7 mt-12 md:mt-0">
            {t.principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="group flex flex-col gap-2 border-t border-line py-8 md:flex-row md:items-baseline md:gap-10"
              >
                <span className="editorial-number text-oxblood/80 text-xl">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-none font-light transition-all duration-300 group-hover:italic">
                  {p.title}
                </h3>
                <p className="md:ml-auto max-w-xs text-sm leading-relaxed text-stone md:text-right">
                  {p.body}
                </p>
              </Reveal>
            ))}
            <div className="hairline" />
          </div>
        </div>
      </div>
    </section>
  );
}
