"use client";

import { useState } from "react";
import { VisualBlock } from "./VisualBlock";

export type Pillar = {
  no: string;
  title: string;
  body: string;
};

type Dict = {
  quote: string;
  quoteLabel: string;
  methodLabel: string;
  methodHeading: string;
  methodSub: string;
};

const artVariants = ["dark", "oxblood", "beige"] as const;

export default function FirmPhilosophy({
  pillars,
  dict,
}: {
  pillars: Pillar[];
  dict: Dict;
}) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Dramatic quote band */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
            <div className="col-span-12 md:col-span-1">
              <span className="font-display text-[5rem] md:text-[8rem] leading-none italic text-oxblood -mt-6 block">
                “
              </span>
            </div>
            <div className="col-span-12 md:col-span-10 md:col-start-2 md:mt-6">
              <p className="eyebrow text-beige">{dict.quoteLabel}</p>
              <p className="mt-8 font-display text-[clamp(2rem,6vw,5.5rem)] leading-[1.02] font-light">
                {dict.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive method */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-gutter py-20 md:py-32">
          <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
            {/* Left sticky heading */}
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-28">
                <p className="eyebrow text-oxblood">{dict.methodLabel}</p>
                <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.0] font-light max-w-xs">
                  {dict.methodHeading}
                </h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
                  {dict.methodSub}
                </p>
              </div>
            </div>

            {/* Interactive pillars */}
            <div className="col-span-12 md:col-span-8">
              {/* Changing art block */}
              <div className="relative mb-8 aspect-[16/9] overflow-hidden transition-all duration-700">
                <VisualBlock
                  variant={artVariants[active]}
                  label={`0${active + 1}`}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="absolute inset-0 h-full w-full transition-all duration-700"
                />
                <div className="absolute top-6 right-6">
                  <span className="font-display text-[3rem] font-light italic text-paper/40">
                    0{active + 1}
                  </span>
                </div>
              </div>

              {/* Rows */}
              <div className="border-t border-line">
                {pillars.map((pillar, i) => {
                  const isActive = active === i;
                  return (
                    <div key={pillar.no} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setActive(isActive ? active : i)}
                        className="group flex w-full items-baseline gap-5 py-6 text-left md:py-7"
                        aria-expanded={isActive}
                      >
                        <span
                          className={`editorial-number text-[1.4rem] transition-all duration-400 ${
                            isActive
                              ? "text-oxblood translate-x-1"
                              : "text-stone group-hover:translate-x-1"
                          }`}
                        >
                          {pillar.no}
                        </span>
                        <span
                          className={`font-display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-none transition-all duration-400 ${
                            isActive
                              ? "font-medium italic text-oxblood"
                              : "font-light group-hover:text-oxblood"
                          }`}
                        >
                          {pillar.title}
                        </span>
                      </button>
                      <div
                        className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`max-w-xl pb-8 pl-[3.4rem] text-base leading-relaxed text-stone transition-opacity duration-500 ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            {pillar.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
