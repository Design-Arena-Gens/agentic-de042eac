"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TileProduct } from "../lib/commerce";
import { formatCurrency } from "../lib/utils";

export function ProductCard({ product }: { product: TileProduct }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
          Sample Available
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <header>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            {product.collection}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{product.name}</h3>
        </header>
        <div className="grid grid-cols-2 gap-3 text-xs text-muted">
          <div>
            <span className="font-semibold text-foreground">Finishes</span>
            <p>{product.finishes.join(", ")}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Sizes</span>
            <p>{product.sizes.join(", ")}</p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">From</p>
            <p className="text-lg font-semibold">{formatCurrency(product.price)}</p>
          </div>
          <Link
            href={`/product/${product.handle}`}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:bg-foreground hover:text-background"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
