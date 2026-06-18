import { siteConfig } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-16 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.2),_transparent_55%)]" />
      <div className="relative mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold">Need Garage Door Help Now?</h2>
        <p className="mt-3 text-zinc-300">
          Call us today for fast, reliable garage door service in Los Angeles, or get a free
          estimate online.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-red-500"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center rounded-md border border-zinc-600 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-zinc-400"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
