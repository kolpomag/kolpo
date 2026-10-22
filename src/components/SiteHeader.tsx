"use client";

import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import SiteSearch from "@/components/SiteSearch";
import {
  getContentHref,
  getOrderedContentEntries,
} from "@/data/content-index";

type SiteHeaderProps = {
  theme?: "light" | "dark";
};

const contentPaths = getOrderedContentEntries().map(([slug, content]) =>
  getContentHref(slug, content)
);

const navigation = [
  { href: "/arsiv", label: "arşiv" },
  { href: "/yazarlar", label: "yazarlar" },
  { href: "/ayirdiklarim", label: "ayırdıklarım" },
  { href: "/nedir", label: "nedir" },
  { href: "/iletisim", label: "iletişim" },
];

export default function SiteHeader({
  theme = "light",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isDark = theme === "dark";
  const baseColor = isDark ? "#f3f0e8" : "#111111";
  const mutedColor = isDark
    ? "rgba(243,240,232,0.76)"
    : "rgba(17,17,17,0.72)";

  const candidates = contentPaths.filter((href) => href !== pathname);

  function handleRandom() {
    if (isPending || candidates.length === 0) return;

    const href = candidates[Math.floor(Math.random() * candidates.length)];

    startTransition(() => {
      router.push(href, { scroll: true });
    });
  }

  function getLinkStyle(href: string) {
    return {
      textDecoration: "none",
      color: pathname === href ? baseColor : mutedColor,
      transition: "color 0.18s ease",
    };
  }

  return (
    <>
      <style>{`
        .shared-nav-link:hover,
        .shared-random-button:hover:not(:disabled) {
          color: var(--authors-orange, #c32721) !important;
        }

        .shared-random-button {
          appearance: none;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          margin: 0;
          font: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          cursor: pointer;
          transition: color 0.18s ease, opacity 0.18s ease;
        }

        .shared-random-button:disabled {
          opacity: 0.45;
          cursor: default;
        }

        .shared-nav-link:focus-visible,
        .shared-random-button:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 5px;
        }

        .shared-site-nav {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 16px 26px;
          min-width: 0;
          padding-top: 8px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1150px) {
          .shared-site-header {
            flex-direction: column;
          }

          .shared-site-nav {
            justify-content: flex-start;
          }
        }

        @media (max-width: 560px) {
          .shared-site-nav {
            gap: 14px 20px;
            font-size: 16px;
          }
        }
      `}</style>

      <header
        className="shared-site-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "24px",
          padding: "34px 36px 18px 36px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "block",
            flexShrink: 0,
          }}
        >
          <Image
            src="/kolpo.png"
            alt="kolpo."
            width={2100}
            height={1500}
            style={{
              width: "230px",
              height: "auto",
              display: "block",
              filter: isDark ? "brightness(0) invert(1)" : "none",
            }}
          />
        </Link>

        <nav className="shared-site-nav" aria-label="Ana menü">
          <Link
            href="/"
            className="shared-nav-link"
            style={getLinkStyle("/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            ana sayfa
          </Link>

          <SiteSearch color={mutedColor} />

          <button
            type="button"
            className="shared-random-button"
            onClick={handleRandom}
            disabled={isPending || candidates.length === 0}
            aria-label="Rastgele bir eser aç"
            aria-busy={isPending}
            style={{
              color: `var(--authors-muted, ${mutedColor})`,
            }}
          >
            rastgele
          </button>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shared-nav-link"
              style={getLinkStyle(item.href)}
              aria-current={
                pathname === item.href ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}