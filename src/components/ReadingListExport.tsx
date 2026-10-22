"use client";

import { useState } from "react";
import { SITE_URL } from "@/data/content-index";

type Entry = { title: string; href: string; authors: { name: string }[] };
export default function ReadingListExport({ entries }: { entries: Entry[] }) {
  const [notice, setNotice] = useState("");
  const [manual, setManual] = useState(false);
  const text = "kolpo. / ayırdıklarım\n\n" + entries.map((entry) => `${entry.title} — ${entry.authors.map((author) => author.name).join(" & ")}\n${SITE_URL}${entry.href}`).join("\n\n");
  return <div className="reading-export">
    <style>{`
      .reading-export { margin:0 0 22px; font:12px/1.6 "Courier New",monospace; color:#676257; }
      .reading-export button { padding:10px 0; border:0; border-bottom:1px solid #bc3027; background:transparent; color:#bc3027; font:inherit; cursor:pointer; }
      .reading-export button:disabled { opacity:.4; cursor:default; }
      .reading-export button:focus-visible,.reading-export textarea:focus-visible { outline:2px solid #bc3027; outline-offset:5px; }
      .reading-export [role="status"] { display:block; margin-top:8px; }
      .reading-export textarea { display:block; box-sizing:border-box; width:100%; max-width:800px; min-height:180px; margin-top:14px; padding:16px; border:1px solid #b4b0a7; background:transparent; color:#24231f; font:13px/1.6 "Courier New",monospace; }
    `}</style>
    <button type="button" disabled={!entries.length} onClick={async () => {
      try { await navigator.clipboard.writeText(text); setNotice("Liste bağlantılarıyla kopyalandı."); setManual(false); }
      catch { setManual(true); setNotice("Otomatik kopyalanamadı. Aşağıdaki metni seçip kopyalayabilirsin."); }
    }}>listeyi kopyala ↗</button>
    <span role="status">{notice}</span>
    {manual && <textarea aria-label="Kopyalanacak okuma listesi" readOnly value={text} onFocus={(event) => event.currentTarget.select()} />}
  </div>;
}
