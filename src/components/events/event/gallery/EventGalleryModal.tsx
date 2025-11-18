import { useEffect } from 'react';

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import Image from 'next/image';

import MatrixBackground from '@/components/events/event/gallery/MatrixBackground';
import Typography from '@/components/ui/Typography';

import type { KeyboardEvent, MouseEvent } from 'react';

import type { EventGalleryGridCardProps } from '@/components/events/event/gallery/EventGalleryGridCard';
import type { Component } from '@/types';

interface EventGalleryModalProps {
  currentIndex: number;
  item: EventGalleryGridCardProps['item'];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onTouchEnd: () => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchStart: (e: TouchEvent) => void;
  totalCount: number;
}

const EventGalleryModal: Component<EventGalleryModalProps> = (props) => {
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

  const { title, src, width, height } = item;

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') onClose();
  };

  const handlePrevious = (e: MouseEvent) => {
    e.stopPropagation();
    onPrev();
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    onNext();
  };

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
      onKeyUp={handleKeyUp}
      role="button"
      tabIndex={0}
    >
      <MatrixBackground />
      <div className="pointer-events-none absolute inset-0 bg-black/60" />
      <div
        className="relative z-10 flex size-full animate-lightbox-open flex-col p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        role="presentation"
      >
        <button
          aria-label="Close lightbox"
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={onClose}
          type="button"
        >
          <XIcon className="size-6" />
        </button>

        <div className="relative flex flex-1 items-center justify-center">
          <Image
            priority
            alt={title}
            className="max-h-[calc(100vh-200px)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            height={height ?? 800}
            src={src}
            width={width ?? 1200}
          />
        </div>

        <button
          aria-label="Previous image"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:block"
          onClick={handlePrevious}
          type="button"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          aria-label="Next image"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:block"
          onClick={handleNext}
          type="button"
        >
          <ChevronRightIcon className="size-6" />
        </button>

        <div className="relative mt-4 text-center">
          <button
            aria-label="Previous image"
            className="absolute left-2 top-1 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:hidden"
            onClick={handlePrevious}
            type="button"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-2 top-1 rounded-full bg-slate-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-[941px]:hidden"
            onClick={handleNext}
            type="button"
          >
            <ChevronRightIcon className="size-5" />
          </button>
          <Typography as="p" className="mb-1 px-16" color="white" variant="lg" weight="bold">
            {title}
          </Typography>
          <Typography as="p" className="mt-2" color="gray-500" variant="sm">
            {currentIndex + 1} / {totalCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EventGalleryModal;
