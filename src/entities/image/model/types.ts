import type { OutputFormat } from '../../preset/model/types';
export interface ProcessOptions { width?:number; height?:number; format:OutputFormat; quality?:number; maxSizeKB?:number; }
export interface ProcessedImage { blob:Blob; width:number; height:number; quality:number; }
