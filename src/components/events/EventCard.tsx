import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

import FeaturedText from '@/components/events/event/FeaturedText';

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
    date,
    time,
    location,
    attendees,
    shortDescription,
    image,
    isPast,
    isFeatured,
  } = event;

  return (
    <Link className="group flex h-full" href={`/events/${slug}`}>
      <div className="flex flex-col overflow-hidden rounded-xl border border-gray-700 bg-slate-900/20 transition-all duration-300 hover:scale-105 hover:border-green-500">
        <div className="relative">
          <img
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={image}
          />
          <div className="absolute left-4 top-4 flex gap-2">
            {[...(isFeatured ? ['Featured'] : []), isPast ? 'Past' : 'Upcoming'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-700 px-3 py-1 text-sm font-medium capitalize text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col p-6">
          {isFeatured ? <FeaturedText /> : null}
          <div>
            <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
              {title}
            </h3>
            <p className="mb-4 text-gray-300">{shortDescription}</p>
          </div>
          <div>
            <div className="mb-4 space-y-2">
              <div className="flex items-center text-gray-400">
                <Calendar className="mr-2 size-4 text-green-400" />
                <span>
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="mr-2 size-4 text-green-400" />
                <span>{time}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="mr-2 size-4 text-green-400" />
                <span>{location}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Users className="mr-2 size-4 text-green-400" />
                <span>
                  {attendees} {isPast ? 'attended' : 'attendees'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {!isPast && (
                <button
                  className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-white transition-colors"
                  type="button"
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
