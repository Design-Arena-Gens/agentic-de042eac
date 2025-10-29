export type TileProduct = {
  handle: string;
  name: string;
  price: number;
  samplePrice: number;
  finishes: string[];
  colors: string[];
  sizes: string[];
  material: string;
  image: string;
  collection: string;
  coveragePerCarton: number;
  description: string;
};

export const products: TileProduct[] = [
  {
    handle: "emerald-herringbone",
    name: "Emerald Herringbone",
    price: 58,
    samplePrice: 9,
    finishes: ["Matte", "Structured"],
    colors: ["Emerald", "Seafoam"],
    sizes: ["7.5x30 cm", "10x40 cm"],
    material: "Porcelain",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    collection: "Lumen",
    coveragePerCarton: 1.28,
    description:
      "A saturated emerald tile with deep glaze variation designed for herringbone feature floors and hospitality lobbies.",
  },
  {
    handle: "calacatta-vein",
    name: "Calacatta Vein",
    price: 72,
    samplePrice: 11,
    finishes: ["Polished", "Matte"],
    colors: ["Ivory", "Gold Vein"],
    sizes: ["60x120 cm", "75x150 cm"],
    material: "Porcelain",
    image:
      "https://images.unsplash.com/photo-1523419409543-0c1df022bdd3?auto=format&fit=crop&w=1200&q=80",
    collection: "Aurelia",
    coveragePerCarton: 2.16,
    description:
      "Luxurious large-format slabs with gold veining and honed edges suited for penthouses and statement corridors.",
  },
  {
    handle: "slate-industrial",
    name: "Slate Industrial",
    price: 46,
    samplePrice: 7,
    finishes: ["Structured", "Grip"],
    colors: ["Graphite", "Steel"],
    sizes: ["30x60 cm", "60x60 cm"],
    material: "Ceramic",
    image:
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=1200&q=80",
    collection: "Forge",
    coveragePerCarton: 1.44,
    description:
      "Rugged slip-resistant tile ready for outdoor kitchens and poolside decks with R12 grip rating.",
  },
];

export function getFeaturedProducts() {
  return products;
}

export function getProductByHandle(handle: string) {
  return products.find((product) => product.handle === handle);
}

export function getCollections() {
  const collections = new Map<string, TileProduct[]>();
  products.forEach((product) => {
    const siblings = collections.get(product.collection) ?? [];
    siblings.push(product);
    collections.set(product.collection, siblings);
  });
  return Array.from(collections.entries()).map(([name, tiles]) => ({ name, tiles }));
}
