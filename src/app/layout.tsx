import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kolpomag.com"),
  title: {
    default: "kolpo.",
    template: "%s — kolpo.",
  },
  description: "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.",
  openGraph: {
    title: "kolpo.",
    description: "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.",
    url: "https://kolpomag.com",
    siteName: "kolpo.",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "kolpo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kolpo.",
    description: "kolpo. şiir, deneme ve türler arası metinlerin bir araya geldiği heterojen bir düğüm. manuel bir devre, çağdaş yazın alanı.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}