import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="bg-brand-navy px-4 py-1.5 text-center text-xs font-medium text-white">
        {siteConfig.hours} — Garage door emergency? Call now:{" "}
        <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-orange-light">
          {siteConfig.phoneDisplay}
        </a>
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-brand-navy">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-zinc-700 sm:flex">
          <Link href="/garage-door-repair-los-angeles/" className="hover:text-brand-blue">
            Services
          </Link>
          <Link href="/los-angeles-ca/" className="hover:text-brand-blue">
            Locations
          </Link>
          <Link href="/about-us/" className="hover:text-brand-blue">
            About
          </Link>
          <Link href="/blog/" className="hover:text-brand-blue">
            Blog
          </Link>
          <Link href="/contact-us/" className="hover:text-brand-blue">
            Contact
          </Link>
        </nav>
        <div className="hidden sm:block">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-light"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
