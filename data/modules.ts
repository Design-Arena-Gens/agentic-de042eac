export type Module = {
  category: string;
  items: string[];
};

export const homeModules: Module[] = [
  {
    category: "Home",
    items: [
      "Minimal header with mega menu and live search",
      "Immersive hero featuring matte emerald tile video",
      "Shop by look, room, material and finish",
      "Best-selling collections with project gallery",
      "Tile area and need calculator",
      "Trust bar for services and guarantees",
      "Editorial slider for articles and guides",
    ],
  },
  {
    category: "Shop (PLP)",
    items: [
      "Advanced filters with removable tags",
      "Faceted attributes for size, finish, material, slip rating",
      "Sort controls by relevance, resistance, price",
      "Product cards with color switcher and 3D hover",
      "Selection guide banner and comparison tools",
    ],
  },
  {
    category: "Product Page (PDP)",
    items: [
      "4K gallery with zoom, video, and 360 viewer",
      "Pattern preview and AR visualizer integration",
      "Technical specs with measurement calculator",
      "Variant options with instant stock call",
      "Q&A, complementary products, and schema markup",
    ],
  },
  {
    category: "Collections",
    items: [
      "Moodboard-led storytelling",
      "Short video narratives",
      "Curated inspiration with product linkage",
    ],
  },
  {
    category: "Inspiration & Guides",
    items: [
      "Filterable project showcase",
      "How-to guides with FAQ schema",
      "Installation and maintenance resources",
    ],
  },
  {
    category: "Calculators",
    items: [
      "Measurement and cost estimator",
      "Installation time and carton calculator",
    ],
  },
  {
    category: "Samples",
    items: [
      "Select up to four samples",
      "Transparent pricing and shipping",
      "Tracking and reorder flow",
    ],
  },
  {
    category: "Pro",
    items: [
      "Downloadable CAD, BIM, SKP assets",
      "Partner program and procurement terms",
    ],
  },
  {
    category: "Support",
    items: [
      "Store locator with consultation booking",
      "Blog with SEO-optimized categories",
      "Commerce essentials including cart and checkout",
    ],
  },
];
