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
      <div className="mx-auto max-w-[1360px] px-gutter py-14 md:py-20">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 md:gap-x-12">
          {/* Compact heading, left-aligned, small */}
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="sans-title mt-3 text-[1.5rem] leading-tight text-ink md:text-[1.7rem]">
              {t.heading}
            </h2>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-slate">{t.intro}</p>
          </div>

          {/* Principles — plain hairline list, no numbers, no bullets */}
          <div className="col-span-12 md:col-span-7">
            <ul className="border-t border-line">
              {t.items.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-12 gap-x-6 border-b border-line py-5"
                >
                  <span className="col-span-12 sm:col-span-4 font-medium text-ink">
                    {item.title}
                  </span>
                  <span className="col-span-12 sm:col-span-8 text-[0.95rem] leading-relaxed text-slate">
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
