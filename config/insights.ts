import type { Locale } from "./site";

/**
 * Insights — editorial knowledge centre.
 *
 * Each card is defined here. The three entries below are PLACEHOLDERS so the
 * design and structure are demonstrable; replace them with real articles as
 * they are published. Add a new object to the array and it renders instantly.
 */

export type Insight = {
  id: string;
  published: boolean;
  category: { es: string; en: string };
  title: { es: string; en: string };
  date: string; // ISO date for sorting/display
  excerpt?: { es: string; en: string };
};

export const insightsConfig: Insight[] = [
  {
    id: "placeholder-01",
    published: false,
    category: { es: "Criminología", en: "Criminology" },
    title: {
      es: "Título de la primera perspectiva — pendiente de publicación",
      en: "Title of the first perspective — pending publication",
    },
    date: "2026-01-01",
  },
  {
    id: "placeholder-02",
    published: false,
    category: { es: "Derecho", en: "Law" },
    title: {
      es: "Título de la segunda perspectiva — pendiente de publicación",
      en: "Title of the second perspective — pending publication",
    },
    date: "2026-01-15",
  },
  {
    id: "placeholder-03",
    published: false,
    category: { es: "Negocio", en: "Business" },
    title: {
      es: "Título de la tercera perspectiva — pendiente de publicación",
      en: "Title of the third perspective — pending publication",
    },
    date: "2026-02-01",
  },
];

export function getInsights(locale: Locale) {
  return insightsConfig.map((i) => ({
    id: i.id,
    published: i.published,
    category: i.category[locale],
    title: i.title[locale],
    date: i.date,
  }));
}
