import Image from 'next/image';
import Link from 'next/link';

import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import cn from '@/lib/cn';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventSpeakersProps {
  event: (typeof events)[number];
}

const EventSpeakers: Component<EventSpeakersProps> = (props) => {
  const { event } = props;
  const { speakers } = event;

  return (
    <Section>
      <ContentWrapper
        description="Learn more about the professionals delivering impactful talks throughout the event."
        title="Meet Your Speakers"
      />
      <div className="mx-auto max-w-6xl">
        <div
          className={cn(
            'grid grid-cols-1 justify-center justify-items-center gap-6 sm:grid-cols-2 sm:gap-8',
            {
              'lg:grid-cols-3': speakers.length === 3,
            },
          )}
        >
          {speakers.map((speaker, index) => {
            const { name, designation, company, image, shortBio, slug } = speaker;

            return (
              <Link key={name} className="size-full" href={`/speakers/${slug}`}>
                <Box
                  content={`${designation} @${company}`}
                  contentProps={{ color: 'green-400', variant: 'content' }}
                  delay={index * 100}
                  description={shortBio}
                  label={name}
                  labelProps={{ className: 'mb-1' }}
                  scrollRevealClassName="h-full"
                  customIcon={
                    <Image
                      alt={name}
                      className="mx-auto mb-4 size-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                      height={96}
                      loading="lazy"
                      src={image}
                      width={96}
                    />
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default EventSpeakers;
