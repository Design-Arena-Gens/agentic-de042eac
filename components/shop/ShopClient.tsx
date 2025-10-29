"use client";

import { useMemo, useState } from "react";
import { TileProduct } from "../../lib/commerce";
import { facets } from "../../lib/search";
import { Filters } from "../Filters";
import { ProductCard } from "../ProductCard";
import { formatCurrency } from "../../lib/utils";

const sorters = [
  { key: "best", label: "Best sellers" },
  { key: "new", label: "New" },
  { key: "price", label: "Price" },
  { key: "resistance", label: "Resistance" },
  { key: "popularity", label: "Popularity" },
];

type ShopClientProps = {
  products: TileProduct[];
};

export function ShopClient({ products }: ShopClientProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sort, setSort] = useState(sorters[0]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      return Object.entries(filters).every(([key, value]) => {
        switch (key) {
          case "finish":
            return product.finishes.includes(value);
          case "material":
            return product.material === value;
          case "size":
            return product.sizes.some((size) => size.includes(value));
          case "brand":
            return product.collection === value;
          default:
            return true;
        }
      });
    });
  }, [filters, products]);

  const sorted = useMemo(() => {
    if (sort.key === "price") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    return filtered;
  }, [filtered, sort]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
      <Filters onChange={setFilters} />
      <section className="space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Product list</p>
            <p className="text-sm text-muted">
              {sorted.length} result{sorted.length === 1 ? "" : "s"} — Samples ship within 48h.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {sorters.map((item) => (
              <button
                key={item.key}
                onClick={() => setSort(item)}
                className={`rounded-full border px-3 py-1 transition ${
                  sort.key === item.key
                    ? "border-accent-emerald bg-accent-emerald/10 text-accent-emerald"
                    : "border-border text-muted hover:border-accent-emerald hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sorted.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
        <aside className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
          <p className="font-semibold text-foreground">Selection guide</p>
          <p className="mt-2">
            Compare slip ratings (R9-R13) and abrasion classes (PEI) to align with project demands. Ask our consultants for anti-slip prototyping and underfloor heating compatibility.
          </p>
          <ul className="mt-3 grid gap-2 text-xs">
            {facets.slice(0, 4).map((facet) => (
              <li key={facet.key} className="rounded-2xl border border-border/60 px-3 py-2">
                <span className="font-semibold text-foreground">{facet.label}: </span>
                <span>{facet.values.join(", ")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs">
            Average basket from professionals: <span className="font-semibold">{formatCurrency(2480)}</span>
          </p>
        </aside>
      </section>
    </div>
  );
}
