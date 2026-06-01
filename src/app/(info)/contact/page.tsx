import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InfoPage } from "@/components/layout/info-page";
import { brand } from "@/lib/site-data";
import { createPageMetadata, getSeoPage } from "@/lib/seo";

const page = getSeoPage("/contact")!;

export const metadata: Metadata = createPageMetadata("/contact");

export default function ContactPage() {
  const contactMethods = [
    {
      label: "Email",
      value: brand.email,
      href: brand.emailHref,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: brand.phone,
      href: brand.phoneHref,
      Icon: Phone,
    },
    {
      label: "WhatsApp",
      value: "Message Bilancy",
      href: brand.whatsappHref,
      Icon: MessageCircle,
    },
  ];

  return (
    <InfoPage title={page.label} description={page.description} path={page.path}>
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {contactMethods.map((method) => (
          <Link
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-[#24D17E]/40"
          >
            <method.Icon className="h-8 w-8 text-[#24D17E]" />
            <h2 className="mt-4 text-xl font-black">{method.label}</h2>
            <p className="mt-2 text-sm text-white/70">{method.value}</p>
          </Link>
        ))}
      </section>
      <section className="mt-8 rounded-lg border border-white/12 bg-white/8 p-6">
        <h2 className="text-2xl font-black">What to include in your message</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/72 sm:grid-cols-2">
          <li>Your YouTube niche or channel URL</li>
          <li>The package or number of videos you need</li>
          <li>Preferred video length and style</li>
          <li>Any examples or competitors you like</li>
        </ul>
      </section>
    </InfoPage>
  );
}
