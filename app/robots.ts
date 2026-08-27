import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/legal-notice", "/privacy"],
    },
    sitemap: `${siteConfig.canonicalUrl}/sitemap.xml`,
  };
}
