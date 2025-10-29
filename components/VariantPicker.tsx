"use client";

import { useState } from "react";

export type VariantPickerProps = {
  label: string;
  options: string[];
};

export function VariantPicker({ label, options }: VariantPickerProps) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.25em] text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              selected === option
                ? "border-accent-emerald bg-accent-emerald/10 text-accent-emerald"
                : "border-border text-muted hover:border-accent-emerald hover:text-foreground"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
