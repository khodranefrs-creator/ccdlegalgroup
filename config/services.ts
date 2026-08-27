import type { Locale } from "./site";

/**
 * Services / areas of practice.
 *
 * DATA INTEGRITY: Only items flagged `verified: true` correspond to external
 * classifications we have confirmed (legal services, workplace accidents,
 * traffic accidents). Everything else is an editable placeholder for the client
 * to confirm or replace. Add/remove/rename entries freely — the UI renders the
 * list directly from this array.
 */

export type Service = {
  id: string;
  verified: boolean;
  name: { es: string; en: string };
  /** single short sentence */
  description: { es: string; en: string };
};

export const servicesConfig: Service[] = [
  {
    id: "legal-advisory",
    verified: true,
    name: { es: "Asesoría Legal", en: "Legal Advisory" },
    description: {
      es: "Asesoramiento jurídico claro y riguroso para particulares y empresas.",
      en: "Clear and rigorous legal counsel for individuals and businesses.",
    },
  },
  {
    id: "workplace-accidents",
    verified: true,
    name: { es: "Accidentes Laborales", en: "Workplace Accidents" },
    description: {
      es: "Acompañamiento en reclamaciones derivadas de accidentes de trabajo.",
      en: "Support with claims arising from workplace accidents.",
    },
  },
  {
    id: "traffic-accidents",
    verified: true,
    name: { es: "Accidentes de Tráfico", en: "Traffic Accidents" },
    description: {
      es: "Gestión de reclamaciones y defensa en accidentes de circulación.",
      en: "Management of claims and defence in road traffic accidents.",
    },
  },
  {
    id: "business-advisory",
    verified: false,
    name: { es: "Asesoría de Negocio", en: "Business Advisory" },
    description: {
      es: "Consejo estratégico que une lo jurídico con la visión de negocio.",
      en: "Strategic counsel joining the legal with the business view.",
    },
  },
];

export function getServices(locale: Locale) {
  return servicesConfig.map((s) => ({
    id: s.id,
    verified: s.verified,
    name: s.name[locale],
    description: s.description[locale],
  }));
}
