"use client";

import { useMemo, useState } from "react";
import { formatArea, formatCurrency } from "../lib/utils";

type CalculatorResult = {
  area: number;
  cartons: number;
  total: number;
  savings: number;
};

export function Calculator({ pricePerM2 }: { pricePerM2: number }) {
  const [length, setLength] = useState(5);
  const [width, setWidth] = useState(4);
  const [wastage, setWastage] = useState(10);

  const result = useMemo<CalculatorResult>(() => {
    const area = length * width;
    const adjustedArea = area * (1 + wastage / 100);
    const cartons = Math.ceil(adjustedArea / 1.2);
    const total = adjustedArea * pricePerM2;
    const savings = total * 0.1;
    return { area, cartons, total, savings };
  }, [length, width, wastage, pricePerM2]);

  return (
    <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Tile area calculator</p>
        <h3 className="text-lg font-semibold">Estimate coverage & savings</h3>
      </header>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm">
          <span>Length (m)</span>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
            className="w-full rounded-xl border border-border bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Width (m)</span>
          <input
            type="number"
            min="1"
            value={width}
            onChange={(event) => setWidth(Number(event.target.value))}
            className="w-full rounded-xl border border-border bg-background px-3 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Wastage (%)</span>
          <input
            type="number"
            min="0"
            value={wastage}
            onChange={(event) => setWastage(Number(event.target.value))}
            className="w-full rounded-xl border border-border bg-background px-3 py-2"
          />
        </label>
      </div>
      <dl className="mt-6 grid gap-4 md:grid-cols-4">
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">Net area</dt>
          <dd className="text-lg font-semibold">{formatArea(result.area)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">Recommended cartons</dt>
          <dd className="text-lg font-semibold">{result.cartons}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">Estimated total</dt>
          <dd className="text-lg font-semibold">{formatCurrency(result.total)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">Early sample discount</dt>
          <dd className="text-lg font-semibold text-accent-terracotta">
            -{formatCurrency(result.savings)}
          </dd>
        </div>
      </dl>
    </section>
  );
}
