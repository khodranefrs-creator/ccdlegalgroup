import Image from "next/image";

/**
 * MediaField — the firm's imagery primitive.
 *
 * A restrained, institutional framing for photography: a neutral hairline and,
 * optionally, a small caption at the base. No decorative overlays, no corner
 * coordinates, no document devices — the photograph does the work.
 */
export function MediaField({
  src,
  alt = "",
  caption,
  sizes = "100vw",
  priority = false,
  className = "",
  tone = "light",
  imgClassName = "",
}: {
  src?: string | null;
  alt?: string;
  /** Small caption below the image */
  caption?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** tone drives the hairline + caption colour */
  tone?: "light" | "dark";
  imgClassName?: string;
}) {
  const rule = tone === "dark" ? "border-line-ink" : "border-line";
  const text = tone === "dark" ? "text-paper/60" : "text-slate";

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
        <div className="absolute inset-0 bg-mist-2" />
      )}

      {/* Neutral hairline */}
      <div
        className={`pointer-events-none absolute inset-0 border ${rule}`}
        aria-hidden="true"
      />

      {/* Caption */}
      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-line/60 bg-gradient-to-t from-black/25 to-transparent px-4 py-3">
          <span className={`text-[0.66rem] uppercase tracking-[0.14em] ${text}`}>
            {caption}
          </span>
        </div>
      )}
    </figure>
  );
}
