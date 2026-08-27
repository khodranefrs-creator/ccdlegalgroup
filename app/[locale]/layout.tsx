import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { siteConfig, type Locale } from "@/config/site";
import { getDictionary } from "@/config/translations";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export const viewport: Viewport = {
  themeColor: "#0d1419",
  width: "device-width",
  initialScale: 1,
};

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const t = getDictionary(validLocale);

  return {
    metadataBase: new URL(siteConfig.canonicalUrl),
    title: {
      default: t.meta.homeTitle,
      template: `%s — ${siteConfig.name}`,
    },
    description: t.meta.homeDescription,
    alternates: {
      canonical: validLocale === defaultLocale ? "/" : `/${validLocale}`,
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      title: siteConfig.name,
      description: t.meta.homeDescription,
      url: validLocale === defaultLocale ? "/" : `/${validLocale}`,
      siteName: siteConfig.name,
      locale: validLocale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!locales.includes(rawLocale as Locale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale === "es" ? "es" : "en"}
      className={`${sourceSerif.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <SiteHeader locale={locale} nav={dict.nav} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} footer={dict.footer} nav={dict.nav} />

        {/* Structured data — Organization / LegalService / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LegalService", "LocalBusiness"],
              name: siteConfig.legalName,
              alternateName: siteConfig.name,
              legalName: siteConfig.legalName,
              slogan: siteConfig.positioning,
              founder: {
                "@type": "Person",
                name: siteConfig.founder,
                jobTitle: siteConfig.founderRoles[0],
              },
              description: dict.meta.homeDescription,
              areaServed: { "@type": "City", name: "Madrid" },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.locality,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
              geo: { "@type": "GeoCoordinates", latitude: 40.432, longitude: -3.678 },
              url: siteConfig.canonicalUrl,
              email: siteConfig.email,
              telephone: siteConfig.phones.map((p) => p.label).join(", "),
              sameAs: [siteConfig.instagramUrl],
              priceRange: "€€",
            }),
          }}
        />
      </body>
    </html>
  );
}
