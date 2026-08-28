import Image from "next/image";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { getPhotos } from "@/lib/photos";

const CAPTIONS: Record<string, { title: string; location: string }> = {
  "IMG_0178.JPG": { title: "Spirit of Detroit", location: "MI" },
  "IMG_0273.JPG": { title: "Lafayette Coney", location: "MI" },
};

function captionFor(src: string) {
  const filename = src.split("/").pop() ?? "";
  return CAPTIONS[filename] ?? { title: "Untitled", location: "MI" };
}

export function PhotographySection() {
  const photos = getPhotos();

  return (
    <section
      id="photography"
      className="scroll-mt-16 bg-ink-deep px-[var(--space-gutter)] py-[var(--space-section-y)] text-inverse"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="Photography"
            sub="Mostly cars, mostly cities, mostly whatever is in front of me. I shoot to slow down, not to post."
            inverse
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
            {photos.map((photo, i) => {
              const caption = captionFor(photo.src);
              const aspect = i % 3 === 1 ? "aspect-[4/3]" : "aspect-[4/5]";
              return (
                <figure key={photo.src}>
                  <div className={`relative overflow-hidden border border-hairline-inverse bg-ink-soft ${aspect}`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 45vw"
                    />
                  </div>
                  <figcaption className="mt-2 flex justify-between gap-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-dark">
                    <span>{caption.title}</span>
                    <span>{caption.location}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
