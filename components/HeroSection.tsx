"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const heroVideo = "https://cdn.coverr.co/videos/coverr-mint-tile-texture-7113/1080p.mp4";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-subtle-mesh" aria-hidden />
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Floor tiles, reimagined</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Launch a cinematic tile commerce experience for architects, homeowners, and designers.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            AuraTiles blends immersive visualization, AI-powered discovery, and world-class service design into one global storefront. Ship a bilingual, WCAG-compliant experience that converts inspiration into orders.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              See collections
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects/hospitality"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold"
            >
              Explore projects
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-muted">
            <span>WebXR Visualizer</span>
            <span>Core Web Vitals 95+</span>
            <span>Headless Shopify + Sanity</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Play className="h-4 w-4" />
            Micro-textures & lighting ready for AR.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
