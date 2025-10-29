const trustSignals = [
  {
    title: "Sample delivery",
    description: "48-hour global sample shipping with tracking",
  },
  {
    title: "Warranty",
    description: "25-year structural and finish warranty",
  },
  {
    title: "Anti-slip",
    description: "R11+ options for wet and outdoor spaces",
  },
  {
    title: "Installation",
    description: "Certified installers in 40+ cities",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-card/70 py-6 backdrop-blur">
      <div className="container grid gap-6 md:grid-cols-4">
        {trustSignals.map((signal) => (
          <div key={signal.title} className="space-y-1 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{signal.title}</p>
            <p className="font-semibold text-foreground">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
