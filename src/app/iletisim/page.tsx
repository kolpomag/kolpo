import SiteHeader from "@/components/SiteHeader";

export default function IletisimPage() {
  return (
    <main className="kolpo-contact">
      <style>{`
        .kolpo-contact {
          --contact-paper: #f3f0e8;
          --contact-ink: #24231f;
          --contact-red: #bc3027;
          --contact-muted: #676257;
          --contact-line: rgba(36, 35, 31, 0.18);

          min-height: 100vh;
          background: var(--contact-paper);
          color: var(--contact-ink);
          font-family: Georgia, "Times New Roman", serif;
        }

        .kolpo-contact ::selection {
          background: var(--contact-red);
          color: var(--contact-paper);
        }

        .kolpo-contact-section {
          max-width: 1440px;
          margin: 0 auto;
          padding: 30px 36px 100px;
        }

        .kolpo-contact-topline {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 24px;
          padding: 18px 0;
          border-top: 1px solid var(--contact-line);
          color: var(--contact-muted);
          font: 12px/1.5 "Courier New", Courier, monospace;
          letter-spacing: 0.03em;
        }

        .kolpo-contact-content {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
          align-items: end;
          gap: 64px;
          padding-top: 44px;
        }

        .kolpo-contact-title {
          margin: 0;
          color: var(--contact-red);
          font-size: clamp(76px, 9vw, 136px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.07em;
        }

        .kolpo-contact-title span {
          display: block;
        }

        .kolpo-contact-title span:last-child {
          padding-left: 0.65em;
          font-style: italic;
        }

        .kolpo-contact-intro {
          max-width: 600px;
          margin: 40px 0 0;
          color: #49463f;
          font-size: 26px;
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: -0.025em;
          text-wrap: pretty;
        }

        .kolpo-contact-mail-block {
          min-width: 0;
          padding-bottom: 6px;
        }

        .kolpo-contact-mail-label {
          display: block;
          margin-bottom: 16px;
          color: var(--contact-muted);
          font: 12px/1.5 "Courier New", Courier, monospace;
          letter-spacing: 0.03em;
        }

        .kolpo-contact-mail {
          display: inline-flex;
          align-items: baseline;
          gap: 16px;
          max-width: 100%;
          padding: 4px 0;
          color: var(--contact-ink);
          text-decoration: none;
        }

        .kolpo-contact-mail-text {
          min-width: 0;
          font-size: clamp(26px, 2.8vw, 40px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.045em;
          overflow-wrap: anywhere;
          transition: color 180ms ease;
        }

        .kolpo-contact-mail-arrow {
          flex-shrink: 0;
          color: var(--contact-red);
          font-family: Arial, sans-serif;
          font-size: 28px;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .kolpo-contact-mail:hover .kolpo-contact-mail-text {
          color: var(--contact-red);
        }

        .kolpo-contact-mail:hover .kolpo-contact-mail-arrow {
          transform: translate(3px, -3px);
        }

        .kolpo-contact-mail:focus-visible {
          outline: 2px solid var(--contact-red);
          outline-offset: 8px;
        }

        @media (max-width: 1000px) {
          .kolpo-contact-content {
            grid-template-columns: minmax(0, 1fr);
            gap: 44px;
          }

          .kolpo-contact-mail-text {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .kolpo-contact-section {
            padding: 28px 20px 72px;
          }

          .kolpo-contact-topline {
            font-size: 11px;
          }

          .kolpo-contact-content {
            gap: 40px;
            padding-top: 32px;
          }

          .kolpo-contact-title {
            margin: 0 !important;
            font-size: clamp(62px, 14vw, 96px) !important;
            line-height: 0.92 !important;
          }

          .kolpo-contact-intro {
            max-width: 520px;
            margin-top: 32px;
            font-size: 23px !important;
            line-height: 1.45 !important;
          }

          .kolpo-contact-mail {
            gap: 12px;
          }

          .kolpo-contact-mail-text {
            font-size: clamp(24px, 6.3vw, 36px);
          }

          .kolpo-contact-mail-arrow {
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kolpo-contact-mail-text,
          .kolpo-contact-mail-arrow {
            transition: none;
          }

          .kolpo-contact-mail:hover .kolpo-contact-mail-arrow {
            transform: none;
          }
        }
      `}</style>

      <SiteHeader />

      <section
        className="kolpo-contact-section"
        aria-labelledby="kolpo-contact-title"
      >
        <div className="kolpo-contact-topline">
          <span>kolpo. / iletişim</span>
          <span>şiir / yazı / çeviri / görsel</span>
        </div>

        <div className="kolpo-contact-content">
          <div>
            <h1 id="kolpo-contact-title" className="kolpo-contact-title">
              <span>bir şey</span>
              <span>gönder.</span>
            </h1>

            <p className="kolpo-contact-intro">
              kolpo’nun bir parçası olmak istersen şiirlerini, yazılarını,
              çevirilerini ve görsel işlerini aşağıdaki adrese yollayabilirsin.
            </p>
          </div>

          <div className="kolpo-contact-mail-block">
            <span className="kolpo-contact-mail-label">
              yazışma adresi
            </span>

            <a
              href="mailto:kolpomag@gmail.com"
              className="kolpo-contact-mail"
            >
              <span className="kolpo-contact-mail-text">
                kolpomag@gmail.com
              </span>
              <span className="kolpo-contact-mail-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}