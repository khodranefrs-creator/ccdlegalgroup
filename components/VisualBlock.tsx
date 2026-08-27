import Image from "next/image";

/**
 * MediaField — the firm's imagery primitive.
 *
 * Renders an art-directed photograph with an optional "document" treatment:
 * a fine ruled border, a corner index, an overline label and a bottom caption
 * bar — the recurring visual vocabulary of «El Despacho». Every visible photo
 * on the site runs through this component so the framing is always consistent.
 */
export function MediaField({
  src,
  alt = "",
  label,
  index,
  sizes = "100vw",
  priority = false,
  className = "",
  tone = "paper",
  aspect,
}: {
  src?: string | null;
  alt?: string;
  /** Overline label — e.g. "Madrid — Chamberí" */
  label?: string;
  /** Corner index — e.g. "01" */
  index?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Border tone */
  tone?: "paper" | "ink";
  /** Optional aspect ratio as Tailwind class, e.g. "aspect-[3/4]" */
  aspect?: string;
}) {
  const borderColor = tone === "ink" ? "border-line-ink" : "border-line";
  const textColor = tone === "ink" ? "text-paper/70" : "text-ink/60";

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        /* Fallback when no photograph is provided — a quiet tonal field */
        <div className={`absolute inset-0 bg-paper-3 ${aspect ? "" : ""}`} />
      )}

      {/* Document frame */}
      <div
        className={`pointer-events-none absolute inset-0 border ${borderColor}`}
        aria-hidden="true"
      />
      {/* Corner index */}
      {index && (
        <span
          className={`pointer-events-none absolute top-4 left-4 font-display text-2xl font-light leading-none ${textColor}`}
        >
          {index}
        </span>
      )}
      {/* Overline label */}
      {label && (
        <span
          className={`pointer-events-none absolute top-4 right-5 tech ${textColor}`}
        >
          {label}
        </span>
      )}
      {/* Bottom caption bar — faint, not a heavy overlay */}
      {label && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 border-t ${borderColor}`}
          aria-hidden="true"
        />
      )}
    </figure>
  );
}

/* Backwards-compatible aliases used by legacy call sites */
export function VisualBlock(props: {
  src?: string | null;
  alt?: string;
  variant?: "dark" | "oxblood" | "beige";
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const { variant, imgClassName, ...rest } = props;
  const tone = variant === "dark" ? "ink" : "paper";
  return (
    <MediaField
      tone={tone}
      className={`${props.className ?? ""} ${imgClassName ? "" : ""}`}
      {...rest}
    />
  );
}
