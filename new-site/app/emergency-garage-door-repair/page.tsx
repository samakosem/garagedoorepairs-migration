import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { siteConfig, servicePages } from "@/lib/site-config";

const title = "Emergency Garage Door Repair Los Angeles | Open 24 Hours";
const description =
  "24/7 emergency garage door repair. Stuck, broken, or unsafe door? We respond fast to get you secure again.";
const slug = "emergency-garage-door-repair";

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

export default function Page() {
  const service = servicePages.find((item) => item.slug === slug)!;
  return <ServicePageTemplate service={service} />;
}
