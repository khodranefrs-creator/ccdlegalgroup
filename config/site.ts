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
  positioning: "Legal & Business Advisory Firm",
  founder: "Carolina Cutilla Díaz",
  founderRoles: ["Abogada", "Criminóloga", "Fundadora"],
  city: "Madrid",
  country: "España",
  domain: "abogadoscutilladiaz.es",
  canonicalUrl: "https://abogadoscutilladiaz.es",
  instagram: "@ccd_legalgroup",
  instagramUrl: "https://instagram.com/ccd_legalgroup",
  emails: {
    despacho: "despacho@abogadoscutilladiaz.es",
  },
  phones: [
    { label: "+34 639 694 387", tel: "+34639694387" },
    { label: "+34 722 472 462", tel: "+34722472462" },
  ],
  /**
   * Addresses.
   * Public sources conflict (one listing shows C. de Hilarión Eslava 51 /
   * Chamberí; Instagram currently shows Príncipe de Vergara 132). Neither is
   * treated as unquestionably current. Update `primary` here whenever the
   * verified current address is confirmed.
   */
  address: {
    primary: null as string | null, // e.g. "Príncipe de Vergara 132, 28002 Madrid, España"
    alt: null as string | null,
    postalCode: "28015", // Chamberí, Madrid
  },
} as const;

export const navigationConfig = {
  links: [
    { id: "firm", href: "/firm" },
    { id: "expertise", href: "/expertise" },
    { id: "carolina", href: "/carolina" },
    { id: "insights", href: "/insights" },
    { id: "contact", href: "/contact" },
  ],
} as const;

export type Locale = "es" | "en";
