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

const title = "Garage Door Repair in Los Angeles, CA | Garage Door Repairs";
const description =
  "Important Los Angeles local page. Garage door repair, installation, and emergency service throughout Los Angeles, CA.";
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
          name: "Garage Door Repair",
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
        eyebrow="Primary Service Area"
        title="Garage Door Repair Los Angeles, CA"
        subtitle="Garage door repair, installation, and emergency service throughout Los Angeles, CA, from a local team that knows the area."
        emergency
      />

      <QuickAnswerBlock>
        Need garage door repair in Los Angeles? {siteConfig.name} provides 24-hour service
        availability for stuck doors, broken springs, opener issues, off-track doors, and garage
        door replacement throughout Los Angeles, CA. Call {siteConfig.phoneDisplay} for help.
      </QuickAnswerBlock>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Serving Los Angeles, CA</h2>
        <p className="mt-4 text-zinc-600">
          As our primary service area, Los Angeles is where most of our day-to-day repair and
          installation work happens. From broken springs to full door replacement, our team
          handles the work with attention to detail and clear communication.
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

      <FAQSection title="Los Angeles Garage Door FAQ" faqs={faqs} />
      <CtaSection />
    </div>
  );
}
