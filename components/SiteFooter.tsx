import Link from "next/link";
import { siteConfig, type Locale } from "@/config/site";
import { getServices } from "@/config/services";
import LanguageSwitch from "./LanguageSwitch";

type FooterDict = {
  desc: string;
  office: string;
  contactHeading: string;
  legalHeading: string;
  addressLine1: string;
  addressLine2: string;
  instagram: string;
  emailLabel: string;
  legalNote: string;
  copyright: string;
  rights: string;
  legalNotice: string;
  privacy: string;
  toTop: string;
  practiceAreas: string[];
};

type NavDict = {
  about: string;
  practices: string;
  people: string;
  insights: string;
  contact: string;
};

export default function SiteFooter({
  locale,
  footer,
  nav,
}: {
  locale: Locale;
  footer: FooterDict;
  nav: NavDict;
}) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const practices = getServices(locale);

  const firmLinks = [
    { href: `${prefix}/firm`, label: nav.about },
    { href: `${prefix}/people`, label: nav.people },
    { href: `${prefix}/insights`, label: nav.insights },
    { href: `${prefix}/contact`, label: nav.contact },
  ];

  const legalLinks = [
    { href: `${prefix}/privacy`, label: footer.privacy },
    { href: `${prefix}/legal-notice`, label: footer.legalNotice },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1360px] px-gutter py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Column 1 — brand */}
          <div className="md:col-span-4">
            <p className="font-display text-xl font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{footer.desc}</p>
            <p className="mt-6 text-sm text-paper/80">
              {siteConfig.city}
              <br />
              {siteConfig.country}
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-paper/70"
            >
              {footer.instagram} ↗
            </a>
          </div>

          {/* Column 2 — practices */}
          <div className="md:col-span-3">
            <p className="eyebrow text-paper/40">{nav.practices}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {practices.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`${prefix}/expertise#${p.id}`}
                    className="text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — firm */}
          <div className="md:col-span-2">
            <p className="eyebrow text-paper/40">{footer.contactHeading}</p>
            <nav className="mt-5 flex flex-col gap-2.5 text-sm">
              {firmLinks.map((n) => (
                <Link key={n.href} href={n.href} className="text-paper/70 transition-colors duration-200 hover:text-paper">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — legal */}
          <div className="md:col-span-3">
            <p className="eyebrow text-paper/40">{footer.legalHeading}</p>
            <nav className="mt-5 flex flex-col gap-2.5 text-sm">
              {legalLinks.map((n) => (
                <Link key={n.href} href={n.href} className="text-paper/70 transition-colors duration-200 hover:text-paper">
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col text-sm text-paper/70">
              {siteConfig.phones.map((ph) => (
                <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline w-fit">
                  {ph.label}
                </a>
              ))}
              <a href={`mailto:${siteConfig.email}`} className="link-underline w-fit mt-1">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* legal bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line-ink pt-6 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {footer.copyright} {footer.rights} · {footer.legalNote}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <LanguageSwitch locale={locale} />
            </div>
            <span className="hidden h-3 w-px bg-line-ink sm:block" aria-hidden="true" />
            <div className="flex gap-6">
              {legalLinks.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-paper">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
