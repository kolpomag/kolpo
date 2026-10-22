"use client";
import { useState } from "react";
import { moveReadingList } from "./reading-list";
export default function ReadingListOrder({ href, title, previous, next }: {
  href: string; title: string; previous?: string; next?: string;
}) {
  const [notice, setNotice] = useState("");
  function move(neighbor: string | undefined, direction: string) {
    if (!neighbor) return;
    try { moveReadingList(href, neighbor); setNotice(`${title} ${direction} taşındı.`); }
    catch { setNotice("Sıra kaydedilemedi. Tarayıcının depolama ayarlarını kontrol et."); }
  }
  return <div className="reading-order">
    <button type="button" disabled={!previous} aria-label={`${title}: yukarı taşı`} onClick={() => move(previous, "yukarı")}>↑</button>
    <button type="button" disabled={!next} aria-label={`${title}: aşağı taşı`} onClick={() => move(next, "aşağı")}>↓</button>
    <span role="status">{notice}</span>
  </div>;
}
