import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import ProcessSection from "@/components/ProcessSection";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import MidPageCta from "@/components/MidPageCta";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, type ServicePageDef } from "@/lib/site-config";

const emergencyEligibleSlugs = [
  "emergency-garage-door-repair",
  "garage-door-spring-replacement",
  "garage-door-off-track-repair",
  "garage-door-opener",
];

const comparisonTableSlugs = ["garage-door-repair-los-angeles"];

export default function ServicePageTemplate({ service }: { service: ServicePageDef }) {
  const { slug, title, description, quickAnswer, intro, signs, covered, faqs } = service;
  const url = `${siteConfig.url}/${slug}/`;
  const showEmergency = emergencyEligibleSlugs.includes(slug);
  const showComparisonTable = comparisonTableSlugs.includes(slug);

  return (
    <div>
      <JsonLd data={serviceSchema({ name: title, description, url })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: title, url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title, href: `/${slug}/` }]} />

      <Hero
        eyebrow="Garage Door Service"
        title={title}
        subtitle={description}
        emergency={showEmergency}
      />

      <QuickAnswerBlock>{quickAnswer}</QuickAnswerBlock>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">Overview</h2>
        <p className="mt-4 text-zinc-600">{intro}</p>
      </section>

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-zinc-900">Signs You May Need This Service</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {signs.map((sign) => (
              <li
                key={sign}
                className="flex items-start gap-2 rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700"
              >
                <span className="mt-0.5 text-red-600">•</span>
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-900">What We Cover</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {covered.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-md border border-zinc-200 px-4 py-3 text-sm text-zinc-700"
            >
              <span className="mt-0.5 text-red-600">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {showEmergency && (
        <section className="bg-zinc-50 py-14">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-zinc-900">When to Call a Technician</h2>
            <p className="mt-4 text-zinc-600">
              If your door won&apos;t close, came off its track, or has a snapped spring or
              cable, avoid forcing it manually. These issues can worsen quickly and create a
              safety risk. Call us and describe the situation so we can advise on next steps.
            </p>
            <p className="mt-3 text-zinc-600">
              We don&apos;t recommend DIY spring or cable repair. These components are under high
              tension and can cause serious injury without the right tools and training.
            </p>
          </div>
        </section>
      )}

      {showComparisonTable && <ServiceComparisonTable />}

      <TrustBar />
      <ProcessSection />
      <MidPageCta />
      <FAQSection faqs={faqs} />
      <InternalLinks exclude={slug} />
      <CtaSection />
    </div>
  );
}
