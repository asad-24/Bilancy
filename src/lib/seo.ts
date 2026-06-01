import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { brand, faqs } from "@/lib/site-data";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://bilancy.com").replace(/\/$/, "");

export const defaultSeo = {
  title: "Bilancy - YouTube Automation & Cash Cow Video Services",
  description:
    "Scale your YouTube channel with professional video editing, automation, script writing, thumbnails, SEO, and growth services.",
  image: "/wiuthout-bg.png",
  keywords: [
    "youtube automation",
    "cash cow videos",
    "youtube video editing",
    "youtube thumbnails",
    "youtube seo services",
    "script writing",
    "voiceover services",
    "faceless youtube channel",
  ],
};

export type SeoPage = {
  path: string;
  label: string;
  title: string;
  description: string;
  keywords?: string[];
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

export const seoPages: SeoPage[] = [
  {
    path: "/",
    label: "Home",
    title: defaultSeo.title,
    description: defaultSeo.description,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About Us",
    title: "About Bilancy - YouTube Automation Experts",
    description:
      "Learn about Bilancy, a YouTube automation team helping creators and businesses produce videos, thumbnails, scripts, voiceovers, and SEO-ready channels.",
    keywords: ["about bilancy", "youtube automation agency", "youtube growth team"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    label: "Contact Us",
    title: "Contact Bilancy - YouTube Automation Services",
    description:
      "Contact Bilancy for YouTube automation, video editing, thumbnails, scripts, voiceovers, channel setup, and custom growth packages.",
    keywords: ["contact youtube automation agency", "youtube video service quote"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/faq",
    label: "FAQ",
    title: "FAQ - YouTube Automation Services",
    description:
      "Answers to common questions about Bilancy's YouTube automation workflow, delivery times, ownership, revisions, packages, and content process.",
    keywords: ["youtube automation faq", "cash cow channel questions", "youtube service revisions"],
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/site-map",
    label: "Sitemap",
    title: "HTML Sitemap - Bilancy",
    description: "Browse every important Bilancy page from one crawlable HTML sitemap.",
    priority: 0.55,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    title: "Privacy Policy - Bilancy",
    description:
      "Read Bilancy's Privacy Policy to understand how we collect, use, protect, and manage information submitted through our website and services.",
    priority: 0.45,
    changeFrequency: "yearly",
  },
  {
    path: "/terms-and-conditions",
    label: "Terms & Conditions",
    title: "Terms & Conditions - Bilancy",
    description:
      "Review Bilancy's Terms & Conditions for using the website, ordering services, approvals, revisions, payments, and client responsibilities.",
    priority: 0.45,
    changeFrequency: "yearly",
  },
  {
    path: "/disclaimer",
    label: "Disclaimer",
    title: "Disclaimer - Bilancy",
    description:
      "Read Bilancy's disclaimer about YouTube growth expectations, third-party platforms, client responsibilities, and informational content.",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  {
    path: "/cookie-policy",
    label: "Cookie Policy",
    title: "Cookie Policy - Bilancy",
    description:
      "Learn how Bilancy may use cookies and similar technologies to support website performance, analytics, and user experience.",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  {
    path: "/refund-policy",
    label: "Refund Policy",
    title: "Refund Policy - Bilancy",
    description:
      "Review Bilancy's refund policy for custom YouTube automation, video production, thumbnail, script, and channel growth services.",
    priority: 0.45,
    changeFrequency: "yearly",
  },
  {
    path: "/cart",
    label: "Cart",
    title: "Cart - Bilancy",
    description: "Review your selected Bilancy YouTube automation package and contact the team to complete your order.",
    priority: 0.35,
    changeFrequency: "monthly",
  },
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSeoPage(path: string) {
  return seoPages.find((page) => page.path === path);
}

export function createMetadata({
  path,
  title,
  description,
  keywords = [],
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = Array.from(new Set([...defaultSeo.keywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      images: [
        {
          url: defaultSeo.image,
          width: 1200,
          height: 630,
          alt: `${brand.name} YouTube automation services`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSeo.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createPageMetadata(path: string): Metadata {
  const page = getSeoPage(path);

  return createMetadata({
    path,
    title: page?.title || defaultSeo.title,
    description: page?.description || defaultSeo.description,
    keywords: page?.keywords,
  });
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: brand.name,
    url: siteUrl,
    logo: absoluteUrl(brand.logo),
    email: brand.email,
    telephone: brand.phone,
    sameAs: [brand.workUrl, brand.whatsappHref],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brand.phone,
        email: brand.email,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: brand.name,
    url: siteUrl,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#local-business"),
    name: brand.name,
    image: absoluteUrl(brand.logo),
    url: siteUrl,
    telephone: brand.phone,
    email: brand.email,
    priceRange: "$$",
    areaServed: ["United States", "United Kingdom", "Canada", "Australia", "Worldwide"],
    serviceType: "YouTube automation, video editing, thumbnails, scripts, voiceovers, and YouTube SEO",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
