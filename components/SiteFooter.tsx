import Link from "next/link";
import { siteConfig, type Locale } from "@/config/site";

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
  cta: string;
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

  const navItems = [
    { href: `${prefix}/firm`, label: nav.about },
    { href: `${prefix}/expertise`, label: nav.practices },
    { href: `${prefix}/people`, label: nav.people },
    { href: `${prefix}/insights`, label: nav.insights },
    { href: `${prefix}/contact`, label: nav.contact },
  ];

  return (
    <footer className="bg-navy text-ivory border-t border-line-navy">
      {/* top CTA strip */}
      <div className="border-b border-line-navy">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-6 px-gutter py-8">
          <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-tight">
            CCD Legal Group
          </p>
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-3 bg-oxblood px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood-2"
          >
            Contact <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-gutter py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand / description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-ivory/40">
                <span className="font-display text-lg font-semibold">CCD</span>
              </span>
              <span className="font-display text-lg font-semibold">CCD Legal Group</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">{footer.desc}</p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 inline-block text-[0.72rem] uppercase tracking-[0.16em] text-ivory/70"
            >
              {footer.instagram} ↗
            </a>
          </div>

          {/* Office */}
          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/40">{footer.office}</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/80">
              {siteConfig.address.street}
              <br />
              {footer.addressLine2}
            </p>
            <div className="mt-4 flex flex-col text-sm text-ivory/70">
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

          {/* Practice areas */}
          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/40">{footer.legalHeading}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {footer.practiceAreas.map((area) => (
                <li key={area}>
                  <Link href={`${prefix}/expertise`} className="text-ivory/70 transition-colors duration-200 hover:text-ivory">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm nav */}
          <div className="md:col-span-2">
            <p className="eyebrow text-ivory/40">{footer.contactHeading}</p>
            <nav className="mt-5 flex flex-col gap-2.5 text-sm">
              {navItems.map((n) => (
                <Link key={n.href} href={n.href} className="text-ivory/70 transition-colors duration-200 hover:text-ivory">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* legal bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line-navy pt-6 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>
            {footer.copyright} {footer.rights} · {footer.legalNote}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`${prefix}/legal-notice`} className="hover:text-ivory">
              {footer.legalNotice}
            </Link>
            <Link href={`${prefix}/privacy`} className="hover:text-ivory">
              {footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
