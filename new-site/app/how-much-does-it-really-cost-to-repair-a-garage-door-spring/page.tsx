import type { Metadata } from "next";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { siteConfig, blogPosts } from "@/lib/site-config";

const slug = "how-much-does-it-really-cost-to-repair-a-garage-door-spring";
const post = blogPosts.find((item) => item.slug === slug)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    url: `${siteConfig.url}/${slug}/`,
    siteName: siteConfig.name,
    type: "article",
  },
};

export default function Page() {
  return <BlogPostTemplate post={post} />;
}
