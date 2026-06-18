import Link from "next/link";

type LinkItem = { label: string; href: string };

export default function RelatedLinksBlock({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="border-t border-zinc-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-red-300 hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
