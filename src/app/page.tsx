import SiteHeader from "@/components/SiteHeader";

const entries = [
  {
    title: "haziran’ın keşfi",
    href: "/siir/haziranin-kesfi",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-a",
    multiline: true,
  },
  {
    title: "dualarımı aksatıyorum canlandır beni",
    href: "/siir/sivri-catlaklar",
    author: "mahmut kıran",
    authorHref: "/yazar/mahmut-kiran",
    type: "şiir",
    className: "entry entry-b",
    multiline: true,
  },
  {
    title: "ezbere şaman",
    href: "/siir/ezbere-saman",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-c",
    multiline: true,
  },
  {
    title: "yolunu öğrenmemiş nehirlere",
    href: "/siir/ya-siyah-ya-beyaz",
    author: "mahmut kıran",
    authorHref: "/yazar/mahmut-kiran",
    type: "şiir",
    className: "entry entry-d",
    multiline: true,
  },
  {
    title: "göçmüş kediler bahçesi",
    href: "/siir/gocmus-kediler-bahcesi",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-e",
    multiline: true,
  },
  {
    title: "piiz ver piiz ver mayday",
    href: "/siir/piiz-ver-piiz-ver-mayday",
    author: "onur duman & mahmut kıran",
    authorHref: "",
    type: "şiir",
    className: "entry entry-f",
    multiline: false,
  },
  {
    title: "oyunlarımız var",
    href: "/siir/oyunlarimiz-var",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-g",
    multiline: false,
  },
  {
    title: "24101990",
    href: "/siir/24101990",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-h",
    multiline: false,
  },
  {
    title: "kendimin iç ve dışbükey sınırları",
    href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-i",
    multiline: true,
  },
  {
    title: "paesino sborramerda",
    href: "/siir/paesino-sborramerda",
    author: "göksel yaman",
    authorHref: "/yazar/goksel-yaman",
    type: "şiir",
    className: "entry entry-j",
    multiline: true,
  },
  {
    title: "turmstraße",
    href: "/siir/turmstrasse",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-k",
    multiline: false,
  },
  {
    title: "feierabendbier",
    href: "/siir/feierabendbier",
    author: "onur duman",
    authorHref: "/yazar/onur-duman",
    type: "şiir",
    className: "entry entry-l",
    multiline: false,
  },
  {
    title: "afili haytalar",
    href: "/siir/afili-haytalar",
    author: "onur duman & mahmut kıran",
    authorHref: "",
    type: "çeviri",
    className: "entry entry-m",
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
        .author-link:hover {
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
        .entry-b { max-width: 980px; margin-left: 102px; }
        .entry-c { max-width: 720px; margin-left: 0; }
        .entry-d { max-width: 860px; margin-left: 122px; }
        .entry-e { max-width: 980px; margin-left: 0; }
        .entry-f { max-width: 920px; margin-left: 92px; }
        .entry-g { max-width: 760px; margin-left: 0; }
        .entry-h { max-width: 980px; margin-left: 118px; }
        .entry-i { max-width: 980px; margin-left: 0; }
        .entry-j { max-width: 980px; margin-left: 102px; }
        .entry-k { max-width: 720px; margin-left: 0; }
        .entry-l { max-width: 760px; margin-left: 126px; }
        .entry-m { max-width: 900px; margin-left: 0; }

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
        }

        @media (max-width: 560px) {
          .entry h2 {
            font-size: 46px;
          }

          .entry-meta {
            font-size: 16px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="home-shell">
        {entries.map((entry) => (
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
              <span style={{ color: "#6f6b63" }}>, {entry.type}</span>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}