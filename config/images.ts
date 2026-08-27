/**
 * Image assets.
 *
 * No external photography is bundled yet (see design brief §20). The website
 * uses an art-directed CSS composition system instead. Drop real paths here
 * (e.g. "/images/founder.jpg") and the matching <VisualBlock> will render the
 * photograph automatically — no component changes required.
 *
 * Recommended: dark, editorial, Madrid-inspired photography.
 */

export const imagesConfig = {
  founderPortrait: null as string | null, // "/images/carolina.jpg"
  founderWide: null as string | null, // "/images/carolina-wide.jpg"
  heroArchitecture: null as string | null, // "/images/madrid-architecture.jpg"
  mattersGrid: {
    personal: null as string | null,
    professional: null as string | null,
    business: null as string | null,
  },
};
