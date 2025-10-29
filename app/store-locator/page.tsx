import type { Metadata } from "next";

const showrooms = [
  {
    city: "Tehran",
    address: "No. 18, Ferdowsi Ave",
    hours: "Sat-Thu 9:00-21:00",
  },
  {
    city: "Dubai",
    address: "Building 5, Dubai Design District",
    hours: "Daily 10:00-22:00",
  },
  {
    city: "Milan",
    address: "Via Montenapoleone 12",
    hours: "Mon-Sat 10:00-20:00",
  },
];

export const metadata: Metadata = {
  title: "Dealers & showrooms",
  description: "Locate AuraTiles showrooms and schedule consultations with specialists.",
};

export default function StoreLocatorPage() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Showrooms</p>
        <h1 className="text-3xl font-semibold tracking-tight">Visit AuraTiles near you</h1>
        <p className="text-sm leading-relaxed text-muted">
          Book private consultations, access sample libraries, and coordinate installation partners.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {showrooms.map((showroom) => (
          <div key={showroom.city} className="rounded-3xl border border-border/60 bg-card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{showroom.city}</p>
            <p className="mt-2 text-sm text-muted">{showroom.address}</p>
            <p className="mt-1 text-xs text-muted">{showroom.hours}</p>
          </div>
        ))}
      </section>
      <div className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
        <h2 className="text-lg font-semibold text-foreground">Consultation booking</h2>
        <p className="mt-2">
          Email <a className="text-accent-emerald" href="mailto:showrooms@auratiles.com">showrooms@auratiles.com</a> with your preferred location and time. Our concierge will confirm within 12 hours.
        </p>
      </div>
    </div>
  );
}
