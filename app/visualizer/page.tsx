import type { Metadata } from "next";
import { Visualizer } from "../../components/Visualizer";

export const metadata: Metadata = {
  title: "Tile visualizer",
  description: "Preview AuraTiles products in your space with WebXR-ready visualizations and pattern presets.",
};

export default function VisualizerPage() {
  return (
    <div className="container space-y-8 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Visualizer</p>
        <h1 className="text-3xl font-semibold tracking-tight">Replace floors in seconds</h1>
        <p className="text-sm leading-relaxed text-muted">
          Switch patterns, capture shareable previews, or handoff to AR for on-site validation.
        </p>
      </header>
      <Visualizer />
    </div>
  );
}
