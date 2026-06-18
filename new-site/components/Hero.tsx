import { Phone, FileText, ShieldAlert } from "lucide-react";
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
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.22),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange-light">
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
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-brand-orange-light"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-400"
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            Get a Free Estimate
          </a>
        </div>
        {emergency && (
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-brand-orange-light">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            Garage door stuck, unsafe, or not closing? Call now for 24-hour service availability.
          </p>
        )}
        {stats && <StatHighlights />}
      </div>
    </section>
  );
}
