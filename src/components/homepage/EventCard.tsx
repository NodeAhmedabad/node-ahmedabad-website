import { Fragment } from 'react';

import { ArrowRight, Calendar, Clock, MapPin, Star, Users } from 'lucide-react';

import type pastEvents from '@/data/homepage/pastEvents';
import type upcomingEvents from '@/data/homepage/upcomingEvents';
import type { Component } from '@/types';

interface PastEvents {
  isPast: true;
  event: (typeof pastEvents)[number];
}

interface UpcomingEvents {
  isPast: false;
  event: (typeof upcomingEvents)[number];
}

type EventCardProps = PastEvents | UpcomingEvents;

const EventCard: Component<EventCardProps> = (props) => {
  const { isPast, event } = props;

  const isFeatured = !isPast && event.featured;

  return (
    <div
      className={`rounded-xl border border-gray-700 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:transform hover:border-green-500/50 ${isFeatured ? 'ring-2 ring-green-500/20' : ''}`}
    >
      {isFeatured ? (
        <div className="mb-4 flex items-center">
          <Star className="mr-2 h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-400">Featured Event</span>
        </div>
      ) : null}

      <div className="mb-4 flex flex-wrap gap-2">
        {((isPast ? [] : event.tags) ?? []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 hover:text-green-400">
        {event.title}
      </h3>

      {!isPast && (
        <Fragment>
          <div className="mb-4 space-y-2 text-gray-300">
            <div className="flex items-center">
              <Calendar className="mr-3 h-4 w-4 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-3 h-4 w-4 text-green-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 h-4 w-4 text-green-400" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="mb-4 line-clamp-2 text-gray-400">{event.description}</p>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-green-400" />
              <span className="text-gray-300">
                {event.attendees}/{event.maxAttendees} attending
              </span>
            </div>
            <div className="text-sm text-gray-400">by {event.speaker}</div>
          </div>

          <div className="mb-4 h-2 w-full rounded-full bg-gray-700">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
              style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
            />
          </div>
        </Fragment>
      )}

      {isPast ? (
        <Fragment>
          <div className="mb-4 space-y-2 text-gray-300">
            <div className="flex items-center">
              <Calendar className="mr-3 h-4 w-4 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-3 h-4 w-4 text-green-400" />
              <span>{event.attendees} attended</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-3 h-4 w-4 text-yellow-400" />
              <span>{event.rating}/5.0 rating</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium text-gray-300">Event Highlights:</h4>
            <div className="flex flex-wrap gap-2">
              {event.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </Fragment>
      ) : null}

      <button
        className="group flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        type="button"
      >
        {isPast ? 'View Summary' : 'Register Now'}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default EventCard;
