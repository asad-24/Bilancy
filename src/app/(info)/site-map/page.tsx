import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/layout/info-page";
import { createPageMetadata, getSeoPage, seoPages } from "@/lib/seo";

const page = getSeoPage("/site-map")!;

export const metadata: Metadata = createPageMetadata("/site-map");

export default function SitemapPage() {
  return (
    <InfoPage title={page.label} description={page.description} path={page.path}>
      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {seoPages.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="glass-panel rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#24D17E]/40"
          >
            <h2 className="text-lg font-black">{item.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/68">{item.description}</p>
          </Link>
        ))}
      </section>
    </InfoPage>
  );
}
