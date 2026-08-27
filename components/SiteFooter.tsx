import Link from "next/link";
import { siteConfig, type Locale } from "@/config/site";

type FooterDict = {
  tagline: string;
  firm: string;
  expertise: string;
  carolina: string;
  insights: string;
  contact: string;
  city: string;
  country: string;
  instagram: string;
  copyright: string;
  legalNote: string;
  privacy: string;
  legalNotice: string;
  office: string;
  district: string;
};

export default function SiteFooter({
  locale,
  footer,
}: {
  locale: Locale;
  footer: FooterDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  const nav = [
    { href: `${prefix}/firm`, label: footer.firm },
    { href: `${prefix}/expertise`, label: footer.expertise },
    { href: `${prefix}/carolina`, label: footer.carolina },
    { href: `${prefix}/insights`, label: footer.insights },
    { href: `${prefix}/contact`, label: footer.contact },
  ];

  return (
    <footer className="bg-ink text-paper">
      {/* Metadata strip */}
      <div className="border-b border-line-ink">
        <div className="mx-auto max-w-[1600px] px-gutter py-4 flex items-center justify-between">
          <p className="tech text-paper/40">{footer.tagline}</p>
          <p className="tech text-beige/60">
            {footer.city} · {footer.district}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-gutter pt-16 pb-10 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-5xl leading-none font-semibold">
              CCD
            </p>
            <p className="mt-2 text-[0.6rem] tracking-[0.3em] uppercase opacity-60">
              Legal Group
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed opacity-60">
              {siteConfig.legalName}
            </p>
            <p className="mt-2 text-sm opacity-50">{footer.tagline}</p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="tech text-paper/40 mb-4">{footer.office}</p>
            <nav className="space-y-0" aria-label="Footer">
              {nav.map((item, i) => (
                <div key={item.href} className="flex items-baseline gap-3 border-b border-line-ink py-2">
                  <span className="tech text-paper/30">0{i + 2}</span>
                  <Link
                    href={item.href}
                    className="font-display text-xl font-light opacity-75 transition-colors duration-300 hover:text-beige hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact / location */}
          <div className="md:col-span-3">
            <p className="tech text-paper/40 mb-4">{footer.contact}</p>
            <div className="space-y-2 text-sm">
              {siteConfig.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="link-underline inline-block opacity-80 hover:opacity-100"
                >
                  {p.label}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.emails.despacho}`}
                className="link-underline block opacity-80 hover:opacity-100"
              >
                {siteConfig.emails.despacho}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block mt-2 text-beige opacity-90 hover:opacity-100"
              >
                {siteConfig.instagram} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-line-ink pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>
            {footer.copyright} · {footer.legalNote}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={`${prefix}/legal-notice`}
              className="link-underline opacity-70 hover:opacity-100"
            >
              {footer.legalNotice}
            </Link>
            <span className="opacity-30">·</span>
            <Link
              href={`${prefix}/privacy`}
              className="link-underline opacity-70 hover:opacity-100"
            >
              {footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
