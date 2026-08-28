import type { Metadata } from "next";
import Image from "next/image";
import { getPhotos } from "@/lib/photos";

export const metadata: Metadata = { title: "Photography" };

export default function PhotographyPage() {
  const photos = getPhotos();

  return (
    <div className="mx-auto w-full max-w-[1200px] px-[var(--space-gutter)] py-16">
      <h1 className="text-3xl font-black uppercase tracking-[-0.02em] text-ink">Photography</h1>
      <p className="mb-12 mt-2 text-body">A collection of photos from wherever I happen to be.</p>

      {photos.length === 0 ? (
        <div className="border border-dashed border-hairline p-12 text-center">
          <p className="text-sm text-muted">
            Add your photos to <code className="bg-tag-bg px-1 py-0.5 text-xs">public/photos/</code> to see them
            here.
          </p>
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {photos.map((photo) => (
            <div key={photo.src} className="mb-4 break-inside-avoid">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full border border-hairline object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
