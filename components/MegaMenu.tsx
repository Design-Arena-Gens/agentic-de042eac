"use client";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { experienceHighlights } from "../data/features";
import { executeSearch } from "../lib/search";
import { cn } from "../lib/utils";

const navGroups = [
  {
    heading: "Shop Tiles",
    links: [
      { label: "All Collections", href: "/shop" },
      { label: "Lumen", href: "/lumen" },
      { label: "Aurelia", href: "/aurelia" },
      { label: "Forge", href: "/forge" },
    ],
  },
  {
    heading: "Experiences",
    links: [
      { label: "Visualizer", href: "/visualizer" },
      { label: "Configurator", href: "/configurator" },
      { label: "Sample Studio", href: "/samples" },
      { label: "Calculators", href: "/calculators" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Guides", href: "/guides/installation" },
      { label: "Projects", href: "/projects/hospitality" },
      { label: "For Professionals", href: "/pro" },
      { label: "Blog & News", href: "/blog" },
    ],
  },
];

const searchSuggestions = experienceHighlights.map((item) => item.emphasis ?? item.title);

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = query ? executeSearch(query).slice(0, 3) : [];

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition hover:bg-background"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        Browse
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-40 mt-4 w-[720px] overflow-hidden rounded-3xl border border-border/60 bg-card/95 p-8 shadow-2xl backdrop-blur"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex items-center gap-3 rounded-full border border-border/80 bg-background/60 px-4 py-2">
            <Search className="h-4 w-4 text-muted" />
            <input
              aria-label="Live search"
              placeholder="Search collections, colors, or slip ratings"
              className="w-full bg-transparent text-sm focus:outline-none"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          {query ? (
            <div className="mt-4 space-y-2">
              {results.length ? (
                results.map((product) => (
                  <Link
                    key={product.handle}
                    href={`/product/${product.handle}`}
                    className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm hover:border-border hover:bg-background"
                  >
                    <span className="font-medium">{product.name}</span>
                    <span className="text-muted">{product.collection}</span>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted">No direct matches — try \"matte\" or \"R11\".</p>
              )}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
              {navGroups.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {group.heading}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-2 py-1 font-medium text-foreground transition hover:bg-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-2xl border border-border/60 bg-subtle-mesh p-4 text-xs">
                <p className="font-semibold text-foreground">Inspiration spotlight</p>
                <ul className="mt-3 space-y-2">
                  {searchSuggestions.map((suggestion) => (
                    <li key={suggestion} className="text-muted">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
