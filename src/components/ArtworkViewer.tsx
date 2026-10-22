"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; alt: string; width: number; height: number };

export default function ArtworkViewer({ src, alt, width, height }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    if (!element) return;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      if (trigger.current?.isConnected) trigger.current.focus();
    };
  }, [open]);
  return (
    <>
      <style>{`
        .artwork-trigger { display:block; width:100%; border:0; padding:0; background:transparent; cursor:zoom-in; text-align:left; }
        .artwork-trigger img { display:block; width:100%; height:auto; }
        .artwork-hint { display:block; margin-top:12px; color:#676257; font:12px/1.5 "Courier New",monospace; }
        .artwork-trigger:focus-visible { outline:2px solid #bc3027; outline-offset:6px; }
        .artwork-dialog { box-sizing:border-box; width:100vw; height:100dvh; max-width:none; max-height:none; margin:0; padding:72px 24px 24px; border:0; background:#111; color:#f3f0e8; }
        .artwork-dialog::backdrop { background:#111; }
        .artwork-dialog img { display:block; width:100%; height:100%; object-fit:contain; }
        .artwork-close { position:absolute; right:24px; top:20px; border:1px solid #777; padding:10px 16px; background:#111; color:#f3f0e8; font:13px/1.5 "Courier New",monospace; cursor:pointer; }
        .artwork-close:focus-visible { outline:2px solid #f3f0e8; outline-offset:4px; }
      `}</style>
      <button ref={trigger} type="button" className="artwork-trigger" onClick={() => setOpen(true)} aria-label="Görseli tam ekran aç" aria-haspopup="dialog">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} />
        <span className="artwork-hint" aria-hidden="true">yakından bak ↗</span>
      </button>
      <dialog ref={dialog} className="artwork-dialog" aria-label={alt} onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClose={(event) => { if (!event.currentTarget.open) setOpen(false); }}>
        <button type="button" className="artwork-close" onClick={() => setOpen(false)} autoFocus>kapat ×</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} />
      </dialog>
    </>
  );
}
