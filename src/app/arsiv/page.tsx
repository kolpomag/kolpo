"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import {
  getContentHref,
  getOrderedContentEntries,
} from "@/data/content-index";

type FilterType = "tümü" | "şiir" | "yazı" | "çeviri" | "görsel";

type ArchiveEntry = {
  title: string;
  href: string;
  authors: { name: string; href: string }[];
  type: string;
  sourceAuthor?: string;
};

const filters: FilterType[] = [
  "tümü",
  "şiir",
  "yazı",
  "çeviri",
  "görsel",
];

export default function ArsivPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("tümü");

  const entries: ArchiveEntry[] = useMemo(
    () =>
      getOrderedContentEntries().map(([slug, content]) => {
        let type = content.label || "şiir";
        let sourceAuthor: string | undefined;

        if (type.includes("çeviri - ")) {
          sourceAuthor = type.split(" - ")[1];
          type = "çeviri";
        } else if (type === "çeviri") {
          sourceAuthor = content.authors.find(
            (author) =>
              author.name !== "onur duman" &&
              author.name !== "mahmut kıran"
          )?.name;
        }

        return {
          title: content.title,
          href: getContentHref(slug, content),
          authors: content.authors,
          type,
          sourceAuthor,
        };
      }),
    []
  );

  const filteredEntries = useMemo(() => {
    if (activeFilter === "tümü") return entries;

    return entries.filter((entry) => entry.type === activeFilter);
  }, [activeFilter, entries]);

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
        .archive-title-link,
        .archive-author-link {
          color: #111111;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .archive-title-link:hover,
        .archive-author-link:hover,
        .archive-filter:hover {
          color: #c32721 !important;
        }

        .archive-section {
          padding: 30px 36px 110px;
        }

        .archive-entry {
          max-width: 980px;
        }

        .archive-entry:nth-child(even) {
          max-width: 760px;
          margin-left: 110px;
        }

        .archive-entry-title {
          margin: 0;
          font-size: 78px;
          line-height: 0.94;
          font-weight: 600;
          letter-spacing: -0.05em;
          overflow-wrap: anywhere;
        }

        @media (max-width: 900px) {
          .archive-section {
            padding: 28px 20px 80px;
          }

          .archive-entry:nth-child(even) {
            max-width: 100%;
            margin-left: 0;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="archive-section">
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
          role="group"
          aria-label="İçerik kategorisi"
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
                type="button"
                aria-pressed={isActive}
                className="archive-filter"
                onClick={() => {
                  setActiveFilter(filter);
                  sendGAEvent("event", "archive_filter", {
                    archive_filter: filter,
                  });
                }}
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
          {filteredEntries.map((entry) => (
            <article key={entry.href} className="archive-entry">
              <h2 className="archive-entry-title">
                <Link
                  href={entry.href}
                  className="archive-title-link"
                  onClick={() =>
                    sendGAEvent("event", "archive_click", {
                      source_path: "/arsiv",
                      destination_path: entry.href,
                      destination_title: entry.title,
                      content_category: entry.type,
                      archive_filter: activeFilter,
                    })
                  }
                >
                  {entry.title}
                </Link>
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
                {entry.authors.map((author, index) => (
                  <span key={author.href}>
                    <Link
                      href={author.href}
                      className="archive-author-link"
                    >
                      {author.name}
                    </Link>

                    {index < entry.authors.length - 1 && (
                      <span style={{ color: "#6f6b63" }}> & </span>
                    )}
                  </span>
                ))}

                <span style={{ color: "#6f6b63" }}>
                  , {entry.type}
                  {entry.sourceAuthor ? ` - ${entry.sourceAuthor}` : ""}
                </span>
              </p>
            </article>
          ))}

          {filteredEntries.length === 0 && (
            <p
              role="status"
              style={{
                margin: 0,
                color: "#6f6b63",
                fontSize: "18px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              Bu kategoride henüz içerik yok.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}