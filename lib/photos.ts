import fs from "fs";
import path from "path";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function readJpegSize(buffer: Buffer): { width: number; height: number } | null {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;

  let offset = 2;
  while (offset + 3 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    // SOF0-SOF15 markers (excluding DHT 0xC4, JPG 0xC8, DAC 0xCC) carry the
    // frame dimensions — this is the actual pixel size, before EXIF rotation.
    const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSOF) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    offset += 2 + length;
  }
  return null;
}

function readPngSize(buffer: Buffer): { width: number; height: number } | null {
  const isPng = buffer.length >= 24 && buffer.readUInt32BE(0) === 0x89504e47;
  if (!isPng) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function getImageSize(filePath: string): { width: number; height: number } {
  const buffer = fs.readFileSync(filePath);
  const size = readJpegSize(buffer) ?? readPngSize(buffer);
  if (!size) {
    throw new Error(`Could not read image dimensions for ${filePath}`);
  }
  return size;
}

export function getPhotos(): Photo[] {
  if (!fs.existsSync(PHOTOS_DIR)) return [];

  return fs
    .readdirSync(PHOTOS_DIR)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const { width, height } = getImageSize(path.join(PHOTOS_DIR, file));
      return { src: `/photos/${file}`, alt: file, width, height };
    });
}
