import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FAQSection from "@/components/FAQSection";
import RelatedLinksBlock from "@/components/RelatedLinksBlock";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, servicePages, type LocationPageDef, type FaqItem } from "@/lib/site-config";

const defaultFaqs = (name: string, region: string): FaqItem[] => [
  {
    question: `Do you provide garage door repair in ${name}?`,
    answer: `We serve ${name} and the surrounding ${region} area. Call us with your address to confirm availability and scheduling.`,
  },
  {
    question: "What services are available in this area?",
    answer:
      "The same range of repair, replacement, and maintenance services we offer across our Los Angeles service area, including emergency repairs.",
  },
  {
    question: "How do I get an accurate quote for my repair?",
    answer:
      "Call our team and describe the issue. We can give you general guidance over the phone and confirm final pricing after an on-site evaluation.",
  },
  {
    question: `Can you help with emergency garage door repair in ${name}?`,
    answer:
      "Yes, urgent issues like a stuck door, broken spring, or off-track door are treated as priority calls. Call us and describe the situation.",
  },
  {
    question: `Do you repair garage door springs in ${name}?`,
    answer:
      "Yes, spring repair and replacement is one of our most common service calls in this area.",
  },
  {
    question: `Do you service garage door openers in ${name}?`,
    answer:
      "Yes, opener diagnostics, repair, and installation are available as part of our service area coverage.",
  },
  {
    question: `How do I request service in ${name}?`,
    answer:
      "Call us directly or use our contact form with your address and a description of the issue, and our team will follow up to confirm scheduling.",
  },
];

export default function LocationPageTemplate({ location }: { location: LocationPageDef }) {
  const { slug, name, region, intro, commonProblems, nearbyAreas, faqs } = location;
  const url = `${siteConfig.url}/${slug}/`;
  const title = `Garage Door Repair ${name}`;
  const resolvedFaqs = faqs ?? defaultFaqs(name, region);

  return (
    <div>
      <JsonLd
        data={serviceSchema({
          name: title,
          description: `Garage door repair services available in ${name}, ${region}.`,
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name, url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name, href: `/${slug}/` }]} />

      <Hero
        eyebrow={region}
        title={title}
        subtitle={`Garage door repair, replacement, and maintenance service available in ${name} and nearby areas.`}
      />

      <QuickAnswerBlock>
        Need garage door repair in {name}? {siteConfig.name} provides 24-hour service
        availability for stuck doors, broken springs, opener issues, off-track doors, and garage
        door replacement in {name} and the surrounding {region} area. Call{" "}
        {siteConfig.phoneDisplay} for help.
      </QuickAnswerBlock>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Service in {name}</h2>
        <p className="mt-4 text-zinc-600">
          {intro ??
            `${name} is located in ${region}. Our team provides garage door repair and related services in this area as part of our broader Los Angeles-area coverage. Call ahead to confirm current availability and scheduling for your address.`}
        </p>
      </section>

      {commonProblems && commonProblems.length > 0 && (
        <section className="bg-zinc-50 py-14">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-zinc-900">
              Common Garage Door Problems in {name}
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-1">
              {commonProblems.map((item) => (
                <div key={item.problem} className="rounded-xl border border-zinc-200 bg-white p-6">
                  <p className="font-semibold text-zinc-900">{item.problem}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={commonProblems ? "mx-auto max-w-4xl px-4 py-14" : "bg-zinc-50 py-14"}>
        <div className={commonProblems ? "" : "mx-auto max-w-4xl px-4"}>
          <h2 className="text-2xl font-bold text-zinc-900">Services Available in {name}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}/`}
                  className="block rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:border-red-300 hover:text-red-600"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {nearbyAreas && nearbyAreas.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold text-zinc-900">Nearby Areas We Serve</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Don&apos;t see your area listed? Call us to confirm service availability for your address.
          </p>
        </section>
      )}

      <TrustBar />
      <FAQSection title={`${name} Garage Door FAQ`} faqs={resolvedFaqs} />

      <RelatedLinksBlock
        title="Explore Related Services"
        links={[
          { label: "Garage Door Repair Los Angeles", href: "/garage-door-repair-los-angeles/" },
          { label: "Emergency Garage Door Repair", href: "/emergency-garage-door-repair/" },
          { label: "Garage Door Spring Replacement", href: "/garage-door-spring-replacement/" },
          { label: "Garage Door Opener", href: "/garage-door-opener/" },
          { label: "Garage Door Off Track Repair", href: "/garage-door-off-track-repair/" },
          { label: "Contact Us", href: "/contact-us/" },
        ]}
      />

      <CtaSection />
    </div>
  );
}
