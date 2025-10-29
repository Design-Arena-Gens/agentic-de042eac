"use client";

import { useState } from "react";
import { TileProduct } from "../../lib/commerce";
import { motion } from "framer-motion";

function SampleCard({ product, selected, onToggle }: { product: TileProduct; selected: boolean; onToggle: () => void }) {
  return (
    <motion.button
      layout
      onClick={onToggle}
      className={`flex flex-col gap-3 rounded-3xl border p-5 text-left transition ${
        selected ? "border-accent-emerald bg-accent-emerald/10" : "border-border/60 bg-card"
      }`}
      whileHover={{ y: -4 }}
    >
      <span className="text-xs uppercase tracking-[0.3em] text-muted">{product.collection}</span>
      <span className="text-lg font-semibold">{product.name}</span>
      <span className="text-xs text-muted">Finish: {product.finishes.join(", ")}</span>
      <span className="text-xs text-muted">Sample: ${product.samplePrice}</span>
    </motion.button>
  );
}

type SampleFormProps = {
  products: TileProduct[];
};

export function SampleForm({ products }: SampleFormProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  function toggle(handle: string) {
    setSelected((prev) => {
      if (prev.includes(handle)) {
        return prev.filter((item) => item !== handle);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, handle];
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      samples: selected,
      notes,
    };
    fetch("/api/samples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => alert("Sample request submitted. A consultant will be in touch."))
      .catch(() => alert("Unable to submit sample request."));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <SampleCard
            key={product.handle}
            product={product}
            selected={selected.includes(product.handle)}
            onToggle={() => toggle(product.handle)}
          />
        ))}
      </section>
      <div className="rounded-3xl border border-border/60 bg-card p-6">
        <label className="space-y-3 text-sm">
          <span className="font-semibold text-foreground">Project notes</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="h-32 w-full rounded-2xl border border-border bg-background px-3 py-2 text-sm"
            placeholder="Share project scope, deadline, or budget focus"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
        <p>
          {selected.length} of 4 samples selected. Delivery within 48 hours. Refundable credit applied to full orders.
        </p>
        <button
          type="submit"
          className="rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-soft disabled:opacity-50"
          disabled={selected.length === 0}
        >
          Submit request
        </button>
      </div>
    </form>
  );
}
