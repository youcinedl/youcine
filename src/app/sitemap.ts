import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/youcine-apk",
    "/youcine-para-pc",
    "/youcine-para-smart-tv",
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
    changeFrequency: (route === "" || route === "/youcine-apk" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1 : route === "/youcine-apk" ? 0.9 : 0.8,
  }));
}
