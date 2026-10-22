"use client";

import { useMemo, useSyncExternalStore } from "react";
const KEY = "kolpo-reading-list-v1";
const EVENT = "kolpo-reading-list-change";
function snapshot() {
  try { return localStorage.getItem(KEY) || "[]"; } catch { return "[]"; }
}
function parse(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === "string" && /^\/(siir|yazi)\//.test(item)))] : [];
  } catch { return []; }
}
function subscribe(notify: () => void) {
  const storage = (event: StorageEvent) => { if (event.key === KEY || event.key === null) notify(); };
  window.addEventListener("storage", storage);
  window.addEventListener(EVENT, notify);
  return () => { window.removeEventListener("storage", storage); window.removeEventListener(EVENT, notify); };
}
export function useReadingList() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  return useMemo(() => parse(raw), [raw]);
}
export function toggleReadingList(href: string) {
  const current = parse(snapshot());
  const next = current.includes(href) ? current.filter((item) => item !== href) : [...current, href];
  // Failure propagates so the button can explain that nothing was saved.
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function moveReadingList(href: string, neighbor: string) {
  const next = parse(snapshot());
  const from = next.indexOf(href), to = next.indexOf(neighbor);
  if (from < 0 || to < 0 || from === to) return;
  [next[from], next[to]] = [next[to], next[from]];
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}
