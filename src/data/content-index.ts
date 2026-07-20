import { poems, type Poem } from "@/data/content";

export const SITE_URL = "https://kolpomag.com";

// Ana sayfadaki editoryal sirayi sitenin diger listelerinde de korur.
// Yeni ve henuz bu listeye eklenmemis icerikler otomatik olarak basa gelir.
export const CONTENT_ORDER = [
  "unstable-signs-lot-49",
  "landscape-ii-zehra-erkoc",
  "landscape-zehra-erkoc",
  "icinden-cikilamaz-umut-boroloyko",
  "kavramsal-anlami-yaratan-gibi-oku",
  "ankara-bir-memur-sehridir",
  "setaneios",
  "inscription",
  "super-bal-satan-cicekler",
  "izdirap-muhendisligi",
  "24-mayis",
  "cambaz",
  "rats",
  "hammer-amour",
  "daha-yeni",
  "baharlari-da-dahil-eden-yaz-donemi-boyunca",
  "gunceme",
  "denizden-karaya",
  "celik",
  "yerine-koymak-istemez-misiniz",
  "wisteria-magnolia",
  "dog-days",
  "kizil-ruzgar",
  "suru",
  "yasasin-deniz-kenari-ahalisi",
  "gigantic",
  "beton-ormanda-tarla-faresi",
  "prehistoric-bir-guzelligin-var",
  "mahseri-doku",
  "yes",
  "masal",
  "sadness-prevails-all-again",
  "nerede-kaldin-gec-oldu",
  "maverick",
  "gumruk",
  "mujde-sey",
  "goteborg",
  "haziranin-kesfi",
  "sivri-catlaklar",
  "ezbere-saman",
  "ya-siyah-ya-beyaz",
  "gocmus-kediler-bahcesi",
  "piiz-ver-piiz-ver-mayday",
  "oyunlarimiz-var",
  "24101990",
  "belli-belirsiz",
  "kendimin-ic-ve-disbukey-sinirlari",
  "paesino-sborramerda",
  "turmstrasse",
  "feierabendbier",
  "what-remains",
  "uyku-duzeni-duzenleyici",
  "buffalo-bill",
  "belki-bir-sabah",
  "afili-haytalar",
] as const;

export function getContentHref(slug: string, content: Poem = poems[slug]) {
  return `/${content.label === "yazı" ? "yazi" : "siir"}/${slug}`;
}

export function getOrderedContentEntries(): [string, Poem][] {
  const knownSlugs = new Set<string>(CONTENT_ORDER);
  const unlistedEntries = Object.entries(poems)
    .filter(([slug]) => !knownSlugs.has(slug))
    .reverse();
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
