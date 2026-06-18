import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { siteConfig, servicePages } from "@/lib/site-config";

const title = "Garage Door Spring Replacement Los Angeles | Garage Door Repairs";
const description =
  "Safe, professional garage door spring replacement. Broken spring repair for torsion and extension springs.";
const slug = "garage-door-spring-replacement";

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
