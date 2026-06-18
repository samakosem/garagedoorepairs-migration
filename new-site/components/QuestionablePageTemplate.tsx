import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export default function QuestionablePageTemplate({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  const url = `${siteConfig.url}/${slug}/`;

  return (
    <div>
      {/* Pending SEO review: keep, redirect, noindex, or delete decision not yet finalized. Do not add to main navigation. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: title, url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title, href: `/${slug}/` }]} />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
        <p className="mt-4 text-zinc-600">{description}</p>
        <p className="mt-4 text-sm text-zinc-500">
          This page is pending SEO review and is not yet part of our main service navigation. For
          help with this service, please contact us directly.
        </p>
      </section>
      <CtaSection />
    </div>
  );
}
