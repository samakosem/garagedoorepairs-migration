import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { siteConfig, servicePages } from "@/lib/site-config";

// New SEO Service Page: confirmed 404 / not in any live WordPress sitemap
// during migration audit. Not a preserved URL - net-new page, part of new
// SEO structure. See ../current-site/MIGRATION_URL_CORRECTION_REPORT.md.
const title = "Garage Door Roller and Track Replacement Los Angeles | Garage Door Repairs";
const description =
  "Worn tracks and rollers cause noisy, unsafe doors. We replace tracks and rollers for smooth, quiet operation.";
const slug = "track-and-roller-replacement";

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
