"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/config/site";

const locales: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  // Strip the current locale prefix from the pathname to get the base path.
  const rest = pathname.replace(/^\/(es|en)/, "") || "/";

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-0.5 text-[0.7rem] tracking-[0.2em] uppercase"
    >
      {locales.map((l, i) => {
        const active = locale === l.code;
        const href = l.code === "es" ? rest : `/en${rest === "/" ? "" : rest}`;
        return (
          <span key={l.code} className="flex items-center">
            {i > 0 && <span className="mx-1 text-current opacity-30">/</span>}
            {active ? (
              <span className="font-semibold text-current" aria-current="page">
                {l.label}
              </span>
            ) : (
              <Link
                href={href}
                className="opacity-45 transition-opacity duration-300 hover:opacity-100"
                aria-label={`Switch to ${l.label}`}
              >
                {l.label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
