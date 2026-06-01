import type { Metadata } from "next";
import { CartContent } from "@/app/cart/cart-content";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata("/cart");

export default function CartPage() {
  return <CartContent />;
}
