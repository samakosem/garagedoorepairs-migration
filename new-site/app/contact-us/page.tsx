import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig, mapsUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact our garage door repair team in Los Angeles. Call now for fast service or send us a message to schedule an appointment.",
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    title: "Contact Us | " + siteConfig.name,
    description: "Contact our garage door repair team in Los Angeles.",
    url: `${siteConfig.url}/contact-us/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact Us", url: `${siteConfig.url}/contact-us/` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us/" }]} />

      <Hero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Call now for fast service, or send us your details and we'll follow up to schedule your repair."
        emergency
      />

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Request Service</h2>
            <p className="mt-3 text-zinc-600">
              Fill out the form and our team will follow up to confirm details and scheduling.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Direct Contact</h2>
            <div className="mt-4 space-y-3 text-zinc-700">
              <p>
                Phone:{" "}
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-zinc-900">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-zinc-900">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Hours: <span className="font-semibold text-zinc-900">{siteConfig.hours}</span>
              </p>
              <p>
                Address:{" "}
                <span className="font-semibold text-zinc-900">
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                  {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                </span>
              </p>
              <p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 underline"
                >
                  Get Directions
                </a>
              </p>
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              For urgent issues, such as a door that won&apos;t close or has come off its track,
              calling directly is the fastest way to reach our team.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
