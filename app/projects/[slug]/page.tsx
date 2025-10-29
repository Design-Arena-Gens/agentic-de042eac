import Image from "next/image";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "hospitality",
    title: "Hospitality retreat",
    hero: "https://images.unsplash.com/photo-1523419409543-0c1df022bdd3?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A resort in Dubai blending brass detailing with emerald herringbone tiles and custom lighting. Focus on anti-slip and thermal comfort.",
    details: [
      "Style: Modern hospitality",
      "Palette: Emerald, brass, ivory",
      "Slip rating: R11",
      "Underfloor heating: Enabled",
    ],
  },
  {
    slug: "residential",
    title: "Minimalist penthouse",
    hero: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Muted matte grid tiles with radiant heating, optimized acoustics, and low-profile trims for a Tehran penthouse.",
    details: [
      "Style: Minimal",
      "Palette: Warm grey, brass",
      "Slip rating: R10",
      "Heating: Hydronic radiant",
    ],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container space-y-12 py-16">
      <header className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Project</p>
        <h1 className="text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>
      </header>
      <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-border/60">
        <Image src={project.hero} alt={project.title} fill className="object-cover" sizes="100vw" />
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-card p-6">
          <h2 className="text-lg font-semibold">Specification</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-foreground">Materials used</h2>
          <p className="mt-2 leading-relaxed">
            AuraTiles Emerald Herringbone, Calacatta Vein slabs, brass trims, microcement grout, acoustic underlay, premium sealant.
          </p>
        </div>
      </section>
    </div>
  );
}
