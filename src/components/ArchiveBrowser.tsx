"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReadingListOrder from "@/components/ReadingListOrder";
import ReadingListExport from "@/components/ReadingListExport";
import SaveForLater from "@/components/SaveForLater";
import { sendGAEvent } from "@next/third-parties/google";
import { useReadingList } from "@/components/reading-list";
import SiteHeader from "@/components/SiteHeader";
import {
  getContentHref,
  getOrderedContentEntries,
} from "@/data/content-index";

type Category = "tümü" | "şiir" | "yazı" | "çeviri" | "görsel";

const categories: Category[] = [
  "tümü",
  "şiir",
  "yazı",
  "çeviri",
  "görsel",
];

const entries = getOrderedContentEntries().map(([slug, content]) => {
  const label = content.label || "şiir";
  const translation = label.startsWith("çeviri");

  return {
    title: content.title,
    href: getContentHref(slug, content),
    authors: content.authors,
    category: translation ? "çeviri" : label,
    sourceAuthor: translation
      ? label.replace(/^çeviri\s*-?\s*/, "")
      : "",
  };
});

export default function ArchiveBrowser({ savedView = false }: { savedView?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const rawCategory = searchParams.get("tur");
  const category: Category = categories.includes(rawCategory as Category) ? rawCategory as Category : "tümü";
  const sort = searchParams.get("sira") === "az" ? "alphabetical" : "editorial";
  const savedOnly = savedView || searchParams.get("ayrilan") === "1";
  function updateFilter(key: string, value: string | null) {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(key, value); else next.delete(key);
    const suffix = next.toString();
    // Next.js copies its own history state; passing it here skips URL synchronization.
    window.history.replaceState({ kolpoArchiveScroll: null }, "", pathname + (suffix ? `?${suffix}` : ""));
  }
  function rememberPosition() {
    window.history.replaceState({ ...window.history.state, kolpoArchiveScroll: window.scrollY }, "");
  }
  const saved = useReadingList();
  const savedCount = entries.filter((entry) => saved.includes(entry.href)).length;

  const visibleEntries = useMemo(() => {
    const filtered = entries.filter(
      (entry) => (category === "tümü" || entry.category === category) && (!savedOnly || saved.includes(entry.href))
    );

    if (sort === "alphabetical") {
      return [...filtered].sort((a, b) =>
        a.title.localeCompare(b.title, "tr")
      );
    }

    return savedOnly ? filtered.sort((a, b) => saved.indexOf(a.href) - saved.indexOf(b.href)) : filtered;
  }, [category, sort, savedOnly, saved]);

  useEffect(() => {
    const position: unknown = window.history.state?.kolpoArchiveScroll;
    if (typeof position !== "number" || !Number.isFinite(position)) return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => window.scrollTo({ top: position, behavior: "instant" }));
    });
    return () => { cancelAnimationFrame(first); cancelAnimationFrame(second); };
  }, [pathname, query, visibleEntries.length]);

  return (
    <main className="kolpo-index">
      <style>{`
        .kolpo-index {
          min-height: 100vh;
          background: #f3f0e8;
          color: #24231f;
        }

        .kolpo-index-section {
          padding: 30px 36px 100px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .kolpo-index-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 22px;
          padding: 22px 0 30px;
          border-top: 1px solid rgba(36,35,31,.22);
        }

        .kolpo-index-heading h1 {
          margin: 0;
          font: 400 clamp(52px, 6vw, 80px)/1 Georgia, serif;
          letter-spacing: -.065em;
          color: #bc3027;
        }

        .kolpo-index-note,
        .kolpo-index-sort,
        .kolpo-index-count,
        .kolpo-index-number,
        .kolpo-index-category,
        .kolpo-index-status {
          font-family: "Courier New", monospace;
          font-size: 12px;
          line-height: 1.5;
          color: #676257;
        }

        .kolpo-index-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding: 22px 0;
          border-top: 1px solid rgba(36,35,31,.18);
        }

        .kolpo-index-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
        }

        .kolpo-index-filter {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          border: 0;
          border-bottom: 1px solid transparent;
          padding: 7px 0;
          background: transparent;
          color: #555148;
          font: 17px Arial, sans-serif;
          cursor: pointer;
        }

        .kolpo-index-filter[aria-pressed="true"] {
          color: #bc3027;
          border-bottom-color: #bc3027;
        }

        .kolpo-index-filter:hover,
        .kolpo-index-filter:hover .kolpo-index-count {
          color: #bc3027;
        }

        .kolpo-index-sort {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .kolpo-index-sort select {
          max-width: 100%;
          border: 1px solid rgba(36,35,31,.25);
          border-radius: 0;
          padding: 9px 12px;
          background: transparent;
          color: #24231f;
          font: inherit;
          cursor: pointer;
        }

        .kolpo-index-status {
          padding: 0 0 16px;
        }

        .kolpo-index-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 2px solid #24231f;
        }

        .kolpo-index-row {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) 140px;
          align-items: start;
          gap: 22px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(36,35,31,.18);
        }

        .kolpo-index-number {
          padding-top: 8px;
        }

        .kolpo-index-content {
          min-width: 0;
        }

        .kolpo-index-content h2 {
          margin: 0;
          font: 400 clamp(27px, 3vw, 39px)/1.08 Georgia, serif;
          letter-spacing: -.04em;
          overflow-wrap: anywhere;
        }

        .kolpo-index-title {
          color: #24231f;
          text-decoration: none;
          transition: color .18s ease;
        }

        .kolpo-index-title:hover {
          color: #bc3027;
        }

        .kolpo-index-arrow {
          display: inline-block;
          margin-left: 12px;
          color: #bc3027;
          font-family: Arial, sans-serif;
          font-size: .7em;
          transition: transform .18s ease;
        }

        .kolpo-index-title:hover .kolpo-index-arrow {
          transform: translate(3px, -3px);
        }

        .kolpo-index-authors {
          margin-top: 10px;
          font: 14px/1.5 Arial, sans-serif;
          color: #676257;
        }

        .kolpo-index-authors a {
          color: inherit;
          text-decoration: none;
        }

        .kolpo-index-authors a:hover {
          color: #bc3027;
        }

        .kolpo-index-category {
          padding-top: 7px;
          text-align: right;
          color: #bc3027;
        }

        .kolpo-index-source {
          display: block;
          margin-top: 5px;
          color: #676257;
        }

        .reading-order { display:flex; align-items:center; flex-wrap:wrap; gap:8px; margin-top:10px; }
        .reading-order button { width:32px; height:32px; border:1px solid #c9c4b9; background:transparent; color:#bc3027; cursor:pointer; font:18px Georgia,serif; }
        .reading-order button:disabled { opacity:.3; cursor:default; }
        .reading-order span { font:11px/1.5 "Courier New",monospace; color:#676257; }
        .kolpo-index-empty {
          padding: 30px 0;
          font: italic 25px/1.3 Georgia, serif;
          color: #676257;
        }

        .kolpo-index a:focus-visible,
        .kolpo-index button:focus-visible,
        .kolpo-index select:focus-visible {
          outline: 2px solid #bc3027;
          outline-offset: 5px;
        }

        @media (max-width: 768px) {
          .kolpo-index-section {
            padding: 28px 20px 70px;
          }

          .kolpo-index-heading h1 {
            font-size: clamp(44px, 10vw, 60px) !important;
            line-height: .95 !important;
            margin-top: 0 !important;
          }

          .kolpo-index-content h2 {
            font-size: 28px !important;
            line-height: 1.08 !important;
            margin-top: 0 !important;
          }

          .kolpo-index-row {
            grid-template-columns: 28px minmax(0, 1fr);
            gap: 8px 14px;
            padding: 22px 0;
          }

          .kolpo-index-category {
            grid-column: 2;
            text-align: left;
            padding-top: 0;
          }

          .kolpo-index-source {
            display: inline;
            margin-left: 8px;
          }

          .kolpo-index-number {
            padding-top: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-index-arrow {
            transition: none;
          }

          .kolpo-index-title:hover .kolpo-index-arrow {
            transform: none;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="kolpo-index-section">
        <div className="kolpo-index-topline">
          <span>kolpo. / {savedView ? "ayırdıklarım" : "arşiv"}</span>
          <span>{savedView ? "bu tarayıcıda saklanır" : "bütün işler bir arada"}</span>
        </div>
        <div className="kolpo-index-heading">
          <h1>{savedView ? "ayırdıklarım" : "arşiv"}</h1>
        </div>

        <div className="kolpo-index-toolbar">
          <div
            className="kolpo-index-filters"
            role="group"
            aria-label="İçerik kategorisi"
          >
            {!savedView && <button type="button" className="kolpo-index-filter" aria-pressed={savedOnly} onClick={() => updateFilter("ayrilan", savedOnly ? null : "1")}>
              ayırdıklarım <span className="kolpo-index-count">/ {savedCount}</span>
            </button>}
            {categories.map((item) => {
              const count = entries.filter((entry) =>
                (!savedOnly || saved.includes(entry.href)) &&
                (item === "tümü" || entry.category === item)
              ).length;

              return (
                <button
                  key={item}
                  type="button"
                  className="kolpo-index-filter"
                  aria-pressed={category === item}
                  onClick={() => {
                    updateFilter("tur", item === "tümü" ? null : item);
                    sendGAEvent("event", "archive_filter", {
                      archive_filter: item,
                    });
                  }}
                >
                  {item}
                  <span className="kolpo-index-count">/ {count}</span>
                </button>
              );
            })}
          </div>

          <label className="kolpo-index-sort">
            sıralama
            <select
              value={sort}
              onChange={(event) => updateFilter("sira", event.target.value === "alphabetical" ? "az" : null)}
            >
              <option value="editorial">{savedOnly ? "sıram" : "editoryal"}</option>
              <option value="alphabetical">a–z</option>
            </select>
          </label>
        </div>

        <div className="kolpo-index-status" role="status">
          {visibleEntries.length} eser / {category}{savedOnly ? " / ayırdıklarım — bu tarayıcıda saklanır" : ""}
        </div>

        {savedOnly && <ReadingListExport key={saved.join("|")} entries={saved.flatMap((href) => entries.filter((entry) => entry.href === href))} />}

        <ol className="kolpo-index-list" onClickCapture={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) rememberPosition();
        }}>
          {visibleEntries.map((entry, index) => (
            <li key={entry.href} className="kolpo-index-row">
              <span className="kolpo-index-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="kolpo-index-content">
                <h2>
                  <Link
                    href={entry.href}
                    className="kolpo-index-title"
                    onClick={() =>
                      sendGAEvent("event", "archive_click", {
                        source_path: "/arsiv",
                        destination_path: entry.href,
                        destination_title: entry.title,
                        content_category: entry.category,
                        archive_filter: category,
                      })
                    }
                  >
                    {entry.title}
                    <span className="kolpo-index-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </h2>

                {savedOnly && <SaveForLater href={entry.href} title={entry.title} />}
                {savedOnly && sort === "editorial" && <ReadingListOrder href={entry.href} title={entry.title} previous={visibleEntries[index - 1]?.href} next={visibleEntries[index + 1]?.href} />}
                <div className="kolpo-index-authors">
                  {entry.authors.map((author, authorIndex) => (
                    <span key={author.href}>
                      {authorIndex > 0 && " & "}
                      <Link href={author.href}>{author.name}</Link>
                    </span>
                  ))}
                </div>
              </div>

              <div className="kolpo-index-category">
                {entry.category}
                {entry.sourceAuthor && (
                  <span className="kolpo-index-source">
                    {entry.sourceAuthor}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>

        {visibleEntries.length === 0 && (
          <div className="kolpo-index-empty">
            {savedOnly ? (savedCount === 0 ? "Henüz bir iş ayırmadın. Bir eserde ‘sonraya bırak’ bağlantısına dokun." : "Bu kategoride ayırdığın bir iş yok.") : "burada henüz bir şey yok."}
          </div>
        )}
      </section>
    </main>
  );
}