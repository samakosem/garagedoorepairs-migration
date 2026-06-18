import { DoorClosed, Volume2, GitBranch, Radio } from "lucide-react";
import { commonProblems } from "@/lib/site-config";

const icons = [DoorClosed, Volume2, GitBranch, Radio];

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
        {commonProblems.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={item.problem}
              className="flex gap-4 rounded-xl border border-zinc-200 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="h-6 w-6 flex-shrink-0 text-brand-blue" aria-hidden="true" />
              <div>
                <p className="font-semibold text-brand-navy">{item.problem}</p>
                <p className="mt-2 text-sm text-zinc-600">{item.solution}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
