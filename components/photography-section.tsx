import Image from "next/image";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { getPhotos } from "@/lib/photos";

export async function PhotographySection() {
  const photos = getPhotos();

  return (
    <section className="bg-canvas px-4 py-[var(--space-section-y)] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader label="Photography" ghost="Photo" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 columns-2 gap-4 sm:mt-10 md:columns-3 md:gap-5">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="group relative mb-4 overflow-hidden rounded-card-sm bg-ink/[0.04] md:mb-5"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-[var(--dur-fast)] group-hover:opacity-100">
                  <span className="p-3 text-xs font-medium text-inverse">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
