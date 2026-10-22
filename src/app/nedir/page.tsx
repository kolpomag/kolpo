import SiteHeader from "@/components/SiteHeader";

export default function NedirPage() {
  return (
    <main className="kolpo-about">
      <style>{`
        .kolpo-about { background:#111; min-height:100vh; color:#f3f0e8; font-family:Georgia,"Times New Roman",serif; }
        .kolpo-about ::selection { background:#bc3027; color:#f3f0e8; }
        .kolpo-about-section { max-width:1440px; margin:0 auto; padding:30px 36px 110px; }
        .kolpo-about-topline { display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px; padding:18px 0; border-top:1px solid #f3f0e82e; color:#b4b0a7; font:12px/1.5 "Courier New",monospace; }
        .kolpo-about-title { margin:36px 0 58px; color:#cf4036; font-size:clamp(76px,9vw,128px); line-height:.95; font-weight:400; letter-spacing:-.07em; }
        .kolpo-about-grid { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr); gap:72px; align-items:start; }
        .kolpo-about-definition { max-width:660px; }
        .kolpo-about-term { display:block; margin-bottom:26px; color:#b4b0a7; font:12px/1.5 "Courier New",monospace; }
        .kolpo-about-copy { margin:0 0 28px; font-size:28px; font-weight:400; line-height:1.45; letter-spacing:-.02em; }
        .kolpo-about-source { color:#e15b50; text-decoration:none; }
        .kolpo-about-source:hover { color:#f3f0e8; }
        .kolpo-about-source:focus-visible { outline:2px solid #e15b50; outline-offset:4px; }
        .kolpo-about-ending { margin:64px 0 0; max-width:460px; color:#c6c1b7; font-size:30px; line-height:1.35; font-style:italic; font-weight:400; letter-spacing:-.025em; }
        .kolpo-about-figure { margin:0; }
        .kolpo-about-figure img { display:block; width:100%; height:auto; }
        .kolpo-about-figure figcaption { margin-top:16px; color:#b4b0a7; font:12px/1.7 "Courier New",monospace; }
        @media(max-width:900px) { .kolpo-about-grid { gap:40px; } .kolpo-about-copy { font-size:24px; } }
        @media(max-width:768px) {
          .kolpo-about-section { padding:28px 20px 72px; }
          .kolpo-about-title { margin:28px 0 38px!important; font-size:clamp(64px,14vw,96px)!important; line-height:.95!important; }
          .kolpo-about-grid { grid-template-columns:minmax(0,1fr); gap:48px; }
          .kolpo-about-copy { font-size:23px!important; line-height:1.45!important; }
          .kolpo-about-ending { margin-top:40px; font-size:27px!important; line-height:1.35!important; }
          .kolpo-about-figure { max-width:480px; }
        }
      `}</style>
      <SiteHeader theme="dark" />
      <section className="kolpo-about-section" aria-labelledby="kolpo-about-title">
        <div className="kolpo-about-topline"><span>kolpo. / nedir</span><span>bir kelimenin içinden</span></div>
        <h1 id="kolpo-about-title" className="kolpo-about-title">nedir</h1>
        <div className="kolpo-about-grid">
          <div className="kolpo-about-definition">
            <span className="kolpo-about-term">kolpo / isim</span>
            <p className="kolpo-about-copy">kolpo, veya yaygın kullanımıyla kolpa, italyanca <i>colpo</i> (darbe, vuruş, çalım) kelimesinden türkçeye geçen ve argo olarak kullanılan bir terimdir.</p>
            <p className="kolpo-about-copy">kelimenin kökeni latince <i>colaphus</i> (darbe) kelimesine dayanmaktadır<a href="https://www.nisanyansozluk.com/kelime/kolpa" target="_blank" rel="noreferrer" className="kolpo-about-source" aria-label="Kaynak: Nişanyan Sözlük">*</a>.</p>
            <p className="kolpo-about-ending">ve olan her şey, ona da olmaktadır.</p>
          </div>
          <figure className="kolpo-about-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fludd.jpeg" alt="Robert Fludd, The Nothingness That Was Prior to the Universe (1617)" />
            <figcaption>Robert Fludd, <i>The Nothingness That Was Prior to the Universe</i> (1617)</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
