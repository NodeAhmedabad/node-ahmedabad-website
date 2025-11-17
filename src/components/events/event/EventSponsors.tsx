import Image from 'next/image';

import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventSponsorsProps {
  event: (typeof events)[number];
}

const EventSponsors: Component<EventSponsorsProps> = (props) => {
  const { event } = props;
  const { sponsors } = event;

  if (sponsors.length === 0) return null;

  return (
    <Section>
      <ContentWrapper
        description="Recognizing the sponsors whose support helps us deliver impactful community events."
        title="Event Sponsors"
      />
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {sponsors.map((sponsor) => {
              const { name, logo, partner } = sponsor;

              return (
                <div key={name} className="flex flex-col items-center">
                  <div className="mb-4 bg-white p-4">
                    <Image alt={name} className="h-16 w-auto" src={logo} />
                  </div>
                  <Typography as="p" color="green-400" variant="xl">
                    {name}
                  </Typography>
                  <Typography as="p" color="gray-400" variant="content">
                    {partner}
                  </Typography>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default EventSponsors;
