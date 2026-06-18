import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import MidPageCta from "@/components/MidPageCta";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig, type FaqItem } from "@/lib/site-config";

const title = "Garage Door Repair Cost Los Angeles | Pricing Guide";
const description =
  "Learn what affects garage door repair cost in Los Angeles, including springs, openers, off-track doors, replacement, emergency service, parts, labor, and inspection factors.";
const slug = "garage-door-repair-cost-los-angeles";

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

type CostRow = {
  service: string;
  range: string;
  servicePath?: string;
};

const costRows: CostRow[] = [
  {
    service: "General Garage Door Repair",
    range: "$174–$419",
    servicePath: "/garage-door-repair/",
  },
  {
    service: "Spring Replacement",
    range: "$170–$398",
    servicePath: "/garage-door-spring-replacement/",
  },
  {
    service: "Opener Installation / Replacement",
    range: "$254–$608",
    servicePath: "/garage-door-opener/",
  },
  {
    service: "Full Door Replacement",
    range: "$828–$1,692",
    servicePath: "/garage-door-replacement/",
  },
  {
    service: "Off-Track Repair",
    range: "Varies by severity — call for details",
    servicePath: "/garage-door-off-track-repair/",
  },
  {
    service: "Track and Roller Replacement",
    range: "Varies by parts needed — call for details",
    servicePath: "/track-and-roller-replacement/",
  },
  {
    service: "Emergency / After-Hours Service",
    range: "May include an additional service fee",
    servicePath: "/emergency-garage-door-repair/",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How much does garage door repair cost in Los Angeles?",
    answer:
      "Cost depends on the issue, the parts needed, and your door's size and type. The ranges above are general public-reference figures, not guaranteed pricing. We provide a final estimate after inspecting the door in person.",
  },
  {
    question: "Why do garage door repair prices vary?",
    answer:
      "Pricing depends on factors like spring type, opener type, door size and material, and the severity of the damage. Two doors with similar symptoms can have very different repair needs once inspected.",
  },
  {
    question: "Is garage door spring replacement expensive?",
    answer:
      "Spring replacement is one of the more affordable common repairs, but the exact cost depends on whether you have torsion or extension springs and the condition of related hardware like cables and pulleys.",
  },
  {
    question: "Does emergency garage door repair cost more?",
    answer:
      "Emergency or after-hours service may include an additional service fee compared to a scheduled daytime appointment. Call us to discuss your situation and get accurate pricing information.",
  },
  {
    question: "Can I get an estimate before the repair starts?",
    answer:
      "Yes. A technician reviews the issue and walks you through repair options and pricing before any work begins.",
  },
  {
    question: "Is it cheaper to repair or replace a garage door?",
    answer:
      "Repair is usually less expensive upfront when the issue is limited to one part. If a door is older, has damage in multiple areas, or needs frequent repairs, replacement can be more cost-effective over time.",
  },
  {
    question: "What affects the cost of garage door opener repair?",
    answer:
      "Whether the issue is the motor, circuit board, sensors, or remote programming all affect cost, along with the opener's brand and age.",
  },
  {
    question: "Why should I avoid DIY spring replacement?",
    answer:
      "Garage door springs are under high tension and can cause serious injury if handled without the right tools and training. Professional replacement is strongly recommended over attempting it yourself.",
  },
];

export default function CostGuidePage() {
  const url = `${siteConfig.url}/${slug}/`;

  return (
    <div>
      <JsonLd
        data={serviceSchema({
          name: "Garage Door Repair Cost Guide",
          description,
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Garage Door Repair Cost Los Angeles", url },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Garage Door Repair Cost Los Angeles", href: `/${slug}/` },
        ]}
      />

      <Hero
        eyebrow="Pricing Guide"
        title="Garage Door Repair Cost in Los Angeles"
        subtitle="Prices vary based on the issue, door type, parts, and severity. A final estimate is provided after inspection."
        emergency
      />

      <QuickAnswerBlock>
        Garage door repair in Los Angeles can vary depending on the problem, parts, and labor
        required. Simple repairs usually cost less than major spring, opener, track, or full door
        replacement work. A final estimate should be provided after inspection.
      </QuickAnswerBlock>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-navy">
          Garage Door Repair Cost in Los Angeles — Typical Ranges
        </h2>
        <p className="mt-4 text-zinc-600">
          The ranges below are general public-reference figures, not guaranteed final prices.
          Final pricing depends on an in-person inspection. Emergency or after-hours service may
          cost more than a scheduled appointment, and severe damage, parts availability, door
          size, spring type, opener type, and door material all affect the final price. We
          provide an estimate before any repair work begins.
        </p>

        {/* Desktop/tablet: real table */}
        <div className="mt-6 hidden overflow-x-auto rounded-xl border border-zinc-200 shadow-sm sm:block">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Typical Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              {costRows.map((row, index) => (
                <tr key={row.service} className={index % 2 === 1 ? "bg-brand-surface" : undefined}>
                  <td className="px-4 py-3">
                    {row.servicePath ? (
                      <Link
                        href={row.servicePath}
                        className="font-medium text-brand-blue underline"
                      >
                        {row.service}
                      </Link>
                    ) : (
                      <span className="text-zinc-800">{row.service}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-zinc-600">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-6 space-y-4 sm:hidden">
          {costRows.map((row) => (
            <div key={row.service} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              {row.servicePath ? (
                <Link href={row.servicePath} className="font-semibold text-brand-blue underline">
                  {row.service}
                </Link>
              ) : (
                <p className="font-semibold text-brand-navy">{row.service}</p>
              )}
              <p className="mt-1 text-sm text-zinc-600">{row.range}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          These are general public-reference ranges, not a quote. Call us for pricing
          information specific to your door and issue.
        </p>
      </section>

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            What Affects Your Final Garage Door Repair Price
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Type of Repair Needed</h3>
              <p className="mt-2 text-sm text-zinc-600">
                A simple adjustment costs less than a full spring or opener replacement.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Door Size and Material</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Wider, heavier, or higher-end material doors typically cost more to service.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Spring Type and Opener Type</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Torsion vs. extension springs, and the opener&apos;s brand and drive type, both
                affect parts and labor.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Severity of Damage</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Minor wear costs less to address than damage that has affected multiple
                components.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Emergency or After-Hours Service</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Urgent or after-hours calls may include an additional service fee.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-brand-navy">Parts Availability</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Less common parts or older door models can affect both cost and timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-navy">Cost by Garage Door Repair Type</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-brand-navy">Spring Replacement Cost</h3>
            <p className="mt-2 text-zinc-600">
              Spring replacement cost depends on whether you have torsion or extension springs,
              and whether one or both springs need replacing. See our{" "}
              <Link href="/garage-door-spring-replacement/" className="font-medium text-brand-blue underline">
                spring replacement page
              </Link>{" "}
              for more detail.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-navy">Opener Repair or Replacement Cost</h3>
            <p className="mt-2 text-zinc-600">
              Opener costs vary based on whether the issue is the motor, sensors, or remote
              programming, and the opener&apos;s brand and age. Visit our{" "}
              <Link href="/garage-door-opener/" className="font-medium text-brand-blue underline">
                opener repair page
              </Link>{" "}
              for details.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-navy">Off-Track Garage Door Repair Cost</h3>
            <p className="mt-2 text-zinc-600">
              Off-track repair cost depends heavily on severity, from a simple realignment to
              full track replacement. Call us for pricing specific to your situation, or see our{" "}
              <Link href="/garage-door-off-track-repair/" className="font-medium text-brand-blue underline">
                off-track repair page
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-navy">Track and Roller Replacement Cost</h3>
            <p className="mt-2 text-zinc-600">
              Costs vary based on whether you choose steel or nylon rollers and how much of the
              track needs replacing. Learn more on our{" "}
              <Link href="/track-and-roller-replacement/" className="font-medium text-brand-blue underline">
                track and roller replacement page
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-navy">Garage Door Replacement Cost</h3>
            <p className="mt-2 text-zinc-600">
              Replacement cost depends on door size, material, insulation level, and style. See
              our{" "}
              <Link href="/garage-door-replacement/" className="font-medium text-brand-blue underline">
                replacement page
              </Link>{" "}
              for what to expect.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-navy">Emergency Garage Door Repair Cost</h3>
            <p className="mt-2 text-zinc-600">
              Emergency or after-hours service may include an additional service fee compared to
              a scheduled appointment. Visit our{" "}
              <Link href="/emergency-garage-door-repair/" className="font-medium text-brand-blue underline">
                emergency repair page
              </Link>{" "}
              for more information.
            </p>
          </div>
        </div>
      </section>

      <MidPageCta />

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            Why an Inspection Matters Before Giving a Final Price
          </h2>
          <p className="mt-4 text-zinc-600">
            Garage doors are heavy, and springs are under high tension, which means the cause of
            a problem isn&apos;t always obvious from a description alone. A technician needs to
            inspect the door, hardware, and opener system in person to confirm the actual cause
            before providing a final, accurate price. This also helps avoid surprises once work
            begins.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-navy">
          Repair vs. Replacement — Which Costs Less?
        </h2>
        <p className="mt-4 text-zinc-600">
          Repair is usually the less expensive option upfront when the issue is limited to one
          part, like a spring or a section of track, and the rest of the door is in good
          condition. If the door is older, has damage in multiple areas, or needs frequent
          repairs, full replacement can be more cost-effective over time, since it avoids
          repeated service calls. A technician can give a clearer recommendation after inspecting
          your specific door.
        </p>
      </section>

      <section className="bg-zinc-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            How to Get an Accurate Garage Door Repair Estimate
          </h2>
          <p className="mt-4 text-zinc-600">
            To help us give you the most accurate guidance before an inspection, it helps to have
            the following ready when you call:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Your door's approximate size (single or double)",
              "A description of the symptoms you're noticing",
              "Photos of the issue, if possible",
              "Your opener's brand or model, if relevant",
              "Whether the door is currently stuck open or closed",
              "Your service area or ZIP code",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700"
              >
                <span className="mt-0.5 text-brand-orange">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-xl font-bold text-brand-navy">Related Garage Door Services</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "Garage Door Repair Los Angeles", href: "/garage-door-repair-los-angeles/" },
            { label: "Garage Door Repair", href: "/garage-door-repair/" },
            { label: "Spring Replacement", href: "/garage-door-spring-replacement/" },
            { label: "Opener Repair", href: "/garage-door-opener/" },
            { label: "Off-Track Repair", href: "/garage-door-off-track-repair/" },
            { label: "Track and Roller Replacement", href: "/track-and-roller-replacement/" },
            { label: "Full Replacement", href: "/garage-door-replacement/" },
            { label: "Emergency Repair", href: "/emergency-garage-door-repair/" },
            { label: "Contact Us", href: "/contact-us/" },
            { label: "FAQ", href: "/faq/" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <FAQSection title="Garage Door Repair Cost FAQ" faqs={faqs} />

      <CtaSection />
    </div>
  );
}
