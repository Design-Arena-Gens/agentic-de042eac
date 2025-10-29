export type Phase = {
  title: string;
  duration: string;
  focus: string[];
};

export const roadmap: Phase[] = [
  {
    title: "Phase 0 — Discovery & Strategy",
    duration: "Week 1",
    focus: [
      "Define objectives and north-star metrics",
      "Customer personas: homeowner, contractor, architect",
      "Brand differentiation pillars and value messaging",
      "Portfolio strategy, pricing guardrails, installation policy",
      "Global benchmarking: Porcelanosa, Marazzi, Tilebar, RAK",
    ],
  },
  {
    title: "Phase 1 — Visual Identity & Design System",
    duration: "Weeks 2-3",
    focus: [
      "Bilingual typography system (Persian/English)",
      "Color palette, iconography, slope language, design tokens",
      "Atomic components for RTL/LTR, light/dark modes",
      "Motion language and accessibility baselines",
    ],
  },
  {
    title: "Phase 2 — IA & Wireframes",
    duration: "Weeks 4-5",
    focus: [
      "Page architecture, navigation, and search surfaces",
      "Filters and purchase cycle mapping",
      "Sample request and conversion funnels",
    ],
  },
  {
    title: "Phase 3 — High-fidelity UI & Prototype",
    duration: "Weeks 6-8",
    focus: [
      "Responsive, mobile-first UI kit and motion specs",
      "Animations and micro-interactions",
      "Interactive prototype for moderated testing",
    ],
  },
  {
    title: "Phase 4 — Development & Integrations",
    duration: "Weeks 9-14",
    focus: [
      "Next.js frontend with headless CMS and commerce",
      "Search, personalization, and SEO foundations",
      "Unit, interaction, and accessibility testing",
    ],
  },
  {
    title: "Phase 5 — Soft Launch & Optimization",
    duration: "Weeks 15-16",
    focus: [
      "Core Web Vitals optimization",
      "A/B testing roadmap and instrumentation",
      "Governance and growth backlog for V2",
    ],
  },
];
