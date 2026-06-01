import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { aboutSections } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/about")!;

export const metadata: Metadata = createPageMetadata("/about");

export default function AboutPage() {
  return (
    <InfoPage
      title={page.label}
      description={page.description}
      path={page.path}
      sections={aboutSections}
    />
  );
}
