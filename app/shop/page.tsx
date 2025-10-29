import type { Metadata } from "next";
import { ShopClient } from "../../components/shop/ShopClient";
import { getFeaturedProducts } from "../../lib/commerce";

export const metadata: Metadata = {
  title: "Shop floor tiles",
  description:
    "Browse premium tile collections with advanced filters, comparisons, and instant sampling.",
};

export default function ShopPage() {
  const products = getFeaturedProducts();
  return (
    <div className="container space-y-10 py-16">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Product listing</p>
        <h1 className="text-3xl font-semibold tracking-tight">Curated floor tiles</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Filter by finish, slip rating, installation context, or sample availability. Save and share filter states using URL params in the production build.
        </p>
      </header>
      <ShopClient products={products} />
    </div>
  );
}
