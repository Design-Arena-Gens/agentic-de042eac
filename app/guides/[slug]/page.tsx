import { notFound } from "next/navigation";

const guides = [
  {
    slug: "installation",
    title: "Floor tile installation guide",
    body: `
## Preparation

Assess substrate moisture, structural load, and underfloor heating compatibility. Use self-levelling compound for deviations above 3mm.

## Layout & Pattern

Dry-lay tiles to confirm pattern (herringbone, chevron, offset). Maintain consistent joint spacing using spacers.

## Adhesives & Grout

Select flexible adhesives for radiant heating and outdoor environments. Apply epoxy grout in wet zones for maximum stain resistance.

## Maintenance

Seal grout at 72 hours. Clean with neutral pH products and avoid abrasive pads to protect finishes.
`,
  },
  {
    slug: "maintenance",
    title: "Slip resistance & maintenance",
    body: `
## Slip ratings

Choose R11+ for wet zones, R12 for pool decks, and R9 for dry residential areas.

## Cleaning

Adopt a pH-neutral cleaning routine. Schedule quarterly deep cleans for commercial spaces.
`,
  },
];

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) return notFound();

  const sections = guide.body
    .trim()
    .split(/\n\n+/)
    .map((paragraph) => paragraph.replace(/^##\s/, ""));

  return (
    <div className="container py-16">
      <article className="prose prose-neutral dark:prose-invert max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Guide</p>
        <h1>{guide.title}</h1>
        {sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </article>
    </div>
  );
}
