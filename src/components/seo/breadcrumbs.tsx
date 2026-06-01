import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({ current, path }: { current: string; path: string }) {
  const items = [
    { name: "Home", url: absoluteUrl("/") },
    { name: current, url: absoluteUrl(path) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/62">
        <Link href="/" className="inline-flex items-center gap-1 transition hover:text-white">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-semibold text-white">{current}</span>
      </nav>
    </>
  );
}
