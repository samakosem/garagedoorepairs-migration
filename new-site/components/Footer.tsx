import Link from "next/link";
import { Phone, Clock, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, mapsUrl } from "@/lib/site-config";
import { servicePages, locationPages, legalPages, newCityPages } from "@/lib/site-config";

const footerCityPreview = newCityPages.slice(0, 8);

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-brand-navy text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{siteConfig.description}</p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-orange-light"
          >
            <Phone className="h-4 w-4 flex-shrink-0 text-brand-orange-light" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
            <Clock className="h-4 w-4 flex-shrink-0 text-brand-orange-light" aria-hidden="true" />
            {siteConfig.hours}
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-zinc-400">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange-light" aria-hidden="true" />
            <span>
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
              {siteConfig.address.postalCode}
            </span>
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange-light hover:text-brand-orange"
          >
            Get Directions
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Services</p>
          <ul className="mt-3 space-y-2 border-l-2 border-brand-orange/30 pl-3 text-sm text-zinc-400">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`} className="transition-colors hover:text-brand-orange-light">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Locations</p>
          <ul className="mt-3 space-y-2 border-l-2 border-brand-orange/30 pl-3 text-sm text-zinc-400">
            <li>
              <Link href="/los-angeles-ca/" className="transition-colors hover:text-brand-orange-light">
                Los Angeles, CA
              </Link>
            </li>
            {locationPages.map((location) => (
              <li key={location.slug}>
                <Link href={`/${location.slug}/`} className="transition-colors hover:text-brand-orange-light">
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Areas We Serve</p>
          <ul className="mt-3 space-y-2 border-l-2 border-brand-orange/30 pl-3 text-sm text-zinc-400">
            {footerCityPreview.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}/`} className="transition-colors hover:text-brand-orange-light">
                  {city.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/los-angeles-ca/" className="font-medium text-brand-blue transition-colors hover:text-brand-orange-light">
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
            <Link key={page.slug} href={`/${page.slug}/`} className="transition-colors hover:text-zinc-300">
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
