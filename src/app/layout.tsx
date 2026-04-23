import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kolpomag.com"),
  title: "kolpo.",
  description: "çağdaş yazın alanı.",
  openGraph: {
    title: "kolpo.",
    description: "çağdaş yazın alanı.",
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
    description: "çağdaş yazın alanı.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}