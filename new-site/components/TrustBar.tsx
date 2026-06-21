import { MapPin, Tag, ShieldCheck, Wrench } from "lucide-react";
import { trustPoints } from "@/lib/site-config";

const icons = [MapPin, Tag, ShieldCheck, Wrench];

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={point.title}
              className="group relative flex gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-blue opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy/80 text-brand-orange-light shadow-sm">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-brand-navy">{point.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{point.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
