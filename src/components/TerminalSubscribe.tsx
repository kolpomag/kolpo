"use client";

import { useState } from "react";

export default function TerminalSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Formu yüklenme durumuna getiriyoruz (Buton [...] olacak ve input kilitlenecek)
    setStatus("loading");
    
    try {
      // Yazdığımız /api/subscribe/route.ts endpoint'ine POST isteği atıyoruz
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        // İşlem başarılıysa başarı mesajı göster ve input alanını temizle
        setStatus("success");
        setEmail("");
      } else {
        // Sunucu hata döndürürse formu tekrar aktif hale getir
        setStatus("idle");
        alert("Sinyal gönderilemedi. Tekrar deneyin.");
      }
    } catch (error) {
      // Bağlantı hatası gerçekleşirse formu eski haline çek
      setStatus("idle");
      alert("Ağ hatası oluştu.");
    }
  };

  return (
    <section style={{ width: "100%", background: "#f3f0e8", borderTop: "1px solid rgba(17,17,17,0.12)" }}>
      <div className="terminal-sub" style={{ padding: "40px 36px 80px 36px", fontFamily: "monospace", fontSize: "16px", fontWeight: 600, color: "#111111", maxWidth: "1440px", margin: "0 auto" }}>
        <style>{`
          .term-input {
            background: transparent;
            border: none;
            border-bottom: 1px dashed #111;
            font-family: monospace;
            font-size: 16px;
            font-weight: 600;
            color: #111;
            padding: 2px 6px;
            outline: none;
            width: 220px;
            margin-left: 8px;
            border-radius: 0;
          }
          .term-input::placeholder {
            font-weight: 400;
            color: rgba(17,17,17,0.4);
          }
          .term-input:focus {
            border-bottom: 1px solid #c32721;
          }
          .term-btn {
            background: transparent;
            border: none;
            font-family: monospace;
            font-size: 16px;
            font-weight: 600;
            color: #111;
            cursor: pointer;
            margin-left: 8px;
            transition: color 0.2s ease;
          }
          .term-btn:hover {
            color: #c32721;
          }
          .term-success {
            color: #c32721;
            font-weight: 700;
          }
          @media (max-width: 560px) {
            .term-input {
              width: 180px;
              margin-top: 12px;
              margin-left: 0;
            }
            .term-btn {
              margin-top: 12px;
            }
            .term-form-inner {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}</style>
        
        {status === "success" ? (
          <span className="term-success">{">"} [sinyal_alındı] devredesin.</span>
        ) : (
          <div>
            <div style={{ marginBottom: "16px", fontWeight: 400, opacity: 0.8 }}>
              onluk büyü sistemleri ve coğrafi haritalama işleri için;
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="term-form-inner" style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
                <label htmlFor="email-input">{">"} sinyali_izle:</label>
                <input
                  id="email-input"
                  type="email"
                  className="term-input"
                  placeholder="e-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                />
                <button type="submit" className="term-btn" disabled={status === "loading"}>
                  {status === "loading" ? "[...]" : "[bağlan]"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}