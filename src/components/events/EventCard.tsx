import { Calendar, Clock, MapPin, MessageSquareIcon, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import FeaturedText from '@/components/events/event/FeaturedText';
import Typography from '@/components/ui/Typography';
import getFormattedDate from '@/utils/getFormattedDate';

import type { MouseEvent } from 'react';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventCardProps {
  event: (typeof events)[number];
}

const EventCard: Component<EventCardProps> = (props) => {
  const { event } = props;
  const {
    title,
    slug,
    isTBD,
    startDate,
    time,
    location,
    registrationLink,
    attendees,
    shortDescription,
    image,
    isPast,
    isFeatured,
    category,
  } = event;

  const handleRegister = (e: MouseEvent) => {
    e.preventDefault();
    window.open(registrationLink, '_blank');
  };

  const tbdPoint = [
    {
      icon: MessageSquareIcon,
      value: 'To Be Announced',
    },
  ];

  const eventPoints = [
    {
      icon: Calendar,
      value: getFormattedDate(startDate),
    },
    {
      icon: Clock,
      value: time,
    },
    {
      icon: MapPin,
      value: location,
    },
    {
      icon: Users,
      value: `${attendees} Attendees`,
    },
  ];

  return (
    <Link className="group flex h-full" href={`/events/${slug}`}>
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-700 bg-slate-900/20 transition-all duration-300 hover:scale-105 hover:border-green-500">
        <div className="relative">
          <Image
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={image}
          />
          <div className="absolute left-4 top-4 flex gap-2">
            {[...(isFeatured ? ['Featured'] : []), category].map((tag) => (
              <Typography
                key={tag}
                as="span"
                className="rounded-full bg-green-700 px-3 py-1"
                color="white"
                variant="sm"
                weight="medium"
              >
                {tag}
              </Typography>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col p-6">
          {isFeatured ? <FeaturedText /> : null}
          <Typography
            as="h3"
            className="mb-3 transition-colors group-hover:text-green-400"
            color="white"
            variant="xl"
            weight="bold"
          >
            {title}
          </Typography>
          <Typography as="p" className="mb-4" color="content" variant="content">
            {shortDescription}
          </Typography>
          <div className="mb-4 flex flex-col gap-2">
            {(isTBD ? tbdPoint : eventPoints).map((point) => {
              const { icon: Icon, value } = point;

              return (
                <div key={value} className="flex items-center gap-2">
                  <Icon className="size-4 text-green-400" />
                  <Typography as="span" color="gray-400" variant="content">
                    {value}
                  </Typography>
                </div>
              );
            })}
          </div>
          {!isPast && (
            <div className="mt-auto flex items-center justify-between">
              <button
                className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-center transition-colors disabled:opacity-50"
                disabled={isTBD}
                onClick={handleRegister}
                type="button"
              >
                <Typography as="span" color="white" variant="content">
                  {isTBD ? 'Coming Soon...' : 'Register'}
                </Typography>
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
