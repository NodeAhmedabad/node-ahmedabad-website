'use client';

import { useState } from 'react';

import { Calendar as CalendarIcon, ExternalLink, Share2 } from 'lucide-react';

import toGoogleLocalDateTime from '@/utils/toGoogleLocalDateTime';

import type events from '@/data/events/events';
import type { Component } from '@/types';

export interface EventHeaderActionsProps {
  event: (typeof events)[number];
}

const EventHeaderActions: Component<EventHeaderActionsProps> = (props) => {
  const { event } = props;
  const { title, date, startTime, endTime, location, mapLink, description, isPast } = event;

  const [copied, setCopied] = useState(false);

  const addToCalendar = () => {
    const start = toGoogleLocalDateTime(date, startTime);
    const end = toGoogleLocalDateTime(date, endTime);

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      location,
      dates: `${start}/${end}`,
    });

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?${params.toString()}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleCopyUrl = async () => {
    if (copied) return;

    await navigator.clipboard.writeText(globalThis.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row">
      {isPast ? null : (
        <button
          className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
          onClick={addToCalendar}
          type="button"
        >
          <CalendarIcon className="mr-2 size-4" />
          Add to Calendar
        </button>
      )}
      <button
        className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 enabled:hover:border-green-500/50 enabled:hover:bg-green-500/10 disabled:cursor-not-allowed"
        disabled={copied}
        onClick={handleCopyUrl}
        type="button"
      >
        <Share2 className="mr-2 size-4" />
        {copied ? 'Copied' : 'Copy URL'}
      </button>
      <a
        className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
        href={mapLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ExternalLink className="mr-2 size-4" />
        Directions
      </a>
    </div>
  );
};

export default EventHeaderActions;
