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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-xl border border-zinc-200 bg-white p-6">
              <span className="text-sm font-bold text-red-600">{item.step}</span>
              <p className="mt-2 font-semibold text-zinc-900">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
