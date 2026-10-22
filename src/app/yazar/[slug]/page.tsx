import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import {
  getAuthor,
  getContentHref,
  SITE_URL,
} from "@/data/content-index";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) notFound();

  const canonical = `/yazar/${slug}`;

  return {
    title: author.name,
    alternates: { canonical },
    openGraph: {
      title: `${author.name} — kolpo.`,
      url: new URL(canonical, SITE_URL),
      images: ["/og-image.jpg"],
    },
  };
}

export default async function YazarPage({
  params,
}: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) notFound();

  const entries = author.entries.map(([contentSlug, content]) => ({
    title: content.title,
    href: getContentHref(contentSlug, content),
    label: content.label || "şiir",
  }));

  const categories = Array.from(
    new Set(
      entries.map((entry) =>
        entry.label.startsWith("çeviri") ? "çeviri" : entry.label
      )
    )
  );

  return (
    <main className="kolpo-author">
      <style>{`
        .kolpo-author {
          min-height: 100vh;
          background: #f3f0e8;
          color: #24231f;
          font-family: Georgia, "Times New Roman", serif;
        }

        .kolpo-author ::selection {
          background: #bc3027;
          color: #f3f0e8;
        }

        .kolpo-author-section {
          max-width: 1440px;
          margin: 0 auto;
          padding: 30px 36px 100px;
        }

        .kolpo-author-topline {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px 24px;
          padding: 18px 0;
          border-top: 1px solid rgba(36, 35, 31, .18);
          color: #676257;
          font: 12px/1.5 "Courier New", monospace;
          letter-spacing: .03em;
        }

        .kolpo-author-back {
          color: inherit;
          text-decoration: none;
        }

        .kolpo-author-back:hover {
          color: #bc3027;
        }

        .kolpo-author-heading {
          padding: 36px 0 58px;
        }

        .kolpo-author-title {
          max-width: 1100px;
          margin: 0;
          color: #bc3027;
          font-size: clamp(64px, 8vw, 112px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -.065em;
          overflow-wrap: anywhere;
          text-wrap: balance;
        }

        .kolpo-author-meta {
          display: block;
          margin-top: 24px;
          color: #676257;
          font: 12px/1.6 "Courier New", monospace;
        }

        .kolpo-author-list {
          max-width: 1080px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .kolpo-author-item {
          border-top: 1px solid rgba(36, 35, 31, .18);
        }

        .kolpo-author-link {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: baseline;
          gap: 24px;
          padding: 27px 0 30px;
          color: #24231f;
          text-decoration: none;
        }

        .kolpo-author-work {
          min-width: 0;
        }

        .kolpo-author-work-title {
          margin: 0;
          font-size: clamp(28px, 3.6vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -.04em;
          overflow-wrap: anywhere;
          transition: color 180ms ease;
        }

        .kolpo-author-label {
          display: block;
          margin-top: 12px;
          color: #676257;
          font: 12px/1.6 "Courier New", monospace;
        }

        .kolpo-author-arrow {
          color: #bc3027;
          font: 26px/1 Arial, sans-serif;
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .kolpo-author-link:hover .kolpo-author-work-title,
        .kolpo-author-link:focus-visible .kolpo-author-work-title {
          color: #bc3027;
        }

        .kolpo-author a:focus-visible {
          outline: 2px solid #bc3027;
          outline-offset: 6px;
        }

        @media (hover: hover) and (pointer: fine) {
          .kolpo-author-arrow {
            opacity: 0;
            transform: translate(-3px, 3px);
          }

          .kolpo-author-link:hover .kolpo-author-arrow,
          .kolpo-author-link:focus-visible .kolpo-author-arrow {
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .kolpo-author-section {
            padding: 28px 20px 72px;
          }

          .kolpo-author-topline {
            font-size: 11px;
          }

          .kolpo-author-heading {
            padding: 28px 0 38px;
          }

          .kolpo-author-title {
            margin: 0 !important;
            font-size: clamp(48px, 11vw, 80px) !important;
            line-height: 1 !important;
          }

          .kolpo-author-meta {
            margin-top: 20px;
          }

          .kolpo-author-link {
            gap: 16px;
            padding: 23px 0 26px;
          }

          .kolpo-author-work-title {
            margin: 0 !important;
            font-size: 30px !important;
            line-height: 1.15 !important;
          }

          .kolpo-author-arrow {
            font-size: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-author-work-title,
          .kolpo-author-arrow {
            transition: none;
          }

          .kolpo-author-arrow {
            transform: none;
          }
        }
      `}</style>

      <SiteHeader />

      <section
        className="kolpo-author-section"
        aria-labelledby="kolpo-author-title"
      >
        <div className="kolpo-author-topline">
          <span>kolpo. / yazar</span>
          <Link href="/yazarlar" className="kolpo-author-back">
            ← bütün isimler
          </Link>
        </div>

        <div className="kolpo-author-heading">
          <h1 id="kolpo-author-title" className="kolpo-author-title">
            {author.name}
          </h1>

          <span className="kolpo-author-meta">
            {entries.length} iş / {categories.join(" · ")}
          </span>
        </div>

        <ul className="kolpo-author-list">
          {entries.map((entry) => (
            <li key={entry.href} className="kolpo-author-item">
              <Link href={entry.href} className="kolpo-author-link">
                <div className="kolpo-author-work">
                  <h2 className="kolpo-author-work-title">
                    {entry.title}
                  </h2>
                  <span className="kolpo-author-label">
                    {entry.label}
                  </span>
                </div>

                <span className="kolpo-author-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}