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
      <div className="mx-auto max-w-[1600px] px-gutter pt-20 pb-10 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-4xl leading-none font-semibold">
              CCD
            </p>
            <p className="mt-2 text-[0.6rem] tracking-[0.3em] uppercase opacity-70">
              Legal Group
            </p>
            <p className="mt-6 text-sm opacity-60">{footer.tagline}</p>
            <p className="mt-3 text-sm opacity-50">{siteConfig.legalName}</p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <nav className="space-y-0" aria-label="Footer">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline inline-block py-1.5 text-[0.8rem] uppercase tracking-[0.16em] opacity-70 hover:opacity-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / location */}
          <div className="md:col-span-3">
            <p className="text-[0.72rem] uppercase tracking-[0.18em] opacity-50">
              {footer.city} · {footer.country}
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              {siteConfig.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="link-underline inline-block opacity-80 hover:opacity-100"
                >
                  {p.label}
                </a>
              ))}
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-block text-sm opacity-80 hover:opacity-100"
            >
              {siteConfig.instagram}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line-ink pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>
            {footer.copyright} · {footer.legalNote}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`${prefix}/legal-notice`}
              className="link-underline opacity-70 hover:opacity-100"
            >
              {footer.legalNotice}
            </Link>
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
