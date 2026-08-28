import Image from "next/image";
import { PillButton } from "./pill-button";

export function Hero() {
  return (
    <header className="grid items-stretch min-[900px]:min-h-[calc(100svh-65px)] min-[900px]:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col justify-center px-[var(--space-gutter)] py-10 min-[900px]:max-w-[760px] min-[900px]:py-[clamp(2.5rem,6vw,5.375rem)] min-[900px]:pr-0">
        <h1
          className="font-display font-black uppercase leading-[0.85] tracking-[-0.04em] text-ink"
          style={{ fontSize: "var(--text-hero)" }}
        >
          <span className="block stroke-text-thick stroke-text-thick--on-solid">Issac</span>
          <span>Pimentel</span>
        </h1>

        <p className="mb-3.5 mt-7 font-mono text-[11px] uppercase tracking-[0.3em] text-muted min-[900px]:mt-10">
          Web developer · Lemoore, California
        </p>

        <p className="max-w-[36ch] text-[clamp(1.0625rem,2vw,1.25rem)] leading-[1.55] text-body">
          I build fast, focused sites for people who need to launch — then spend
          the rest of my time on whatever&rsquo;s worth building next.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5 min-[900px]:mt-9">
          <PillButton href="#selected-work">See the work</PillButton>
          <PillButton href="#photography" variant="light">
            Photographs
          </PillButton>
        </div>
      </div>

      <div className="relative aspect-[5/4] min-[900px]:aspect-auto">
        <Image
          src="/photos/IMG_0179.JPG"
          alt="Downtown Detroit, shot from the street"
          fill
          priority
          sizes="(min-width: 900px) 45vw, 100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(200deg, rgba(0,0,0,.18), rgba(0,0,0,.42))" }}
        />
        <span className="absolute bottom-0 left-0 bg-black/40 px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/72">
          Detroit, MI · 2026
        </span>
      </div>
    </header>
  );
}
