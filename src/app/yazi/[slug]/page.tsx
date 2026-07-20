import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { poems } from "@/data/content";
import { getContentHref, SITE_URL } from "@/data/content-index";

function getRandomContent(currentSlug: string, count: number = 5) {
  const allSlugs = Object.keys(poems).filter(slug => slug !== currentSlug);
  const shuffled = [...allSlugs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(slug => ({
    title: poems[slug].title,
    author: poems[slug].authors.map(a => a.name).join(" & "), 
    href: getContentHref(slug, poems[slug])
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const text = poems[slug];
  const seoDescription = "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir çağdaş yazın alanı.";
  
  if (!text || text.label !== "yazı") notFound();

  const canonical = getContentHref(slug, text);
  
  return {
    title: text.title,
    description: seoDescription,
    alternates: { canonical },
    openGraph: {
      title: `${text.title} — kolpo.`,
      description: seoDescription,
      url: new URL(canonical, SITE_URL),
      images: ["/og-image.jpg"],
    },
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

  if (!text || text.label !== "yazı") notFound();

  const randomMore = getRandomContent(slug);

  return (
    <main style={{ background: "#f3f0e8", minHeight: "100vh", color: "#111111", fontFamily: "Georgia, Times New Roman, serif" }}>
      <style>{`
        .author-link:hover, .more-link:hover { color: ${accent} !important; }
        .more-link:hover .poem-more-author { color: ${accent} !important; }
        
        /* Yazı Kategorisi Link Tasarımı */
        .category-link {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: ${accent};
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: opacity 0.2s ease;
          display: inline-block;
          margin-bottom: 14px;
        }
        .category-link:hover {
          opacity: 0.6;
        }

        /* Sıkışma problemini çözen akışkan yapı */
        .yazi-content-wrapper {
          display: block;
        }
        .yazi-sidebar {
          float: right;
          width: 320px;
          margin-left: 72px;
          margin-bottom: 40px;
          padding-top: 8px;
        }
        .yazi-text-body {
          font-size: 26px;
          line-height: 1.68;
          letter-spacing: -0.015em;
        }
        
        /* Mobilde yan kolonu alta it ve %100 genişlik ver */
        @media (max-width: 1024px) {
          .yazi-content-wrapper {
            display: flex;
            flex-direction: column-reverse;
          }
          .yazi-sidebar {
            float: none;
            width: 100%;
            margin-left: 0;
            margin-top: 64px;
          }
        }
      `}</style>
      
      <SiteHeader />

      <section style={{ padding: "24px 36px 110px 36px", maxWidth: "1280px" }}>
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", paddingTop: "18px", marginBottom: "28px" }}>
          
          {/* Ana sayfa yerine doğrudan Arşiv'e yönlendiren güncel link */}
          <Link href="/arsiv" className="category-link">yazı</Link>
          
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

        <div className="yazi-content-wrapper">
          <aside className="yazi-sidebar">
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

            {text.image && (
              <div style={{ 
                marginTop: "48px", 
                transform: `rotate(${text.image.rotate || 0}deg)`,
                transition: "transform 0.3s ease"
              }}>
                <Image
                  src={text.image.src} 
                  alt={text.image.alt}
                  width={text.image.width}
                  height={text.image.height}
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    display: "block",
                    border: "1px solid rgba(17,17,17,0.15)",
                    filter: "contrast(1.2) grayscale(100%)",
                    mixBlendMode: "multiply"
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

          <div className="yazi-text-body">
            {text.body.map((block, index) => {
              if (block.kind === "stanza") {
                
                if (block.bold) {
                  return (
                    <div key={index} style={{ margin: "64px 0 32px 0", textAlign: "center" }}>
                      {block.text.split("\n").map((line, i) => (
                        <h3 key={`${index}-${i}`} style={{ margin: 0, fontSize: "32px", fontWeight: "bold", letterSpacing: "-0.02em" }}>{line}</h3>
                      ))}
                    </div>
                  );
                }

                if (block.italic) {
                  return (
                    <blockquote 
                      key={index} 
                      style={{ 
                        margin: "36px 0 36px 48px", 
                        fontStyle: "italic", 
                        color: "#4a4a4a" 
                      }}
                    >
                      {block.text.split("\n").map((line, i) => (
                        <p key={`${index}-${i}`} style={{ margin: "0 0 12px 0", whiteSpace: "pre-line" }}>{line}</p>
                      ))}
                    </blockquote>
                  );
                }

                return (
                  <div key={index} style={{ marginBottom: "28px" }}>
                    {block.text.split("\n").map((line, i) => (
                      <p key={`${index}-${i}`} style={{ margin: 0, whiteSpace: "pre-line" }}>{line}</p>
                    ))}
                  </div>
                );
              }
              
              if (block.kind === "separator") {
                return (
                  <div key={index} style={{ margin: "56px 0" }}>
                    <hr style={{ border: "none", borderTop: "1px solid rgba(17,17,17,0.12)", width: "30%", margin: "0 auto" }} />
                  </div>
                );
              }

              return null;
            })}
          </div>
          
          <div style={{ clear: "both" }}></div>
        </div>
      </section>
    </main>
  );
}
