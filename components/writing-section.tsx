import Link from "next/link";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function WritingSection() {
  return (
    <section id="writing" className="scroll-mt-16 bg-canvas px-[var(--space-gutter)] py-[var(--space-section-y)]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader label="Writing" />
        </Reveal>

        <Reveal delay={80}>
          <div className="border-t border-hairline">
            <Link
              href="/writing"
              className="grid grid-cols-[minmax(7.875rem,11.25rem)_1fr_auto] items-start gap-4 border-b border-hairline px-1 py-5 no-underline transition-colors hover:bg-tag-bg sm:gap-9 max-[640px]:grid-cols-[1fr_auto] max-[640px]:gap-3"
            >
              <span className="pt-[0.55em] font-mono text-[10.5px] uppercase tracking-[0.17em] text-muted max-[640px]:col-span-2 max-[640px]:pt-0">
                Substack
              </span>
              <span>
                <span className="text-[clamp(1.25rem,2.7vw,1.875rem)] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
                  Read the newsletter
                  <i className="ml-[0.45em] align-[0.55em] font-mono text-[0.4em] not-italic text-muted">↗</i>
                </span>
                <span className="mt-[0.45em] block max-w-[54ch] text-[15px] text-muted">
                  Notes on building things, closing things, and everything I get wrong in between.
                </span>
              </span>
              <span
                className="grid aspect-[16/10] w-[clamp(5.25rem,11vw,9.25rem)] place-items-center border border-hairline font-mono text-[9px] uppercase tracking-[0.14em] text-[#8d8c86] max-[640px]:w-[4.75rem]"
                style={{ background: "linear-gradient(150deg, #dedcd5, #cbc9c2)" }}
              >
                Latest
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
