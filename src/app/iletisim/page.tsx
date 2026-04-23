export default function IletisimPage() {
  const accent = "#c32721";

  const navLinkStyle = {
    textDecoration: "none",
    color: "#111111",
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
          <a
            href="/nedir"
            className="nav-link"
            style={{ ...navLinkStyle, opacity: 0.78 }}
          >
            nedir
          </a>
          <a href="/iletisim" className="nav-link" style={navLinkStyle}>
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
            borderTop: "1px solid rgba(17,17,17,0.12)",
            paddingTop: "18px",
            marginBottom: "26px",
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
            iletişim
          </h1>
        </div>

        <div
          style={{
            maxWidth: "980px",
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "32px",
              lineHeight: 1.22,
              letterSpacing: "-0.03em",
            }}
          >
            kolpo'nun bir parçası olmak isterseniz
            şiir, yazı ve çevirilerinizi aşağıdaki adrese
            yollayabilirsiniz.
          </p>

          <a
            href="mailto:kolpomag@gmail.com"
            className="body-link"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "28px",
              textDecoration: "none",
              color: "#111111",
              transition: "color 0.18s ease",
            }}
          >
            kolpomag@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}