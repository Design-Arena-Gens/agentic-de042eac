import { products } from "./commerce";

export type Facet = {
  key: string;
  label: string;
  values: string[];
};

export const facets: Facet[] = [
  { key: "size", label: "Size", values: ["7.5x30 cm", "30x60 cm", "60x60 cm", "60x120 cm"] },
  { key: "finish", label: "Finish", values: ["Matte", "Glossy", "Structured", "Grip"] },
  { key: "material", label: "Material", values: ["Porcelain", "Ceramic"] },
  { key: "slip", label: "Slip Rating", values: ["R9", "R10", "R11", "R12", "R13"] },
  { key: "application", label: "Application", values: ["Indoor", "Outdoor", "Poolside", "Commercial"] },
  { key: "underfloor", label: "Underfloor Heating", values: ["Compatible", "Not Compatible"] },
  { key: "brand", label: "Brand", values: ["Lumen", "Aurelia", "Forge"] },
];

export function executeSearch(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.collection.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized)
  );
}
