"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig, servicePages } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/garage-door-repair-los-angeles/", label: "Garage Door Repair" },
];

const trailingLinks = [
  { href: "/los-angeles-ca/", label: "Locations" },
  { href: "/about-us/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact-us/", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-700"
      >
        <span className="sr-only">Menu</span>
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <>
          <div
            aria-hidden="true"
            onClick={closeAll}
            className="fixed inset-0 z-30 bg-black/30"
          />
          <nav className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-lg border-b border-x border-zinc-200 bg-white px-4 py-4 shadow-xl">
            <ul className="space-y-3 text-sm font-medium text-zinc-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeAll}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex w-full items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <ul className="mt-2 space-y-2 border-l-2 border-brand-orange/30 pl-3 text-zinc-600">
                    {servicePages.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/${service.slug}/`} onClick={closeAll}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {trailingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeAll}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-block rounded-md bg-brand-orange px-4 py-2 font-semibold text-white transition-colors hover:bg-brand-orange-light"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
