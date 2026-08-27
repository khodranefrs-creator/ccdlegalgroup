/**
 * CCD Legal Group — centralised site configuration.
 *
 * Every editable piece of real-world information (contact details, addresses,
 * founder positioning, services, navigation) lives here so it can be updated
 * without touching the UI components.
 *
 * NOTE ON VERIFICATION:
 * - Only confirmed facts are hard-coded below (see brand brief §30).
 * - Any item that is not fully verified is stored as clearly-marked editable
 *   placeholder content, or omitted entirely.
 * - Address information conflicts across public sources, so it is centralised
 *   here for easy correction.
 */

export const siteConfig = {
  name: "CCD Legal Group",
  legalName: "Cutilla Díaz & Cons Abogados",
  positioning: "Legal & Business Advisory | Madrid",
  tagline: "Counsel built around the matter.",
  founder: "Carolina Cutilla Díaz",
  founderRoles: ["Abogada", "Criminóloga", "Founder"],
  city: "Madrid",
  country: "Spain",
  street: "Príncipe de Vergara 132",
  district: "Chamberí",
  postalCode: "28002",
  province: "Madrid",
  domain: "abogadoscutilladiaz.es",
  canonicalUrl: "https://abogadoscutilladiaz.es",
  instagram: "@ccd_legalgroup",
  instagramUrl: "https://instagram.com/ccd_legalgroup",
  email: "despacho@abogadoscutilladiaz.es",
  emails: {
    despacho: "despacho@abogadoscutilladiaz.es",
  },
  phones: [
    { label: "+34 639 694 387", tel: "+34639694387" },
    { label: "+34 722 472 462", tel: "+34722472462" },
  ],
  /** Verified address per brand brief: Príncipe de Vergara 132, Madrid. */
  address: {
    primary: "Príncipe de Vergara 132, 28002 Madrid, España",
    street: "Príncipe de Vergara 132",
    postalCode: "28002",
    locality: "Madrid",
    country: "ES",
  },
} as const;

export type Locale = "es" | "en";
