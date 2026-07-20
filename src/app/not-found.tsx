import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "bulunamadı",
};

export default function NotFound() {
  return (
    <main
      style={{
        background: "#f3f0e8",
        minHeight: "100vh",
        color: "#111111",
        fontFamily: "Georgia, Times New Roman, serif",
      }}
    >
      <SiteHeader />
      <section style={{ padding: "30px 36px 110px" }}>
        <div
          style={{
            borderTop: "1px solid rgba(17,17,17,0.12)",
            paddingTop: "18px",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#c32721",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "16px",
            }}
          >
            404 / sinyal yok
          </p>
          <h1
            style={{
              margin: 0,
              maxWidth: "980px",
              fontSize: "clamp(54px, 10vw, 112px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
            }}
          >
            aradığın şey bu devrede değil.
          </h1>
          <p style={{ marginTop: "28px", fontSize: "22px" }}>
            <Link href="/arsiv" style={{ color: "#111111" }}>
              arşive dön
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
