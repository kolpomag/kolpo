import Link from "next/link";

export default function TerminalContact() {
  return (
    <section
      style={{
        width: "100%",
        background: "#f3f0e8",
        borderTop: "1px solid rgba(17,17,17,0.12)",
      }}
    >
      <div
        className="terminal-contact"
        style={{
          padding: "40px 36px 80px",
          fontFamily: "monospace",
          fontSize: "16px",
          fontWeight: 600,
          color: "#111111",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <style>{`
          .terminal-contact-copy {
            margin-bottom: 16px;
            font-weight: 400;
            opacity: 0.8;
          }

          .terminal-contact-line {
            display: flex;
            align-items: baseline;
            gap: 12px;
            flex-wrap: wrap;
          }

          .terminal-contact-link {
            color: #111111;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .terminal-contact-link:hover,
          .terminal-contact-link:focus-visible {
            color: #c32721;
          }

          @media (max-width: 560px) {
            .terminal-contact {
              padding: 32px 20px 56px !important;
            }

            .terminal-contact-line {
              flex-direction: column;
              gap: 8px;
            }
          }
        `}</style>

        <div className="terminal-contact-copy">
          onluk büyü sistemleri ve coğrafi haritalama işleri için:
        </div>

        <div className="terminal-contact-line">
          <span>&gt; bize_ulaş:</span>
          <Link href="/iletisim" className="terminal-contact-link">
            [iletişim]
          </Link>
        </div>
      </div>
    </section>
  );
}
