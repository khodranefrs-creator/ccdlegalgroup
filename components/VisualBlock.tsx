import Image from "next/image";

/**
 * MediaField — the firm's imagery primitive.
 *
 * A restrained, architectural framing for photography: a fine inner rule, a
 * small corner coordinate and a modest caption. No decorative overlays — the
 * photograph does the work. Every visible photo on the site uses this so
 * framing stays consistent.
 */
export function MediaField({
  src,
  alt = "",
  caption,
  corner,
  sizes = "100vw",
  priority = false,
  className = "",
  tone = "light",
  imgClassName = "",
}: {
  src?: string | null;
  alt?: string;
  /** Small caption below/inside the frame */
  caption?: string;
  /** Corner coordinate, e.g. "01" or "Madrid · 40.43N" */
  corner?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** tone drives the inner rule + caption colour */
  tone?: "light" | "dark";
  imgClassName?: string;
}) {
  const rule = tone === "dark" ? "border-navy-3" : "border-line";
  const text = tone === "dark" ? "text-ivory/70" : "text-stone";

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 bg-ivory-3" />
      )}

      {/* Fine inner rule */}
      <div
        className={`pointer-events-none absolute inset-0 border ${rule}`}
        aria-hidden="true"
      />

      {/* Corner coordinate */}
      {corner && (
        <span
          className={`pointer-events-none absolute top-4 left-4 tabular text-[0.62rem] uppercase tracking-[0.18em] ${text}`}
        >
          {corner}
        </span>
      )}

      {/* Caption */}
      {caption && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 border-t ${rule} px-4 py-2`}
        >
          <span className={`text-[0.62rem] uppercase tracking-[0.16em] ${text}`}>
            {caption}
          </span>
        </div>
      )}
    </figure>
  );
}
