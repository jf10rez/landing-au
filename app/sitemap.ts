import type { MetadataRoute } from "next";
import { locales } from "@/app/lib/i18n/config";
import { allEmployeeSlugs } from "@/app/catalogo/data";
import { SITE_URL } from "@/app/lib/i18n/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/catalogo", priority: 0.9 },
    ...allEmployeeSlugs.map((slug) => ({
      path: `/catalogo/${slug}`,
      priority: 0.8,
    })),
  ];

  return routes.flatMap(({ path, priority }) =>
    locales.map((locale) => {
      const languages: Record<string, string> = Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
      );
      languages["x-default"] = `${SITE_URL}/en${path}`;

      return {
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority,
        alternates: { languages },
      };
    }),
  );
}