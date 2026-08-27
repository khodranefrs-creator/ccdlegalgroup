import Reveal from "./Reveal";

type WhyItem = { no: string; title: string; body: string };
type WhyDict = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  intro: string;
  note: string;
  items: WhyItem[];
};

export default function SectionWhy({ t }: { t: WhyDict }) {
  return (
    <section className="bg-paper border-b border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-10 md:items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
                {t.heading}{" "}
                <span className="font-normal text-slate">{t.headingAccent}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[0.95rem] leading-relaxed text-slate">{t.intro}</p>
            </div>
          </div>
        </Reveal>

        {/* Six principles — rule-divided list, not cards */}
        <div className="mt-12 border-t border-line">
          {t.items.map((item, i) => (
            <Reveal key={item.no} delay={Math.min(i * 60, 240)}>
              <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-line py-7 md:gap-x-10">
                <span className="col-span-2 md:col-span-2 tabular text-[0.72rem] font-medium text-slate-2">
                  {item.no}
                </span>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-[1.5rem] leading-tight font-medium text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-6 md:col-start-7 text-[0.95rem] leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-7 text-[0.74rem] uppercase leading-relaxed tracking-[0.12em] text-slate-2">
            {t.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
