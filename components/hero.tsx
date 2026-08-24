import { PillButton } from "./pill-button";
import { HeroPortrait } from "./hero-portrait";
import { SocialStack, SocialRow } from "./social-links";

export function Hero() {
  return (
    <section className="relative px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:pr-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex min-h-[clamp(240px,42vw,520px)] items-center justify-center">
          <h1
            className="relative z-0 flex w-full flex-col items-center justify-center gap-1 text-center font-display font-black uppercase leading-[0.85] tracking-[-0.03em] text-ink sm:flex-row sm:justify-between sm:gap-0 sm:text-left"
            style={{ fontSize: "var(--text-hero)" }}
          >
            <span className="stroke-text-thick">ISSAC</span>
            <span>PIMENTEL</span>
          </h1>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <HeroPortrait />
          </div>
        </div>

        <div className="relative z-20 mt-10 flex flex-col items-center gap-8 text-center sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="max-w-md">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Freelance Web Developer
            </p>
            <p className="mt-3 text-base leading-[1.6] text-body sm:text-md">
              I build fast, focused sites for people who need to launch — then spend
              the rest of my time on whatever&rsquo;s worth building next.
            </p>
            <PillButton href="#work" className="mt-6">
              View Selected Work
            </PillButton>
          </div>

          <SocialRow className="lg:hidden" />
        </div>
      </div>

      <div className="pointer-events-auto absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
        <SocialStack />
      </div>
    </section>
  );
}
