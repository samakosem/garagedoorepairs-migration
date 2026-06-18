import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

// TODO: Final legal copy must be reviewed and approved by a qualified attorney before launch.

const title = "Terms and Conditions";
const description =
  "Terms and conditions for using " + siteConfig.name + " website and services.";
const slug = "terms-and-conditions";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/${slug}/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  const url = `${siteConfig.url}/${slug}/`;

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: title, url },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title, href: `/${slug}/` }]} />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-bold text-zinc-900">Terms and Conditions</h1>
        <p className="mt-4 text-zinc-600">
          These Terms and Conditions govern your use of the {siteConfig.name}{" "}
          website and any services you request from us. By using our website
          or requesting service, you agree to these terms.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Website Use
        </h2>
        <p className="mt-3 text-zinc-600">
          This website is provided for informational purposes and to allow
          visitors to learn about and request our garage door services. You
          agree to use this website only for lawful purposes.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Service Requests
        </h2>
        <p className="mt-3 text-zinc-600">
          Submitting a form or calling our business to request service does
          not guarantee that service will be provided. Final scope, pricing,
          and scheduling are confirmed directly between you and our team.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Estimates and Appointments
        </h2>
        <p className="mt-3 text-zinc-600">
          Estimates provided through this website or by phone are general in
          nature and may change after an on-site evaluation. Appointment
          times are scheduled on a best-effort basis.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          No Guarantee of Availability
        </h2>
        <p className="mt-3 text-zinc-600">
          We do not guarantee technician availability, response times, or
          service area coverage at any given time. Availability may vary due
          to demand, location, and circumstances beyond our control.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Third-Party Links
        </h2>
        <p className="mt-3 text-zinc-600">
          Our website may contain links to third-party websites. We are not
          responsible for the content, accuracy, or practices of any
          third-party site linked from our website.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Limitation of Liability
        </h2>
        <p className="mt-3 text-zinc-600">
          To the fullest extent permitted by law, {siteConfig.name} shall not
          be liable for any indirect, incidental, or consequential damages
          arising from your use of this website or our services.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Contact Information
        </h2>
        <p className="mt-3 text-zinc-600">
          If you have questions about these Terms and Conditions, contact us
          at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-zinc-900 underline">
            {siteConfig.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-medium text-zinc-900 underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
