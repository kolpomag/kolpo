import { Suspense } from "react";
import type { Metadata } from "next";
import ArchiveBrowser from "@/components/ArchiveBrowser";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "arşiv" };

export default function Page() {
  return <Suspense fallback={<main style={{ background: "#f3f0e8", minHeight: "100vh" }}><SiteHeader /><div role="status" style={{ padding: "36px" }}>yükleniyor…</div></main>}>
    <ArchiveBrowser savedView={false} />
  </Suspense>;
}
