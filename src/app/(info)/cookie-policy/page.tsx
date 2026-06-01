import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/info-page";
import { policyPages } from "@/lib/page-content";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/cookie-policy")!;
const content = policyPages["/cookie-policy"];

export const metadata: Metadata = createPageMetadata("/cookie-policy");

export default function CookiePolicyPage() {
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
