import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { PhotographySection } from "@/components/photography-section";
import { AboutSection } from "@/components/about-section";
import { WritingSection } from "@/components/writing-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <PhotographySection />
      <AboutSection />
      <WritingSection />
    </>
  );
}
