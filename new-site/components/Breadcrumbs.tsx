import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span className="text-zinc-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-zinc-700">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-zinc-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
