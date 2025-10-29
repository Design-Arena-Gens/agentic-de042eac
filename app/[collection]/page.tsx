import { notFound } from "next/navigation";
import { getCollections } from "../../lib/commerce";
import { ProductCard } from "../../components/ProductCard";

export async function generateStaticParams() {
  const collections = getCollections();
  return collections.map((collection) => ({ collection: collection.name.toLowerCase() }));
}

export default function CollectionPage({ params }: { params: { collection: string | string[] } }) {
  const collections = getCollections();
  const slug = Array.isArray(params.collection) ? params.collection[0] : params.collection;
  if (!slug) {
    return notFound();
  }

  const matching = collections.find((collection) => collection.name.toLowerCase() === slug.toLowerCase());

  if (!matching) {
    return notFound();
  }

  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Collection</p>
        <h1 className="text-3xl font-semibold tracking-tight">{matching.name}</h1>
        <p className="text-sm leading-relaxed text-muted">
          Each collection ships with 4K textures, AR-ready assets, and merchandising narratives for moodboards, lookbooks, and professional decks.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {matching.tiles.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
