import Link from "next/link";
import Reveal from "./Reveal";
import { type Locale } from "@/config/site";

type ExpertiseDict = {
  label: string;
  headingTop: string;
  headingBottom: string;
  intro: string;
};

type ServiceItem = {
  id: string;
  verified: boolean;
  name: string;
  description: string;
};

export default function SectionExpertise({
  locale,
  heading,
  services,
}: {
  locale: Locale;
  heading: ExpertiseDict;
  services: ServiceItem[];
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="eyebrow text-oxblood">{heading.label}</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,5rem)] leading-[0.95] font-light">
              {heading.headingTop}
              <br />
              <span className="italic">{heading.headingBottom}</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
              {heading.intro}
            </p>
          </Reveal>

          {/* Interactive list */}
          <div className="col-span-12 md:col-span-8 mt-12 md:mt-0">
            <div className="border-t border-line">
              {services.map((s, i) => (
                <Link
                  key={s.id}
                  href={`${prefix}/expertise#${s.id}`}
                  className="group grid grid-cols-12 items-center gap-x-4 border-b border-line py-7 transition-colors duration-300 hover:bg-paper-2 md:py-9"
                >
                  {/* Number */}
                  <span className="col-span-2 md:col-span-1 editorial-number text-lg text-stone transition-transform duration-500 ease-out md:group-hover:translate-x-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <span className="col-span-10 md:col-span-4 font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-none font-light transition-all duration-300 md:group-hover:font-medium md:group-hover:text-oxblood">
                    {s.name}
                  </span>

                  {/* Sentence */}
                  <span className="hidden md:block md:col-span-5 text-sm leading-relaxed text-stone md:pl-6">
                    {s.description}
                  </span>

                  {/* Arrow */}
                  <span className="col-span-2 md:col-span-1 flex justify-end">
                    <span className="arrow text-xl text-ink/60 transition-all duration-300 group-hover:text-oxblood">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
