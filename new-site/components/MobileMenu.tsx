"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/garage-door-repair-los-angeles/", label: "Services" },
  { href: "/los-angeles-ca/", label: "Locations" },
  { href: "/about-us/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact-us/", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

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
        <nav className="absolute inset-x-0 top-full z-50 border-b border-zinc-200 bg-white px-4 py-4 shadow-sm">
          <ul className="space-y-3 text-sm font-medium text-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block rounded-md bg-red-600 px-4 py-2 font-semibold text-white"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
