import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Photography" };

// Replace these with your actual photos — either local files in /public/photos/
// or remote URLs (add the hostname to next.config.ts > images.remotePatterns).
const photos: { src: string; alt: string; width: number; height: number }[] = [
  // Example:
  // { src: "/photos/sample-1.jpg", alt: "Description of photo", width: 1200, height: 800 },
];

export default function PhotographyPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Photography</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-12">
        A collection of photos from wherever I happen to be.
      </p>

      {photos.length === 0 ? (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-12 text-center">
          <p className="text-neutral-400 dark:text-neutral-500 text-sm">
            Add your photos to{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-xs">
              public/photos/
            </code>{" "}
            and update the{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-xs">
              photos
            </code>{" "}
            array in this file.
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
