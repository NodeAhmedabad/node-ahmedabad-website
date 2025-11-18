/**
 * Gallery Component Types
 * Type definitions for the CommunityGallery component
 */

import type { StaticImageData } from 'next/image';

export interface EventGalleryItem {
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

export interface EventGalleryProps {
  items: EventGalleryItem[];
  className?: string;
}
