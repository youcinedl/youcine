import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/br",
    "/youcine-para-pc",
    "/youcine-smart-tv",
    "/youcine-ios",
    "/about",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/dmca",
    "/blog/article-1",
    "/blog/article-2",
    "/blog/article-3",
    "/blog/article-4",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/br" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1 : route === "/br" ? 0.9 : 0.8,
  }));
}
