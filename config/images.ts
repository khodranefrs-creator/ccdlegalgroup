/**
 * Image assets.
 *
 * EDITORIAL PLACEHOLDER PHOTOGRAPHY (license-clean, via Pexels):
 * These are curated, art-directed photographs (Madrid architecture and
 * professional interiors) used to establish the design. They are NOT the firm's
 * own photography. Replace each path with the firm's real photography (e.g.
 * "/images/founder-carolina.jpg") and the same <MediaField> component will
 * render it — no component changes required.
 *
 * Photography spec for the final set (dark, editorial, Madrid-inspired):
 *  - subject: Madrid architecture (vertical, dusk), the chambers' interior,
 *    desk still-lifes, founder portrait (natural, warm, upright).
 *  - lighting: soft natural / window light, low contrast, warm shadows.
 *  - camera: 50–85mm, shallow depth, face-on or gentle three-quarter.
 *  - colour: warm bone + deep espresso with the oxblood seal as the only colour.
 *  - crop: tight, editorial, generous negative space for the type overlay.
 */

export const imagesConfig = {
  /* Madrid architecture at dusk — tall/vertical (1800×2400). Hero statement. */
  heroArchitecture: "/images/madrid-metropolis-dusk.jpg",
  /* Madrid Gran Vía by day — landscape (1800×1350). Contact/footer field. */
  cityWide: "/images/madrid-granvia-day.jpg",
  /* Elegant office interior — landscape (1600×1067). The chambers. */
  officeInterior: "/images/office-desk.jpg",
  /* Modernist stair interior — landscape (1600×1067). Motif field. */
  stairInterior: "/images/interior-stair.jpg",
  /**
   * Founder portrait — unset. When real firm photography is provided, drop the
   * path here (e.g. "/images/founder-carolina.jpg"). Until then the founder
   * sections use the office interior + document system (never a stock person
   * presented as the founder).
   */
  founderPortrait: null as string | null,
  mattersGrid: {
    personal: "/images/office-desk.jpg",
    professional: "/images/interior-stair.jpg",
    business: "/images/madrid-granvia-day.jpg",
  },
};
