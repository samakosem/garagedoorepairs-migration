import { whyHomeownersChooseUs } from "@/lib/site-config";

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
        {whyHomeownersChooseUs.map((item) => (
          <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="font-semibold text-zinc-900">{item.title}</p>
            <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
