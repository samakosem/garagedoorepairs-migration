import Link from "next/link";
import { locationPages } from "@/lib/site-config";

export default function ServiceAreaSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Los Angeles Service Area</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Based in Los Angeles and serving a number of surrounding communities. Call to confirm
            coverage for your address.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          <Link
            href="/los-angeles-ca/"
            className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-semibold text-brand-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md"
          >
            Los Angeles, CA
          </Link>
          {locationPages.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}/`}
              className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
