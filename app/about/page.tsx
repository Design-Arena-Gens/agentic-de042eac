import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AuraTiles",
  description: "Global tile brand uniting material craft with immersive digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="container space-y-8 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">About</p>
        <h1 className="text-3xl font-semibold tracking-tight">Crafting the future of floors</h1>
        <p className="text-sm leading-relaxed text-muted">
          AuraTiles blends Persian craftsmanship with European precision. Our collections are engineered for longevity, backed by a distributed network of artisans and certified installers.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-border/60 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Showrooms</p>
          <p className="text-lg font-semibold">Tehran, Dubai, Milan, London</p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Sustainability</p>
          <p className="text-lg font-semibold">Low-VOC glazes, recycled substrates, closed-loop water</p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Team</p>
          <p className="text-lg font-semibold">Designers, material scientists, and service strategists</p>
        </div>
      </section>
    </div>
  );
}
