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
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8 md:items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow text-oxblood">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.02] font-medium">
                {t.heading}{" "}
                <span className="italic font-normal">{t.headingAccent}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-relaxed text-navy/70">{t.intro}</p>
            </div>
          </div>
        </Reveal>

        {/* Six principles — ruled editorial grid, not cards */}
        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal
              key={item.no}
              delay={Math.min(i * 60, 240)}
              className="group border-t border-line py-8"
            >
              <div className="flex items-center gap-5">
                <span className="tabular text-[0.7rem] text-oxblood">{item.no}</span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-6 font-display text-[1.6rem] font-medium leading-tight transition-colors duration-300 group-hover:text-oxblood">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-navy/65">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 max-w-xl border-t border-line pt-5 text-[0.7rem] uppercase tracking-[0.18em] text-stone">
            {t.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
