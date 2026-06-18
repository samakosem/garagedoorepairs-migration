"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ServicePageDef } from "@/lib/site-config";

export default function ServicesDropdown({ services }: { services: ServicePageDef[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 hover:text-brand-blue"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-brand-surface hover:text-brand-blue"
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
