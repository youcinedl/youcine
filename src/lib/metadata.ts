import { Metadata } from "next";
import { SITE_URL } from "./constants";

export function generateMeta(title: string, description: string, slug: string): Metadata {
  return {
    title: `${title} | YouCine`,
    description,
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${slug}`,
      type: "website",
    },
  };
}
