import type { Preset, OutputFormat } from './types';
const dimensions: Preset[] = [
  ['youtube-banner','Resize a YouTube Banner','Resize to the recommended 2560 × 1440 pixels.',2560,1440],
  ['instagram-post','Resize an Instagram Post','Create a crisp square post at 1080 × 1080.',1080,1080],
  ['instagram-story','Resize an Instagram Story','Fit images to the vertical 1080 × 1920 story format.',1080,1920],
  ['facebook-cover','Resize a Facebook Cover','Prepare a cover image at 851 × 315 pixels.',851,315],
  ['linkedin-banner','Resize a LinkedIn Banner','Create a professional banner at 1584 × 396.',1584,396],
].map(([slug,title,description,width,height])=>({slug,title,description,width,height,category:'dimensions'} as Preset));
const sizes = [20,50,100,200,500,1024,2048];
const formats: [string,OutputFormat][] = [['jpeg','image/jpeg'],['png','image/png'],['webp','image/webp'],['image','image/jpeg']];
const fileSizes: Preset[] = formats.flatMap(([name,format])=>sizes.map(kb=>({slug:`compress-${name}-to-${kb>=1024?kb/1024+'mb':kb+'kb'}`,title:`Compress ${name === 'image' ? 'Image' : name.toUpperCase()} to ${kb>=1024?kb/1024+'MB':kb+'KB'} Online`,description:`Reduce your ${name} file to ${kb>=1024?kb/1024+'MB':kb+'KB'} privately in your browser.`,category:'file-size',maxSizeKB:kb,format})));
const utility: Preset[] = [
  {slug:'batch-resize',title:'Batch Resize Images',description:'Resize several images in one private browser session.',category:'utility',utility:'batch'},
  {slug:'image-splitter',title:'Image Splitter Online',description:'Prepare an image for splitting into a grid.',category:'utility',utility:'splitter'},
  {slug:'signature-resizer',title:'Signature Resizer',description:'Resize a signature for digital forms and documents.',category:'utility',utility:'signature'},
];
export const presets=[...dimensions,...fileSizes,...utility];
export const getPreset=(slug:string)=>presets.find(p=>p.slug===slug);
