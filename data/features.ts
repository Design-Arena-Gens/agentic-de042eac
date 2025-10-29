export type Experience = {
  title: string;
  description: string;
  emphasis?: string;
};

export const experienceHighlights: Experience[] = [
  {
    title: "Vision-powered image search",
    description: "Upload a floor photo and discover visually similar tiles with AI-driven tagging and Algolia vector embeddings.",
    emphasis: "Image Search",
  },
  {
    title: "Immersive AR visualizer",
    description: "Render tiles in real rooms with WebXR, USDZ, and RoomPlan support for quick placement and sharing.",
    emphasis: "Visualizer",
  },
  {
    title: "Pattern configurator",
    description: "Switch between herringbone, chevron, offset, and grid patterns while keeping coverage calculations accurate.",
    emphasis: "Configurator",
  },
  {
    title: "Sample-first conversion",
    description: "One-tap sample orders, saved filter states, and smart comparison views streamline product evaluation.",
  },
  {
    title: "Guided decision support",
    description: "Contextual education around slip resistance, PEI ratings, and maintenance ensures confident choices.",
  },
];
