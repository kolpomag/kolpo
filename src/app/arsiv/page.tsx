"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type FilterType = "tümü" | "şiir" | "yazı" | "çeviri";

type ArchiveEntry = {
  title: string;
  href: string;
  authors: { name: string; href: string }[];
  type: "şiir" | "yazı" | "çeviri";
};

export default function ArsivPage() {
  const accent = "#c32721";
  const [activeFilter, setActiveFilter] = useState<FilterType>("tümü");

  const linkStyle = {
    color: "#111111",
    textDecoration: "none",
    transition: "color 0.18s ease",
  };

  const entries: ArchiveEntry[] = [
    {
      title: "haziran’ın keşfi",
      href: "/siir/haziranin-kesfi",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "dualarımı aksatıyorum canlandır beni",
      href: "/siir/sivri-catlaklar",
      authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
      type: "şiir",
    },
    {
      title: "ezbere şaman",
      href: "/siir/ezbere-saman",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "yolunu öğrenmemiş nehirlere",
      href: "/siir/ya-siyah-ya-beyaz",
      authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
      type: "şiir",
    },
    {
      title: "göçmüş kediler bahçesi",
      href: "/siir/gocmus-kediler-bahcesi",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "piiz ver piiz ver mayday",
      href: "/siir/piiz-ver-piiz-ver-mayday",
      authors: [
        { name: "onur duman", href: "/yazar/onur-duman" },
        { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
      ],
      type: "şiir",
    },
    {
      title: "oyunlarımız var",
      href: "/siir/oyunlarimiz-var",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "24101990",
      href: "/siir/24101990",
      authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
      type: "şiir",
    },
    {
      title: "kendimin iç ve dışbükey sınırları",
      href: "/siir/kendimin-ic-ve-disbukey-sinirlari",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "paesino sborramerda",
      href: "/siir/paesino-sborramerda",
      authors: [{ name: "göksel yaman", href: "/yazar/goksel-yaman" }],
      type: "şiir",
    },
    {
      title: "turmstraße",
      href: "/siir/turmstrasse",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "feierabendbier",
      href: "/siir/feierabendbier",
      authors: [{ name: "onur duman", href: "/yazar/onur-duman" }],
      type: "şiir",
    },
    {
      title: "what remains",
      href: "/siir/what-remains",
      authors: [{ name: "emin musaiev", href: "/yazar/emin-musaiev" }],
      type: "şiir",
    },
    {
      title: "buffalo bill",
      href: "/siir/buffalo-bill",
      authors: [{ name: "prowler", href: "/yazar/prowler" }],
      type: "çeviri",
    },
    {
      title: "afili haytalar",
      href: "/siir/afili-haytalar",
      authors: [
        { name: "onur duman", href: "/yazar/onur-duman" },
        { name: "mahmut kıran", href: "/yazar/mahmut-kiran" },
      ],
      type: "çeviri",
    },
    {
      title: "sabahı göremem",
      href: "/yazi/sabahi-goremem",
      authors: [{ name: "mahmut kıran", href: "/yazar/mahmut-kiran" }],
      type: "yazı",
    },
    {
      title: "bir kafenin içinden",
      href: "/ceviri/bir-kafenin-icinden",
      authors: [{ name: "ayşe kaya", href: "/yazar/ayse-kaya" }],
      type: "çeviri",
    },
  ];

  const filteredEntries = useMemo(() => {
    if (activeFilter === "tümü") return entries;
    return entries.filter((entry) => entry.type === activeFilter);
  }, [activeFilter]);

  const filters: FilterType[] = ["tümü", "şiir", "yazı", "çeviri"];

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
        .filter-button:hover {
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
            marginBottom: "28px",
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
            arşiv
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
            marginBottom: "52px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="filter-button"
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  font: "inherit",
                  color: isActive ? "#c32721" : "#111111",
                  opacity: isActive ? 1 : 0.72,
                  transition: "color 0.18s ease, opacity 0.18s ease",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "62px",
          }}
        >
          {filteredEntries.map((entry, index) => (
            <article
              key={entry.href}
              style={{
                maxWidth: index % 2 === 0 ? "980px" : "760px",
                marginLeft: index % 2 === 0 ? "0" : "110px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "78px",
                  lineHeight: 0.94,
                  fontWeight: 600,
                  letterSpacing: "-0.05em",
                }}
              >
                <a href={entry.href} className="title-link" style={linkStyle}>
                  {entry.title}
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
                {entry.authors.map((author, authorIndex) => (
                  <span key={author.href}>
                    <a
                      href={author.href}
                      className="author-link"
                      style={linkStyle}
                    >
                      {author.name}
                    </a>
                    {authorIndex < entry.authors.length - 1 ? (
                      <span style={{ color: "#6f6b63" }}> & </span>
                    ) : null}
                  </span>
                ))}
                <span style={{ color: "#6f6b63" }}>, {entry.type}</span>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}