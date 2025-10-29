import type { Metadata } from "next";
import { SampleForm } from "../../components/samples/SampleForm";
import { getFeaturedProducts } from "../../lib/commerce";

export const metadata: Metadata = {
  title: "Order tile samples",
  description: "Choose up to four tile samples, schedule delivery, and receive tracking updates.",
};

export default function SamplesPage() {
  const products = getFeaturedProducts();

  return (
    <div className="container space-y-12 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Samples</p>
        <h1 className="text-3xl font-semibold tracking-tight">See, feel, and test AuraTiles</h1>
        <p className="text-sm leading-relaxed text-muted">
          Select up to four samples. Delivery in 48 hours with refundable credits at checkout.
        </p>
      </header>
      <SampleForm products={products} />
    </div>
  );
}
