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
  title: "北九州 3on3 協会 | Kitakyushu 3on3 Association",
  description: "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
  keywords: ["北九州バスケ", "北九州3on3協会", "北九州3on3", "バスケットボール", "3x3", "福岡", "小倉", "ストリートボール", "大会", "エントリー"],
  openGraph: {
    title: "北九州 3on3 協会 | Kitakyushu 3on3 Association",
    description: "北九州 3on3 協会のオフィシャルWebサイト。3x3バスケットボールの普及と大会参加促進を目的とした情報発信サイトです。",
    url: "https://kitakyushu-3on3.com", // Assume an appropriate domain or placeholder
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
  return (
    <html lang="ja">
      <body className={`${anton.variable} ${noto.variable} ${roboto.variable}`} style={{ minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
