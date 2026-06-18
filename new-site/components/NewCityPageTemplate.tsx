import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FAQSection from "@/components/FAQSection";
import MidPageCta from "@/components/MidPageCta";
import RelatedLinksBlock from "@/components/RelatedLinksBlock";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, servicePages, type NewCityPageDef } from "@/lib/site-config";

export default function NewCityPageTemplate({ city }: { city: NewCityPageDef }) {
  const { slug, name, intro, commonProblemsHeading, commonProblems, nearbyAreas, serviceOrder, faqs } =
    city;
  const url = `${siteConfig.url}/${slug}/`;
  const title = `Garage Door Repair in ${name}, CA`;

  const orderedServices = serviceOrder
    .map((serviceSlug) => servicePages.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <div>
      <JsonLd
        data={serviceSchema({
          name: title,
          description: `Garage door repair services serving homeowners and properties in ${name} and nearby areas.`,
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
        eyebrow="Los Angeles Area"
        title={title}
        subtitle={`Serving homeowners and properties in ${name} and nearby areas. Service availability may vary - call to confirm.`}
      />

      <QuickAnswerBlock>
        Need garage door repair in {name}? {siteConfig.name} provides 24-hour service
        availability for stuck doors, broken springs, opener issues, off-track doors, and garage
        door replacement for homeowners and properties in {name} and nearby areas. Call{" "}
        {siteConfig.phoneDisplay} for help.
      </QuickAnswerBlock>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Serving {name}</h2>
        <p className="mt-4 text-zinc-600">{intro}</p>
      </section>

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-zinc-900">{commonProblemsHeading}</h2>
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

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Services Available in {name}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {orderedServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}/`}
                className="block rounded-md border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:border-red-300 hover:text-red-600"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-zinc-900">Emergency Service Availability</h2>
          <p className="mt-4 text-zinc-600">
            Garage door problems like a stuck door, broken spring, or door off its track don&apos;t
            wait for business hours. We offer 24-hour service availability for urgent issues in{" "}
            {name} and nearby areas, though exact response times may vary based on schedule and
            location. Call to confirm availability for your address.
          </p>
        </div>
      </section>

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

      <TrustBar />
      <MidPageCta />
      <FAQSection title={`${name} Garage Door FAQ`} faqs={faqs} />

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
