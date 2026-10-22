"use client";

import Link from "next/link";
import SaveForLater from "./SaveForLater";
import { searchVerses } from "@/data/search-verses";
import { createPortal } from "react-dom";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  getContentHref,
  getOrderedContentEntries,
} from "@/data/content-index";

type Verse = { text: string; title: string; author: string; href: string };
const contentEntries = new Map(getOrderedContentEntries());
const verses: Verse[] = searchVerses.flatMap(({ slug, text }) => {
  const content = contentEntries.get(slug);
  // Deleted or edited excerpts disappear instead of showing stale quotations.
  if (!content || !content.body.some((block) => block.kind === "stanza" && block.text.includes(text))) return [];
  return [{ text, title: content.title, author: content.authors.map((author) => author.name).join(" & "), href: getContentHref(slug, content) }];
});

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function matchesWord(word: string, terms: string[]) {
  const normalized = normalize(word);
  return normalized.length > 0 &&
    terms.some((term) => normalized.includes(term));
}

function Highlight({
  text,
  terms,
}: {
  text: string;
  terms: string[];
}) {
  return (
    <>
      {text.split(/([\p{L}\p{M}\p{N}]+)/gu).map((part, index) =>
        matchesWord(part, terms) ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

function getExcerpt(body: string, terms: string[]) {
  const lines = body
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const lineIndex = lines.findIndex((line) =>
    terms.some((term) => normalize(line).includes(term))
  );

  if (lineIndex < 0) return "";

  let text = lines[lineIndex];

  // Kısa dizenin yanına takip eden dizeyi de al.
  if (
    lines[lineIndex + 1] &&
    text.length + lines[lineIndex + 1].length < 190
  ) {
    text += "\n" + lines[lineIndex + 1];
  }

  if (text.length <= 220) return text;

  const firstMatch = Array.from(
    text.matchAll(/[\p{L}\p{M}\p{N}]+/gu)
  ).find((match) => matchesWord(match[0], terms));

  const hit = firstMatch?.index ?? 0;
  let start = Math.max(0, hit - 60);

  // Alıntının başını kelime sınırına yaklaştır.
  while (start > 0 && !/\s/.test(text[start - 1])) {
    start--;
  }

  let end = Math.min(text.length, start + 220);

  // Son kelimeyi ortadan bölme.
  while (end < text.length && !/\s/.test(text[end])) {
    end++;
  }

  return (
    (start > 0 ? "… " : "") +
    text.slice(start, end).trim() +
    (end < text.length ? " …" : "")
  );
}

export default function SiteSearch({
  color = "#111111",
}: {
  color?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [verse, setVerse] = useState<Verse | null>(null);

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
      if (trigger?.isConnected) trigger.focus();
    };
  }, [open]);

  const entries = useMemo(() => {
    if (!open) return [];

    const parser = new DOMParser();

    return getOrderedContentEntries().map(([slug, content]) => {
      const author = content.authors.map((item) => item.name).join(" & ");

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
            default:
              return "";
          }
        })
        .join("\n");

      const imageDescriptions = content.body
        .flatMap((block) =>
          block.kind === "visual-poem" ? [block.alt] : []
        )
        .join(" ");

      return {
        slug,
        title: content.title,
        author,
        body,
        category: content.label || "şiir",
        href: getContentHref(slug, content),
        titleSearch: normalize(content.title),
        authorSearch: normalize(author),
        searchable: normalize(
          `${content.title} ${author} ${content.label || "şiir"} ${body} ${imageDescriptions}`
        ),
      };
    });
  }, [open]);

  const normalizedQuery = normalize(query);
  const terms = normalizedQuery ? normalizedQuery.split(/\s+/) : [];

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    const searchTerms = normalizedQuery.split(/\s+/);

    return entries
      .filter((entry) =>
        searchTerms.every((term) => entry.searchable.includes(term))
      )
      .map((entry) => ({
        ...entry,
        excerpt: getExcerpt(entry.body, searchTerms),
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
          border: 0;
          padding: 0;
          margin: 0;
          font: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          cursor: pointer;
        }

        .kolpo-search-trigger:hover {
          color: var(--authors-orange, #c32721) !important;
        }

        .kolpo-search-dialog {
          --search-paper: #eeeade;
          --search-ink: #24231f;
          --search-red: #bc3027;
          --search-muted: #676257;
          --search-line: rgba(36,35,31,.2);

          box-sizing: border-box;
          position: fixed;
          inset: 0;
          width: min(820px, calc(100vw - 40px));
          max-height: calc(100dvh - 48px);
          margin: auto;
          padding: 0;
          overflow: auto;
          overscroll-behavior: contain;
          border: 0;
          border-top: 7px solid var(--search-red);
          border-radius: 0;
          background: var(--search-paper);
          color: var(--search-ink);
          font-family: Arial, sans-serif;
          box-shadow: 12px 12px 0 rgba(0,0,0,.18),
                      0 30px 100px rgba(0,0,0,.3);
          scrollbar-width: thin;
          scrollbar-color: #9a9385 var(--search-paper);
        }

        .kolpo-search-dialog[open] {
          animation: kolpo-search-enter 180ms ease-out;
        }

        .kolpo-search-dialog::backdrop {
          background: rgba(20,22,19,.76);
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
          font: 12px/1.4 "Courier New", monospace;
          letter-spacing: .06em;
        }

        .kolpo-search-close {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-height: 40px;
          padding: 8px 12px;
          border: 1px solid var(--search-ink);
          border-radius: 0;
          background: var(--search-ink);
          color: var(--search-paper);
          font: 12px/1 "Courier New", monospace;
          cursor: pointer;
        }

        .kolpo-search-close:hover {
          background: var(--search-red);
          border-color: var(--search-red);
        }

        .kolpo-search-close-symbol {
          font: 21px/1 Arial, sans-serif;
        }

        .kolpo-search-label {
          display: block;
          width: fit-content;
          margin: 24px 0 30px;
          color: var(--search-red);
          font: 400 clamp(48px, 7vw, 78px)/.98 Georgia, serif;
          letter-spacing: -.065em;
        }

        .kolpo-search-input-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 2px solid var(--search-ink);
        }

        .kolpo-search-input-wrap:focus-within {
          border-bottom-color: var(--search-red);
        }

        .kolpo-search-prompt {
          flex-shrink: 0;
          color: var(--search-red);
          font: 24px/1 "Courier New", monospace;
        }

        .kolpo-search-input {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          padding: 14px 0 18px;
          border: 0;
          border-radius: 0;
          outline: none;
          background: transparent;
          color: var(--search-ink);
          caret-color: var(--search-red);
          font: 400 28px/1.2 Georgia, serif;
          letter-spacing: -.025em;
        }

        .kolpo-search-input::placeholder {
          color: #797367;
          opacity: 1;
        }

        .kolpo-search-clear {
          flex-shrink: 0;
          min-height: 40px;
          padding: 8px 0 8px 8px;
          border: 0;
          background: transparent;
          color: var(--search-muted);
          font: 12px "Courier New", monospace;
          cursor: pointer;
        }

        .kolpo-search-clear:hover {
          color: var(--search-red);
        }

        .kolpo-search-status {
          padding: 15px 0 18px;
          color: var(--search-muted);
          font: 12px/1.6 "Courier New", monospace;
        }

        .kolpo-search-empty {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 0 36px;
          padding: 28px 0 34px;
          border-top: 1px solid var(--search-line);
        }

        .kolpo-search-asterisk {
          color: var(--search-red);
          font: 72px/.7 Georgia, serif;
        }

        .kolpo-search-empty-copy {
          max-width: 640px;
          color: #59554c;
          font: italic 23px/1.25 Georgia, serif;
          letter-spacing: -.02em;
        }

        .kolpo-search-verse { display:block; color:inherit; text-decoration:none; }
        .kolpo-search-verse-label { display:block; margin-bottom:14px; color:var(--search-red); font:11px/1.5 "Courier New",monospace; }
        .kolpo-search-verse-text { white-space:pre-line; display:block; font:italic 27px/1.3 Georgia,serif; }
        .kolpo-search-verse-credit { display:block; margin-top:16px; font:12px/1.6 "Courier New",monospace; }
        .kolpo-search-verse:hover .kolpo-search-verse-text { color:var(--search-red); }
        .kolpo-search-verse:focus-visible { outline:2px solid var(--search-red); outline-offset:6px; }
        .kolpo-search-results .kolpo-save { margin:0 0 22px 44px; }
        .kolpo-search-results .kolpo-save button { padding:7px 0; }
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
          font: 11px/1.4 "Courier New", monospace;
        }

        .kolpo-search-result-title {
          display: block;
          color: var(--search-ink);
          font: 400 34px/1.04 Georgia, serif;
          letter-spacing: -.04em;
          overflow-wrap: anywhere;
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
          font: 11px/1.5 "Courier New", monospace;
        }

        .kolpo-search-excerpt {
          display: block;
          margin-top: 17px;
          padding-left: 14px;
          border-left: 2px solid rgba(188,48,39,.3);
          color: #59554c;
          font: 18px/1.5 Georgia, serif;
          white-space: pre-line;
          overflow-wrap: anywhere;
        }

        .kolpo-search-result mark {
          background: transparent;
          color: var(--search-red);
          font: inherit;
          text-decoration: underline;
          text-decoration-color: rgba(188,48,39,.35);
          text-underline-offset: 3px;
        }

        .kolpo-search-result-arrow {
          padding-top: 3px;
          color: var(--search-red);
          font-size: 27px;
          line-height: 1;
          transition: transform .18s ease;
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
          flex-wrap: wrap;
          gap: 16px;
          padding: 15px 36px;
          border-top: 1px solid var(--search-line);
          color: var(--search-muted);
          font: 11px/1.5 "Courier New", monospace;
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
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 560px) {
          .kolpo-search-dialog {
            width: calc(100vw - 24px);
            max-height: calc(100dvh - 24px);
            border-top-width: 5px;
            box-shadow: 6px 6px 0 rgba(0,0,0,.18);
          }

          .kolpo-search-top { padding: 18px 20px 0; }
          .kolpo-search-label { margin: 24px 0; font-size: 52px; }
          .kolpo-search-edition { font-size: 11px; letter-spacing: 0; }
          .kolpo-search-input-wrap { gap: 10px; }
          .kolpo-search-input { font-size: 20px; }
          .kolpo-search-clear { font-size: 11px; }
          .kolpo-search-empty { margin: 0 20px; gap: 14px; }
          .kolpo-search-empty-copy { font-size: 21px; }
          .kolpo-search-results { padding: 0 20px 8px; }
          .kolpo-search-results .kolpo-save { margin-left:32px; }

          .kolpo-search-result {
            grid-template-columns: 22px minmax(0, 1fr) 20px;
            gap: 10px;
            padding: 22px 0;
          }

          .kolpo-search-result-title { font-size: 28px; }
          .kolpo-search-result-meta { font-size: 13px; }
          .kolpo-search-result-arrow { font-size: 22px; }
          .kolpo-search-excerpt { font-size: 17px; padding-left: 10px; }
          .kolpo-search-bottom { padding: 14px 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-search-dialog[open] { animation: none; }
          .kolpo-search-result-arrow { transition: none; }
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
        style={{ color: `var(--authors-muted, ${color})` }}
        onClick={() => {
          setQuery("");
          const choices = verses.filter((item) => item.text !== verse?.text);
          const pool = choices.length ? choices : verses;
          setVerse(pool.length ? pool[Math.floor(Math.random() * pool.length)] : null);
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
              if (!event.currentTarget.open) setOpen(false);
            }}
            onClick={(event) => {
              if (event.target !== event.currentTarget) return;

              const rect = event.currentTarget.getBoundingClientRect();

              if (
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom
              ) {
                setOpen(false);
              }
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
                <span className="kolpo-search-prompt" aria-hidden="true">
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

            {!normalizedQuery || results.length === 0 ? (
              <div className="kolpo-search-empty">
                <span className="kolpo-search-asterisk" aria-hidden="true">
                  *
                </span>
                <div className="kolpo-search-empty-copy">
                  {!normalizedQuery ? (
                    verse ? (
                      <Link href={verse.href} className="kolpo-search-verse" onClick={() => setOpen(false)}>
                        <span className="kolpo-search-verse-label">arşivden bir dize</span>
                        <span className="kolpo-search-verse-text">{verse.text}</span>
                        <span className="kolpo-search-verse-credit">{verse.title} / {verse.author} ↗</span>
                      </Link>
                    ) : <>aklında kalanın<br />bir yerinden başla</>
                  ) : (
                    <>belki başka bir kelimenin<br />içindedir.</>
                  )}
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
                          <Highlight text={entry.title} terms={terms} />
                        </span>

                        <span className="kolpo-search-result-meta">
                          <Highlight text={entry.author} terms={terms} />
                        </span>

                        <span className="kolpo-search-result-category">
                          {entry.category}
                        </span>

                        {entry.excerpt && (
                          <span className="kolpo-search-excerpt">
                            <Highlight text={entry.excerpt} terms={terms} />
                          </span>
                        )}
                      </span>

                      <span
                        className="kolpo-search-result-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </Link>
                    <SaveForLater href={entry.href} title={entry.title} />
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