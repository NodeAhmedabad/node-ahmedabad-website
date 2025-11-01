import ScrollReveal from '@/components/ScrollReveal';

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
    <section className="bg-slate-800/30 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl font-bold text-white">Event Sponsors</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {sponsors.map((sponsor) => {
                const { name, logo, tier } = sponsor;

                return (
                  <div key={name} className="flex flex-col items-center">
                    <img
                      alt={name}
                      className="mb-2 h-16 w-auto grayscale transition-all duration-300 hover:grayscale-0"
                      src={logo}
                    />
                    <span className="text-xs text-gray-400">{tier} Sponsor</span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
