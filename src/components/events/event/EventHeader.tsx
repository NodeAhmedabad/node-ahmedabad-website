import { Calendar, Clock, MapPin, Users } from 'lucide-react';

import EventHeaderActions from '@/components/events/event/EventHeaderActions';
import FeaturedText from '@/components/events/event/FeaturedText';
import ScrollReveal from '@/components/ScrollReveal';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventHeaderProps {
  event: (typeof events)[number];
}

const EventHeader: Component<EventHeaderProps> = (props) => {
  const { event } = props;
  const { title, date, time, location, attendees, description, isFeatured } = event;

  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
    {
      icon: Clock,
      label: 'Time',
      value: time,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: location,
    },
    {
      icon: Users,
      label: 'Attendees',
      value: attendees,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-12">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                {isFeatured ? <FeaturedText /> : null}
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                  {title}
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-gray-300">{description}</p>
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {details.map((item) => {
                    const { icon: Icon, label, value } = item;

                    return (
                      <div
                        key={value}
                        className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4"
                      >
                        <Icon className="mr-3 size-5 text-green-400" />
                        <div>
                          <div className="text-sm text-gray-400">{label}</div>
                          <div className="font-medium text-white">{value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <EventHeaderActions event={event} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHeader;
