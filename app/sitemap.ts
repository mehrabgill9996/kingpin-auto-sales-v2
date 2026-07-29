import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { carSlugsQuery } from "@/sanity/lib/queries";
import { siteConfig } from "@/data/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/inventory", priority: 0.9 },
    { path: "/trade-in", priority: 0.8 },
    { path: "/financing", priority: 0.8 },
    { path: "/recently-sold", priority: 0.6 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/feedback", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const slugs = await client.fetch<{ slug: string }[]>(carSlugsQuery);

  const carRoutes = slugs
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${siteConfig.url}/inventory/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...carRoutes];
}
