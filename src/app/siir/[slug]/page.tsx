import type { Metadata } from "next";
import Image from "next/image";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const poem = poems[slug];

  if (!poem) {
    return {
      title: "şiir bulunamadı",
      description: "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.",
    };
  }

  const seoDesc = "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.";

  return {
    title: poem.title,
    description: seoDesc,
    openGraph: {
      title: `${poem.title} — kolpo.`,
      description: seoDesc,
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${poem.title} — kolpo.`,
      description: seoDesc,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function SiirPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";

  const linkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const poem = poems[slug];

  if (!poem) {
    return (
      <main
        style={{
          background: "#f3f0e8",
          minHeight: "100vh",
          color: "#111111",
          fontFamily: "Georgia, Times New Roman, serif",
          padding: "34px 36px",
        }}
      >
        şiir bulunamadı
      </main>
    );
  }

  const randomMore = getRandomContent(slug);

  return (
    <main
      style={{
        background: "#f3f0e8",
        minHeight: "100vh",
        color: "#111111",
        fontFamily: "Georgia, Times New Roman, serif",
      }}
    >
      <style>{`
        .author-link:hover,
        .more-link:hover,
        .source-link:hover {
          color: ${accent} !important;
        }

        .poem-shell {
          padding: 24px 36px 110px 36px;
          max-width: 1440px;
        }

        .poem-topline {
          border-top: 1px solid rgba(17,17,17,0.12);
          padding-top: 18px;
          margin-bottom: 28px;
        }

        .poem-label {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: #6f6b63;
          margin-bottom: 14px;
        }

        .poem-title {
          margin: 0;
          max-width: 980px;
          font-size: 92px;
          line-height: 0.93;
          font-weight: 600;
          letter-spacing: -0.05em;
        }

        .poem-meta {
          margin-top: 16px;
          margin-bottom: 0;
          font-size: 20px;
          line-height: 1.15;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: -0.02em;
        }

        .poem-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 88px;
          align-items: start;
        }

        .poem-body {
          display: flex;
          flex-direction: column;
          gap: 22px;
          font-size: 22px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          overflow-x: auto;
        } 

        .schizo-line {
          transition: none;
          display: inline;
        }

        .schizo-line:hover {
          font-style: italic !important;
          font-weight: 800 !important;
          letter-spacing: -0.05em;
        }

        .poem-more {
          align-self: start;
          position: sticky;
          top: 24px;
        }

        .poem-more-inner {
          border-top: 1px solid rgba(17,17,17,0.12);
          padding-top: 14px;
        }

        .poem-more-title {
          margin: 0 0 22px 0;
          font-size: 22px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #c32721;
        }

        .poem-more-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 34px;
        }

        .poem-more-link {
          color: #111111;
          text-decoration: none;
          transition: color 0.18s ease;
          font-size: 30px;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .poem-image-wrap {
          width: 100%;
        }

        .poem-image {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid rgba(17,17,17,0.08);
          background: #f3f0e8;
        }

        .poem-image-meta {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .poem-image-title {
          margin: 0;
          font-size: 18px;
          line-height: 1.2;
          font-family: Arial, Helvetica, sans-serif;
          color: #111111;
          letter-spacing: -0.02em;
        }

        .poem-image-credit {
          margin: 0;
          font-size: 15px;
          line-height: 1.3;
          font-family: Arial, Helvetica, sans-serif;
          color: #6f6b63;
          letter-spacing: -0.01em;
        }

        .special-24101990 {
          background: transparent;
          color: #111111;
          padding: 34px 34px 42px 34px;
          min-height: 860px;
          position: relative;
          overflow: hidden;
        }

        .special-24101990-head {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 54px;
        }

        .special-24101990-title-wrap {
          position: relative;
          margin-bottom: 42px;
        }

        .special-24101990-gunes {
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: 170px;
          line-height: 0.82;
          font-weight: 900;
          color: #c32721;
          text-transform: uppercase;
          letter-spacing: -0.08em;
        }

        .special-24101990-dersane {
          position: absolute;
          left: 310px;
          top: 118px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #111111;
        }

        .special-24101990-grid {
          display: grid;
          grid-template-columns: 0.9fr 0.7fr;
          gap: 56px;
          align-items: start;
        }

        .special-24101990-left {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
          line-height: 1.8;
          max-width: 400px;
        }

        .special-24101990-right {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          justify-content: space-between;
          padding-top: 8px;
        }

        .special-24101990-diltek {
          font-family: Arial, Helvetica, sans-serif;
          max-width: 360px;
        }

        .special-24101990-diltek-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }

        .special-24101990-diltek-body {
          font-size: 24px;
          line-height: 1.65;
        }

        .special-24101990-stop {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.04em;
          max-width: 360px;
          margin-top: 120px;
        }

        .special-24101990-address {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          text-align: right;
          opacity: 0.9;
          margin-top: 160px;
          max-width: 420px;
          align-self: flex-end;
        }
        .special-yes {
          padding: 18px 0 6px 0;
          font-size: 31px;
          line-height: 1.28;
          letter-spacing: -0.02em;
        }

        .special-yes-line {
          display: block;
          white-space: pre-wrap;
        }

        .yes-1  { margin-left: 0px; }
        .yes-2  { margin-left: 0px; }
        .yes-3  { margin-left: 210px; }
        .yes-4  { margin-left: 420px; }

        .yes-5  { margin-left: 56px; margin-top: 92px; }

        .yes-6  { margin-left: 0px; margin-top: 92px; }
        .yes-7  { margin-left: 0px; }
        .yes-8  { margin-left: 0px; }
        .yes-9  { margin-left: 180px; }

        .yes-10 { margin-left: 150px; margin-top: 92px; }

        @media (max-width: 900px) {
          .special-yes {
            font-size: 24px;
            line-height: 1.3;
          }

          .yes-1, .yes-2, .yes-3, .yes-4,
          .yes-5, .yes-6, .yes-7, .yes-8,
          .yes-9, .yes-10 {
            margin-left: 0 !important;
          }

          .yes-5, .yes-6, .yes-10 {
            margin-top: 44px !important;
          }
        }

        @media (max-width: 560px) {
          .special-yes {
            font-size: 20px;
            line-height: 1.34;
          }
        }
        .special-buffalo {
          padding: 18px 0 6px 0;
          font-size: 30px;
          line-height: 1.55;
          letter-spacing: -0.02em;
        }

        .special-buffalo-line {
          display: block;
          white-space: pre-wrap;
        }

        .bb-1  { margin-left: 0; }
        .bb-2  { margin-left: 0; }
        .bb-3  { margin-left: 150px; }
        .bb-4  { margin-left: 150px; }
        .bb-5  { margin-left: 560px; }
        .bb-6  { margin-left: 0; }
        .bb-7  { margin-left: 860px; }
        .bb-8  { margin-left: 0; }
        .bb-9  { margin-left: 430px; }
        .bb-10 { margin-left: 0; }
        .bb-11 { margin-left: 0; }
        .bb-12 { margin-left: 0; }

        @media (max-width: 1280px) {
          .poem-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .poem-more {
            position: static;
            top: auto;
          }
        }

        @media (max-width: 900px) {
          .poem-shell {
            padding: 20px 20px 72px 20px;
          }

          .poem-title {
            font-size: 56px;
            line-height: 0.96;
          }

          .poem-meta {
            font-size: 17px;
            margin-top: 12px;
          }

          .poem-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

         .poem-body {
            font-size: 18px; 
            line-height: 1.5;
            gap: 18px;
          }

          .poem-more {
            position: static;
            top: auto;
          }

          .poem-more-list {
            margin-bottom: 24px;
          }

          .poem-more-link {
            font-size: 26px;
          }

          .poem-image-title {
            font-size: 17px;
          }

          .poem-image-credit {
            font-size: 14px;
          }

          .special-24101990 {
            padding: 20px;
            min-height: auto;
          }

          .special-24101990-head {
            font-size: 18px;
            margin-bottom: 28px;
          }

          .special-24101990-gunes {
            font-size: 92px;
            line-height: 0.84;
          }

          .special-24101990-dersane {
            position: static;
            margin-top: 10px;
            font-size: 28px;
          }

          .special-24101990-title-wrap {
            margin-bottom: 28px;
          }

          .special-24101990-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .special-24101990-left {
            font-size: 17px;
            line-height: 1.7;
            max-width: 100%;
          }

          .special-24101990-right {
            padding-top: 0;
            gap: 28px;
          }

          .special-24101990-diltek-title {
            font-size: 20px;
          }

          .special-24101990-diltek-body {
            font-size: 18px;
            line-height: 1.6;
          }

          .special-24101990-stop {
            font-size: 24px;
            margin-top: 0;
          }

          .special-24101990-address {
            font-size: 16px;
            text-align: left;
            align-self: flex-start;
            margin-top: 0;
          }

          .special-buffalo {
            font-size: 23px;
            line-height: 1.58;
          }

          .bb-1, .bb-2, .bb-3, .bb-4, .bb-5, .bb-6, .bb-7, .bb-8, .bb-9, .bb-10, .bb-11, .bb-12 {
            margin-left: 0 !important;
          }
        }

        @media (max-width: 560px) {
          .poem-title {
            font-size: 44px;
          }

          .poem-meta {
            font-size: 16px;
          }

          .poem-body {
            font-size: 21px;
            line-height: 1.62;
          }

          .poem-more-link {
            font-size: 22px;
          }

          .poem-image-title {
            font-size: 16px;
          }

          .poem-image-credit {
            font-size: 13px;
          }

          .special-24101990-gunes {
            font-size: 72px;
          }

          .special-24101990-dersane {
            font-size: 22px;
          }

          .special-24101990-left {
            font-size: 15px;
          }

          .special-24101990-diltek-body {
            font-size: 16px;
          }

          .special-24101990-stop {
            font-size: 20px;
          }

          .special-24101990-address {
            font-size: 14px;
          }

          .special-buffalo {
            font-size: 20px;
            line-height: 1.6;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="poem-shell">
        <div className="poem-topline">
          <div className="poem-label">{poem.label || "şiir"}</div>

          <h1 className="poem-title">
            {poem.title}
            {poem.titleHref ? (
              <a
                href={poem.titleHref}
                target="_blank"
                rel="noreferrer"
                className="source-link"
                style={{
                  color: "#111111",
                  textDecoration: "none",
                  transition: "color 0.18s ease",
                  marginLeft: "8px",
                }}
              >
                *
              </a>
            ) : null}
          </h1>

          <p className="poem-meta">
            {poem.authors.map((author, index) => (
              <span key={author.href}>
                <a href={author.href} className="author-link" style={linkStyle}>
                  {author.name}
                </a>
                {index < poem.authors.length - 1 ? (
                  <span style={{ color: "#6f6b63" }}> & </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>

        <div className="poem-grid">
          <div className="poem-body">
            {poem.body.map((block, index) => {
              if (block.kind === "special-yes") {
                return (
                  <section key={index} className="special-yes">
                    <span className="special-yes-line yes-1">
                      The most exciting thing about you is the itch
                    </span>
                    <span className="special-yes-line yes-2">
                      Lift a layer of rot,{"    "}The green egg is ugly
                    </span>
                    <span className="special-yes-line yes-3">
                      Maybe I DO love it
                    </span>

                    <span className="special-yes-line yes-5">
                      Piss red on the floor
                    </span>

                    <span className="special-yes-line yes-6">
                      Excite the system
                    </span>
                    <span className="special-yes-line yes-7">
                      He shouldn't puke
                    </span>
                    <span className="special-yes-line yes-8">
                      Hide the baby under the towel
                    </span>
                    <span className="special-yes-line yes-9">
                      Poke, spill the pus
                    </span>

                    <span className="special-yes-line yes-10">
                      Maybe I DO love it
                    </span>
                  </section>
                );
              }

              if (block.kind === "special-24101990") {
                return (
                  <section key={index} className="special-24101990">
                    <div className="special-24101990-head">
                      24101990 alternatif
                    </div>

                    <div className="special-24101990-title-wrap">
                      <div className="special-24101990-gunes">GÜNEŞ</div>
                      <div className="special-24101990-dersane">DERSANESİ</div>
                    </div>

                    <div className="special-24101990-grid">
                      <div className="special-24101990-left">
                        <div style={{ marginBottom: "8px" }}>VE</div>
                        <div style={{ marginBottom: "10px" }}>SÜRÜCÜ KURSU</div>
                        <div>Üniversiteye Hazırlık</div>
                        <div>ise son sınıflara,</div>
                        <div>Memelilere ve</div>
                        <div>lise 2. sınıflara</div>
                        <div>nihai gayemiz düşünce</div>
                        <div>özgür ve yaratı çoCUMar yetiştirmektir.</div>

                        <div style={{ marginTop: "26px", fontWeight: 800 }}>
                          6 AYDA
                        </div>
                        <div style={{ fontWeight: 800 }}>İNGİLİZCE</div>
                        <div>PERA</div>
                        <div style={{ fontWeight: 800 }}>ENGLISH</div>
                        <div style={{ fontWeight: 800 }}>SAATTE</div>

                        <div
                          style={{
                            marginTop: "24px",
                            marginBottom: "18px",
                            textAlign: "center",
                            fontSize: "28px",
                            lineHeight: 1,
                          }}
                        >
                          İ
                        </div>

                        <div>Gerçekten öğrenmek istiyorsanız...</div>

                        <div style={{ marginTop: "18px" }}>YABANCI DİL BİLMEK</div>
                        <div>ÇAĞDAŞ BİR</div>
                        <div>ZORUNLULUKTUR.</div>

                        <div style={{ marginTop: "26px" }}>başlangıç düzeyi.</div>
                        <div>Orta düzey. İleri düzey.</div>
                        <div>Proficiency. Toefl.</div>

                        <div style={{ marginTop: "22px" }}>
                          sizden de beklendiği gibi
                        </div>
                        <div>Yeni yıla İngilizce girin</div>
                      </div>

                      <div className="special-24101990-right">
                        <div className="special-24101990-diltek">
                          <div className="special-24101990-diltek-title">
                            DİLTEK
                          </div>

                          <div className="special-24101990-diltek-body">
                            <div>Audio-Visual Yöntem</div>
                            <div>Sıcak, Uygar Bir Ortam</div>
                            <div>Beceri Odaklı Eğitim</div>
                            <div style={{ fontWeight: 800 }}>
                              !!! 3 KUR AL 2 KUR ÖDE !!!
                            </div>
                          </div>
                        </div>

                        <div className="special-24101990-stop">
                          STOP EVERYTHING START ENGLISH
                        </div>

                        <div className="special-24101990-address">
                          <div>Etiler Mahallesi Serçe Sokak No:87,</div>
                          <div>34337 Beşiktaş/İSTANBUL</div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              }

              if (block.kind === "special-buffalo-bill") {
                return (
                  <section key={index} className="special-buffalo">
                    <span className="special-buffalo-line bb-1">Buffalo Bill</span>
                    <span className="special-buffalo-line bb-2">rahmetli</span>

                    <br />

                    <span className="special-buffalo-line bb-3">sürerdi</span>
                    <span className="special-buffalo-line bb-4">sugibi-kurşuni</span>
                    <span className="special-buffalo-line bb-5">beygirini</span>

                    <br />

                    <span className="special-buffalo-line bb-6">
                      ve pat diye birkiüçdörtbeş güvercini tekte indirirdi
                    </span>

                    <br />

                    <span className="special-buffalo-line bb-7">allahım</span>

                    <br />

                    <span className="special-buffalo-line bb-8">ne yakışıklı adamdı</span>
                    <span className="special-buffalo-line bb-9">bilmek isterim</span>
                    <span className="special-buffalo-line bb-10">Beğendin mi</span>
                    <span className="special-buffalo-line bb-11">mavigözlü oğlanını</span>
                    <span className="special-buffalo-line bb-12">Bay Ölüm</span>
                  </section>
                );
              }

              if (block.kind === "separator") {
                return (
                  <div key={index} style={{ margin: "32px 0", paddingLeft: "120px", letterSpacing: "6px" }}>
                    * * *
                  </div>
                );
              }

              if (block.kind === "stanza-html") {
                return (
                  <div key={index} style={{ margin: 0 }}>
                    {block.htmlLines.map((line, i) => (
                      <div key={i} style={{ paddingLeft: "32px", textIndent: "-32px" }}>
                        <span className="schizo-line" dangerouslySetInnerHTML={{ __html: line }} />
                      </div>
                    ))}
                  </div>
                );
              }

              if (block.kind === "stanza-last-line-italic") {
                return (
                  <div key={index} style={{ margin: 0 }}>
                    {block.text.split("\n").map((line, i) => (
                      <div key={i} style={{ paddingLeft: "32px", textIndent: "-32px" }}>
                        <span className="schizo-line">{line}</span>
                      </div>
                    ))}
                    <div style={{ paddingLeft: "32px", textIndent: "-32px", fontStyle: "italic" }}>
                      <span className="schizo-line">{block.lastLine}</span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  style={{
                    margin: 0,
                    fontStyle: block.italic ? "italic" : "normal",
                    fontWeight: block.bold ? 700 : 400,
                  }}
                >
                  {block.text.split("\n").map((line, i) => (
                    <div key={i} style={{ paddingLeft: "32px", textIndent: "-32px" }}>
                      <span className="schizo-line">{line}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <aside className="poem-more">
            <div className="poem-more-inner">
              <h2 className="poem-more-title">daha fazlası</h2>

              <div className="poem-more-list">
                {randomMore.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="more-link poem-more-link"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {poem.image ? (
              <div className="poem-image-wrap">
                <Image
                  src={poem.image.src}
                  alt={poem.image.alt}
                  width={1200}
                  height={1600}
                  className="poem-image"
                  style={{
                    transform: poem.image.rotate
                      ? `rotate(${poem.image.rotate}deg)`
                      : "none",
                  }}
                />

                <div className="poem-image-meta">
                  {poem.image.title ? (
                    <p className="poem-image-title">{poem.image.title}</p>
                  ) : null}
                  {poem.image.credit ? (
                    <p className="poem-image-credit">{poem.image.credit}</p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}