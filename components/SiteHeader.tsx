import Link from "next/link";
import { MegaMenu } from "./MegaMenu";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-emerald text-white shadow-soft">
            AT
          </span>
          <div>
            <p className="text-base font-semibold tracking-tight">AuraTiles</p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Visual surfaces</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          <MegaMenu />
          <Link href="/shop" className="text-sm font-medium hover:text-accent-emerald">
            Shop
          </Link>
          <Link href="/calculators" className="text-sm font-medium hover:text-accent-emerald">
            Calculators
          </Link>
          <Link href="/samples" className="text-sm font-medium hover:text-accent-emerald">
            Samples
          </Link>
          <Link href="/projects/hospitality" className="text-sm font-medium hover:text-accent-emerald">
            Projects
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          <Link
            href="/shop"
            className="rounded-full bg-accent-emerald px-4 py-2 text-sm font-semibold text-white shadow-soft"
          >
            See collections
          </Link>
        </div>
      </div>
    </header>
  );
}
