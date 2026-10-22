"use client";

import { useState } from "react";
import { toggleReadingList, useReadingList } from "./reading-list";

export default function SaveForLater({ href, title }: { href: string; title?: string }) {
  const saved = useReadingList().includes(href);
  const [error, setError] = useState("");
  return (
    <div className="kolpo-save">
      <button type="button" aria-pressed={saved} aria-label={title ? `${title}: ${saved ? "ayırdıklarımdan çıkar" : "sonraya bırak"}` : undefined} onClick={() => {
        try { toggleReadingList(href); setError(""); }
        catch { setError("Bu tarayıcıda kaydedilemiyor. Tarayıcının depolama ayarlarını kontrol et."); }
      }}>{saved ? "ayırdım ✓" : "sonraya bırak +"}</button>
      <span role="status">{error}</span>
    </div>
  );
}
