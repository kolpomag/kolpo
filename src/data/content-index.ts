import { poems, type Poem } from "@/data/content";
import { homeEntries } from "@/data/home-entries";

export const SITE_URL = "https://kolpomag.com";

// Tek editoryal sıra: ana sayfanın kullandığı liste.
// Listeye henüz yerleştirilmemiş içerikler, içerik dosyasındaki sırayla başa gelir.
export const CONTENT_ORDER = [...new Set(homeEntries.map((entry) => entry.href.split("/").pop()!))];

export function getContentHref(slug: string, content: Poem = poems[slug]) {
  return `/${content.label === "yazı" ? "yazi" : "siir"}/${slug}`;
}

export function getOrderedContentEntries(): [string, Poem][] {
  const knownSlugs = new Set<string>(CONTENT_ORDER);
  const unlistedEntries = Object.entries(poems)
    .filter(([slug]) => !knownSlugs.has(slug));
  const orderedEntries = CONTENT_ORDER.flatMap((slug) => {
    const content = poems[slug];
    return content ? ([[slug, content]] as [string, Poem][]) : [];
  });

  return [...unlistedEntries, ...orderedEntries];
}

export function getAuthors() {
  const authors = new Map<string, string>();

  for (const [, content] of getOrderedContentEntries()) {
    for (const author of content.authors) {
      if (!authors.has(author.href)) {
        authors.set(author.href, author.name);
      }
    }
  }

  return Array.from(authors, ([href, name]) => ({ href, name }));
}

export function getAuthor(slug: string) {
  const href = `/yazar/${slug}`;
  const entries = getOrderedContentEntries().filter(([, content]) =>
    content.authors.some((author) => author.href === href)
  );
  const author = entries[0]?.[1].authors.find((item) => item.href === href);

  return author ? { ...author, entries } : undefined;
}
