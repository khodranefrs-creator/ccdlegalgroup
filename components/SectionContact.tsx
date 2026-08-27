import Link from "next/link";
import Reveal from "./Reveal";
import { siteConfig, type Locale } from "@/config/site";

type ContactDict = {
  label: string;
  heading1: string;
  heading2: string;
  sub: string;
  call: string;
  email: string;
  location: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function SectionContact({
  locale,
  t,
}: {
  locale: Locale;
  t: ContactDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  const rows = [
    { kind: t.call as string, items: siteConfig.phones.map((p) => ({ href: `tel:${p.tel}`, label: p.label })) },
    { kind: t.email, items: [{ href: `mailto:${siteConfig.emails.despacho}`, label: siteConfig.emails.despacho }] },
    { kind: t.location, items: [{ href: null, label: `${siteConfig.city}, ${siteConfig.country}` }] },
  ];

  return (
    <section id="contacto" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-gutter py-24 md:py-40">
        <Reveal>
          <p className="eyebrow text-beige">{t.label}</p>
        </Reveal>

        {/* Huge heading */}
        <Reveal delay={100}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,10vw,9.5rem)] leading-[0.9] font-light tracking-[-0.02em]">
            <span className="block">{t.heading1}</span>
            <span className="block italic text-beige">{t.heading2}</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
            {t.sub}
          </p>
        </Reveal>

        {/* Prominent contact list */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-px overflow-hidden bg-line-ink md:grid-cols-3">
          {rows.map((row, i) => (
            <Reveal key={row.kind} delay={i * 100} className="bg-ink">
              <div className="flex h-full flex-col p-8 md:p-10">
                <p className="eyebrow text-beige/70">{row.kind}</p>
                <div className="mt-6 space-y-2">
                  {row.items.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="link-underline block font-display text-xl md:text-2xl font-light text-paper hover:text-beige"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <p
                        key={item.label}
                        className="font-display text-xl md:text-2xl font-light"
                      >
                        {item.label}
                      </p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <Link
              href={`${prefix}/contact`}
              className="group inline-flex items-center gap-3 bg-paper text-ink rounded-full px-9 py-4 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:bg-beige"
            >
              {t.ctaPrimary}
              <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={`mailto:${siteConfig.emails.despacho}`}
              className="link-underline inline-block text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-paper/90"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
