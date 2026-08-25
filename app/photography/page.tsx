import type { Metadata } from "next";
import Image from "next/image";
import { getPhotos } from "@/lib/photos";

export const metadata: Metadata = { title: "Photography" };

export default function PhotographyPage() {
  const photos = getPhotos();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-ink">Photography</h1>
      <p className="text-body mb-12">
        A collection of photos from wherever I happen to be.
      </p>

      {photos.length === 0 ? (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-12 text-center">
          <p className="text-muted text-sm">
            Add your photos to{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-xs">
              public/photos/
            </code>{" "}
            to see them here.
          </p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="rounded-lg w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
