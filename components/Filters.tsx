"use client";

import { useMemo, useState } from "react";
import { facets } from "../lib/search";
import { X } from "lucide-react";

export type FilterOption = {
  key: string;
  label: string;
  values: string[];
};

type FiltersProps = {
  onChange: (active: Record<string, string>) => void;
};

export function Filters({ onChange }: FiltersProps) {
  const [active, setActive] = useState<Record<string, string>>({});

  const activeEntries = useMemo(() => Object.entries(active), [active]);

  function toggleFilter(key: string, value: string) {
    setActive((prev) => {
      const current = prev[key];
      const updated = current === value ? undefined : value;
      const next = { ...prev };
      if (updated) {
        next[key] = updated;
      } else {
        delete next[key];
      }
      onChange(next);
      return next;
    });
  }

  function clearFilter(key: string) {
    setActive((prev) => {
      const next = { ...prev };
      delete next[key];
      onChange(next);
      return next;
    });
  }

  return (
    <aside className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {activeEntries.map(([key, value]) => (
          <button
            key={key}
            className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
            onClick={() => clearFilter(key)}
          >
            <span>{`${key}: ${value}`}</span>
            <X className="h-3 w-3" />
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {facets.map((facet) => (
          <div key={facet.key} className="rounded-2xl border border-border/60 bg-card p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{facet.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {facet.values.map((value) => {
                const selected = active[facet.key] === value;
                return (
                  <button
                    key={value}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      selected
                        ? "border-accent-emerald bg-accent-emerald/10 text-accent-emerald"
                        : "border-border text-muted hover:border-accent-emerald hover:text-foreground"
                    }`}
                    onClick={() => toggleFilter(facet.key, value)}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
