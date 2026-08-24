import Image from "next/image";

interface HeroPortraitProps {
  // Drop a transparent-background PNG cutout at public/portrait.png, then
  // pass src="/portrait.png" — the sizing/positioning below is built to
  // hold that exact shape without any other layout changes.
  src?: string;
}

export function HeroPortrait({ src }: HeroPortraitProps) {
  return (
    <div
      className="pointer-events-none relative z-10 mx-auto aspect-[3/4] w-[clamp(200px,34vw,420px)] shrink-0 sm:mx-0"
      aria-hidden={src ? undefined : "true"}
    >
      {src ? (
        <Image src={src} alt="Issac Pimentel" fill priority className="object-contain object-bottom" />
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
            drop cutout PNG in public/portrait.png
          </span>
        </div>
      )}
    </div>
  );
}
