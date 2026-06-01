import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { policyPages } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/refund-policy")!;
const content = policyPages["/refund-policy"];

export const metadata: Metadata = createPageMetadata("/refund-policy");

export default function RefundPolicyPage() {
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
