"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  theme?: "light" | "dark";
};

export default function SiteHeader({
  theme = "light",
}: SiteHeaderProps) {
  const pathname = usePathname();

  const isDark = theme === "dark";
  const baseColor = isDark ? "#f3f0e8" : "#111111";
  const mutedColor = isDark
    ? "rgba(243,240,232,0.76)"
    : "rgba(17,17,17,0.72)";
  const accent = "#c32721";

  const navStyle = {
    display: "flex",
    gap: "26px",
    paddingTop: "8px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
  } as const;

  const getLinkStyle = (href: string) => {
    const isActive = pathname === href;

    return {
      textDecoration: "none",
      color: isActive ? baseColor : mutedColor,
      transition: "color 0.18s ease",
    };
  };

  return (
    <>
      <style>{`
        .shared-nav-link:hover {
          color: ${accent} !important;
        }
      `}</style>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "34px 36px 18px 36px",
        }}
      >
        <Link href="/" style={{ display: "block" }}>
          <img
            src="/kolpo.png"
            alt="kolpo."
            style={{
              width: "230px",
              height: "auto",
              display: "block",
              filter: isDark ? "brightness(0) invert(1)" : "none",
            }}
          />
        </Link>

        <nav style={navStyle}>
          <Link href="/" className="shared-nav-link" style={getLinkStyle("/")}>
            ana sayfa
          </Link>
          <Link
            href="/arsiv"
            className="shared-nav-link"
            style={getLinkStyle("/arsiv")}
          >
            arşiv
          </Link>
          <Link
            href="/nedir"
            className="shared-nav-link"
            style={getLinkStyle("/nedir")}
          >
            nedir
          </Link>
          <Link
            href="/iletisim"
            className="shared-nav-link"
            style={getLinkStyle("/iletisim")}
          >
            iletişim
          </Link>
        </nav>
      </header>
    </>
  );
}