import SiteHeader from "@/components/SiteHeader";
import { poems } from "@/data/content";

export default function YazarlarPage() {
  const accent = "#c32721";

  // poems.ts içindeki tüm yazarları benzersiz olarak topla
  const authorsMap = new Map();
  Object.values(poems).forEach(poem => {
    poem.authors.forEach(author => {
      // Prowler'ı listeden atla (yazarlar sayfasında görünmesin)
      if (author.name === "prowler") return;

      // author.href'i (slug) anahtar olarak kullanarak tekrarı önle
      if (!authorsMap.has(author.href)) {
        authorsMap.set(author.href, author.name);
      }
    });
  });

  const authorsList = Array.from(authorsMap, ([href, name]) => ({ href, name }));

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, serif" }}>
      <style>{`.author-page-link:hover { color: ${accent} !important; }`}</style>
      <SiteHeader />
      <section style={{ padding: "30px 36px 110px 36px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "34px" }}>
          <h1 style={{ margin: 0, fontSize: "84px", lineHeight: 0.94, fontWeight: 600, letterSpacing: "-0.05em", color: "#c32721" }}>yazarlar</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", maxWidth: "980px" }}>
          {authorsList.map((author) => (
            <a key={author.href} href={author.href} className="author-page-link" style={{ color: "#111111", textDecoration: "none", transition: "color 0.18s ease", fontSize: "58px", lineHeight: 0.95, letterSpacing: "-0.05em", fontWeight: 600 }}>
              {author.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}