import Reveal from "./Reveal";

type IntroDict = {
  number: string;
  statement: string;
  body: string;
  note: string;
};

export default function SectionIntro({ t }: { t: IntroDict }) {
  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Marginalia number column */}
          <div className="col-span-12 md:col-span-2">
            <Reveal from="left">
              <p className="tech text-paper/40">Cláusula</p>
              <p className="editorial-number mt-3 text-[clamp(3rem,8vw,7rem)] text-oxblood">
                {t.number}
              </p>
            </Reveal>
          </div>

          {/* Statement */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5">
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.08] font-light tracking-[-0.01em] max-w-4xl">
                {t.statement}
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <Reveal delay={200} className="col-span-12 md:col-span-7">
                <p className="max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                  {t.body}
                </p>
              </Reveal>
              <Reveal delay={280} className="col-span-12 md:col-span-4 md:col-start-9">
                <p className="tech text-beige/70">{t.note}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
