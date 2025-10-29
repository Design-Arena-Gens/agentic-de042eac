import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { buildProductMetadata } from "../../../lib/seo";
import { getProductByHandle, products } from "../../../lib/commerce";
import { VariantPicker } from "../../../components/VariantPicker";
import { Calculator } from "../../../components/Calculator";
import { Visualizer } from "../../../components/Visualizer";
import { CompareDrawer } from "../../../components/CompareDrawer";
import { formatCurrency } from "../../../lib/utils";

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  return buildProductMetadata(params.handle);
}

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = getProductByHandle(params.handle);

  if (!product) {
    return notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.collection,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.price,
      offerCount: 3,
      availability: "https://schema.org/InStock",
    },
    isAccessoryOrSparePartFor: product.collection,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Coverage per carton",
        value: `${product.coveragePerCarton} m²`,
      },
      {
        "@type": "PropertyValue",
        name: "Material",
        value: product.material,
      },
    ],
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "Design Magazine",
      },
    },
  };

  return (
    <div className="container space-y-10 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 shadow-soft">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 640px, 100vw"
            />
          </div>
          <Visualizer />
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Tile collection</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
            <div className="mt-6 grid gap-4 text-sm text-muted md:grid-cols-2">
              <p>
                <span className="font-semibold text-foreground">Collection:</span> {product.collection}
              </p>
              <p>
                <span className="font-semibold text-foreground">Coverage/carton:</span> {product.coveragePerCarton} m²
              </p>
              <p>
                <span className="font-semibold text-foreground">Material:</span> {product.material}
              </p>
              <p>
                <span className="font-semibold text-foreground">Sample:</span> {formatCurrency(product.samplePrice)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <p className="text-2xl font-semibold">{formatCurrency(product.price)}</p>
              <button className="rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-soft">
                Add to cart
              </button>
              <button className="rounded-full border border-border px-6 py-3 text-sm font-semibold">
                Order sample
              </button>
            </div>
          </div>
          <VariantPicker label="Finishes" options={product.finishes} />
          <VariantPicker label="Sizes" options={product.sizes} />
          <VariantPicker label="Colors" options={product.colors} />
          <Calculator pricePerM2={product.price} />
          <section className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
            <h2 className="text-lg font-semibold text-foreground">Technical specifications</h2>
            <ul className="mt-3 space-y-2">
              <li>Slip rating: R11 (Wet room compliant)</li>
              <li>PEI rating: IV</li>
              <li>Water absorption: E ≤ 0.5%</li>
              <li>Edge: Rectified</li>
              <li>Underfloor heating: Compatible</li>
            </ul>
            <div className="mt-4 rounded-2xl border border-border/60 bg-background p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Consultation</p>
              <p className="mt-2 text-sm">
                Schedule a design session or live chat for pattern layouts, grout pairing, and installation partners.
              </p>
            </div>
          </section>
        </aside>
      </div>
      <CompareDrawer items={products.slice(0, 3)} />
    </div>
  );
}
