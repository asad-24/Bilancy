import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-data";
import type { ContentSection } from "@/lib/page-content";

export function InfoPage({
  title,
  description,
  path,
  updated,
  sections,
  children,
}: {
  title: string;
  description: string;
  path: string;
  updated?: string;
  sections?: ContentSection[];
  children?: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden px-4 pb-20 pt-32 text-white sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs current={title} path={path} />
        <section className="max-w-3xl">
          <p className="section-kicker">Bilancy</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">{description}</p>
          {updated ? <p className="mt-4 text-sm font-semibold text-white/50">Last updated: {updated}</p> : null}
        </section>

        {sections ? (
          <section className="mt-12 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="glass-panel rounded-lg p-6">
                <h2 className="text-xl font-black">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-white/70 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </section>
        ) : null}

        {children}

        <section className="mt-12 rounded-lg border border-white/12 bg-white/8 p-6">
          <h2 className="text-2xl font-black">Ready to discuss your channel?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Talk with Bilancy about your niche, content goals, package options, and production workflow.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#FF2E2E] px-6 font-bold text-white hover:bg-[#e92828]">
              <Link href={brand.whatsappHref} target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/16 bg-white/8 px-6 font-bold text-white hover:bg-white/14">
              <Link href="/#pricing">View Pricing</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
