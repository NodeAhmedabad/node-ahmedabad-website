import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import GalleryGrid from '@/components/events/event/gallery/GalleryGrid';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventGalleryProps {
  event: (typeof events)[number];
}

const EventGallery: Component<EventGalleryProps> = (props) => {
  const { event } = props;
  const { gallery } = event;

  return (
    <Section>
      <ContentWrapper
        description="Explore our vibrant community through photos from meetups, workshops, and events."
        title="Community Gallery"
      />
      <GalleryGrid items={gallery} />
    </Section>
  );
};

export default EventGallery;
