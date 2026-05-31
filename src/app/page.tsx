import { SiteHeader } from "@/components/layout/site-header";
import { StickyCTA } from "@/components/layout/sticky-cta";
import {
  CaseStudies,
  FAQAccordion,
  Footer,
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
        <Footer />
      </main>
      <StickyCTA />
    </>
  );
}
