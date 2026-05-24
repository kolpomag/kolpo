export default function SiteFooter() {
  return (
    <footer style={{ 
      width: "100%", 
      background: "#f3f0e8", 
      padding: "24px 36px 48px 36px",
      borderTop: "1px solid rgba(17,17,17,0.06)",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px"
    }}>
      <style>{`
        .footer-text {
          font-family: monospace;
          font-size: 14px;
          color: rgba(17,17,17,0.6);
        }
        .footer-link {
          color: rgba(17,17,17,0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #c32721;
        }
        .footer-links-wrap {
          display: flex;
          gap: 24px;
        }
      `}</style>

      <div className="footer-links-wrap footer-text">
        <a href="/nedir" className="footer-link">nedir</a>
        <a href="/arsiv" className="footer-link">arşiv</a>
        <a href="/yazarlar" className="footer-link">yazarlar</a>
        <a href="/iletisim" className="footer-link">iletişim</a>
      </div>
    </footer>
  );
}