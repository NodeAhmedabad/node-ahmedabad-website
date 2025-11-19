import Image from 'next/image';

import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type { KeyboardEvent } from 'react';

import type { EventGalleryGridProps } from '@/components/events/event/gallery/EventGalleryGrid';
import type { Component } from '@/types';

export interface EventGalleryGridCardProps {
  item: EventGalleryGridProps['gallery'][number];
  index: number;
  onClick: () => void;
}

const EventGalleryGridCard: Component<EventGalleryGridCardProps> = (props) => {
  const { item, index, onClick } = props;
  const { title, src, srcBlur, width, height } = item;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') onClick();
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      style={{ animationDelay: `${index * 40}ms` }}
      tabIndex={0}
      className={cn(
        'group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-slate-800 shadow-md transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/10',
        'focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900',
        'animate-card-in',
      )}
    >
      <div className="contents">
        <div className="relative aspect-auto overflow-hidden">
          <Image
            alt={title}
            blurDataURL={srcBlur}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            height={height ?? 400}
            placeholder={srcBlur ? 'blur' : 'empty'}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={src}
            width={width ?? 600}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent p-4 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <Typography as="p" className="mb-1" color="white" variant="lg" weight="bold">
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EventGalleryGridCard;
