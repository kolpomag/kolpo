export default function NedirPage() {
  const accent = "#c32721";

  const navLinkStyle = {
    textDecoration: "none",
    color: "#f3f0e8",
    transition: "color 0.18s ease",
  };

  return (
    <main
      style={{
        background: "#111111",
        minHeight: "100vh",
        color: "#f3f0e8",
        fontFamily: "Georgia, Times New Roman, serif",
      }}
    >
      <style>{`
        .nav-link:hover,
        .body-link:hover {
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
              filter: "brightness(0) invert(1)",
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
          <a
            href="/"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            ana sayfa
          </a>
          <a
            href="/arsiv"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            arşiv
          </a>
          <a href="/nedir" className="nav-link" style={navLinkStyle}>
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
          padding: "30px 36px 110px 36px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(243,240,232,0.18)",
            paddingTop: "18px",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "84px",
              lineHeight: 0.94,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              color: "#c32721",
            }}
          >
            nedir
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "52px",
            alignItems: "start",
          }}
        >
          <div style={{ maxWidth: "860px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "34px",
                fontSize: "31px",
                lineHeight: 1.24,
                letterSpacing: "-0.03em",
              }}
            >
              <p style={{ margin: 0 }}>
                kolpo, veya yaygın kullanımıyla kolpa, italyanca <i>colpo</i>{" "}
                (darbe, vuruş, çalım) kelimesinden türkçeye geçen ve argo olarak
                kullanılan bir terimdir.
              </p>

              <p style={{ margin: 0 }}>
                kelimenin kökeni latince <i>colaphus</i> (darbe) kelimesine
                dayanmaktadır
                <a
                  href="https://www.nisanyansozluk.com/kelime/kolpa"
                  target="_blank"
                  rel="noreferrer"
                  className="body-link"
                  style={{
                    color: "#f3f0e8",
                    textDecoration: "none",
                    transition: "color 0.18s ease",
                  }}
                >
                  *
                </a>
                .
              </p>

              <p style={{ margin: 0 }}>
                <i>ve olan her şey, ona da olmaktadır.</i>
              </p>
            </div>
          </div>

          <div style={{ paddingTop: "0" }}>
            <img
              src="/fludd.jpeg"
              alt="Robert Fludd, The Nothingness That Was Prior to the Universe (1617)"
              style={{
                width: "100%",
                maxWidth: "680px",
                height: "auto",
                display: "block",
                background: "#1a1a1a",
                marginLeft: "auto",
              }}
            />

            <p
              style={{
                marginTop: "18px",
                marginBottom: 0,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(243,240,232,0.78)",
                textAlign: "center",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Robert Fludd, <i>The Nothingness That Was Prior to the Universe</i>{" "}
              (1617)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}