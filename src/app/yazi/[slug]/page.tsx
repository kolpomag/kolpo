import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { poems } from "@/data/content";

function getRandomContent(currentSlug: string, count: number = 5) {
  const allSlugs = Object.keys(poems).filter(slug => slug !== currentSlug);
  const shuffled = [...allSlugs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(slug => ({
    title: poems[slug].title,
    author: poems[slug].authors.map(a => a.name).join(" & "), 
    href: `/${poems[slug].label === 'yazı' ? 'yazi' : poems[slug].label === 'çeviri' ? 'ceviri' : 'siir'}/${slug}`
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const text = poems[slug];
  const seoDescription = "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.";
  
  if (!text) return { title: "bulunamadı", description: seoDescription };
  
  return {
    title: text.title,
    description: seoDescription,
    openGraph: { title: `${text.title} — kolpo.`, description: seoDescription, images: ["/og-image.jpg"] },
  };
}

export default async function YaziPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";
  const text = poems[slug];

  const linkStyle = { color: "#111111", textDecoration: "none", transition: "color 0.18s ease" };

  if (!text || text.label !== "yazı") {
    return <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, Times New Roman, serif", padding: "34px 36px" }}>yazı bulunamadı</main>;
  }

  const randomMore = getRandomContent(slug);

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, Times New Roman, serif" }}>
      <style>{`
        .author-link:hover, .more-link:hover { color: ${accent} !important; }
        .more-link:hover .poem-more-author { color: ${accent} !important; }
      `}</style>
      
      <SiteHeader />

      <section style={{ padding: "24px 36px 110px 36px", maxWidth: "1280px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "28px" }}>
          <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "14px", letterSpacing: "-0.01em", color: "#6f6b63", marginBottom: "14px" }}>yazı</div>
          <h1 style={{ margin: 0, maxWidth: "980px", fontSize: "92px", lineHeight: 0.93, fontWeight: 600, letterSpacing: "-0.05em" }}>{text.title}</h1>
          <p style={{ marginTop: "16px", marginBottom: 0, fontSize: "20px", lineHeight: 1.15, fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "-0.02em" }}>
            {text.authors.map((author, index) => (
              <span key={author.href}>
                <a href={author.href} className="author-link" style={linkStyle}>{author.name}</a>
                {index < text.authors.length - 1 ? <span style={{ color: "#6f6b63" }}> & </span> : null}
              </span>
            ))}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 880px) 1fr", gap: "72px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "26px", lineHeight: 1.68, letterSpacing: "-0.015em" }}>
            {text.body.map((block, index) => {
              if (block.kind === "stanza") {
                return block.text.split("\n").map((line, i) => (
                  <p key={`${index}-${i}`} style={{ margin: 0, whiteSpace: "pre-line" }}>{line}</p>
                ));
              }
              return null;
            })}
          </div>

          <aside style={{ paddingTop: "8px" }}>
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "14px" }}>
              <h2 style={{ margin: "0 0 22px 0", fontSize: "22px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 600, letterSpacing: "-0.02em", color: "#c32721" }}>daha fazlası</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {randomMore.map((item) => (
                  <a key={item.href} href={item.href} className="more-link" style={{ color: "#111111", textDecoration: "none", transition: "color 0.18s ease", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "30px", lineHeight: 1.04, letterSpacing: "-0.04em" }}>{item.title}</span>
                    <span className="poem-more-author" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "16px", color: "#6f6b63", letterSpacing: "-0.01em", transition: "color 0.18s ease" }}>{item.author}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fanzin Görsel Motoru */}
            {text.image && (
              <div style={{ 
                marginTop: "48px", 
                transform: `rotate(${text.image.rotate || 0}deg)`,
                transition: "transform 0.3s ease"
              }}>
                <img 
                  src={text.image.src} 
                  alt={text.image.alt} 
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    display: "block",
                    border: "1px solid rgba(17,17,17,0.15)",
                    filter: "contrast(1.2) grayscale(100%)"
                  }} 
                />
                {text.image.credit && (
                  <div style={{ 
                    marginTop: "12px", 
                    fontSize: "14px", 
                    fontFamily: "Arial, Helvetica, sans-serif", 
                    color: "rgba(17,17,17,0.5)", 
                    textAlign: "right",
                    letterSpacing: "-0.01em"
                  }}>
                    [ {text.image.credit} ]
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}