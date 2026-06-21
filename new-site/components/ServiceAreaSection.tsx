import Link from "next/link";
import { MapPin } from "lucide-react";
import { locationPages } from "@/lib/site-config";

export default function ServiceAreaSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-16">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-navy">
            <MapPin className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            Service Hub
          </span>
          <h2 className="mt-4 text-3xl font-bold text-zinc-900">Los Angeles Service Area</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Based in Los Angeles and serving a number of surrounding communities. Call to confirm
            coverage for your address.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          <Link
            href="/los-angeles-ca/"
            className="group relative overflow-hidden rounded-lg border border-brand-orange/30 bg-white px-4 py-3 text-center text-sm font-semibold text-brand-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/50 hover:shadow-lg"
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-blue" />
            Los Angeles, CA
          </Link>
          {locationPages.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}/`}
              className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
