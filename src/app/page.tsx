import SiteHeader from "@/components/SiteHeader";

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
      `}</style>

      <SiteHeader />

      <section
        style={{
          padding: "46px 36px 110px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "88px",
        }}
      >
        <article style={{ maxWidth: "760px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/haziranin-kesfi"
              className="title-link"
              style={titleLinkStyle}
            >
              haziran’ın
              <br />
              keşfi
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "980px", marginLeft: "102px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/ya-siyah-ya-beyaz"
              className="title-link"
              style={titleLinkStyle}
            >
              ya siyah
              <br />
              ya beyaz
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/mahmut-kiran"
              className="author-link"
              style={authorLinkStyle}
            >
              mahmut kıran
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "720px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/ezbere-saman"
              className="title-link"
              style={titleLinkStyle}
            >
              ezbere
              <br />
              şaman
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "21px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "860px", marginLeft: "122px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/sivri-catlaklar"
              className="title-link"
              style={titleLinkStyle}
            >
              sivri
              <br />
              çatlaklar
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/mahmut-kiran"
              className="author-link"
              style={authorLinkStyle}
            >
              mahmut kıran
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "980px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/gocmus-kediler-bahcesi"
              className="title-link"
              style={titleLinkStyle}
            >
              göçmüş kediler bahçesi
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "920px", marginLeft: "92px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/piiz-ver-piiz-ver-mayday"
              className="title-link"
              style={titleLinkStyle}
            >
              piiz ver piiz ver mayday
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}> & </span>
            <a
              href="/yazar/mahmut-kiran"
              className="author-link"
              style={authorLinkStyle}
            >
              mahmut kıran
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "760px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/oyunlarimiz-var"
              className="title-link"
              style={titleLinkStyle}
            >
              oyunlarımız var
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "980px", marginLeft: "118px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/24101990"
              className="title-link"
              style={titleLinkStyle}
            >
              24101990
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/goksel-yaman"
              className="author-link"
              style={authorLinkStyle}
            >
              göksel yaman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "980px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/kendimin-ic-ve-disbukey-sinirlari"
              className="title-link"
              style={titleLinkStyle}
            >
              kendimin iç ve dışbükey
              <br />
              sınırları
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "980px", marginLeft: "102px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/paesino-sborramerda"
              className="title-link"
              style={titleLinkStyle}
            >
              paesino
              <br />
              sborramerda
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/goksel-yaman"
              className="author-link"
              style={authorLinkStyle}
            >
              göksel yaman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "720px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/turmstrasse"
              className="title-link"
              style={titleLinkStyle}
            >
              turmstraße
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "760px", marginLeft: "126px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/feierabendbier"
              className="title-link"
              style={titleLinkStyle}
            >
              feierabendbier
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}>, şiir</span>
          </p>
        </article>

        <article style={{ maxWidth: "900px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "92px",
              lineHeight: 0.93,
              fontWeight: 600,
              letterSpacing: "-0.05em",
            }}
          >
            <a
              href="/siir/afili-haytalar"
              className="title-link"
              style={titleLinkStyle}
            >
              afili haytalar
            </a>
          </h2>

          <p
            style={{
              marginTop: "14px",
              marginBottom: 0,
              fontSize: "20px",
              lineHeight: 1.15,
              fontFamily: "Arial, Helvetica, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <a
              href="/yazar/onur-duman"
              className="author-link"
              style={authorLinkStyle}
            >
              onur duman
            </a>
            <span style={{ color: "#6f6b63" }}> & </span>
            <a
              href="/yazar/mahmut-kiran"
              className="author-link"
              style={authorLinkStyle}
            >
              mahmut kıran
            </a>
            <span style={{ color: "#6f6b63" }}>, çeviri</span>
          </p>
        </article>
      </section>
    </main>
  );
}