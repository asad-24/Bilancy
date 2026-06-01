import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { InfoPage } from "@/components/layout/info-page";
import { faqs } from "@/lib/site-data";
import { extraFaqs } from "@/lib/page-content";
import { createPageMetadata, faqSchema, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/faq")!;

export const metadata: Metadata = createPageMetadata("/faq");

export default function FAQPage() {
  const allFaqs = [...faqs, ...extraFaqs];

  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <InfoPage title={page.label} description={page.description} path={page.path}>
        <section className="mt-12 grid gap-4">
          {allFaqs.map((faq) => (
            <article key={faq.question} className="glass-panel rounded-lg p-6">
              <h2 className="text-lg font-black">{faq.question}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{faq.answer}</p>
            </article>
          ))}
        </section>
      </InfoPage>
    </>
  );
}
