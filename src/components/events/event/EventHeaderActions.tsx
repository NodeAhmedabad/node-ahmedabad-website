'use client';

import { Calendar as CalendarIcon, ExternalLink, Share2Icon } from 'lucide-react';
import { toast } from 'sonner';

import Typography from '@/components/ui/Typography';
import toGoogleLocalDateTime from '@/utils/toGoogleLocalDateTime';

import type events from '@/data/events/events';
import type { Component } from '@/types';

export interface EventHeaderActionsProps {
  event: (typeof events)[number];
}

const EventHeaderActions: Component<EventHeaderActionsProps> = (props) => {
  const { event } = props;
  const { title, startDate, endDate, startTime, endTime, location, mapLink, description, isPast } =
    event;

  const addToCalendar = () => {
    const start = toGoogleLocalDateTime(startDate, startTime);
    const end = toGoogleLocalDateTime(endDate ?? startDate, endTime);

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
    await navigator.clipboard.writeText(globalThis.location.href);
    toast.success('Copied! 📋 Now spread the event link like we spread chai-time gossip ☕😄');
  };

  const handleDirections = () => {
    window.open(mapLink, '_blank');
  };

  const actions = [
    {
      icon: CalendarIcon,
      label: 'Add to Calendar',
      cond: !isPast,
      onClick: addToCalendar,
    },
    {
      icon: Share2Icon,
      label: 'Copy URL',
      cond: true,
      onClick: handleCopyUrl,
    },
    {
      icon: ExternalLink,
      label: 'Directions',
      cond: true,
      onClick: handleDirections,
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {actions.map((action) => {
        const { icon: Icon, label, cond, onClick } = action;

        if (!cond) return null;

        return (
          <button
            key={label}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
            onClick={onClick}
            type="button"
          >
            <Icon className="size-4 text-white" />
            <Typography as="span" color="white" variant="content">
              {label}
            </Typography>
          </button>
        );
      })}
    </div>
  );
};

export default EventHeaderActions;
