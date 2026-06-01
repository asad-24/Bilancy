import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyCTA } from "@/components/layout/sticky-cta";
import {
  CaseStudies,
  FAQAccordion,
  Hero,
  HowItWorks,
  Pricing,
  ServicesGrid,
  Testimonials,
  TrustedByStrip,
  WorkGallery,
} from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <Hero />
        <TrustedByStrip />
        <ServicesGrid />
        <WorkGallery />
        <CaseStudies />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQAccordion />
        <SiteFooter />
      </main>
      <StickyCTA />
    </>
  );
}
