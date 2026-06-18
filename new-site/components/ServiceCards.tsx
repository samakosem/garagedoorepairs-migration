import Link from "next/link";
import { servicePages } from "@/lib/site-config";

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900">Our Garage Door Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          Repair, replacement, and maintenance services for homes across Los Angeles.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}/`}
            className="group rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-300 hover:shadow-sm"
          >
            <p className="font-semibold text-zinc-900 group-hover:text-red-600">
              {service.title}
            </p>
            <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-red-600">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
