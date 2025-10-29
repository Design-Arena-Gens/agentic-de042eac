import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Collections", href: "/shop" },
      { label: "Projects", href: "/projects/hospitality" },
      { label: "Visualizer", href: "/visualizer" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/guides/installation" },
      { label: "Calculators", href: "/calculators" },
      { label: "Samples", href: "/samples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Showrooms", href: "/store-locator" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold">AuraTiles</p>
          <p className="text-sm text-muted">
            Elevated floor tile experiences powered by immersive visualization, smart search, and premium service rituals.
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} AuraTiles. All rights reserved.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{column.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-accent-emerald" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
