export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';
export interface Preset { slug:string; title:string; description:string; category:'dimensions'|'file-size'|'utility'; width?:number; height?:number; maxSizeKB?:number; format?:OutputFormat; utility?:'batch'|'splitter'|'signature'; }
