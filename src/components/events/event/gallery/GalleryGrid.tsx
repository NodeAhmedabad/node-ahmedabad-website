'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import SinglePhotoModal from '@/components/events/event/gallery/SinglePhotoModal';
import cn from '@/lib/cn';

import type { EventGalleryItem, EventGalleryProps } from '@/components/events/event/gallery/types';
import type { Component } from '@/types';

interface GalleryCardProps {
  item: EventGalleryItem;
  index: number;
  onClick: () => void;
}

const GalleryCard = ({ item, index, onClick }: GalleryCardProps) => (
  <div
    onClick={onClick}
    role="button"
    style={{ animationDelay: `${index * 40}ms` }}
    tabIndex={0}
    className={cn(
      'group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-slate-800 shadow-md transition-all duration-300 ease-out',
      'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/10',
      'focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900',
      'animate-card-in',
    )}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick();
    }}
  >
    <div className="contents">
      <div className="relative aspect-auto overflow-hidden">
        <Image
          alt={item.title}
          blurDataURL={item.srcBlur}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          height={item.height ?? 400}
          placeholder={item.srcBlur ? 'blur' : 'empty'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={item.src}
          width={item.width ?? 600}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent p-4 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
        <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
        {item.author ? <p className="mb-2 text-sm text-gray-300">by {item.author}</p> : null}
        {item.tags && item.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

const GalleryGrid: Component<EventGalleryProps> = (props) => {
  const { items, className } = props;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Modal open/close handlers
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
          return selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : items.length - 1;
        }

        if (selectedPhotoIndex < items.length - 1) {
          return selectedPhotoIndex + 1;
        }

        return 0;
      })();

      setSelectedPhotoIndex(newIndex);
    },
    [selectedPhotoIndex, items.length],
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

  // Keyboard navigation
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
    <div className={cn('w-full', className)}>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {items.map((item, index) => (
          <GalleryCard
            key={item.id}
            index={index}
            item={item}
            onClick={() => openPhotoModal(index)}
          />
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <SinglePhotoModal
          currentIndex={selectedPhotoIndex}
          item={items[selectedPhotoIndex]}
          onClose={closePhotoModal}
          onNext={() => navigatePhotoModal('next')}
          onPrev={() => navigatePhotoModal('prev')}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          totalCount={items.length}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
