export type StackItem = {
  section: string;
  tools: string[];
};

export const techStack: StackItem[] = [
  {
    section: "Frontend",
    tools: [
      "Next.js 15 App Router, React Server Components, Server Actions",
      "TypeScript with Tailwind CSS + RTL tooling and design tokens",
      "Next/Image with AVIF/WebP and blur-up placeholders",
    ],
  },
  {
    section: "CMS",
    tools: [
      "Sanity or Contentful headless content model",
      "Product, Collection, Attribute, Guide, and Project schemas",
    ],
  },
  {
    section: "Commerce",
    tools: [
      "Headless Shopify via Storefront API",
      "Stripe, PayPal, and regional gateways (Zarinpal/IDPay)",
    ],
  },
  {
    section: "Search & Personalization",
    tools: [
      "Algolia or Meilisearch for instant, faceted filtering",
      "Boost for inventory, margin, and bestseller weighting",
    ],
  },
  {
    section: "Media & Assets",
    tools: [
      "Cloudinary or Imgix for DAM and on-demand transforms",
      "glTF/USDZ models for AR and 4K editorial content",
    ],
  },
  {
    section: "Testing & Quality",
    tools: [
      "Playwright E2E, Vitest unit tests, Axe and Lighthouse CI",
      "Core Web Vitals monitoring with Vercel Analytics",
    ],
  },
  {
    section: "Deployment",
    tools: [
      "Vercel edge network with CDN, ISR, and Experiments",
      "Strict CSP, hCaptcha forms, rate limiting",
    ],
  },
];
