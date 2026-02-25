import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gurirai.online",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}