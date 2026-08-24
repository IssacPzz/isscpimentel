import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { InterestsAccordion } from "./interests-accordion";

export function InterestsSection() {
  return (
    <section id="interests" className="scroll-mt-24 mist-bg px-4 py-[var(--space-section-y)] sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeader label="Interests" ghost="Interests" misty />
        </Reveal>
        <Reveal delay={80}>
          <InterestsAccordion />
        </Reveal>
      </div>
    </section>
  );
}
