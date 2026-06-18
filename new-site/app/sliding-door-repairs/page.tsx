import type { Metadata } from "next";
import QuestionablePageTemplate from "@/components/QuestionablePageTemplate";
import { siteConfig } from "@/lib/site-config";

const title = "Sliding Door Repairs";
const description =
  "Sliding door repair services. This page is under SEO review and content is being finalized.";
const slug = "sliding-door-repairs";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${slug}/` },
  robots: { index: false, follow: true },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/${slug}/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return <QuestionablePageTemplate slug={slug} title={title} description={description} />;
}
