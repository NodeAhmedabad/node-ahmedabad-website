import { useEffect } from 'react';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

import MatrixBackground from '@/components/events/event/gallery/MatrixBackground';

import type { EventGalleryItem } from '@/components/events/event/gallery/types';
import type { Component } from '@/types';

interface SinglePhotoModalProps {
  item: EventGalleryItem;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

const SinglePhotoModal: Component<SinglePhotoModalProps> = (props) => {
  const {
    item,
    currentIndex,
    totalCount,
    onClose,
    onPrev,
    onNext,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = props;

  // Handle touch events
  useEffect(() => {
    const container = document.querySelector('[role="dialog"]');
    if (!container) return;

    const handleTouchStart = (e: Event) => onTouchStart(e as TouchEvent);
    const handleTouchMove = (e: Event) => onTouchMove(e as TouchEvent);
    const handleTouchEnd = () => onTouchEnd();

    container.addEventListener('touchstart', handleTouchStart as EventListener);
    container.addEventListener('touchmove', handleTouchMove as EventListener);
    container.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart as EventListener);
      container.removeEventListener('touchmove', handleTouchMove as EventListener);
      container.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [onTouchStart, onTouchMove, onTouchEnd]);

  return (
    <div
      aria-label="Close lightbox overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-md"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClose();
      }}
    >
      {/* Matrix background effect */}
      <MatrixBackground />

      {/* Black overlay layer */}
      <div className="pointer-events-none absolute inset-0 bg-black/60" />

      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        aria-label="Image lightbox"
        aria-modal="true"
        className="relative z-10 flex size-full animate-lightbox-open flex-col p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        role="dialog"
      >
        {/* Close button */}
        <button
          aria-label="Close lightbox"
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={onClose}
          type="button"
        >
          <X className="size-6" />
        </button>

        {/* Image */}
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            priority
            alt={item.title}
            className="max-h-[calc(100vh-200px)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            height={item.height ?? 800}
            src={item.src}
            width={item.width ?? 1200}
          />
        </div>

        {/* Navigation buttons - Desktop only */}
        <button
          aria-label="Previous image"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:block"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          aria-label="Next image"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:block"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Caption */}
        <div className="relative mt-4 text-center">
          {/* Mobile navigation buttons - flanking title */}
          <button
            aria-label="Previous image"
            className="absolute left-2 top-1 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:hidden"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-2 top-1 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:hidden"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight className="size-5" />
          </button>

          <h2 className="mb-1 px-12 text-xl font-bold text-white max-[940px]:px-14 md:px-0 md:text-2xl">
            {item.title}
          </h2>
          {item.author ? (
            <p className="mb-2 text-sm text-gray-400 md:text-base">by {item.author}</p>
          ) : null}
          {item.tags && item.tags.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <p className="mt-2 text-sm text-gray-500">
            {currentIndex + 1} / {totalCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePhotoModal;
