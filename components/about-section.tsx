import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-canvas px-[var(--space-gutter)] py-[var(--space-section-y)]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader label="About" />
        </Reveal>
        <Reveal delay={80}>
          <div className="max-w-[58ch] text-[clamp(1.0625rem,2vw,1.1875rem)] leading-[1.66] text-body [&>p+p]:mt-[1.1em]">
            <p>
              I&rsquo;m 21, I live in Lemoore, and I work and learn on whatever I find intersting. I eventaully want to get a bachelor&rsquo;s degree at Fresno State. Two
              associate&rsquo;s degrees already done — business and political science.
            </p>
            <p>
              In between, I build things. Some work. A couple made money and then
              stopped making money, and I closed them instead of pretending
              otherwise. That&rsquo;s most of what I&rsquo;ve actually learned so far.
            </p>
            <p>
              Off the screen: I love working on cars, I love tinkering with Linux on my ThinkPad, and practicing my penmanship with my fountain pen in
              a leather journal.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
