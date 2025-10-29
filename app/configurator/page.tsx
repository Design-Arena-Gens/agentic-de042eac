import type { Metadata } from "next";

const patterns = [
  {
    name: "Herringbone",
    description: "Dynamic pattern for entryways and hospitality suites.",
  },
  {
    name: "Chevron",
    description: "Precision angled layout for luxury retail.",
  },
  {
    name: "Offset",
    description: "Classic brick bond optimized for busy commercial corridors.",
  },
  {
    name: "Grid",
    description: "Minimal layout perfect for modern penthouses.",
  },
];

export const metadata: Metadata = {
  title: "Pattern configurator",
  description: "Arrange tile patterns, calculate coverage, and export layout specs.",
};

export default function ConfiguratorPage() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Configurator</p>
        <h1 className="text-3xl font-semibold tracking-tight">Pattern and layout intelligence</h1>
        <p className="text-sm leading-relaxed text-muted">
          Configure herringbone, chevron, offset, and grid patterns. Export cut lists and adhesive consumption in one click.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {patterns.map((pattern) => (
          <div key={pattern.name} className="rounded-3xl border border-border/60 bg-card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{pattern.name}</p>
            <p className="mt-2 text-sm text-muted">{pattern.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
