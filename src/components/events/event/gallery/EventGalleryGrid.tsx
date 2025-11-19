'use client';

import { useCallback, useEffect, useState } from 'react';

import EventGalleryGridCard from '@/components/events/event/gallery/EventGalleryGridCard';
import EventGalleryModal from '@/components/events/event/gallery/EventGalleryModal';

import type events from '@/data/events/events';
import type { Component } from '@/types';

export interface EventGalleryGridProps {
  gallery: (typeof events)[number]['gallery'];
}

const EventGalleryGrid: Component<EventGalleryGridProps> = (props) => {
  const { gallery } = props;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const openPhotoModal = useCallback((index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closePhotoModal = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigatePhotoModal = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedPhotoIndex === null) return;

      const newIndex = (() => {
        if (direction === 'prev') {
          return selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : gallery.length - 1;
        }

        if (selectedPhotoIndex < gallery.length - 1) {
          return selectedPhotoIndex + 1;
        }

        return 0;
      })();

      setSelectedPhotoIndex(newIndex);
    },
    [selectedPhotoIndex, gallery.length],
  );

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) navigatePhotoModal('next');
    else if (distance < -minSwipeDistance) navigatePhotoModal('prev');
  }, [touchStart, touchEnd, navigatePhotoModal]);

  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': {
          closePhotoModal();
          break;
        }
        case 'ArrowLeft': {
          navigatePhotoModal('prev');
          break;
        }
        case 'ArrowRight': {
          navigatePhotoModal('next');
          break;
        }
        default: {
          break;
        }
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closePhotoModal, navigatePhotoModal]);

  return (
    <div className="w-full">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {gallery.map((item, index) => {
          const { id } = item;

          return (
            <EventGalleryGridCard
              key={id}
              index={index}
              item={item}
              onClick={() => openPhotoModal(index)}
            />
          );
        })}
      </div>

      {selectedPhotoIndex !== null && (
        <EventGalleryModal
          currentIndex={selectedPhotoIndex}
          item={gallery[selectedPhotoIndex]}
          onClose={closePhotoModal}
          onNext={() => navigatePhotoModal('next')}
          onPrev={() => navigatePhotoModal('prev')}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          totalCount={gallery.length}
        />
      )}
    </div>
  );
};

export default EventGalleryGrid;
