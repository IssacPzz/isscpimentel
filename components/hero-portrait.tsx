import Image from "next/image";

interface HeroPortraitProps {
  // Drop a photo (or eventually a transparent cutout) at public/portrait.jpg,
  // then pass src="/portrait.jpg". It renders as a small circular accent
  // centered behind the name — the outer box below stays the same size
  // either way, so swapping the file later needs no layout changes.
  src?: string;
}

export function HeroPortrait({ src }: HeroPortraitProps) {
  return (
    <div
      className="pointer-events-none relative mx-auto aspect-[3/4] w-[clamp(200px,34vw,420px)] shrink-0 sm:mx-0"
      aria-hidden={src ? undefined : "true"}
    >
      {src ? (
        <div className="absolute left-1/2 top-1/2 aspect-square w-[clamp(110px,14vw,180px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[var(--shadow-card)] ring-1 ring-ink/10">
          <Image src={src} alt="Issac Pimentel" fill priority className="object-cover" />
        </div>
      ) : (
        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] border-2 border-dashed border-ink/25 bg-gradient-to-b from-ink/[0.06] to-ink/[0.12]">
          <svg
            viewBox="0 0 200 260"
            className="absolute inset-0 h-full w-full text-ink/15"
            fill="currentColor"
          >
            <circle cx="100" cy="82" r="52" />
            <path d="M100 150c-55 0-90 40-95 110h190c-5-70-40-110-95-110Z" />
          </svg>
          <span className="absolute inset-x-3 bottom-4 text-center font-body text-2xs leading-snug text-ink/40">
            Portrait placeholder
            <br />
            drop cutout in public/portrait.jpg
          </span>
        </div>
      )}
    </div>
  );
}
