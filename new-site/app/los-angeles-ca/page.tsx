import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import ServiceCards from "@/components/ServiceCards";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, newCityPages } from "@/lib/site-config";

const title = "Garage Door Services in Los Angeles, CA | Garage Door Repairs";
const description =
  "Garage door services and coverage throughout Los Angeles, CA. See our service area, available repair and replacement options, and the neighborhoods we serve.";
const slug = "los-angeles-ca";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/${slug}/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const faqs = [
  {
    question: "What parts of Los Angeles do you serve?",
    answer:
      "We serve Los Angeles and a number of surrounding communities. Call us with your address to confirm coverage for your specific area.",
  },
  {
    question: "Do you handle both repair and full replacement?",
    answer:
      "Yes. We handle repairs for springs, openers, tracks, and rollers, as well as full garage door replacement when repair isn't the right fit.",
  },
  {
    question: "How soon can someone come look at my door?",
    answer:
      "Availability depends on your location and our current schedule. Call us directly for the most accurate timing, especially for urgent issues.",
  },
];

export default function LosAngelesCaPage() {
  const url = `${siteConfig.url}/${slug}/`;

  return (
    <div>
      <JsonLd
        data={serviceSchema({
          name: "Garage Door Services in Los Angeles",
          description,
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Los Angeles, CA", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Los Angeles, CA", href: `/${slug}/` }]} />

      <Hero
        eyebrow="Service Area"
        title="Garage Door Services in Los Angeles, CA"
        subtitle="Service area coverage, available repair and replacement options, and the neighborhoods we serve throughout Los Angeles, CA."
        emergency
      />

      <QuickAnswerBlock>
        {siteConfig.name} provides garage door services throughout Los Angeles, CA, including
        24-hour availability for stuck doors, broken springs, opener issues, off-track doors, and
        garage door replacement. For a detailed look at our repair process, see our{" "}
        <Link href="/garage-door-repair-los-angeles/" className="font-medium text-brand-blue underline">
          garage door repair in Los Angeles
        </Link>{" "}
        page, or call {siteConfig.phoneDisplay} for help.
      </QuickAnswerBlock>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Serving Los Angeles, CA</h2>
        <p className="mt-4 text-zinc-600">
          Los Angeles is our primary service area, covering a wide range of neighborhoods and
          property types. This page covers our overall coverage area and the services available
          to homeowners here. For specific problems, repair steps, and pricing detail, visit our{" "}
          <Link href="/garage-door-repair-los-angeles/" className="font-medium text-brand-blue underline">
            garage door repair in Los Angeles
          </Link>{" "}
          page.
        </p>
      </section>

      <TrustBar />
      <ServiceCards />
      <ServiceAreaSection />

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-zinc-900">Neighborhoods We Serve</h2>
          <p className="mt-3 text-zinc-600">
            We serve homeowners and properties across many Los Angeles area neighborhoods.
            Service availability may vary - call to confirm coverage for your address.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
            {newCityPages.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/`}
                className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 hover:border-red-300"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-xl font-bold text-brand-navy">More Ways to Get Help</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/garage-door-repair-los-angeles/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Garage Door Repair in Los Angeles
          </Link>
          <Link
            href="/garage-door-repair-cost-los-angeles/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Los Angeles Pricing Guide
          </Link>
          <Link
            href="/contact-us/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <FAQSection title="Los Angeles Garage Door FAQ" faqs={faqs} />
      <CtaSection />
    </div>
  );
}
