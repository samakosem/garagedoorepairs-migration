import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { siteConfig, servicePages, type BlogPostDef } from "@/lib/site-config";

export default function BlogPostTemplate({ post }: { post: BlogPostDef }) {
  const { slug, title, description, quickAnswer, intro, sections, faqs, relatedServiceSlug } =
    post;
  const url = `${siteConfig.url}/${slug}/`;
  const relatedService = servicePages.find((service) => service.slug === relatedServiceSlug);

  return (
    <div>
      <JsonLd
        data={articleSchema({
          headline: title,
          description,
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
          { name: title, url },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: title, href: `/${slug}/` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 pt-14">
        <h1 className="text-4xl font-bold text-zinc-900">{title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{description}</p>
      </article>

      <QuickAnswerBlock>{quickAnswer}</QuickAnswerBlock>

      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-zinc-700">{intro}</p>

        {sections.map((section) => (
          <div key={section.heading} className="mt-8">
            <h2 className="text-2xl font-semibold text-zinc-900">{section.heading}</h2>
            <p className="mt-3 text-zinc-600">{section.body}</p>
          </div>
        ))}

        {relatedService && (
          <p className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
            Need this kind of help?{" "}
            <Link
              href={`/${relatedService.slug}/`}
              className="font-medium text-red-600 underline"
            >
              Visit our {relatedService.title} page
            </Link>{" "}
            for details, or{" "}
            <Link href="/contact-us/" className="font-medium text-red-600 underline">
              contact us
            </Link>{" "}
            to schedule service.
          </p>
        )}
      </article>

      <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      <CtaSection />
    </div>
  );
}
