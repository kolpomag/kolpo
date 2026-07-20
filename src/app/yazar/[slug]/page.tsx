import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import {
  getAuthor,
  getContentHref,
  SITE_URL,
} from "@/data/content-index";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) notFound();

  const canonical = `/yazar/${slug}`;

  return {
    title: author.name,
    alternates: { canonical },
    openGraph: {
      title: `${author.name} — kolpo.`,
      url: new URL(canonical, SITE_URL),
      images: ["/og-image.jpg"],
    },
  };
}

export default async function YazarPage({
  params,
}: AuthorPageProps) {
  const { slug } = await params;
  const accent = "#c32721";
  const author = getAuthor(slug);

  if (!author) notFound();

  const authorEntries = author.entries.map(([contentSlug, content]) => ({
    title: content.title,
    href: getContentHref(contentSlug, content),
    type: content.label || "şiir",
  }));

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, serif" }}>
      <style>{`.title-link:hover { color: ${accent} !important; }`}</style>
      <SiteHeader />
      <section style={{ padding: "30px 36px 110px 36px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "30px" }}>
          <h1 style={{ margin: 0, fontSize: "84px", lineHeight: 0.94, fontWeight: 600, letterSpacing: "-0.05em", color: "#c32721" }}>
            {author.name}
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "54px" }}>
          {authorEntries.map((entry) => (
            <article key={entry.href} style={{ maxWidth: "980px" }}>
              <h2 style={{ margin: 0, fontSize: "72px", lineHeight: 0.94, fontWeight: 600, letterSpacing: "-0.05em" }}>
                <a href={entry.href} className="title-link" style={{ color: "#111111", textDecoration: "none" }}>
                  {entry.title}
                </a>
              </h2>
              <p style={{ marginTop: "12px", fontSize: "19px", color: "#6f6b63", fontFamily: "Arial, sans-serif" }}>
                {entry.type}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
