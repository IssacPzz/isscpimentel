import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { InterestsSection } from "@/components/interests-section";
import { PhotographySection } from "@/components/photography-section";
import { FooterCta } from "@/components/footer-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <InterestsSection />
      <PhotographySection />
      <FooterCta />
    </>
  );
}
