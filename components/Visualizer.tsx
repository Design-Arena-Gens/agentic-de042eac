"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const surfaces = [
  {
    name: "Loft Living",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sunroom",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Outdoor Patio",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
];

const patterns = ["Herringbone", "Chevron", "Grid", "Offset"];

export function Visualizer() {
  const [surface, setSurface] = useState(surfaces[0]);
  const [pattern, setPattern] = useState(patterns[0]);

  return (
    <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            Visualizer
          </p>
          <h3 className="text-lg font-semibold">Preview tiles in your space</h3>
        </div>
        <div className="flex gap-2 text-xs">
          {patterns.map((patternName) => (
            <button
              key={patternName}
              onClick={() => setPattern(patternName)}
              className={`rounded-full border px-3 py-1 transition ${
                pattern === patternName
                  ? "border-accent-emerald bg-accent-emerald/10 text-accent-emerald"
                  : "border-border text-muted hover:border-accent-emerald hover:text-foreground"
              }`}
            >
              {patternName}
            </button>
          ))}
        </div>
      </header>
      <motion.div
        key={`${surface.name}-${pattern}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-4 overflow-hidden rounded-3xl border border-border"
      >
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${surface.image})` }}
        >
          <div className="flex h-full items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">{pattern}</p>
              <p className="text-lg font-semibold">{surface.name}</p>
              <p className="text-xs text-white/70">
                WebXR handoff ready — switch to AR on mobile to anchor tiles in seconds.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-4 flex gap-3">
        {surfaces.map((item) => (
          <button
            key={item.name}
            onClick={() => setSurface(item)}
            className={`relative h-20 flex-1 overflow-hidden rounded-2xl border ${
              surface.name === item.name
                ? "border-accent-emerald"
                : "border-border"
            }`}
          >
            <span
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <span className="absolute inset-0 bg-black/30" />
            <span className="relative z-10 flex h-full items-center justify-center text-xs font-semibold text-white">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
