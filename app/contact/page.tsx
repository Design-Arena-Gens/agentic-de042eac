import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AuraTiles",
  description: "Schedule consultations, request quotes, or locate installers.",
};

export default function ContactPage() {
  return (
    <div className="container space-y-10 py-16">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="text-3xl font-semibold tracking-tight">Partner with AuraTiles</h1>
        <p className="text-sm leading-relaxed text-muted">
          Reach our consultants for design workshops, pricing, and logistics coordination.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <form className="space-y-4 rounded-3xl border border-border/60 bg-card p-6">
          <label className="text-sm">
            <span className="font-semibold text-foreground">Name</span>
            <input className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="font-semibold text-foreground">Email</span>
            <input className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="font-semibold text-foreground">Project details</span>
            <textarea className="mt-2 h-32 w-full rounded-xl border border-border bg-background px-3 py-2" />
          </label>
          <button className="rounded-full bg-accent-emerald px-6 py-3 text-sm font-semibold text-white shadow-soft">
            Send request
          </button>
        </form>
        <div className="rounded-3xl border border-border/60 bg-card p-6 text-sm text-muted">
          <h2 className="text-lg font-semibold text-foreground">Offices</h2>
          <p className="mt-2">Tehran — +98 21 5555 5555</p>
          <p>Dubai — +971 4 123 4567</p>
          <p>Milan — +39 02 1234 7890</p>
          <h2 className="mt-6 text-lg font-semibold text-foreground">Consultation hours</h2>
          <p className="mt-2">Sunday–Thursday: 9:00 – 19:00 (GMT+3:30)</p>
        </div>
      </section>
    </div>
  );
}
