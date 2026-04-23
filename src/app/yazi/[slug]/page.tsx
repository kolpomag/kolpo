export default async function YaziPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";

  const navLinkStyle = {
    textDecoration: "none",
    color: "#111111",
    transition: "color 0.18s ease",
  };

  const linkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const texts: Record<
    string,
    {
      title: string;
      authors: { name: string; href: string }[];
      body: string[];
      more: { title: string; href: string }[];
    }
  > = {
    "sabahi-goremem": {
      title: "sabahı göremem",
      authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
      body: [
        "bu sayfa şimdilik yer tutucu bir yazı sayfası.",
        "birazdan buraya gerçek düzyazı metnini koyacağız.",
        "paragraf ritmi ve satır uzunluğu da buna göre şekillenecek.",
      ],
      more: [
        { title: "ezbere şaman", href: "/siir/ezbere-saman" },
        { title: "afili haytalar", href: "/siir/afili-haytalar" },
        { title: "piiz ver piiz ver mayday", href: "/siir/piiz-ver-piiz-ver-mayday" },
      ],
    },
  };

  const text = texts[slug];

  if (!text) {
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
        yazı bulunamadı
      </main>
    );
  }

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
        .nav-link:hover,
        .author-link:hover,
        .more-link:hover {
          color: ${accent} !important;
        }
      `}</style>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "34px 36px 18px 36px",
        }}
      >
        <a href="/" style={{ display: "block" }}>
          <img
            src="/kolpo.png"
            alt="kolpo."
            style={{
              width: "230px",
              height: "auto",
              display: "block",
            }}
          />
        </a>

        <nav
          style={{
            display: "flex",
            gap: "26px",
            paddingTop: "8px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <a href="/" className="nav-link" style={{ ...navLinkStyle, opacity: 0.78 }}>
            ana sayfa
          </a>
          <a
            href="/arsiv"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            arşiv
          </a>
          <a
            href="/nedir"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            nedir
          </a>
          <a
            href="/iletisim"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            iletişim
          </a>
        </nav>
      </header>

      <section
        style={{
          padding: "24px 36px 110px 36px",
          maxWidth: "1280px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(17,17,17,0.12)",
            paddingTop: "18px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "14px",
              letterSpacing: "-0.01em",
              color: "#6f6b63",
              marginBottom: "14px",
            }}
          >
            yazı
          </div>

          <h1
            style={{
              margin: 0,
              maxWidth: "980px",
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            {text.title}
          </h1>

          <p
            style={{
              marginTop: "16px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {text.authors.map((author, index) => (
              <span key={author.href}>
                <a href={author.href} className="author-link" style={linkStyle}>
                  {author.name}
                </a>
                {index < text.authors.length - 1 ? (
                  <span style={{ color: "#6f6b63" }}> & </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 880px) 1fr",
            gap: "72px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "26px",
              lineHeight: 1.68,
              letterSpacing: "-0.015em",
            }}
          >
            {text.body.map((paragraph, index) => (
              <p key={index} style={{ margin: 0, whiteSpace: "pre-line" }}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside
            style={{
              paddingTop: "8px",
            }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(17,17,17,0.12)",
                paddingTop: "14px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 22px 0",
                  fontSize: "22px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#c32721",
                }}
              >
                daha fazlası
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {text.more.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="more-link"
                    style={{
                      color: "#111111",
                      textDecoration: "none",
                      transition: "color 0.18s ease",
                      fontSize: "30px",
                      lineHeight: 1.04,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}