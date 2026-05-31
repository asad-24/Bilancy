"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Mail, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/layout/site-background";
import { brand } from "@/lib/site-data";

export const dynamic = "force-dynamic";

function parseFeatures(value: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function CartContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") || "Unknown Plan";
  const planPrice = searchParams.get("price") || "0";
  const planDescription = searchParams.get("description") || "No description available";
  const planFeatures = parseFeatures(searchParams.get("features"));
  const checkoutSubject = `Bilancy inquiry: ${planName} package`;
  const checkoutBody = [
    `Hi Bilancy team,`,
    "",
    `I'm interested in the ${planName} package ($${planPrice}).`,
    "",
    `Description: ${planDescription}`,
    "",
    planFeatures.length ? `Included features:\n${planFeatures.map((feature) => `- ${feature}`).join("\n")}` : "",
    "",
    "Can we discuss the details?",
  ]
    .filter(Boolean)
    .join("\n");
  const checkoutHref = `mailto:${brand.email}?subject=${encodeURIComponent(checkoutSubject)}&body=${encodeURIComponent(checkoutBody)}`;

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-16 text-white">
      <SiteBackground />
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel w-full max-w-lg rounded-lg p-6 sm:p-8"
      >
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-[#FF2E2E] text-white shadow-lg shadow-[#FF2E2E]/20">
            <ShoppingCart className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-3xl font-black">Your Cart</h1>
          <p className="mt-2 text-white/68">Review your selected package</p>
        </div>

        <div className="mt-7 rounded-lg border border-white/12 bg-white/10 p-5">
          <h2 className="text-xl font-black text-white">{planName}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/68">{planDescription}</p>
          {planFeatures.length > 0 && (
            <div className="mt-5">
              <h3 className="font-bold text-white">What&apos;s Included:</h3>
              <ul className="mt-3 space-y-2">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/78">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24D17E]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-5 text-4xl font-black text-[#24D17E]">${planPrice}</p>
        </div>

        <div className="mt-6 space-y-3">
          <Button asChild className="w-full rounded-full bg-[#24D17E] py-6 font-black text-[#111315] hover:bg-[#20bd72]">
            <Link href={checkoutHref}>
              <Mail className="h-4 w-4" />
              Proceed to Checkout
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full rounded-full border-white/16 bg-white/8 py-6 font-bold text-white hover:bg-white/14">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Packages
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] text-white">Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}
