import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import ServiceCards from "@/components/ServiceCards";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import { siteConfig, homepageFaqs } from "@/lib/site-config";

const title = "Garage Door Repair Los Angeles | 24-Hour Garage Door Repairs";

export const metadata: Metadata = {
  title: { absolute: title },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero
        eyebrow="Los Angeles Garage Door Experts"
        title="24-Hour Garage Door Repair in Los Angeles"
        subtitle="Fast, reliable garage door repair, installation, and emergency service across Los Angeles. Local technicians ready to help."
        emergency
        stats
        leadForm
      />
      <QuickAnswerBlock>
        Need garage door repair in Los Angeles? {siteConfig.name} provides 24-hour service
        availability for stuck doors, broken springs, opener issues, off-track doors, and garage
        door replacement. Call {siteConfig.phoneDisplay} for help.
      </QuickAnswerBlock>
      <TrustBar />
      <ServiceCards />
      <ServiceComparisonTable />
      <ProblemSolutionSection />
      <ServiceAreaSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection faqs={homepageFaqs} />
      <CtaSection />
    </div>
  );
}
