import type { Metadata, Viewport } from "next";
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
  title: "北九州 3on3 協会 | バスケ・3on3スポーツイベント",
  description: "北九州でバスケ（バスケットボール）や3on3、アーバンスポーツのイベント・大会情報を発信する北九州 3on3 協会のオフィシャルサイト。どなたでも参加できるスポーツイベントを通じて、北九州のバスケシーンを盛り上げます。",
  keywords: ["北九州バスケ", "北九州 3on3", "北九州 イベント", "バスケ イベント", "3x3", "3X3", "バスケ", "バスケット", "バスケットボール", "福岡バスケ", "スリーバイスリー", "ストリートバスケ", "アーバンスポーツ", "スポーツイベント", "バスケ大会", "K3A"],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "lyyddWySWdaYOEZH2JHUxjjXg94Cn-k3t0BBYzR6JD8",
  },
  openGraph: {
    title: "北九州 3on3 協会 | バスケ・3on3スポーツイベント",
    description: "北九州でバスケ（バスケットボール）や3on3、アーバンスポーツのイベント・大会情報を発信する北九州 3on3 協会のオフィシャルサイト。",
    url: "https://antigravity-three-tan.vercel.app",
    siteName: "北九州 3on3 協会",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "北九州 3on3 協会 | バスケ・3on3スポーツイベント",
    description: "北九州でバスケや3on3、アーバンスポーツのイベント・大会に参加しよう！",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
    "description": "北九州 3on3 協会のオフィシャルWebサイト。3x3やバスケ（3on3）の普及と大会参加促進を目的とした情報発信サイトです。",
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
        <meta name="google-site-verification" content="lyyddWySWdaYOEZH2JHUxjjXg94Cn-k3t0BBYzR6JD8" />
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
