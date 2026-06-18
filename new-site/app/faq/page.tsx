import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import MidPageCta from "@/components/MidPageCta";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig, type FaqItem } from "@/lib/site-config";

const title = "Garage Door Repair FAQ | Garage Door Repairs";
const description =
  "Answers to common questions about garage door repair, emergency service, springs, openers, off-track doors, replacement, pricing, and service areas in Los Angeles.";
const slug = "faq";

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

const generalFaqs: FaqItem[] = [
  {
    question: "What are the most common garage door problems?",
    answer:
      "The most common issues are broken or worn springs, off-track doors, opener and remote failures, and noisy or slow-moving doors caused by worn rollers or hardware.",
  },
  {
    question: "How do I know if my garage door needs repair?",
    answer:
      "Common signs include the door being slow to open or close, unusual noise during operation, the door looking crooked, or the remote no longer responding reliably. If you notice any of these, it's worth having the door inspected.",
  },
  {
    question: "Should I repair or replace my garage door?",
    answer:
      "If the issue is limited to one part and the door is otherwise in good condition, repair is often the better value. If the door is older, has damage in multiple areas, or needs frequent repairs, replacement may be more practical. A technician can advise after inspection.",
  },
  {
    question: "How long does a typical garage door repair take?",
    answer:
      "Most common repairs, like spring replacement or opener repair, are completed in a single visit. Exact timing depends on the issue and the condition of related hardware.",
  },
];

const costFaqs: FaqItem[] = [
  {
    question: "How much does garage door repair cost in Los Angeles?",
    answer:
      "Cost depends on the issue, the parts needed, and your door's size and type. We provide a final estimate after inspecting the door in person, since an accurate quote isn't possible without seeing the issue directly.",
  },
  {
    question: "Why do garage door repair prices vary?",
    answer:
      "Pricing depends on factors like spring type, opener type, door size, and the severity of the damage. Two doors with similar symptoms can have very different repair needs once inspected.",
  },
  {
    question: "Does emergency garage door repair cost more?",
    answer:
      "Emergency or after-hours service may cost more than a scheduled daytime appointment. Call us to discuss your situation and get accurate pricing information.",
  },
  {
    question: "Can I get an estimate before the repair starts?",
    answer:
      "Yes. A technician reviews the issue and walks you through repair options and pricing before any work begins.",
  },
];

const springOpenerFaqs: FaqItem[] = [
  {
    question: "Can I open my garage door with a broken spring?",
    answer:
      "We don't recommend it. A broken spring means the door is no longer properly balanced, and forcing it open can cause further damage or injury. It's safer to have a technician inspect it first.",
  },
  {
    question: "Is garage door spring replacement dangerous?",
    answer:
      "Yes, springs are under high tension and can cause serious injury if handled without the right tools and training. We recommend professional replacement rather than attempting it yourself.",
  },
  {
    question: "Why does my garage door opener run but the door does not move?",
    answer:
      "This often points to a stripped gear or drive issue inside the opener unit, or a disconnected drive mechanism. A technician can confirm the cause and recommend repair or replacement.",
  },
  {
    question: "Do you repair garage door openers and remotes?",
    answer:
      "Yes, opener diagnostics, repair, remote and keypad programming, and new opener installation are all part of our service.",
  },
];

const emergencyFaqs: FaqItem[] = [
  {
    question: "What counts as a garage door emergency?",
    answer:
      "Any situation where your door won't close, is stuck open, or poses an immediate safety or security risk is treated as urgent. This includes broken springs, snapped cables, and doors off their track.",
  },
  {
    question: "Do you offer same-day garage door repair in Los Angeles?",
    answer:
      "Same-day availability depends on your specific location and our schedule that day. Call us directly for the most accurate estimate.",
  },
  {
    question: "What should I do if my garage door will not close?",
    answer:
      "A door that won't close is a security concern. Avoid forcing it manually, and call us to describe the situation so we can advise on next steps.",
  },
  {
    question: "What should I do while waiting for a technician?",
    answer:
      "Avoid forcing the door manually. If possible, secure the opening temporarily and keep people and vehicles clear of the door path.",
  },
];

const offTrackFaqs: FaqItem[] = [
  {
    question: "Why did my garage door come off track?",
    answer:
      "Common causes include worn rollers, bent track sections, an obstruction during operation, or impact damage from a vehicle.",
  },
  {
    question: "Is it safe to use an off-track garage door?",
    answer:
      "No. An off-track door can fall unexpectedly or jam in a way that's difficult to secure. Avoid operating it until it's been inspected.",
  },
  {
    question: "Can an off-track door damage my car or property?",
    answer:
      "Yes, a door that has come off track can fall or swing unpredictably, which creates a real risk to vehicles, property, and people nearby. Treat it as urgent.",
  },
];

const replacementFaqs: FaqItem[] = [
  {
    question: "When should a garage door be replaced instead of repaired?",
    answer:
      "If a door has extensive rust, rot, or structural damage, or if repairs are becoming frequent and costly, full replacement is often the more cost-effective long-term option.",
  },
  {
    question: "Will a new garage door work with my existing opener?",
    answer:
      "In many cases, yes. We check opener compatibility as part of the replacement process and advise if an upgrade is needed.",
  },
  {
    question: "What affects the cost of garage door replacement?",
    answer:
      "Door size, material, insulation level, and style all affect price, along with any track or opener upgrades needed. A technician can give specifics after assessing your setup.",
  },
];

const serviceAreaFaqs: FaqItem[] = [
  {
    question: "Do you provide garage door repair in Los Angeles?",
    answer:
      "Yes, Los Angeles is our primary service area, covering repair, replacement, and maintenance for residential garage doors.",
  },
  {
    question: "What areas around Los Angeles do you serve?",
    answer:
      "We serve Los Angeles and a number of surrounding communities. Call us with your address to confirm coverage and availability for your area.",
  },
  {
    question: "Do you service residential garage doors?",
    answer:
      "Yes, our primary focus is residential garage doors. Call to discuss your specific situation if you have a commercial property.",
  },
];

export default function FaqPage() {
  const url = `${siteConfig.url}/${slug}/`;

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: `/${slug}/` }]} />

      <Hero
        eyebrow="Frequently Asked Questions"
        title="Garage Door Repair FAQ"
        subtitle="Answers about garage door repair, emergency service, springs, openers, off-track doors, replacement, pricing, and service areas in Los Angeles."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <p className="text-zinc-600">
          Homeowners in Los Angeles can find answers below about common garage door problems,
          emergency repair, spring and opener issues, off-track doors, replacement, pricing, and
          our service area. If you don&apos;t see your question answered, feel free to{" "}
          <Link href="/contact-us/" className="font-medium text-brand-blue underline">
            contact us
          </Link>{" "}
          directly.
        </p>
      </section>

      <FAQSection title="General Garage Door Repair Questions" faqs={generalFaqs} />

      <div className="bg-zinc-50">
        <FAQSection title="Garage Door Repair Cost Questions" faqs={costFaqs} />
        <p className="mx-auto max-w-3xl px-4 pb-12 text-center text-zinc-600">
          For a full breakdown of typical price ranges by repair type, see our{" "}
          <Link
            href="/garage-door-repair-cost-los-angeles/"
            className="font-medium text-brand-blue underline"
          >
            Los Angeles garage door repair cost guide
          </Link>
          .
        </p>
      </div>

      <FAQSection title="Spring and Opener Questions" faqs={springOpenerFaqs} />

      <MidPageCta />

      <div className="bg-zinc-50">
        <FAQSection title="Emergency Garage Door Repair Questions" faqs={emergencyFaqs} />
      </div>

      <FAQSection title="Off-Track Door and Safety Questions" faqs={offTrackFaqs} />

      <div className="bg-zinc-50">
        <FAQSection title="Garage Door Replacement Questions" faqs={replacementFaqs} />
      </div>

      <FAQSection title="Los Angeles Service Area Questions" faqs={serviceAreaFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-xl font-bold text-brand-navy">Explore Our Services</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/garage-door-repair-los-angeles/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Garage Door Repair Los Angeles
          </Link>
          <Link
            href="/garage-door-repair/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Garage Door Repair
          </Link>
          <Link
            href="/garage-door-spring-replacement/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Spring Replacement
          </Link>
          <Link
            href="/garage-door-opener/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Opener Repair
          </Link>
          <Link
            href="/garage-door-off-track-repair/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Off-Track Repair
          </Link>
          <Link
            href="/garage-door-replacement/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Full Replacement
          </Link>
          <Link
            href="/emergency-garage-door-repair/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Emergency Repair
          </Link>
          <Link
            href="/track-and-roller-replacement/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Track and Roller Replacement
          </Link>
          <Link
            href="/los-angeles-ca/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Los Angeles, CA
          </Link>
          <Link
            href="/contact-us/"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
