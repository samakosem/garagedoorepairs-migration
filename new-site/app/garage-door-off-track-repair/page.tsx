import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { siteConfig, servicePages } from "@/lib/site-config";

const title = "Garage Door Off Track Repair Los Angeles | Garage Door Repairs";
const description =
  "Is your garage door off its track? We fix off-track garage doors quickly and safely to restore smooth operation.";
const slug = "garage-door-off-track-repair";

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
