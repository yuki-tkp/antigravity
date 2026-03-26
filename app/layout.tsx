import type { Metadata } from "next";
import { Anton, Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const noto = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antigravity-three-tan.vercel.app"),
  title: "北九州 3on3 協会 | Kitakyushu 3on3 Association",
  description: "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
  keywords: ["北九州バスケ", "北九州3on3協会", "北九州3on3", "バスケットボール", "3x3", "福岡", "小倉", "ストリートボール", "大会", "エントリー"],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google6ab564a4d19747e2",
  },
  openGraph: {
    title: "北九州 3on3 協会 | Kitakyushu 3on3 Association",
    description: "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
    url: "https://antigravity-three-tan.vercel.app",
    siteName: "北九州 3on3 協会",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "北九州 3on3 協会 | Kitakyushu 3on3 Association",
    description: "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "北九州 3on3 協会",
    "alternateName": "Kitakyushu 3on3 Association",
    "url": "https://antigravity-three-tan.vercel.app",
    "logo": "https://antigravity-three-tan.vercel.app/images/k3a-logo.png",
    "description": "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "北九州市",
      "addressRegion": "福岡県",
      "addressCountry": "JP"
    },
    "sameAs": [
      "https://www.instagram.com/k3a__2024/"
    ]
  };

  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="google6ab564a4d19747e2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${anton.variable} ${noto.variable} ${roboto.variable}`} style={{ minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
