export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface ProcessOptions {
  width?: number;
  height?: number;
  format: OutputFormat;
  quality?: number;
  maxSizeKB?: number;
}

export interface ProcessedImage {
  blob: Blob;
  width: number;
  height: number;
  quality: number;
}

export interface ImageMetadata {
  width: number;
  height: number;
  size: number;
  type: string;
}

const exportBlob = (canvas: HTMLCanvasElement, type: OutputFormat, quality?: number) =>
  new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => blob ? resolve(blob) : reject(new Error('The browser could not export this image.')),
      type,
      quality,
    );
  });

const draw = (
  bitmap: ImageBitmap,
  width: number,
  height: number,
  format: OutputFormat,
) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { alpha: format === 'image/png' });

  if (!context) {
    throw new Error('Canvas processing is unavailable in this browser.');
  }

  if (format === 'image/jpeg') {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  context.drawImage(bitmap, 0, 0, width, height);
  return canvas;
};

export async function readImageMetadata(source: File | Blob): Promise<ImageMetadata> {
  const bitmap = await createImageBitmap(source);
  const metadata = {
    width: bitmap.width,
    height: bitmap.height,
    size: source.size,
    type: source.type,
  };
  bitmap.close();
  return metadata;
}

export async function processImage(
  source: File | Blob,
  options: ProcessOptions,
): Promise<ProcessedImage> {
  const bitmap = await createImageBitmap(source);
  let width = options.width || bitmap.width;
  let height = options.height || bitmap.height;
  let canvas = draw(bitmap, width, height, options.format);
  let quality = options.quality ?? 0.9;
  let blob = await exportBlob(canvas, options.format, quality);
  const target = options.maxSizeKB ? options.maxSizeKB * 1024 : 0;

  if (target && options.format !== 'image/png') {
    let low = 0.08;
    let high = 1;
    let best = blob.size <= target ? blob : null;

    for (let index = 0; index < 9; index += 1) {
      const candidateQuality = (low + high) / 2;
      const candidate = await exportBlob(canvas, options.format, candidateQuality);

      if (candidate.size <= target) {
        best = candidate;
        quality = candidateQuality;
        low = candidateQuality;
      } else {
        high = candidateQuality;
      }
    }

    blob = best ?? await exportBlob(canvas, options.format, 0.08);
  }

  if (target && options.format === 'image/png' && blob.size > target) {
    for (let attempt = 0; attempt < 6 && blob.size > target; attempt += 1) {
      const factor = Math.max(0.35, Math.sqrt(target / blob.size) * 0.94);
      width = Math.max(1, Math.round(width * factor));
      height = Math.max(1, Math.round(height * factor));
      canvas = draw(bitmap, width, height, options.format);
      blob = await exportBlob(canvas, options.format);
    }
  }

  bitmap.close();
  return { blob, width, height, quality };
}
