import { Fragment } from 'react';

import { ArrowRight, Calendar, Clock, MapPin, Star, Users } from 'lucide-react';

import type pastEvents from '@/data/pastEvents';
import type upcomingEvents from '@/data/upcomingEvents';
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
      className={`bg-slate-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:translate-y-[-2px] ${isFeatured ? 'ring-2 ring-green-500/20' : ''}`}
    >
      {isFeatured ? (
        <div className="flex items-center mb-4">
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-yellow-400 text-sm font-medium">Featured Event</span>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2 mb-4">
        {((isPast ? [] : event.tags) ?? []).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 hover:text-green-400 transition-colors duration-300">
        {event.title}
      </h3>

      {!isPast && (
        <Fragment>
          <div className="space-y-2 mb-4 text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-gray-300">
                {event.attendees}/{event.maxAttendees} attending
              </span>
            </div>
            <div className="text-sm text-gray-400">by {event.speaker}</div>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
              style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
            />
          </div>
        </Fragment>
      )}

      {isPast ? (
        <Fragment>
          <div className="space-y-2 mb-4 text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.attendees} attended</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-3 text-yellow-400" />
              <span>{event.rating}/5.0 rating</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Event Highlights:</h4>
            <div className="flex flex-wrap gap-2">
              {event.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </Fragment>
      ) : null}

      <button
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
        type="button"
      >
        {isPast ? 'View Summary' : 'Register Now'}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default EventCard;
