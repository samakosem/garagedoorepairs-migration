import { processSteps } from "@/lib/site-config";

export default function ProcessSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">How It Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            A straightforward process from your first call to a finished repair.
          </p>
        </div>
        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:block"
          />
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-light text-sm font-bold text-white shadow-md shadow-orange-900/20 ring-4 ring-white">
                {item.step}
              </span>
              <p className="mt-3 font-semibold text-brand-navy">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
