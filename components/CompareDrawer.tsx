"use client";

import { useState } from "react";
import { TileProduct } from "../lib/commerce";
import { formatCurrency } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CompareDrawerProps = {
  items: TileProduct[];
};

export function CompareDrawer({ items }: CompareDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft transition hover:bg-background"
      >
        {open ? "Hide comparison" : `Compare (${items.length})`}
      </button>
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="mt-4 w-[360px] rounded-3xl border border-border/60 bg-card p-4 shadow-2xl"
          >
            <header className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  Comparison
                </p>
                <p className="text-sm font-semibold">Technical snapshot</p>
              </div>
              <button aria-label="Close" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </header>
            <div className="mt-4 space-y-3 text-xs">
              {items.map((item) => (
                <div key={item.handle} className="rounded-2xl border border-border/60 p-3">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <dl className="mt-2 space-y-1 text-muted">
                    <div className="flex justify-between">
                      <dt>Finish</dt>
                      <dd>{item.finishes.join(", ")}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Size</dt>
                      <dd>{item.sizes.join(", ")}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Material</dt>
                      <dd>{item.material}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Price</dt>
                      <dd>{formatCurrency(item.price)}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
