import { Metadata } from "next";
import { SITE_URL } from "./constants";

export function generateMeta(title: string, description: string, slug: string): Metadata {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const canonicalUrl = cleanSlug ? `${SITE_URL}/${cleanSlug}` : SITE_URL;

  return {
    title: `${title} | YouCine`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
    icons: {
      icon: "/images/youcine logo.webp",
    },
  };
}
