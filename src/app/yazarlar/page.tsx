import SiteHeader from "@/components/SiteHeader";

const authors = [
 { name: "zehra erkoç", href: "/yazar/zehra-erkoc" },
 { name: "onur duman", href: "/yazar/onur-duman" },
 { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
 { name: "göksel yaman", href: "/yazar/goksel-yaman" },
  { name: "aras arslan", href: "/yazar/aras-arslan" },
  { name: "caner torun", href: "/yazar/caner-torun" },
  { name: "emrullah şekerci", href: "/yazar/emrullah-sekerci" },
  { name: "emin musaiev", href: "/yazar/emin-musaiev" },
  { name: "nikita", href: "/yazar/nikita" },
  { name: "uygar", href: "/yazar/uygar" },
];

export default function YazarlarPage() {
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
        .author-page-link:hover {
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
            marginBottom: "34px",
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
            yazarlar
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "980px",
          }}
        >
          {authors.map((author) => (
            <a
              key={author.href}
              href={author.href}
              className="author-page-link"
              style={{
                color: "#111111",
                textDecoration: "none",
                transition: "color 0.18s ease",
                fontSize: "58px",
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                fontWeight: 600,
              }}
            >
              {author.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}