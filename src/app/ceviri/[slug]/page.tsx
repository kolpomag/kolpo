import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { poems } from "@/data/content";

function getRandomContent(currentSlug: string, count: number = 3) {
  const allSlugs = Object.keys(poems).filter(slug => slug !== currentSlug);
  const shuffled = [...allSlugs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(slug => ({
    title: poems[slug].title,
    href: `/${poems[slug].label === 'yazı' ? 'yazi' : poems[slug].label === 'çeviri' ? 'ceviri' : 'siir'}/${slug}`
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = poems[slug];
  const seoDescription = "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.";
  
  if (!content) return { title: "bulunamadı", description: seoDescription };
  
  return {
    title: content.title,
    description: seoDescription,
    openGraph: { title: `${content.title} — kolpo.`, description: seoDescription, images: ["/og-image.jpg"] },
  };
}

export default async function CeviriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";
  const translation = poems[slug];

  const navLinkStyle = { textDecoration: "none", color: "#111111", transition: "color 0.18s ease" };
  const linkStyle = { color: "#111111", textDecoration: "none", transition: "color 0.18s ease" };

  if (!translation || translation.label !== "çeviri") {
    return <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, Times New Roman, serif", padding: "34px 36px" }}>çeviri bulunamadı</main>;
  }

  const randomMore = getRandomContent(slug);

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, Times New Roman, serif" }}>
      <style>{`.nav-link:hover, .author-link:hover, .more-link:hover { color: ${accent} !important; }`}</style>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "34px 36px 18px 36px" }}>
        <a href="/" style={{ display: "block" }}><img src="/kolpo.png" alt="kolpo." style={{ width: "230px", height: "auto", display: "block" }} /></a>
        <nav style={{ display: "flex", gap: "26px", paddingTop: "8px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em" }}>
          <a href="/" className="nav-link" style={{ ...navLinkStyle, opacity: 0.78 }}>ana sayfa</a>
          <a href="/arsiv" className="nav-link" style={{ ...navLinkStyle, opacity: 0.78 }}>arşiv</a>
          <a href="/nedir" className="nav-link" style={{ ...navLinkStyle, opacity: 0.78 }}>nedir</a>
          <a href="/iletisim" className="nav-link" style={{ ...navLinkStyle, opacity: 0.78 }}>iletişim</a>
        </nav>
      </header>

      <section style={{ padding: "24px 36px 110px 36px", maxWidth: "1280px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "28px" }}>
          <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "14px", letterSpacing: "-0.01em", color: "#6f6b63", marginBottom: "14px" }}>çeviri</div>
          <h1 style={{ margin: 0, maxWidth: "980px", fontSize: "92px", lineHeight: 0.93, fontWeight: 600, letterSpacing: "-0.05em" }}>{translation.title}</h1>
          <p style={{ marginTop: "16px", marginBottom: 0, fontSize: "20px", lineHeight: 1.15, fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "-0.02em" }}>
            {translation.authors.map((author, index) => (
              <span key={author.href}>
                <a href={author.href} className="author-link" style={linkStyle}>{author.name}</a>
                {index < translation.authors.length - 1 ? <span style={{ color: "#6f6b63" }}> & </span> : null}
              </span>
            ))}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 880px) 1fr", gap: "72px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "26px", lineHeight: 1.68, letterSpacing: "-0.015em" }}>
            {translation.body.map((block, index) => {
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
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {randomMore.map((item) => (
                  <a key={item.href} href={item.href} className="more-link" style={{ color: "#111111", textDecoration: "none", transition: "color 0.18s ease", fontSize: "30px", lineHeight: 1.04, letterSpacing: "-0.04em" }}>{item.title}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}