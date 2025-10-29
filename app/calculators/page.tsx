import type { Metadata } from "next";
import { Calculator } from "../../components/Calculator";

export const metadata: Metadata = {
  title: "Tile calculators",
  description: "Estimate coverage, cartons, installation time, and budget savings for flooring projects.",
};

const calculators = [
  {
    title: "Area & cartons",
    description: "Enter room dimensions to calculate tiles required, recommended wastage, and cartons to order.",
  },
  {
    title: "Installation timeline",
    description: "Project installation time with crew size assumptions and prep buffers.",
  },
  {
    title: "Sample planning",
    description: "Plan sample selection, shipping costs, and refundable credits for project stakeholders.",
  },
];

export default function CalculatorsPage() {
  return (
    <div className="container space-y-12 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Calculators</p>
        <h1 className="text-3xl font-semibold tracking-tight">Plan your flooring project</h1>
        <p className="text-sm leading-relaxed text-muted">
          Quickly estimate surfaces, installation budgets, and sample counts. Export results to share with clients or contractors.
        </p>
      </header>
      <Calculator pricePerM2={58} />
      <section className="grid gap-6 md:grid-cols-3">
        {calculators.map((calculator) => (
          <div key={calculator.title} className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
            <h2 className="text-lg font-semibold text-foreground">{calculator.title}</h2>
            <p className="mt-2 leading-relaxed">{calculator.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
