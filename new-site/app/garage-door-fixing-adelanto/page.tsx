import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { siteConfig, locationPages } from "@/lib/site-config";

const name = "Adelanto";
const slug = "garage-door-fixing-adelanto";
const description = `Garage door repair serving homeowners in Adelanto's High Desert communities. Spring, opener, and off-track repair. Call ${siteConfig.phoneDisplay}.`;

export const metadata: Metadata = {
  title: `Garage Door Repair ${name}`,
  description,
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title: `Garage Door Repair ${name} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/${slug}/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  const location = locationPages.find((item) => item.slug === slug)!;
  return <LocationPageTemplate location={location} />;
}
