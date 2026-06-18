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
              className="flex gap-3 rounded-lg border border-zinc-100 p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
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
