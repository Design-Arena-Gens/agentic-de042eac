import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">Surface not found</h1>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        The tile, collection, or guide you are searching for is being curated. Explore our featured collections while we prepare this surface.
      </p>
      <Link href="/" className="rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-soft">
        Back to home
      </Link>
    </div>
  );
}
