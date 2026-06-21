import { Phone, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-center text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(3,105,161,0.2),_transparent_55%)]" />
      <div className="relative mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold">Need Garage Door Help Now?</h2>
        <p className="mt-3 text-zinc-300">
          Call us today for fast, reliable garage door service in Los Angeles, or get a free
          estimate online.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-7 py-3 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-brand-orange-light"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-600 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-zinc-400"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
