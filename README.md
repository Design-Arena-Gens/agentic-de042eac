# AuraTiles — Premium Tile Commerce Blueprint

AuraTiles is a bilingual-ready, dark/light aware blueprint for launching a cinematic tile ecommerce experience. It maps the complete roadmap, design system, and product experience that spans AI-powered discovery, AR visualization, and professional services.

## ✨ Highlights

- **Roadmap-first**: Six delivery phases from discovery to optimization
- **Component library**: Megamenu, product cards, calculators, comparison drawer, AR visualizer
- **Commerce ready**: Product listing (PLP), PDP with schema.org markup, sample workflow, calculators
- **Technical stack**: Next.js App Router, Tailwind CSS with RTL support, Framer Motion, React Query
- **Governance**: Security headers, SEO checklist, future roadmap items built-in

## 🚀 Getting Started

```bash
npm install
npm run dev
# http://localhost:3000
```

## 📁 Key Structure

```
app/
  (marketing)/page.tsx      # Hero, roadmap, modules, stack, CTA
  shop/page.tsx             # Filtered product listing
  product/[handle]/page.tsx # High-fidelity PDP with schema markup
  calculators/page.tsx      # Tile area & cost utilities
  samples/page.tsx          # Sample order flow
  projects/[slug]/page.tsx  # Inspiration case studies
  guides/[slug]/page.tsx    # Installation & maintenance resources
components/
  ProductCard.tsx, Filters.tsx, Visualizer.tsx, Calculator.tsx, MegaMenu.tsx, CompareDrawer.tsx, etc.
lib/
  cms.ts, commerce.ts, search.ts, seo.ts
styles/
  tokens.css, globals.css
```

## 🧪 Testing & Quality

- `npm run lint` — ESLint powered by Next.js rules and TypeScript

## 📦 Deployment

The project targets Vercel (Next.js App Router with Server Actions enabled). Adjust `next.config.ts` for additional domains or CSP policies before go-live.

## 🔮 V2 Roadmap

- Pro accounts with RFQ & volume pricing
- Personalization by room/budget/style
- PWA mobile app with room scanning
- Loyalty system and ERP integrations

---

Made for 2025 tile experiences: immersive, data-informed, and globally scalable.
