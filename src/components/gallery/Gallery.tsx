'use client';

import GalleryGrid from '@/components/gallery/GalleryGrid';

import type { GalleryProps } from '@/components/gallery/types';
import type { Component } from '@/types';

const Gallery: Component<GalleryProps> = ({ items }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
    <div className="container mx-auto px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Community Gallery</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Explore our vibrant community through photos from meetups, workshops, and events.
        </p>
      </div>

      <GalleryGrid items={items} />
    </div>
  </div>
);

export default Gallery;
