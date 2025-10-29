import Link from "next/link";
import {
  getRoadmap,
  getHomeModules,
  getExperiences,
  getTechStack,
  getSeoPlan,
  getDataModel,
  getAssetStrategy,
  getVersionTwoIdeas,
} from "../../lib/cms";
import { getFeaturedProducts } from "../../lib/commerce";
import { Calculator } from "../../components/Calculator";
import { ProductCard } from "../../components/ProductCard";
import { Visualizer } from "../../components/Visualizer";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { TrustBar } from "../../components/TrustBar";
import { HeroSection } from "../../components/HeroSection";

export default function MarketingPage() {
  const roadmap = getRoadmap();
  const modules = getHomeModules();
  const products = getFeaturedProducts();
  const experiences = getExperiences();
  const stack = getTechStack();
  const { seoHighlights, securityPractices } = getSeoPlan();
  const dataModel = getDataModel();
  const assets = getAssetStrategy();
  const versionTwo = getVersionTwoIdeas();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="space-y-24 pb-24">
        <HeroSection />

        <TrustBar />

        <section className="container space-y-12">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Delivery Roadmap</p>
            <h2 className="text-3xl font-semibold tracking-tight">Six phases to ship a globally-ready tile platform</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((phase) => (
              <div key={phase.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{phase.duration}</p>
                <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {phase.focus.map((item) => (
                    <li key={item} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Home & Commerce Modules</p>
            <h2 className="text-3xl font-semibold tracking-tight">Every surface designed for conversion</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article key={module.category} className="rounded-3xl border border-border/60 bg-card p-6">
                <h3 className="text-lg font-semibold">{module.category}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container space-y-8">
          <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Experience layer</p>
              <h2 className="text-3xl font-semibold tracking-tight">Immersive utilities for confident decisions</h2>
            </div>
            <Link href="/product/emerald-herringbone" className="text-sm font-semibold text-accent-emerald">
              View PDP prototype
            </Link>
          </header>
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              {experiences.map((experience) => (
                <div key={experience.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    {experience.emphasis ?? "Experience"}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{experience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{experience.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <Calculator pricePerM2={56} />
              <Visualizer />
            </div>
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Featured tiles</p>
            <h2 className="text-3xl font-semibold tracking-tight">Collections ready for launch</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Technical foundation</p>
            <h2 className="text-3xl font-semibold tracking-tight">Stack tuned for performance and scale</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((item) => (
              <div key={item.section} className="rounded-3xl border border-border/60 bg-card p-6">
                <h3 className="text-lg font-semibold">{item.section}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {item.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">SEO + Trust</p>
            <h2 className="text-3xl font-semibold tracking-tight">Engineered for discoverability and compliance</h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold">SEO & performance</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {seoHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold">Security & privacy</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {securityPractices.map((practice) => (
                  <li key={practice}>{practice}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Commerce intelligence</p>
            <h2 className="text-3xl font-semibold tracking-tight">Structured data designed for relevancy</h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold">Product data model</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {dataModel.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold">Search intelligence</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {dataModel.search.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Content & assets</p>
            <h2 className="text-3xl font-semibold tracking-tight">Bring collections to life with motion</h2>
          </header>
          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <ul className="space-y-2 text-sm text-muted">
              {assets.map((asset) => (
                <li key={asset}>{asset}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container space-y-10">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Roadmap, next</p>
            <h2 className="text-3xl font-semibold tracking-tight">Version 2 accelerators</h2>
          </header>
          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <ul className="space-y-2 text-sm text-muted">
              {versionTwo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container overflow-hidden rounded-3xl border border-border/60 bg-subtle-mesh p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Launch partner</p>
              <h2 className="text-3xl font-semibold tracking-tight">Ready to build AuraTiles?</h2>
              <p className="text-sm leading-relaxed text-muted">
                Align strategy, design, and technology with a single delivery team. Soft launch in under four months with measurable conversion lift and a roadmap for personalization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:hello@auratiles.com"
                  className="rounded-full bg-accent-terracotta px-6 py-3 text-sm font-semibold text-white shadow-soft"
                >
                  Book a consultation
                </Link>
                <Link
                  href="/guides/installation"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold"
                >
                  View implementation guide
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
              <p>
                “The AuraTiles platform fuses tactile storytelling with technical rigor. From AR visualization to intelligent sampling, the experience sustains conversion without sacrificing craft.”
              </p>
              <p className="mt-4 font-semibold text-foreground">— Experience Design Lead</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
