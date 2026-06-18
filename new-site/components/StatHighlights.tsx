const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "24/7", label: "Open 24 Hours" },
  { value: "Free", label: "Estimates" },
];

export default function StatHighlights() {
  return (
    <div className="relative mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-zinc-700/60 pt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-amber-400 sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
