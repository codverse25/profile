import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Codverse - Digital Solutions Provider",
  description:
    "Jasa digital terpadu: tugas akademik, development project, desain grafis, dan jasa teknologi lainnya. Solusi profesional untuk kebutuhan digital Anda.",
  keywords:
    "jasa pembuatan website, mobile app development, UI/UX design, graphic design, jasa tugas akademik, jasa skripsi, konsultan teknologi, jasa tugas madura",
  authors: [{ name: "Codverse" }],
  openGraph: {
    title: "Codverse - Digital Solutions Provider",
    description: "Solusi digital terpadu untuk semua kebutuhan teknologi Anda",
    url: "https://codverse.site",
    siteName: "Codverse",
    images: [
      {
        url: "https://codverse.site/image-og.png",
        width: 1200,
        height: 630,
        alt: "Codverse Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codverse - Digital Solutions Provider",
    description: "Solusi digital terpadu untuk website, mobile app, dan desain",
    images: ["https://codverse.site/image-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
