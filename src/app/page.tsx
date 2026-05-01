"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type HomeEntry = {
  title: string;
  href: string;
  author: string;
  authorHref: string;
  type: string;
  sourceAuthor?: string;
  className: string;
  multiline: boolean;
};

const entries: HomeEntry[] = [
  {
  title: "maverick",
  href: "/siir/maverick",
  author: "onur duman",
  authorHref: "/yazar/onur-duman",
  type: "şiir",
  className: "entry entry-a",
  multiline: false,
},
  {
  title: "gümrük",
  href: "/siir/gumruk",
  author: "caner torun",
  authorHref: "/yazar/caner-torun",
  type: "şiir",
  className: "entry entry-b",
  multiline: false,
},
  {
    title: "müjde şey",
    href: "/siir/mujde-sey",
    author: "emrullah şekerci",
    authorHref: "/yazar/emrullah-sekerci",
    type: "şiir",
    className: "entry entry-a",
    multiline: true,
  },
  {
    title: "göteborg",
    href: "/siir/goteborg",
    author: "onur duman & mahmut kıran",
    authorHref: "",
    type: "çeviri",
    sourceAuthor: "eileen myles",
    className: "entry entry-b",
    multiline: false,
  },
  {
    title: "haziran’ın keşfi",
    href: "/siir/haziranin-kesfi",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-c",
    multiline: true,
  },
  {
    title: "duaları aksatıyorum canlandır beni",
    href: "/siir/sivri-catlaklar",
    author: "mahmut kıran",
    authorHref: "/yazar/mahmut-kiran",
    type: "şiir",
    className: "entry entry-d",
    multiline: true,
  },
  {
    title: "ezbere şaman",
    href: "/siir/ezbere-saman",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-e",
    multiline: true,
  },
  {
    title: "yolunu öğrenmemiş nehirlere",
    href: "/siir/ya-siyah-ya-beyaz",
    author: "mahmut kıran",
    authorHref: "/yazar/mahmut-kiran",
    type: "şiir",
    className: "entry entry-f",
    multiline: true,
  },
  {
    title: "göçmüş kediler bahçesi",
    href: "/siir/gocmus-kediler-bahcesi",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-g",
    multiline: true,
  },
  {
    title: "piiz ver piiz ver mayday",
    href: "/siir/piiz-ver-piiz-ver-mayday",
    author: "onur duman & mahmut kıran",
    authorHref: "",
    type: "şiir",
    className: "entry entry-h",
    multiline: false,
  },
  {
    title: "oyunlarımız var",
    href: "/siir/oyunlarimiz-var",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-h2",
    multiline: false,
  },
  {
    title: "24101990",
    href: "/siir/24101990",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-i",
    multiline: false,
  },
  {
    title: "belli belirsiz",
    href: "/siir/belli-belirsiz",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-j",
    multiline: true,
  },
  {
    title: "kendimin iç ve dışbükey sınırları",
    href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-k",
    multiline: true,
  },
  {
    title: "paesino sborramerda",
    href: "/siir/paesino-sborramerda",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-l",
    multiline: true,
  },
  {
    title: "turmstraße",
    href: "/siir/turmstrasse",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-n",
    multiline: false,
  },
  {
    title: "feierabendbier",
    href: "/siir/feierabendbier",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-n2",
    multiline: false,
  },
  {
    title: "what remains",
    href: "/siir/what-remains",
    author: "emin musaiev",
    authorHref: "/yazar/emin-musaiev",
    type: "şiir",
    className: "entry entry-o",
    multiline: false,
  },
  {
    title: "uyku düzeni düzenleyici",
    href: "/siir/uyku-duzeni-duzenleyici",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-m2",
    multiline: true,
  },
  {
    title: "buffalo bill",
    href: "/siir/buffalo-bill",
    author: "prowler",
    authorHref: "/yazar/prowler",
    type: "çeviri",
    sourceAuthor: "e. e. cummings",
    className: "entry entry-m",
    multiline: false,
  },
  {
    title: "belki bir sabah",
    href: "/siir/belki-bir-sabah",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "çeviri",
    sourceAuthor: "eugenio montale",
    className: "entry entry-p",
    multiline: false,
  },
  {
    title: "afili haytalar",
    href: "/siir/afili-haytalar",
    author: "onur duman & mahmut kıran",
    authorHref: "",
    type: "çeviri",
    sourceAuthor: "gwendolyn brooks",
    className: "entry entry-q",
    multiline: false,
  },
];

function renderAuthor(
  author: string,
  authorHref: string,
  authorLinkStyle: React.CSSProperties
) {
  if (author.includes(" & ")) {
    const [a1, a2] = author.split(" & ");
    const hrefs =
      author === "onur duman & mahmut kıran"
        ? ["/yazar/onur-duman", "/yazar/mahmut-kiran"]
        : ["", ""];

    return (
      <>
        <a href={hrefs[0]} className="author-link" style={authorLinkStyle}>
          {a1}
        </a>
        <span style={{ color: "#6f6b63" }}> & </span>
        <a href={hrefs[1]} className="author-link" style={authorLinkStyle}>
          {a2}
        </a>
      </>
    );
  }

  return (
    <a href={authorHref} className="author-link" style={authorLinkStyle}>
      {author}
    </a>
  );
}

export default function HomePage() {
  const accent = "#c32721";
  const INITIAL_COUNT = 10;
  const LOAD_MORE_COUNT = 5;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleEntries = entries.slice(0, visibleCount);
  const hasMore = visibleCount < entries.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, entries.length));
  };

  const titleLinkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const authorLinkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

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
        .title-link:hover,
        .author-link:hover,
        .load-more-button:hover,
        .load-more-button:hover .load-more-arrow {
          color: ${accent} !important;
        }

        .home-shell {
          padding: 46px 36px 110px 36px;
          display: flex;
          flex-direction: column;
          gap: 88px;
        }

        .entry h2 {
          margin: 0;
          font-size: 92px;
          line-height: 0.93;
          font-weight: 600;
          letter-spacing: -0.05em;
        }

        .entry-meta {
          margin-top: 14px;
          margin-bottom: 0;
          font-size: 20px;
          line-height: 1.15;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: -0.02em;
        }

        .entry-a { max-width: 760px; margin-left: 0; }
        .entry-b { max-width: 900px; margin-left: 138px; }
        .entry-c { max-width: 760px; margin-left: 0; }
        .entry-d { max-width: 980px; margin-left: 102px; }
        .entry-e { max-width: 720px; margin-left: 0; }
        .entry-f { max-width: 860px; margin-left: 122px; }
        .entry-g { max-width: 980px; margin-left: 0; }
        .entry-h { max-width: 920px; margin-left: 92px; }
        .entry-h2 { max-width: 760px; margin-left: 0; }
        .entry-i { max-width: 980px; margin-left: 118px; }
        .entry-j { max-width: 760px; margin-left: 0; }
        .entry-k { max-width: 980px; margin-left: 102px; }
        .entry-l { max-width: 720px; margin-left: 0; }
        .entry-n { max-width: 760px; margin-left: 140px; }
        .entry-n2 { max-width: 760px; margin-left: 0; }
        .entry-o { max-width: 920px; margin-left: 112px; }
        .entry-m2 { max-width: 760px; margin-left: 0; }
        .entry-m { max-width: 760px; margin-left: 138px; }
        .entry-p { max-width: 900px; margin-left: 0; }
        .entry-q { max-width: 900px; margin-left: 138px; }

        .load-more-wrap {
          margin-top: -12px;
          padding-top: 26px;
          border-top: 1px solid rgba(17,17,17,0.12);
          margin-left: 118px;
          width: fit-content;
        }

        .load-more-button {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #111111;
          font-family: Georgia, Times New Roman, serif;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.04em;
          transition: color 0.18s ease, opacity 0.18s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .load-more-arrow {
          display: inline-block;
          transition: transform 0.18s ease, color 0.18s ease;
        }

        .load-more-button:hover .load-more-arrow {
          transform: translateX(6px);
        }

        @media (max-width: 900px) {
          .home-shell {
            padding: 28px 20px 72px 20px;
            gap: 52px;
          }

          .entry {
            max-width: 100% !important;
            margin-left: 0 !important;
          }

          .entry h2 {
            font-size: 56px;
            line-height: 0.95;
            letter-spacing: -0.05em;
          }

          .entry-meta {
            font-size: 17px;
            margin-top: 10px;
          }

          .load-more-wrap {
            margin-top: 4px;
            margin-left: 0;
            padding-top: 20px;
          }

          .load-more-button {
            font-size: 24px;
          }
        }

        @media (max-width: 560px) {
          .entry h2 {
            font-size: 46px;
          }

          .entry-meta {
            font-size: 16px;
          }

          .load-more-button {
            font-size: 22px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="home-shell">
        {visibleEntries.map((entry) => (
          <article key={entry.href} className={entry.className}>
            <h2>
              <a href={entry.href} className="title-link" style={titleLinkStyle}>
                {entry.multiline ? (
                  entry.title.includes(" ") ? (
                    <>
                      {entry.title
                        .split(" ")
                        .slice(0, Math.ceil(entry.title.split(" ").length / 2))
                        .join(" ")}
                      <br />
                      {entry.title
                        .split(" ")
                        .slice(Math.ceil(entry.title.split(" ").length / 2))
                        .join(" ")}
                    </>
                  ) : (
                    entry.title
                  )
                ) : (
                  entry.title
                )}
              </a>
            </h2>

            <p className="entry-meta">
              {renderAuthor(entry.author, entry.authorHref, authorLinkStyle)}
              <span style={{ color: "#6f6b63" }}>
                , {entry.type}
                {entry.sourceAuthor ? ` - ${entry.sourceAuthor}` : ""}
              </span>
            </p>
          </article>
        ))}

        {hasMore ? (
          <div className="load-more-wrap">
            <button
              type="button"
              onClick={handleLoadMore}
              className="load-more-button"
            >
              <span>daha fazla</span>
              <span className="load-more-arrow">→</span>
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
}