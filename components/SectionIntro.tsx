import Reveal from "./Reveal";

type IntroDict = {
  number: string;
  statement: string;
  body: string;
};

export default function SectionIntro({ t }: { t: IntroDict }) {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          {/* Big number, left */}
          <Reveal
            from="left"
            className="col-span-4 md:col-span-2"
          >
            <p className="editorial-number text-[clamp(3rem,8vw,7rem)] text-oxblood">
              {t.number}
            </p>
          </Reveal>

          {/* Statement + supporting sentence */}
          <div className="col-span-12 md:col-span-10 md:col-start-4 lg:col-span-8 lg:col-start-5">
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.06] font-light tracking-[-0.01em] max-w-4xl">
                {t.statement}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-stone md:text-lg">
                {t.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
