"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4">
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition duration-300 sm:px-5",
          scrolled
            ? "border-white/14 bg-[#111315]/92 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : "border-white/12 bg-white/[0.07] backdrop-blur-lg",
        ].join(" ")}
      >
        <Link href="/" className="group flex items-center gap-3" onClick={close}>
          <span className="relative h-12 w-40 overflow-hidden rounded-lg bg-white/95 p-1.5 ring-1 ring-white/15 sm:w-48">
            <Image src={brand.logo} alt="Bilancy Logo" fill className="object-contain p-1.5" sizes="(max-width: 640px) 160px, 192px" priority />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/76 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-full bg-[#FF2E2E] px-5 font-bold text-white shadow-lg shadow-[#FF2E2E]/20 transition hover:-translate-y-0.5 hover:bg-[#e92828] sm:inline-flex"
          >
            <Link href={brand.phoneHref}>
              Book a Call
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-white/12 bg-[#111315]/96 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-md px-3 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={brand.phoneHref}
              onClick={close}
              className="mt-2 rounded-md bg-[#FF2E2E] px-3 py-3 text-center text-sm font-bold text-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
