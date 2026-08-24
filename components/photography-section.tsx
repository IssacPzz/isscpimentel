import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

interface Frame {
  caption: string;
  ratio: string;
}

// Placeholder tiles — swap for real photos in public/photos/ and replace
// this array with { src, alt } pairs rendered through next/image.
const frames: Frame[] = [
  { caption: "GT350, 6AM", ratio: "aspect-[4/5]" },
  { caption: "Wet asphalt", ratio: "aspect-[3/4]" },
  { caption: "ThinkPad, desk light", ratio: "aspect-[4/3]" },
  { caption: "Old Volvo, backroad", ratio: "aspect-square" },
  { caption: "Chrome bumper", ratio: "aspect-[3/4]" },
  { caption: "Parking lot, dusk", ratio: "aspect-[4/5]" },
];

export function PhotographySection() {
  return (
    <section className="bg-canvas px-4 py-[var(--space-section-y)] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader label="Photography" ghost="Photo" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 columns-2 gap-4 sm:mt-10 md:columns-3 md:gap-5">
            {frames.map((frame) => (
              <div
                key={frame.caption}
                className={`group relative mb-4 overflow-hidden rounded-card-sm bg-gradient-to-br from-ink/10 to-ink/[0.04] md:mb-5 ${frame.ratio}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-ink/15" fill="currentColor">
                    <path d="M9.4 4 7.8 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.8L14.6 4Zm2.6 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-[var(--dur-fast)] group-hover:opacity-100">
                  <span className="p-3 text-xs font-medium text-inverse">{frame.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
