"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
export default function RandomEscape({ paths }: { paths: string[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return <button type="button" className="kolpo-lost-random" disabled={pending || !paths.length} onClick={() => {
    if (!paths.length || pending) return;
    const href = paths[Math.floor(Math.random() * paths.length)];
    startTransition(() => router.push(href));
  }}>{pending ? "bir yere gidiyoruz…" : "başka bir yere sap ↗"}</button>;
}
