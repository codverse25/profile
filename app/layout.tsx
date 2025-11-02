import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codverse - Digital Solutions Provider",
  description:
    "Jasa digital terpadu: tugas akademik, development project, desain grafis, dan jasa teknologi lainnya. Solusi profesional untuk kebutuhan digital Anda.",
  keywords:
    "jasa pembuatan website, mobile app development, UI/UX design, graphic design, jasa tugas akademik, jasa skripsi, konsultan teknologi",
  authors: [{ name: "Codverse" }],
  openGraph: {
    title: "Codverse - Digital Solutions Provider",
    description: "Solusi digital terpadu untuk semua kebutuhan teknologi Anda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
