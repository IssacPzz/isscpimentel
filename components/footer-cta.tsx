import { PillButton } from "./pill-button";
import { SocialRow } from "./social-links";
import { Reveal } from "./reveal";

export function FooterCta() {
  return (
    <section className="relative mist-bg overflow-hidden px-4 py-[var(--space-section-y)] sm:px-6">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-white-pill px-4 py-2 text-xs font-medium text-ink shadow-[var(--shadow-pill)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance work
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink text-[clamp(2.25rem,8vw,5.5rem)]">
            Let&rsquo;s build
            <br />
            <span className="stroke-text-thick stroke-text-thick--on-mist">something real</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-md text-base leading-[1.6] text-body sm:text-md">
            New builds, redesigns, or ongoing work — if it needs to launch and hold
            up, I&rsquo;m interested. I read every message myself.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <PillButton href="mailto:issacpimentel102@gmail.com" className="mt-8">
            Let&rsquo;s Talk
          </PillButton>
        </Reveal>

        <Reveal delay={320} className="mt-10">
          <SocialRow />
        </Reveal>
      </div>
    </section>
  );
}
