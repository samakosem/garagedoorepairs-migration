import Link from "next/link";
import { siteConfig, mapsUrl } from "@/lib/site-config";
import { servicePages, locationPages, legalPages, newCityPages } from "@/lib/site-config";

const footerCityPreview = newCityPages.slice(0, 8);

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{siteConfig.description}</p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-3 block text-sm font-semibold text-white"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-zinc-400">{siteConfig.hours}</p>
          <p className="mt-3 text-sm text-zinc-400">
            {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
            {siteConfig.address.postalCode}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300"
          >
            Get Directions
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Locations</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/los-angeles-ca/" className="hover:text-white">
                Los Angeles, CA
              </Link>
            </li>
            {locationPages.map((location) => (
              <li key={location.slug}>
                <Link href={`/${location.slug}/`} className="hover:text-white">
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Areas We Serve</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {footerCityPreview.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}/`} className="hover:text-white">
                  {city.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/los-angeles-ca/" className="hover:text-white">
                View all service areas
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-4 py-5 text-center text-xs text-zinc-500">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          {legalPages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}/`} className="hover:text-zinc-300">
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
