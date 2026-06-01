import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { policyPages } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/disclaimer")!;
const content = policyPages["/disclaimer"];

export const metadata: Metadata = createPageMetadata("/disclaimer");

export default function DisclaimerPage() {
  return (
    <InfoPage
      title={page.label}
      description={page.description}
      path={page.path}
      updated={content.updated}
      sections={content.sections}
    />
  );
}
