import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { policyPages } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/privacy-policy")!;
const content = policyPages["/privacy-policy"];

export const metadata: Metadata = createPageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
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
