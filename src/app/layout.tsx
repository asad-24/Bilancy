import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/layout/app-providers";
import { JsonLd } from "@/components/seo/json-ld";
import {
  createMetadata,
  defaultSeo,
  localBusinessSchema,
  organizationSchema,
  siteUrl,
  websiteSchema,
} from "@/lib/seo";

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
  ...createMetadata({
    path: "/",
    title: defaultSeo.title,
    description: defaultSeo.description,
    keywords: defaultSeo.keywords,
  }),
  title: {
    default: defaultSeo.title,
    template: "%s | Bilancy",
  },
  authors: [{ name: "Bilancy Team" }],
  creator: "Bilancy",
  publisher: "Bilancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  category: "YouTube automation services",
  applicationName: "Bilancy",
  other: {
    "theme-color": "#111315",
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
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
