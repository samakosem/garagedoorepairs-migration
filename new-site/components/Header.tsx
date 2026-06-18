import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="bg-zinc-900 px-4 py-1.5 text-center text-xs font-medium text-white">
        {siteConfig.hours} — Garage door emergency? Call now:{" "}
        <a href={`tel:${siteConfig.phone}`} className="font-semibold text-red-400">
          {siteConfig.phoneDisplay}
        </a>
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-zinc-700 sm:flex">
          <Link href="/garage-door-repair-los-angeles/" className="hover:text-red-600">
            Services
          </Link>
          <Link href="/los-angeles-ca/" className="hover:text-red-600">
            Locations
          </Link>
          <Link href="/about-us/" className="hover:text-red-600">
            About
          </Link>
          <Link href="/blog/" className="hover:text-red-600">
            Blog
          </Link>
          <Link href="/contact-us/" className="hover:text-red-600">
            Contact
          </Link>
        </nav>
        <div className="hidden sm:block">
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
