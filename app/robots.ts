import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.gurirai.online",
    sitemap: "https://www.gurirai.online/sitemap.xml",
  };
}