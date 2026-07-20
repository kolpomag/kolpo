import SiteHeader from "@/components/SiteHeader";

export default function IletisimPage() {
  const accent = "#c32721";

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
        .body-link:hover {
          color: ${accent} !important;
        }
      `}</style>

      <SiteHeader />

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
            kolpo&apos;nun bir parçası olmak isterseniz
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
