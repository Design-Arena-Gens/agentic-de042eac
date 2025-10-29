import type { Metadata } from "next";
import { formatCurrency } from "./utils";
import { getProductByHandle } from "./commerce";

export function buildProductMetadata(handle: string): Metadata {
  const product = getProductByHandle(handle);
  if (!product)
    return {
      title: "Product not found — AuraTiles",
    };

  const url = `https://agentic-de042eac.vercel.app/product/${product.handle}`;

  return {
    title: `${product.name} — AuraTiles` as const,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — AuraTiles` as const,
      description: product.description,
      url,
      images: [{ url: product.image, width: 1200, height: 630 }],
    },
    other: {
      "product:price:amount": formatCurrency(product.price).replace(/[^0-9.]/g, ""),
      "product:price:currency": "USD",
      "og:type": "product",
    },
  };
}
