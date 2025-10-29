import type { Metadata } from "next";

const resources = [
  {
    title: "CAD/BIM/SketchUp",
    description: "Download dimensionally-precise models for Revit, ArchiCAD, and SketchUp to accelerate specification.",
  },
  {
    title: "Datasheets",
    description: "Access PEI, slip ratings, water absorption, and sustainability documentation per collection.",
  },
  {
    title: "Trade program",
    description: "Unlock tiered pricing, dedicated support, and logistics coordination for rollouts.",
  },
];

export const metadata: Metadata = {
  title: "AuraTiles for professionals",
  description: "Datasheets, 3D assets, and trade program benefits for architects, designers, and contractors.",
};

export default function ProPage() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">For professionals</p>
        <h1 className="text-3xl font-semibold tracking-tight">Specification-grade resources</h1>
        <p className="text-sm leading-relaxed text-muted">
          Bring AuraTiles into your next project with downloadable assets, collaboration tooling, and dedicated consultants.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-3xl border border-border/60 bg-card p-6">
            <h2 className="text-lg font-semibold">{resource.title}</h2>
            <p className="mt-2 text-sm text-muted">{resource.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
