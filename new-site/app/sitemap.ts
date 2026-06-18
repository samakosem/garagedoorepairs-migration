import type { MetadataRoute } from "next";
import {
  siteConfig,
  servicePages,
  locationPages,
  legalPages,
  blogPosts,
  newCityPages,
} from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSlugs = ["", "about-us", "contact-us", "blog", "los-angeles-ca", "faq"];

  const allSlugs = [
    ...staticSlugs,
    ...servicePages.map((service) => service.slug),
    ...locationPages.map((location) => location.slug),
    ...newCityPages.map((city) => city.slug),
    ...blogPosts.map((post) => post.slug),
    ...legalPages.map((page) => page.slug),
  ];

  return allSlugs.map((slug) => ({
    url: slug ? `${siteConfig.url}/${slug}/` : `${siteConfig.url}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: slug === "" ? 1 : 0.7,
  }));
}
