import type { Metadata } from "next";

const posts = [
  {
    title: "Choosing the right slip rating",
    description: "Understand R ratings, PEI classes, and when to specify textured finishes for wet zones.",
  },
  {
    title: "Pattern guide for 2025",
    description: "Explore trending patterns and how to communicate them to installers.",
  },
  {
    title: "Cleaning & maintenance checklist",
    description: "Protect finishes with quarterly routines and approved products.",
  },
];

export const metadata: Metadata = {
  title: "Insights & guides",
  description: "Editorial coverage on slip resistance, pattern trends, and maintenance best practices.",
};

export default function BlogPage() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Insights</p>
        <h1 className="text-3xl font-semibold tracking-tight">Articles & guides</h1>
        <p className="text-sm leading-relaxed text-muted">
          Stay ahead with practical insights for specifiers, homeowners, and installation partners.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="rounded-3xl border border-border/60 bg-card p-6">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
