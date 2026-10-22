import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import RandomEscape from "@/components/RandomEscape";
import { getContentHref, getOrderedContentEntries } from "@/data/content-index";

export const metadata: Metadata = { title: "burada yok", robots: { index: false, follow: true } };
export default function NotFound() {
  const paths = getOrderedContentEntries().map(([slug, content]) => getContentHref(slug, content));
  return <main className="kolpo-lost">
    <style>{`
      .kolpo-lost { min-height:100vh; background:#f3f0e8; color:#24231f; font-family:Georgia,serif; }
      .kolpo-lost-section { max-width:1440px; margin:auto; padding:30px 36px 100px; }
      .kolpo-lost-label { border-top:1px solid #24231f2e; padding:18px 0; color:#676257; font:12px/1.5 "Courier New",monospace; }
      .kolpo-lost-title { margin:45px 0 60px; color:#bc3027; font-size:clamp(80px,12vw,170px); font-weight:400; line-height:.9; letter-spacing:-.07em; }
      .kolpo-lost-title span { display:block; }
      .kolpo-lost-title span:last-child { margin-left:.8em; font-style:italic; }
      .kolpo-lost-actions { display:flex; flex-wrap:wrap; align-items:baseline; gap:24px 40px; }
      .kolpo-lost-random { border:0; padding:10px 0; background:transparent; color:#24231f; font:26px/1.3 Georgia,serif; cursor:pointer; }
      .kolpo-lost-random:hover { color:#bc3027; }
      .kolpo-lost-actions a { color:#676257; font:12px/1.5 "Courier New",monospace; text-underline-offset:4px; }
      .kolpo-lost-actions :focus-visible { outline:2px solid #bc3027; outline-offset:6px; }
      @media(max-width:768px) { .kolpo-lost-section { padding:28px 20px 72px; } .kolpo-lost-title { margin:32px 0 44px!important; font-size:clamp(72px,17vw,120px)!important; line-height:.92!important; } }
    `}</style>
    <SiteHeader />
    <section className="kolpo-lost-section">
      <div className="kolpo-lost-label">kolpo. / 404</div>
      <h1 className="kolpo-lost-title"><span>burada</span><span>yok.</span></h1>
      <div className="kolpo-lost-actions"><RandomEscape paths={paths} /><Link href="/arsiv">arşive dön</Link></div>
    </section>
  </main>;
}
