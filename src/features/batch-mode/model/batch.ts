export const MAX_BATCH_FILES = 20;
export function acceptBatch(files: FileList | File[]) { return Array.from(files).filter(file => file.type.startsWith('image/')).slice(0, MAX_BATCH_FILES); }
