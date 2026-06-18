export default function QuickAnswerBlock({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-10">
      <div className="rounded-lg border-l-4 border-red-600 bg-zinc-50 px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Quick Answer
        </p>
        <p className="mt-2 text-zinc-800">{children}</p>
      </div>
    </section>
  );
}
