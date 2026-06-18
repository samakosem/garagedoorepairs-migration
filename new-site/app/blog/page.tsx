import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig, blogPosts } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Garage door repair tips, guides, and news from our Los Angeles team.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog | " + siteConfig.name,
    description: "Garage door repair tips, guides, and news from our Los Angeles team.",
    url: `${siteConfig.url}/blog/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />

      <Hero
        eyebrow="Resources"
        title="Garage Door Repair Blog"
        subtitle="Tips, guides, and updates on garage door repair, maintenance, and replacement."
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-red-300 hover:shadow-sm"
            >
              <p className="font-semibold text-zinc-900">{post.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{post.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-red-600">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
