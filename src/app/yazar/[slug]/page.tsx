import SiteHeader from "@/components/SiteHeader";
import { poems } from "@/data/content";

export default async function YazarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";

  const authorEntries: { title: string; href: string; type: string }[] = [];
  let authorName = "";

  Object.entries(poems).forEach(([poemSlug, poem]) => {
    const foundAuthor = poem.authors.find(a => a.href === `/yazar/${slug}`);
    
    if (foundAuthor) {
      authorName = foundAuthor.name;
      
      // KURAL: Sadece "yazı" olanlar /yazi rotasına gider. Geri kalanlar /siir rotasında kalır.
      let basePath = poem.label === "yazı" ? "yazi" : "siir";

      authorEntries.push({
        title: poem.title,
        href: `/${basePath}/${poemSlug}`,
        type: poem.label || "şiir"
      });
    }
  });

  if (!authorName) {
    return <main style={{ background: "#f3f0e8", minHeight: "100vh", padding: "34px 36px" }}>yazar bulunamadı</main>;
  }

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, serif" }}>
      <style>{`.title-link:hover { color: ${accent} !important; }`}</style>
      <SiteHeader />
      <section style={{ padding: "30px 36px 110px 36px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "30px" }}>
          <h1 style={{ margin: 0, fontSize: "84px", lineHeight: 0.94, fontWeight: 600, letterSpacing: "-0.05em", color: "#c32721" }}>
            {authorName}
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