"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  getContentHref,
  getOrderedContentEntries,
} from "@/data/content-index";

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export default function SiteSearch({
  color = "#111111",
}: {
  color?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = buttonRef.current;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;

      if (trigger?.isConnected) {
        trigger.focus();
      }
    };
  }, [open]);

  const entries = useMemo(() => {
    if (!open) return [];

    const parser = new DOMParser();

    return getOrderedContentEntries().map(([slug, content]) => {
      const author = content.authors
        .map((item) => item.name)
        .join(" & ");

      const body = content.body
        .map((block) => {
          switch (block.kind) {
            case "stanza":
              return block.text;

            case "stanza-last-line-italic":
              return `${block.text}\n${block.lastLine}`;

            case "stanza-html":
              return block.htmlLines
                .map(
                  (line) =>
                    parser.parseFromString(line, "text/html").body
                      .textContent || ""
                )
                .join("\n");

            case "visual-poem":
              return block.alt;

            default:
              return "";
          }
        })
        .join("\n");

      return {
        slug,
        title: content.title,
        author,
        category: content.label || "şiir",
        href: getContentHref(slug, content),
        titleSearch: normalize(content.title),
        authorSearch: normalize(author),
        searchable: normalize(
          `${content.title} ${author} ${content.label || "şiir"} ${body}`
        ),
      };
    });
  }, [open]);

  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    const terms = normalizedQuery.split(/\s+/);

    return entries
      .filter((entry) =>
        terms.every((term) => entry.searchable.includes(term))
      )
      .map((entry) => ({
        ...entry,
        score:
          entry.titleSearch === normalizedQuery
            ? 4
            : entry.titleSearch.includes(normalizedQuery)
              ? 3
              : entry.authorSearch.includes(normalizedQuery)
                ? 2
                : 1,
      }))
      .sort((a, b) => b.score - a.score);
  }, [entries, normalizedQuery]);

  return (
    <>
      <style>{`
        .kolpo-search-trigger {
          appearance: none;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          margin: 0;
          font: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          cursor: pointer;
          transition: color 0.18s ease;
        }

        .kolpo-search-trigger:hover {
          color: var(--authors-orange, #c32721) !important;
        }

        .kolpo-search-dialog {
          --search-paper: #eeeade;
          --search-ink: #24231f;
          --search-red: #bc3027;
          --search-muted: #716c61;
          --search-line: rgba(36, 35, 31, 0.2);

          box-sizing: border-box;
          position: fixed;
          inset: 0;
          width: min(820px, calc(100vw - 40px));
          max-height: calc(100dvh - 48px);
          margin: auto;
          padding: 0;
          overflow: auto;
          overscroll-behavior: contain;
          border: none;
          border-top: 7px solid var(--search-red);
          border-radius: 0;
          background: var(--search-paper);
          color: var(--search-ink);
          font-family: Arial, Helvetica, sans-serif;
          box-shadow:
            12px 12px 0 rgba(0, 0, 0, 0.18),
            0 30px 100px rgba(0, 0, 0, 0.3);
          scrollbar-width: thin;
          scrollbar-color: #9a9385 var(--search-paper);
        }

        .kolpo-search-dialog[open] {
          animation: kolpo-search-enter 180ms ease-out;
        }

        .kolpo-search-dialog::backdrop {
          background: rgba(20, 22, 19, 0.76);
          backdrop-filter: blur(7px);
        }

        .kolpo-search-dialog ::selection {
          background: var(--search-red);
          color: var(--search-paper);
        }

        .kolpo-search-top {
          position: sticky;
          top: 0;
          z-index: 2;
          padding: 24px 36px 0;
          background: var(--search-paper);
        }

        .kolpo-search-masthead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--search-line);
        }

        .kolpo-search-edition {
          color: var(--search-muted);
          font-family: "Courier New", Courier, monospace;
          font-size: 12px;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .kolpo-search-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 40px;
          padding: 8px 12px;
          border: 1px solid var(--search-ink);
          border-radius: 0;
          background: var(--search-ink);
          color: var(--search-paper);
          font-family: "Courier New", Courier, monospace;
          font-size: 12px;
          line-height: 1;
          cursor: pointer;
          transition:
            background 0.18s ease,
            border-color 0.18s ease;
        }

        .kolpo-search-close:hover {
          background: var(--search-red);
          border-color: var(--search-red);
        }

        .kolpo-search-close-symbol {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 21px;
          line-height: 1;
        }

        .kolpo-search-label {
          display: block;
          width: fit-content;
          margin: 24px 0 30px;
          color: var(--search-red);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 7vw, 78px);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .kolpo-search-input-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 2px solid var(--search-ink);
          transition: border-color 0.18s ease;
        }

        .kolpo-search-input-wrap:focus-within {
          border-bottom-color: var(--search-red);
        }

        .kolpo-search-prompt {
          flex-shrink: 0;
          color: var(--search-red);
          font-family: "Courier New", Courier, monospace;
          font-size: 24px;
          line-height: 1;
        }

        .kolpo-search-input {
          box-sizing: border-box;
          display: block;
          width: 100%;
          min-width: 0;
          padding: 14px 0 18px;
          border: none;
          border-radius: 0;
          outline: none;
          background: transparent;
          color: var(--search-ink);
          caret-color: var(--search-red);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .kolpo-search-input::placeholder {
          color: #797367;
          opacity: 1;
        }

        .kolpo-search-clear {
          flex-shrink: 0;
          min-height: 40px;
          padding: 8px 0 8px 8px;
          border: none;
          background: transparent;
          color: var(--search-muted);
          font-family: "Courier New", Courier, monospace;
          font-size: 12px;
          cursor: pointer;
        }

        .kolpo-search-clear:hover {
          color: var(--search-red);
        }

        .kolpo-search-status {
          padding: 15px 0 18px;
          color: var(--search-muted);
          font-family: "Courier New", Courier, monospace;
          font-size: 12px;
          line-height: 1.6;
        }

        .kolpo-search-empty {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 0 36px;
          padding: 28px 0 34px;
          border-top: 1px solid var(--search-line);
        }

        .kolpo-search-asterisk {
          flex-shrink: 0;
          color: var(--search-red);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 72px;
          line-height: 0.7;
        }

        .kolpo-search-empty-copy {
          max-width: 340px;
          color: #59554c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          font-style: italic;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .kolpo-search-results {
          list-style: none;
          margin: 0;
          padding: 0 36px 12px;
        }

        .kolpo-search-results li {
          margin: 0;
          padding: 0;
        }

        .kolpo-search-result {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr) 28px;
          align-items: start;
          gap: 16px;
          padding: 24px 0;
          border-top: 1px solid var(--search-line);
          color: var(--search-ink);
          text-decoration: none;
        }

        .kolpo-search-result-number {
          padding-top: 6px;
          color: var(--search-muted);
          font-family: "Courier New", Courier, monospace;
          font-size: 11px;
          line-height: 1.4;
        }

        .kolpo-search-result-title {
          display: block;
          color: var(--search-ink);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
          transition: color 0.18s ease;
        }

        .kolpo-search-result-meta {
          display: block;
          margin-top: 11px;
          color: var(--search-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .kolpo-search-result-category {
          display: block;
          margin-top: 4px;
          color: var(--search-red);
          font-family: "Courier New", Courier, monospace;
          font-size: 11px;
          line-height: 1.5;
        }

        .kolpo-search-result-arrow {
          padding-top: 3px;
          color: var(--search-red);
          font-size: 27px;
          line-height: 1;
          transition: transform 0.18s ease;
        }

        .kolpo-search-result:hover .kolpo-search-result-title,
        .kolpo-search-result:focus-visible .kolpo-search-result-title {
          color: var(--search-red);
        }

        .kolpo-search-result:hover .kolpo-search-result-arrow {
          transform: translate(3px, -3px);
        }

        .kolpo-search-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 15px 36px;
          border-top: 1px solid var(--search-line);
          color: var(--search-muted);
          font-family: "Courier New", Courier, monospace;
          font-size: 11px;
          line-height: 1.5;
        }

        .kolpo-search-trigger:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 5px;
        }

        .kolpo-search-close:focus-visible,
        .kolpo-search-clear:focus-visible,
        .kolpo-search-result:focus-visible {
          outline: 2px solid var(--search-red);
          outline-offset: 4px;
        }

        @keyframes kolpo-search-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 560px) {
          .kolpo-search-dialog {
            width: calc(100vw - 24px);
            max-height: calc(100dvh - 24px);
            border-top-width: 5px;
            box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.18);
          }

          .kolpo-search-top {
            padding: 18px 20px 0;
          }

          .kolpo-search-label {
            margin: 24px 0;
            font-size: 52px;
          }

          .kolpo-search-edition {
            font-size: 10px;
            letter-spacing: 0.04em;
          }

          .kolpo-search-input-wrap {
            gap: 10px;
          }

          .kolpo-search-input {
            font-size: 20px;
          }

          .kolpo-search-clear {
            font-size: 10px;
          }

          .kolpo-search-empty {
            margin: 0 20px;
            gap: 14px;
          }

          .kolpo-search-empty-copy {
            font-size: 21px;
          }

          .kolpo-search-results {
            padding: 0 20px 8px;
          }

          .kolpo-search-result {
            grid-template-columns: 22px minmax(0, 1fr) 20px;
            gap: 10px;
            padding: 22px 0;
          }

          .kolpo-search-result-title {
            font-size: 28px;
          }

          .kolpo-search-result-meta {
            font-size: 13px;
          }

          .kolpo-search-result-arrow {
            font-size: 22px;
          }

          .kolpo-search-bottom {
            padding: 14px 20px;
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-search-dialog[open] {
            animation: none;
          }

          .kolpo-search-result-arrow,
          .kolpo-search-result-title,
          .kolpo-search-close {
            transition: none;
          }

          .kolpo-search-result:hover .kolpo-search-result-arrow {
            transform: none;
          }
        }
      `}</style>

      <button
        ref={buttonRef}
        type="button"
        className="kolpo-search-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        style={{
          color: `var(--authors-muted, ${color})`,
        }}
        onClick={() => {
          setQuery("");
          setOpen(true);
        }}
      >
        ara
      </button>

      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            className="kolpo-search-dialog"
            aria-labelledby={`${id}-label`}
            onCancel={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
            onClose={(event) => {
              if (!event.currentTarget.open) {
                setOpen(false);
              }
            }}
            onClick={(event) => {
              if (event.target !== event.currentTarget) return;

              const rect = event.currentTarget.getBoundingClientRect();

              const outside =
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom;

              if (outside) setOpen(false);
            }}
          >
            <div className="kolpo-search-top">
              <div className="kolpo-search-masthead">
                <span className="kolpo-search-edition">
                  kolpo. / arşivin içinden
                </span>

                <button
                  type="button"
                  className="kolpo-search-close"
                  aria-label="Aramayı kapat"
                  onClick={() => setOpen(false)}
                >
                  kapat
                  <span
                    className="kolpo-search-close-symbol"
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </button>
              </div>

              <label
                id={`${id}-label`}
                htmlFor={`${id}-input`}
                className="kolpo-search-label"
              >
                bir şey ara
              </label>

              <div className="kolpo-search-input-wrap">
                <span
                  className="kolpo-search-prompt"
                  aria-hidden="true"
                >
                  →
                </span>

                <input
                  ref={inputRef}
                  id={`${id}-input`}
                  className="kolpo-search-input"
                  type="text"
                  inputMode="search"
                  placeholder="isim, dize veya başlık"
                  autoComplete="off"
                  spellCheck={false}
                  value={query}
                  aria-describedby={`${id}-status`}
                  onChange={(event) => setQuery(event.target.value)}
                />

                {query && (
                  <button
                    type="button"
                    className="kolpo-search-clear"
                    aria-label="Arama metnini temizle"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                  >
                    temizle
                  </button>
                )}
              </div>

              <div
                id={`${id}-status`}
                className="kolpo-search-status"
                role="status"
                aria-live="polite"
              >
                {!normalizedQuery
                  ? "eser adı / yazar / metnin içinden"
                  : results.length === 0
                    ? "eşleşme yok / başka bir kelime dene"
                    : `${results.length} eşleşme / arşivden`}
              </div>
            </div>

            {!normalizedQuery ? (
              <div className="kolpo-search-empty">
                <span
                  className="kolpo-search-asterisk"
                  aria-hidden="true"
                >
                  *
                </span>

                <div className="kolpo-search-empty-copy">
                  aklında kalanın
                  <br />
                  bir yerinden başla
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="kolpo-search-empty">
                <span
                  className="kolpo-search-asterisk"
                  aria-hidden="true"
                >
                  *
                </span>

                <div className="kolpo-search-empty-copy">
                  belki başka bir kelimenin
                  <br />
                  içindedir.
                </div>
              </div>
            ) : (
              <ul className="kolpo-search-results">
                {results.map((entry, index) => (
                  <li key={entry.slug}>
                    <Link
                      href={entry.href}
                      className="kolpo-search-result"
                      onClick={() => setOpen(false)}
                    >
                      <span
                        className="kolpo-search-result-number"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        <span className="kolpo-search-result-title">
                          {entry.title}
                        </span>

                        <span className="kolpo-search-result-meta">
                          {entry.author}
                        </span>

                        <span className="kolpo-search-result-category">
                          {entry.category}
                        </span>
                      </span>

                      <span
                        className="kolpo-search-result-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="kolpo-search-bottom">
              <span>şiir / yazı / çeviri / görsel</span>
              <span>esc — kapat</span>
            </div>
          </dialog>,
          document.body
        )}
    </>
  );
}