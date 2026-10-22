"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function wrap(ctx: CanvasRenderingContext2D, text: string, width: number) {
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    let line = "";
    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      const candidate = line ? `${line} ${word}` : word;
      if (ctx.measureText(candidate).width <= width) { line = candidate; continue; }
      if (line) lines.push(line);
      line = "";
      for (const character of word) {
        if (ctx.measureText(line + character).width > width && line) { lines.push(line); line = ""; }
        line += character;
      }
    }
    lines.push(line);
  }
  return lines;
}

async function makeCard(quote: string, title: string, author: string) {
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.fillStyle = "#f3f0e8"; ctx.fillRect(0, 0, 1080, 1350);
  ctx.fillStyle = "#bc3027"; ctx.fillRect(0, 0, 1080, 10);
  const logo = new Image();
  logo.src = "/kolpo.png";
  await logo.decode();
  ctx.drawImage(logo, 56, 36, 240, 240 * 1500 / 2100);
  ctx.fillStyle = "#676257"; ctx.font = "22px monospace";
  ctx.textAlign = "right"; ctx.fillText("bir dize / kolpo.", 1000, 128); ctx.textAlign = "left";
  let size = 64;
  let lines: string[] = [];
  for (; size >= 28; size -= 2) {
    ctx.font = `${size}px Georgia, serif`;
    lines = wrap(ctx, quote, 920);
    if (lines.length * size * 1.3 <= 760) break;
  }
  if (size < 28) throw new Error("Selection too long");
  ctx.fillStyle = "#24231f";
  const start = 260 + (760 - lines.length * size * 1.3) / 2;
  lines.forEach((line, index) => ctx.fillText(line, 80, start + size + index * size * 1.3));
  ctx.fillStyle = "#c9c4b9"; ctx.fillRect(80, 1080, 920, 1);
  ctx.fillStyle = "#bc3027"; ctx.font = "30px Georgia, serif";
  wrap(ctx, title, 920).forEach((line, index) => ctx.fillText(line, 80, 1130 + index * 36));
  ctx.fillStyle = "#676257"; ctx.font = "22px Georgia, serif";
  ctx.fillText(author, 80, 1245, 920);
  ctx.font = "18px monospace"; ctx.fillText("kolpomag.com", 80, 1290);
  return new Promise<Blob>((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("PNG unavailable")), "image/png"));
}

export default function ShareablePoem({ children, title, author, slug }: {
  children: ReactNode; title: string; author: string; slug: string;
}) {
  const body = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const generation = useRef({ version: 0 });
  const [selection, setSelection] = useState("");
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lifecycle = generation.current;
    const update = () => {
      if (dialog.current?.open) return;
      const selected = window.getSelection();
      if (!selected || selected.isCollapsed || !body.current?.contains(selected.anchorNode) || !body.current.contains(selected.focusNode)) {
        setSelection(""); return;
      }
      setSelection(selected.toString().trim()); setError("");
    };
    document.addEventListener("selectionchange", update);
    return () => { document.removeEventListener("selectionchange", update); lifecycle.version++; };
  }, []);

  useEffect(() => {
    if (!preview || !dialog.current) return;
    const element = dialog.current;
    const button = trigger.current;
    const overflow = document.body.style.overflow;
    element.showModal(); document.body.style.overflow = "hidden";
    return () => {
      element.close(); document.body.style.overflow = overflow;
      URL.revokeObjectURL(preview);
      if (button?.isConnected) button.focus();
    };
  }, [preview]);

  async function generate() {
    if (busy || !selection || selection.length > 400) return;
    const version = ++generation.current.version;
    setBusy(true); setError("");
    try {
      const blob = await makeCard(selection, title, author);
      if (version === generation.current.version) setPreview(URL.createObjectURL(blob));
    } catch { if (version === generation.current.version) setError("Kart oluşturulamadı. Daha kısa bir bölüm seçip tekrar dene."); }
    finally { if (version === generation.current.version) setBusy(false); }
  }

  return <>
    <style>{`
      .quote-toolbar { position:fixed; z-index:50; left:50%; bottom:24px; transform:translateX(-50%); box-sizing:border-box; max-width:calc(100vw - 32px); width:max-content; display:flex; flex-wrap:wrap; gap:12px; align-items:center; padding:14px 20px; border:1px solid #bc3027; background:#eeeade; color:#24231f; box-shadow:4px 4px 0 #24231f22; font:12px/1.5 "Courier New",monospace; }
      .quote-toolbar[hidden] { display:none; }
      .quote-toolbar button { border:0; padding:6px 0; background:transparent; color:#bc3027; font:inherit; cursor:pointer; }
      .quote-toolbar button:disabled { opacity:.5; cursor:default; }
      .quote-toolbar [role="status"] { flex-basis:100%; }
      .quote-dialog { box-sizing:border-box; width:min(640px,calc(100vw - 24px)); max-height:calc(100dvh - 32px); margin:auto; padding:20px; border:0; background:#eeeade; color:#24231f; overflow:auto; }
      .quote-dialog::backdrop { background:#111c; }
      .quote-dialog header { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:18px; font:12px/1.5 "Courier New",monospace; }
      .quote-dialog button,.quote-dialog a { border:0; background:transparent; padding:10px 0; color:#bc3027; font:13px/1.5 "Courier New",monospace; cursor:pointer; }
      .quote-dialog img { display:block; width:100%; height:auto; max-height:calc(100dvh - 190px); object-fit:contain; }
      .quote-download { display:inline-block; margin-top:10px; text-underline-offset:4px; }
      .quote-toolbar button:focus-visible,.quote-dialog :focus-visible { outline:2px solid #bc3027; outline-offset:5px; }
    `}</style>
    <div ref={body} className="poem-body">{children}</div>
    {selection && <div hidden={!!preview} className="quote-toolbar" aria-label="Seçili dizeyi paylaş">
      <button ref={trigger} type="button" disabled={busy || selection.length > 400} onPointerDown={(event) => event.preventDefault()} onClick={generate}>{busy ? "hazırlanıyor…" : "bu dizeyi paylaş ↗"}</button>
      <button type="button" aria-label="Dize paylaşımını kapat" onClick={() => { window.getSelection()?.removeAllRanges(); setSelection(""); }}>×</button>
      {selection.length > 400 && <span role="status">Kart için en fazla 400 karakter seçebilirsin.</span>}
      {error && <span role="status">{error}</span>}
    </div>}
    <dialog ref={dialog} className="quote-dialog" aria-label="Dize kartı önizlemesi" onCancel={(event) => { event.preventDefault(); setPreview(""); }} onClose={(event) => { if (!event.currentTarget.open) setPreview(""); }}>
      <header><span>kolpo. / seçtiğin dize</span><button type="button" onClick={() => setPreview("")} autoFocus>kapat ×</button></header>
      {preview && <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview} alt={`${selection} — ${title}, ${author}`} />
        <a className="quote-download" href={preview} download={`kolpo-${slug}.png`}>kartı indir ↓</a>
      </>}
    </dialog>
  </>;
}
