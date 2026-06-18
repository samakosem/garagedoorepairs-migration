import { commonProblems } from "@/lib/site-config";

export default function ProblemSolutionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900">Common Garage Door Problems</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          A few of the issues we diagnose and repair most often.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {commonProblems.map((item) => (
          <div key={item.problem} className="rounded-xl border border-zinc-200 p-6">
            <p className="font-semibold text-zinc-900">{item.problem}</p>
            <p className="mt-2 text-sm text-zinc-600">{item.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
