import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

// TODO: Final legal copy must be reviewed and approved by a qualified attorney before launch.

const title = "Privacy Policy";
const description =
  "Privacy policy for " + siteConfig.name + ". Learn how we collect, use, and protect your information.";
const slug = "privacy-policy";

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

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl font-bold text-zinc-900">Privacy Policy</h1>
        <p className="mt-4 text-zinc-600">
          This Privacy Policy explains how {siteConfig.name} collects, uses,
          and protects information when you visit our website or request
          service from us.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Information We Collect
        </h2>
        <p className="mt-3 text-zinc-600">
          We may collect information you provide directly, such as your name,
          phone number, email address, and service address, when you fill out
          a form, call us, or request a quote. We may also collect basic
          technical information about how you use our website.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          How We Use Information
        </h2>
        <p className="mt-3 text-zinc-600">
          We use the information we collect to respond to service requests,
          schedule appointments, communicate with you about your service, and
          improve our website and offerings.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Calls, Forms, and Service Requests
        </h2>
        <p className="mt-3 text-zinc-600">
          When you call us, submit a contact form, or request service, we use
          the details you provide solely to respond to your request and
          deliver the service you asked for.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Cookies and Analytics
        </h2>
        <p className="mt-3 text-zinc-600">
          Our website may use cookies and similar technologies, including
          analytics tools, to understand how visitors use our site and to
          help us improve performance and content.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Third-Party Services
        </h2>
        <p className="mt-3 text-zinc-600">
          We may use third-party services, such as analytics or scheduling
          tools, that process information on our behalf. These providers are
          only permitted to use information as necessary to provide their
          services to us.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Data Security
        </h2>
        <p className="mt-3 text-zinc-600">
          We take reasonable measures to protect the information we collect.
          No method of transmission or storage is completely secure, and we
          cannot guarantee absolute security of your information.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          Contact Information
        </h2>
        <p className="mt-3 text-zinc-600">
          If you have questions about this Privacy Policy, contact us at{" "}
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
