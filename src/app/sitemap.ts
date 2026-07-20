import type { MetadataRoute } from "next";
import {
  getAuthors,
  getContentHref,
  getOrderedContentEntries,
  SITE_URL,
} from "@/data/content-index";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/arsiv`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/yazarlar`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/nedir`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/iletisim`, changeFrequency: "yearly", priority: 0.3 },
  ];
  const contentPages: MetadataRoute.Sitemap = getOrderedContentEntries().map(
    ([slug, content]) => ({
      url: new URL(getContentHref(slug, content), SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: content.image
        ? [new URL(content.image.src, SITE_URL).toString()]
        : undefined,
    })
  );
  const authorPages: MetadataRoute.Sitemap = getAuthors().map((author) => ({
    url: new URL(author.href, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...contentPages, ...authorPages].map((entry) => ({
    ...entry,
    lastModified,
  }));
}
