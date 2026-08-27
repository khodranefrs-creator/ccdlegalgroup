import type { Locale } from "./site";
import { getServices } from "./services";
import { getInsights } from "./insights";

/**
 * Search index — powers the firm-wide search overlay.
 *
 * Built from the same verified configuration as the rest of the site (practices,
 * insights, pages), so the index can never drift from what is displayed.
 *
 * Each entry carries a `type` used to group results: "practice" | "insight" |
 * "page" | "person". `query` is the searchable corpus; `href` is the destination.
 */
export type SearchEntry = {
  type: "practice" | "insight" | "page" | "person";
  label: string;
  sublabel?: string;
  href: string;
  query: string;
};

type PageSeed = {
  path: string;
  label: { es: string; en: string };
  keywords: { es: string; en: string };
};

const pageSeeds: PageSeed[] = [
  {
    path: "/firm",
    label: { es: "El Despacho", en: "The Firm" },
    keywords: {
      es: "despacho abogados firma sobre nosotros madrid",
      en: "firm about us law practice madrid",
    },
  },
  {
    path: "/expertise",
    label: { es: "Áreas de Práctica", en: "Practice Areas" },
    keywords: {
      es: "áreas práctica de práctica servicios civil penal familia extranjería",
      en: "practice areas services capabilities civil criminal family",
    },
  },
  {
    path: "/people",
    label: { es: "Abogados", en: "Lawyers" },
    keywords: { es: "abogados abogada personas equipo carolina", en: "people lawyers attorneys carolina" },
  },
  {
    path: "/insights",
    label: { es: "Perspectivas", en: "Insights" },
    keywords: { es: "perspectivas análisis publicaciones artículos", en: "insights publications analysis articles" },
  },
  {
    path: "/contact",
    label: { es: "Contacto", en: "Contact" },
    keywords: { es: "contacto oficina dirección teléfono email madrid", en: "contact office address phone email" },
  },
];

export function getSearchIndex(locale: Locale): SearchEntry[] {
  const l = locale === "es" ? "es" : "en";
  const prefix = locale === "es" ? "" : `/${locale}`;

  const practices = getServices(locale);
  const insights = getInsights(locale).filter((i) => i.published);

  const entries: SearchEntry[] = [];

  // Practices
  practices.forEach((p) => {
    entries.push({
      type: "practice",
      label: p.name,
      sublabel: p.summary,
      href: `${prefix}/expertise#${p.id}`,
      query: `${p.name} ${p.summary} ${p.services.join(" ")}`,
    });
  });

  // Published insights
  insights.forEach((i) => {
    entries.push({
      type: "insight",
      label: i.title,
      sublabel: i.category,
      href: `${prefix}/insights`,
      query: `${i.title} ${i.category}`,
    });
  });

  // People
  entries.push({
    type: "person",
    label: locale === "es" ? "Carolina Cutilla Díaz" : "Carolina Cutilla Díaz",
    sublabel:
      locale === "es"
        ? "Abogada · Criminóloga · Fundadora"
        : "Lawyer · Criminologist · Founder",
    href: `${prefix}/people`,
    query:
      locale === "es"
        ? "carolina cutilla díaz abogada criminóloga fundadora madrid"
        : "carolina cutilla díaz lawyer criminologist founder madrid",
  });

  // Static pages
  pageSeeds.forEach((pg) => {
    entries.push({
      type: "page",
      label: pg.label[l],
      href: `${prefix}${pg.path}`,
      query: `${pg.label[l]} ${pg.keywords[l]}`,
    });
  });

  return entries;
}
