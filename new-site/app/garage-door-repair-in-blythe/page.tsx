import type { Metadata } from "next";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { siteConfig, locationPages } from "@/lib/site-config";

const name = "Blythe";
const slug = "garage-door-repair-in-blythe";
const description = `Garage door repair serving homeowners in Blythe's desert climate near the Colorado River. Spring and opener repair. Call ${siteConfig.phoneDisplay}.`;

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
