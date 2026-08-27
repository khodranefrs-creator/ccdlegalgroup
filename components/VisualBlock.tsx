import Image from "next/image";
import { imagesConfig } from "@/config/images";

/**
 * Art-directed CSS "architectural" composition.
 * Used as imagery when no photograph is available. Built from gradients,
 * hairlines and typography — reads premium and intentional rather than empty.
 */
export function ArtBlock({
  variant = "dark",
  label,
  className = "",
}: {
  variant?: "dark" | "oxblood" | "beige";
  label?: string;
  className?: string;
}) {
  const bg =
    variant === "oxblood"
      ? "bg-gradient-to-br from-oxblood via-[#5a1d28] to-ink"
      : variant === "beige"
      ? "bg-gradient-to-br from-beige via-[#b8a884] to-[#8f7f5f]"
      : "bg-gradient-to-br from-[#211c16] via-ink to-[#0e0c0a]";

  return (
    <div
      className={`relative overflow-hidden ${bg} ${className}`}
      aria-hidden="true"
    >
      {/* hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f5f1e8 1px, transparent 1px), linear-gradient(to bottom, #f5f1e8 1px, transparent 1px)",
          backgroundSize: "16.666% 20%",
        }}
      />
      {/* large corner index */}
      <div className="absolute top-6 right-6 font-display text-6xl font-light italic text-paper/30 leading-none">
        {label ? "“" : ""}
      </div>
      {/* subtle radial light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, rgba(245,241,232,0.10), transparent 55%)",
        }}
      />
      {/* bottom hairline + signature */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {label && (
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-paper/60">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Renders real photography when configured, otherwise the CSS art block.
 * All parents must set an explicit aspect-ratio so layout is stable.
 */
export function VisualBlock({
  src,
  alt = "",
  variant = "dark",
  label,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
}: {
  src?: string | null;
  alt?: string;
  variant?: "dark" | "oxblood" | "beige";
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }
  return <ArtBlock variant={variant} label={label} className={className} />;
}

export { imagesConfig };
