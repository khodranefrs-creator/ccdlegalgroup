import { getDictionary } from "@/config/translations";
import { siteConfig, type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  return {
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
    alternates: {
      canonical: lc === "es" ? "/contact" : "/en/contact",
    },
    openGraph: {
      title: `${siteConfig.name} — ${t.meta.contactTitle}`,
      description: t.meta.contactDescription,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);
  const p = t.contactPage;

  const direct = [
    {
      kind: p.callLabel,
      items: siteConfig.phones.map((ph) => ({ href: `tel:${ph.tel}`, label: ph.label })),
    },
    {
      kind: p.emailLabel,
      items: [{ href: `mailto:${siteConfig.emails.despacho}`, label: siteConfig.emails.despacho }],
    },
    {
      kind: p.locationLabel,
      items: [{ href: null, label: `${siteConfig.city}, ${siteConfig.country}` }],
    },
  ];

  return (
    <>
      <PageHero eyebrow={p.eyebrow} titleLines={p.titleLines} lead={p.lead} number="06" />

      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-gutter py-16 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            {/* Form */}
            <Reveal className="md:col-span-7 lg:col-span-6">
              <ContactForm dict={p} />
              <p className="mt-10 text-xs text-stone md:hidden">
                {p.mailtoNote}{" "}
                <a href={`mailto:${siteConfig.emails.despacho}`} className="link-underline text-oxblood">
                  {siteConfig.emails.despacho}
                </a>
              </p>
            </Reveal>

            {/* Direct contact */}
            <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
              <Reveal delay={120}>
                <p className="eyebrow text-oxblood">{p.directLabel}</p>
                <div className="mt-8 space-y-10">
                  {direct.map((group) => (
                    <div key={group.kind}>
                      <p className="eyebrow text-stone/70">{group.kind}</p>
                      <div className="mt-3 space-y-1.5">
                        {group.items.map((item) =>
                          item.href ? (
                            <a
                              key={item.label}
                              href={item.href}
                              className="link-underline block font-display text-xl font-light text-ink hover:text-oxblood"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <p key={item.label} className="font-display text-xl font-light text-ink">
                              {item.label}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-line pt-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-stone">
                    {siteConfig.instagram}
                  </p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-2 inline-block text-sm text-ink"
                  >
                    Instagram ↗
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
