import Link from "next/link";
import { servicePages } from "@/lib/site-config";

export default function InternalLinks({ exclude }: { exclude?: string }) {
  const links = servicePages.filter((service) => service.slug !== exclude).slice(0, 6);

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-bold text-zinc-900">Related Services</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {links.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}/`}
                className="block rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:border-red-300 hover:text-red-600"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-zinc-600">
          Looking for service near you? Visit our{" "}
          <Link href="/los-angeles-ca/" className="font-medium text-red-600 underline">
            Los Angeles, CA
          </Link>{" "}
          service area page.
        </p>
      </div>
    </section>
  );
}
