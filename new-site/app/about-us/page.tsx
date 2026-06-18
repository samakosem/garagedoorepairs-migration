import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our garage door repair company serving Los Angeles. Licensed, experienced technicians committed to quality service.",
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title: "About Us | " + siteConfig.name,
    description:
      "Learn about our garage door repair company serving Los Angeles.",
    url: `${siteConfig.url}/about-us/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About Us", url: `${siteConfig.url}/about-us/` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us/" }]} />

      <Hero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="A Los Angeles garage door repair company built around clear communication and quality workmanship."
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Our Approach</h2>
        <p className="mt-4 text-zinc-600">
          We are a garage door repair company serving Los Angeles and surrounding communities. Our
          technicians bring hands-on experience to every repair, installation, and maintenance
          job, with a focus on diagnosing the real issue instead of applying a quick fix.
        </p>
        <p className="mt-4 text-zinc-600">
          From emergency repairs to full garage door replacement, our team aims for clear
          communication, fair pricing, and workmanship that holds up over time.
        </p>
      </section>

      <TrustBar />
      <ProcessSection />
      <InternalLinks />
      <CtaSection />
    </div>
  );
}
