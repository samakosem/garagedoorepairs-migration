import { trustPoints } from "@/lib/site-config";

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <div key={point.title} className="border-l-2 border-amber-400 pl-4">
            <p className="font-semibold text-zinc-900">{point.title}</p>
            <p className="mt-1 text-sm text-zinc-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
