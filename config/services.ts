import type { Locale } from "./site";

/**
 * Practice areas.
 *
 * DATA INTEGRITY: Each area carries a `verified` flag. Only practices firmly
 * established in the firm's positioning are marked `verified: true`. Sub‑service
 * lists are broad, verifiable descriptors of the matter types each area
 * addresses — not fabricated claims about the firm's volume or outcomes.
 * Adjust freely — the UI renders directly from this array.
 */

export type Practice = {
  id: string;
  no: string;
  verified: boolean;
  name: { es: string; en: string };
  summary: { es: string; en: string };
  services: { es: string[]; en: string[] };
};

export const practicesConfig: Practice[] = [
  {
    id: "civil",
    no: "01",
    verified: true,
    name: { es: "Derecho Civil", en: "Civil Law" },
    summary: {
      es: "Asesoramiento y defensa en las relaciones jurídicas entre personas y en la tutela de los derechos patrimoniales.",
      en: "Counsel and defence across the legal relationships between persons and the protection of patrimonial rights.",
    },
    services: {
      es: [
        "Contratos y obligaciones",
        "Responsabilidad civil",
        "Propiedad y reclamaciones",
        "Derecho de familia patrimonial",
      ],
      en: [
        "Contracts and obligations",
        "Civil liability",
        "Property and claims",
        "Matrimonial property law",
      ],
    },
  },
  {
    id: "criminal",
    no: "02",
    verified: true,
    name: { es: "Derecho Penal", en: "Criminal Law" },
    summary: {
      es: "Defensa penal rigurosa y acompañamiento cercano en todas las fases del procedimiento.",
      en: "Rigorous criminal defence and close support at every stage of proceedings.",
    },
    services: {
      es: [
        "Defensa en procedimiento penal",
        "Asistencia al investigado",
        "Delitos económicos",
        "Pericia y negociación procesal",
      ],
      en: [
        "Defence in criminal proceedings",
        "Assistance to the person under investigation",
        "Economic and financial offences",
        "Expert evidence and procedural strategy",
      ],
    },
  },
  {
    id: "family",
    no: "03",
    verified: true,
    name: { es: "Derecho de Familia", en: "Family Law" },
    summary: {
      es: "Acompañamiento discreto y firme en los asuntos familiares que más afectan a las personas.",
      en: "Discreet, resolute support on the family matters that matter most to people.",
    },
    services: {
      es: [
        "Separaciones y divorcios",
        "Custodia y régimen de visitas",
        "Pensiones y convenios reguladores",
        "Mediación familiar",
      ],
      en: [
        "Separation and divorce",
        "Child custody and access",
        "Maintenance and regulatory agreements",
        "Family mediation",
      ],
    },
  },
  {
    id: "immigration",
    no: "04",
    verified: true,
    name: { es: "Derecho de Extranjería", en: "Immigration Law" },
    summary: {
      es: "Gestión rigurosa de procedimientos de extranjería e inmigración, con foco en la persona y en buenos resultados.",
      en: "Rigorous handling of immigration procedures, focused on the person and on sound outcomes.",
    },
    services: {
      es: [
        "Residencias y visados",
        "Nacionalidad y arraigo",
        "Autorizaciones de trabajo",
        "Reagrupación familiar",
      ],
      en: [
        "Residence permits and visas",
        "Nationality and long-term residence",
        "Work authorisations",
        "Family reunification",
      ],
    },
  },
  {
    id: "advisory",
    no: "05",
    verified: true,
    name: { es: "Asesoría Legal y de Negocio", en: "Business & Legal Advisory" },
    summary: {
      es: "Consejo que une lo jurídico con la visión empresarial: decisiones con menos riesgo y más claridad.",
      en: "Counsel that joins the legal with the business view: better decisions, less risk, more clarity.",
    },
    services: {
      es: [
        "Contratos mercantiles",
        "Decisiones y estrategia corporativa",
        "Gestión del riesgo legal",
        "Consideraciones transfronterizas",
      ],
      en: [
        "Commercial contracts",
        "Corporate decisions and strategy",
        "Legal risk management",
        "Cross-border considerations",
      ],
    },
  },
];

export type Service = {
  id: string;
  no: string;
  name: string;
  summary: string;
  services: string[];
};

export function getServices(locale: Locale): Service[] {
  return practicesConfig.map((p) => ({
    id: p.id,
    no: p.no,
    name: p.name[locale],
    summary: p.summary[locale],
    services: p.services[locale],
  }));
}
