import { Award, Receipt, Clock, MessageSquare } from "lucide-react";
import { whyHomeownersChooseUs } from "@/lib/site-config";

const icons = [Award, Receipt, Clock, MessageSquare];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900">Why Homeowners Choose Us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          A few reasons Los Angeles homeowners call us for garage door repair.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyHomeownersChooseUs.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex rounded-full bg-brand-orange/10 p-2.5">
                <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
              </div>
              <p className="mt-3 font-semibold text-brand-navy">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
