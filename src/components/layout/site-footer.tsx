import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { brand, services, socialLinks } from "@/lib/site-data";
import { seoPages } from "@/lib/seo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Sitemap", href: "/site-map" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function SiteFooter() {
  const serviceLinks = services.slice(0, 6).map((service) => ({
    label: service.title.replace(/^\d+\.\s*/, ""),
    href: "/#services",
  }));

  return (
    <footer className="relative overflow-hidden bg-[#111315] px-4 pb-24 pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="relative h-16 w-52 overflow-hidden rounded-lg p-2">
                <Image src={brand.logo} alt="Bilancy Logo" fill className="object-contain p-2" sizes="208px" />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Professional YouTube automation, video editing, thumbnails, scripts, voiceovers, and SEO services for scalable content systems.
            </p>
            <div className="mt-5 flex flex-col items-start gap-3">
              <Link
                href={brand.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/78 transition hover:bg-white/12 hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#24D17E]" />
                {brand.email}
              </Link>
              <Link
                href={brand.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/78 transition hover:bg-white/12 hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#24D17E]" />
                {brand.phone}
              </Link>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Policies" links={legalLinks} />
        </div>

        <div className="grid gap-5 border-b border-white/10 py-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-sm font-black">Social Links</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm text-white/66 transition hover:bg-white/12 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#24D17E]" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/sitemap.xml" className="text-sm font-semibold text-white/62 transition hover:text-white">
            XML Sitemap
          </Link>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>{seoPages.length} crawlable pages in sitemap.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-black">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link href={link.href} className="text-sm text-white/62 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
