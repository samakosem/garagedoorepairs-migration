import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MidPageCta() {
  return (
    <section className="border-y border-zinc-200 bg-brand-surface py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
        <p className="font-semibold text-brand-navy">
          Ready to get this fixed? Call now or request a free estimate.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-light"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
