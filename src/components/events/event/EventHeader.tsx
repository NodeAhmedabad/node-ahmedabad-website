import { CalendarIcon, ClockIcon, MapPinIcon, MessageSquareIcon, UsersIcon } from 'lucide-react';

import EventHeaderActions from '@/components/events/event/EventHeaderActions';
import FeaturedText from '@/components/events/event/FeaturedText';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import getFormattedDate from '@/utils/getFormattedDate';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventHeaderProps {
  event: (typeof events)[number];
}

const EventHeader: Component<EventHeaderProps> = (props) => {
  const { event } = props;
  const { title, isTBD, startDate, endDate, time, location, attendees, description, isFeatured } =
    event;

  const tbdDetails = [
    {
      icon: MessageSquareIcon,
      label: 'Information',
      value: 'To Be Announced',
    },
  ];

  const details = [
    {
      icon: CalendarIcon,
      label: 'Date',
      value: [getFormattedDate(startDate), ...(endDate ? [getFormattedDate(endDate)] : [])].join(
        '\n',
      ),
    },
    {
      icon: ClockIcon,
      label: 'Time',
      value: time,
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: location,
    },
    {
      icon: UsersIcon,
      label: 'Attendees',
      value: attendees,
    },
  ];

  return (
    // 80px fix height of header
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-16 pt-32 sm:pb-28 sm:pt-48">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                {isFeatured ? <FeaturedText /> : null}
                <Typography
                  as="h1"
                  className="mb-6 text-center sm:text-left"
                  color="white"
                  variant="banner"
                >
                  {title}
                </Typography>
                <Typography
                  as="p"
                  className="mb-8 text-center sm:text-left"
                  color="content"
                  variant="lg"
                  weight="normal"
                >
                  {description}
                </Typography>
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  {(isTBD ? tbdDetails : details).map((item) => {
                    const { icon: Icon, label, value } = item;

                    return (
                      <div
                        key={label}
                        className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4"
                      >
                        <Icon className="mr-3 size-5 text-green-400" />
                        <div>
                          <Typography as="p" color="content" variant="sm">
                            {label}
                          </Typography>
                          <Typography as="p" color="white" variant="content" weight="medium">
                            {value}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {isTBD ? null : (
                  <EventHeaderActions event={{ ...event, agenda: [], speakers: [] }} />
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHeader;
