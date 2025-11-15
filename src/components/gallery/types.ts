/**
 * Gallery Component Types
 * Type definitions for the CommunityGallery component
 */

import type { StaticImageData } from 'next/image';

export interface GalleryItem {
  id: string;
  title: string;
  author?: string;
  src: StaticImageData;
  srcBlur?: string;
  width?: number;
  height?: number;
  tags?: string[];
  date?: string; // ISO string
  popularity?: number;
}

export interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}
