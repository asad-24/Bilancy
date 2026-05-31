"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/site-data";

export function StickyCTA() {
  return (
    <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 px-3">
      <Link
        href={brand.whatsappHref}
        id="book-call"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-[#FF2E2E] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_38px_rgba(255,46,46,0.28)] transition hover:-translate-y-0.5 hover:bg-[#e92828]"
      >
        <MessageCircle className="h-4 w-4" />
        Contact Us
      </Link>
    </div>
  );
}
