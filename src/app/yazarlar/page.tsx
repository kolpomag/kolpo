import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import {
  getAuthors,
  getOrderedContentEntries,
} from "@/data/content-index";

export default function YazarlarPage() {
  const entries = getOrderedContentEntries();

  const authors = getAuthors()
    .filter((author) => author.name !== "prowler")
    .sort((a, b) => a.name.localeCompare(b.name, "tr"))
    .map((author) => ({
      ...author,
      count: entries.filter(([, content]) =>
        content.authors.some((item) => item.href === author.href)
      ).length,
    }));

  return (
    <main className="kolpo-authors">
      <style>{`
        .kolpo-authors {
          --authors-paper: #f3f0e8;
          --authors-ink: #24231f;
          --authors-red: #bc3027;
          --authors-muted: #676257;
          --authors-line: rgba(36, 35, 31, 0.18);

          min-height: 100vh;
          background: var(--authors-paper);
          color: var(--authors-ink);
          font-family: Georgia, "Times New Roman", serif;
        }

        .kolpo-authors ::selection {
          background: var(--authors-red);
          color: var(--authors-paper);
        }

        .kolpo-authors-section {
          max-width: 1440px;
          margin: 0 auto;
          padding: 30px 36px 100px;
        }

        .kolpo-authors-topline {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 24px;
          padding: 18px 0;
          border-top: 1px solid var(--authors-line);
          color: var(--authors-muted);
          font: 12px/1.5 "Courier New", Courier, monospace;
          letter-spacing: 0.03em;
        }

        .kolpo-authors-heading {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 16px 28px;
          padding: 36px 0 58px;
        }

        .kolpo-authors-title {
          margin: 0;
          color: var(--authors-red);
          font-size: clamp(76px, 9vw, 128px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.07em;
        }

        .kolpo-authors-count {
          color: var(--authors-muted);
          font: 12px/1.5 "Courier New", Courier, monospace;
        }

        .kolpo-authors-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .kolpo-authors-item {
          min-width: 0;
          border-top: 1px solid var(--authors-line);
        }

        .kolpo-authors-link {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
          align-items: baseline;
          gap: 18px;
          padding: 25px 0 28px;
          color: var(--authors-ink);
          text-decoration: none;
        }

        .kolpo-authors-name {
          min-width: 0;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.045em;
          overflow-wrap: anywhere;
          transition: color 180ms ease;
        }

        .kolpo-authors-works {
          white-space: nowrap;
          color: var(--authors-muted);
          font: 11px/1.5 "Courier New", Courier, monospace;
        }

        .kolpo-authors-arrow {
          color: var(--authors-red);
          font-family: Arial, sans-serif;
          font-size: 23px;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .kolpo-authors-link:hover .kolpo-authors-name {
          color: var(--authors-red);
        }

        .kolpo-authors-link:hover .kolpo-authors-arrow {
          transform: translate(3px, -3px);
        }

        .kolpo-authors-link:focus-visible {
          outline: 2px solid var(--authors-red);
          outline-offset: 5px;
        }

        .kolpo-authors-end {
          margin-top: 34px;
          padding-top: 18px;
          border-top: 1px solid var(--authors-line);
          color: var(--authors-muted);
          font: 11px/1.5 "Courier New", Courier, monospace;
          letter-spacing: 0.03em;
        }

        @media (max-width: 1000px) {
          .kolpo-authors-list {
            column-gap: 36px;
          }

          .kolpo-authors-link {
            gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .kolpo-authors-section {
            padding: 28px 20px 72px;
          }

          .kolpo-authors-topline {
            font-size: 11px;
          }

          .kolpo-authors-heading {
            gap: 14px 20px;
            padding: 28px 0 38px;
          }

          .kolpo-authors-title {
            margin: 0 !important;
            font-size: clamp(64px, 14vw, 96px) !important;
            line-height: 0.95 !important;
          }

          .kolpo-authors-list {
            grid-template-columns: minmax(0, 1fr);
          }

          .kolpo-authors-link {
            gap: 14px;
            padding: 22px 0 25px;
          }

          .kolpo-authors-name {
            font-size: clamp(28px, 7vw, 38px);
          }

          .kolpo-authors-arrow {
            font-size: 21px;
          }

          .kolpo-authors-end {
            margin-top: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-authors-name,
          .kolpo-authors-arrow {
            transition: none;
          }

          .kolpo-authors-link:hover .kolpo-authors-arrow {
            transform: none;
          }
        }
      `}</style>

      <SiteHeader />

      <section
        className="kolpo-authors-section"
        aria-labelledby="kolpo-authors-title"
      >
        <div className="kolpo-authors-topline">
          <span>kolpo. / isimler</span>
          <span>alfabetik dizin</span>
        </div>

        <div className="kolpo-authors-heading">
          <h1 id="kolpo-authors-title" className="kolpo-authors-title">
            yazarlar
          </h1>

          <span className="kolpo-authors-count">
            / {authors.length} isim
          </span>
        </div>

        <ul className="kolpo-authors-list">
          {authors.map((author) => (
            <li key={author.href} className="kolpo-authors-item">
              <Link href={author.href} className="kolpo-authors-link">
                <span className="kolpo-authors-name">
                  {author.name}
                </span>

                <span className="kolpo-authors-works">
                  {author.count} iş
                </span>

                <span className="kolpo-authors-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="kolpo-authors-end">
          şiir / yazı / çeviri / görsel
        </div>
      </section>
    </main>
  );
}