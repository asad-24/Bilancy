import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/layout/app-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bilancy - YouTube Automation & Cash Cow Video Services",
    template: "%s | Bilancy",
  },
  description:
    "Scale your YouTube channel with professional video editing, automation, script writing, thumbnails, SEO, and growth services.",
  keywords: [
    "youtube automation",
    "cash cow videos",
    "video editing",
    "youtube thumbnails",
    "youtube seo",
    "script writing",
    "voiceover",
  ],
  authors: [{ name: "Bilancy Team" }],
  creator: "Bilancy",
  publisher: "Bilancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bilancy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bilancy - YouTube Automation & Cash Cow Video Services",
    description:
      "Scale your YouTube channel with professional video editing, automation, script writing, thumbnails, SEO, and growth services.",
    url: "https://bilancy.com",
    siteName: "Bilancy",
    images: [
      {
        url: "/wiuthout-bg.png",
        width: 1200,
        height: 630,
        alt: "Bilancy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilancy - YouTube Automation & Cash Cow Video Services",
    description: "Professional YouTube automation services for creators and cash cow channels.",
    images: ["/wiuthout-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
