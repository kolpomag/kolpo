import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { poems } from "@/data/content";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = Object.hasOwn(poems, slug) ? poems[slug] : undefined;
  if (!content) return new Response("Not found", { status: 404 });
  const logo = await readFile(join(process.cwd(), "public/kolpo.png"));
  const titleSize = content.title.length > 110 ? 48 : content.title.length > 70 ? 60 : content.title.length > 40 ? 76 : 90;
  return new ImageResponse(
    <div style={{ display:"flex", flexDirection:"column", width:"100%", height:"100%", background:"#f3f0e8", color:"#24231f", padding:"48px 60px", borderTop:"10px solid #bc3027" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={150} height={107} style={{ width:150, height:107, objectFit:"contain", flexShrink:0 }} alt="kolpo." />
        <span style={{ fontSize:20, color:"#676257" }}>{content.label || "şiir"}</span>
      </div>
      <div style={{ display:"flex", flex:1, alignItems:"center", fontSize:titleSize, lineHeight:1.08, letterSpacing:"-3px", overflow:"hidden" }}>{content.title}</div>
      <div style={{ display:"flex", justifyContent:"space-between", gap:30, alignItems:"center", paddingTop:22, borderTop:"1px solid #c9c4b9", fontSize:24 }}>
        <span>{content.authors.map((author) => author.name).join(" & ")}</span>
        <span style={{ color:"#bc3027", fontSize:18 }}>kolpomag.com</span>
      </div>
    </div>,
    { width:1200, height:630, headers:{ "Cache-Control":"public, max-age=3600" } }
  );
}
