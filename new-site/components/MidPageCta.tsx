import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MidPageCta() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-brand-surface py-8">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-orange to-brand-blue" />
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
        <p className="font-semibold text-brand-navy">
          Ready to get this fixed? Call now or request a free estimate.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/20 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-light hover:shadow-lg"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
