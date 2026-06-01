import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { policyPages } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/terms-and-conditions")!;
const content = policyPages["/terms-and-conditions"];

export const metadata: Metadata = createPageMetadata("/terms-and-conditions");

export default function TermsPage() {
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
