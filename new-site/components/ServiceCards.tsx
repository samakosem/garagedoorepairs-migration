import Link from "next/link";
import { Wrench, Settings, Zap, GitBranch, RectangleHorizontal, AlertTriangle, Sliders, CalendarCheck, Disc } from "lucide-react";
import { servicePages } from "@/lib/site-config";

const iconBySlug: Record<string, typeof Wrench> = {
  "garage-door-repair": Wrench,
  "garage-door-repair-los-angeles": Settings,
  "garage-door-spring-replacement": Zap,
  "garage-door-off-track-repair": GitBranch,
  "garage-door-replacement": RectangleHorizontal,
  "emergency-garage-door-repair": AlertTriangle,
  "garage-door-opener": Sliders,
  "preventive-maintenance": CalendarCheck,
  "track-and-roller-replacement": Disc,
};

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900">Our Garage Door Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          Repair, replacement, and maintenance services for homes across Los Angeles.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((service) => {
          const Icon = iconBySlug[service.slug] ?? Wrench;
          return (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-brand-blue group-hover:text-brand-orange" aria-hidden="true" />
              <p className="mt-3 font-semibold text-zinc-900 group-hover:text-brand-orange">
                {service.title}
              </p>
              <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-blue">
                Learn more &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
