import SiteHeader from "@/components/SiteHeader";

export default async function YazarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accent = "#c32721";

  const titleLinkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const authors: Record<
    string,
    {
      name: string;
      entries: { title: string; href: string; type: string }[];
    }
  > = {
    "nikita": {
  name: "nikita",
  entries: [
    { title: "gigantic", href: "/siir/gigantic", type: "şiir" },
  ],
},

"aras-arslan": {
  name: "aras arslan",
  entries: [
    { title: "beton ormanda tarla faresi", href: "/siir/beton-ormanda-tarla-faresi", type: "şiir" },
  ],
},
    "onur-duman": {
      name: "onur duman",
      entries: [
        { title: "speed ile yapılacaklar", href: "/siir/speed-ile-yapilacaklar", type: "çeviri" },
        { title: "maverick", href: "/siir/maverick", type: "şiir" },
        { title: "göteborg", href: "/siir/goteborg", type: "çeviri - eileen myles" },
        { title: "haziran’ın keşfi", href: "/siir/haziranin-kesfi", type: "şiir" },
        { title: "ezbere şaman", href: "/siir/ezbere-saman", type: "şiir" },
        {
          title: "göçmüş kediler bahçesi",
          href: "/siir/gocmus-kediler-bahcesi",
          type: "şiir",
        },
        {
          title: "piiz ver piiz ver mayday",
          href: "/siir/piiz-ver-piiz-ver-mayday",
          type: "şiir",
        },
        { title: "oyunlarımız var", href: "/siir/oyunlarimiz-var", type: "şiir" },
        {
          title: "kendimin iç ve dışbükey sınırları",
          href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
          type: "şiir",
        },
        { title: "turmstraße", href: "/siir/turmstrasse", type: "şiir" },
        { title: "feierabendbier", href: "/siir/feierabendbier", type: "şiir" },
        { title: "afili haytalar", href: "/siir/afili-haytalar", type: "çeviri" },
      ],
    },
    "mahmut-kiran": {
      name: "mahmut kıran",
      entries: [
        { title: "göteborg", href: "/siir/goteborg", type: "çeviri - eileen myles" },
        {
          title: "yolunu öğrenmemiş nehirlere",
          href: "/siir/ya-siyah-ya-beyaz",
          type: "şiir",
        },
        {
          title: "duaları aksatıyorum canlandır beni",
          href: "/siir/sivri-catlaklar",
          type: "şiir",
        },
        {
          title: "piiz ver piiz ver mayday",
          href: "/siir/piiz-ver-piiz-ver-mayday",
          type: "şiir",
        },
        { title: "afili haytalar", href: "/siir/afili-haytalar", type: "çeviri" },
      ],
    },
    "zehra-erkoc": {
  name: "zehra erkoç",
  entries: [
    { title: "masal", href: "/siir/masal", type: "şiir" },
    { title: "nerede kaldın geç oldu", href: "/siir/nerede-kaldin-gec-oldu", type: "şiir" },
    { title: "prehistorik bir güzelliğin var", href: "/siir/prehistorik-bir-guzelligin-var", type: "şiir" },
  ],
},
    "goksel-yaman": {
      name: "göksel yaman",
      entries: [
        { title: "sadness prevails all again", href: "/siir/sadness-prevails-all-again", type: "şiir" },
        { title: "belki bir sabah", href: "/siir/belki-bir-sabah", type: "çeviri" },
        { title: "uyku düzeni düzenleyici", href: "/siir/uyku-duzeni-duzenleyici", type: "şiir" },
        { title: "belli belirsiz", href: "/siir/belli-belirsiz", type: "şiir" },
        { title: "24101990", href: "/siir/24101990", type: "şiir" },
        { title: "paesino sborramerda", href: "/siir/paesino-sborramerda", type: "şiir" },
      ],
    },
    "emin-musaiev": {
      name: "emin musaiev",
      entries: [{ title: "what remains", href: "/siir/what-remains", type: "şiir" }],
    },
    "emrullah-sekerci": {
  name: "emrullah şekerci",
  entries: [
    { title: "müjde şey", href: "/siir/mujde-sey", type: "şiir" },
    { title: "mahşeri doku", href: "/siir/mahseri-doku", type: "şiir" },
  ],
},
    prowler: {
      name: "prowler",
      entries: [{ title: "buffalo bill", href: "/siir/buffalo-bill", type: "çeviri" }],
    },
    "uygar": {
  name: "uygar",
  entries: [
    { title: "YES", href: "/siir/yes", type: "şiir" },
  ],
},
    "caner-torun": {
  name: "caner torun",
  entries: [
    { title: "gümrük", href: "/siir/gumruk", type: "şiir" },
  ],
},
  };

  const author = authors[slug];

  if (!author) {
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
        yazar bulunamadı
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
        .title-link:hover {
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
            marginBottom: "30px",
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
            {author.name}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "54px",
          }}
        >
          {author.entries.map((entry) => (
            <article key={entry.href} style={{ maxWidth: "980px" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "72px",
                  lineHeight: 0.94,
                  fontWeight: 600,
                  letterSpacing: "-0.05em",
                }}
              >
                <a href={entry.href} className="title-link" style={titleLinkStyle}>
                  {entry.title}
                </a>
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: 0,
                  fontSize: "19px",
                  lineHeight: 1.15,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#6f6b63",
                }}
              >
                {entry.type}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}