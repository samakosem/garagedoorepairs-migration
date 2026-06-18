import type { Metadata } from "next";
import NewCityPageTemplate from "@/components/NewCityPageTemplate";
import { siteConfig, newCityPages } from "@/lib/site-config";

const slug = "garage-door-repair-encino";
const city = newCityPages.find((item) => item.slug === slug)!;
const description = `Garage door repair serving homeowners and properties in ${city.name} and nearby areas. Call ${siteConfig.phoneDisplay} for service.`;

const title = `Garage Door Repair in ${city.name}, CA | ${siteConfig.name}`;

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
  return <NewCityPageTemplate city={city} />;
}
