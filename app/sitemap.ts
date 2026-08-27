import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const basePaths = [
  "",
  "/firm",
  "/expertise",
  "/people",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["es", "en"] as const) {
    for (const path of basePaths) {
      const url =
        locale === "es"
          ? `${siteConfig.canonicalUrl}${path === "" ? "" : path}`
          : `${siteConfig.canonicalUrl}/en${path}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
