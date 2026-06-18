import { siteConfig } from "@/lib/site-config";
import StatHighlights from "@/components/StatHighlights";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  emergency = false,
  stats = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  emergency?: boolean;
  stats?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-zinc-900">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.25),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-red-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-red-500"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center rounded-md border border-zinc-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-400"
          >
            Get a Free Estimate
          </a>
        </div>
        {emergency && (
          <p className="mt-6 text-sm font-medium text-red-300">
            Garage door stuck, unsafe, or not closing? Call now for 24-hour service availability.
          </p>
        )}
        {stats && <StatHighlights />}
      </div>
    </section>
  );
}
