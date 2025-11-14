'use client';

import { Fragment, useEffect, useState } from 'react';

import { CalendarArrowDownIcon, CalendarArrowUpIcon, CalendarIcon, Search } from 'lucide-react';

import Section from '@/app/Section';
import EventCard from '@/components/events/EventCard';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import events, { categories } from '@/data/events/events';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const categoryOptions = [
  {
    icon: CalendarIcon,
    label: 'All Events',
    value: categories.ALL,
  },
  {
    icon: CalendarArrowUpIcon,
    label: 'Upcoming Events',
    value: categories.UPCOMING,
  },
  {
    icon: CalendarArrowDownIcon,
    label: 'Past Events',
    value: categories.PAST,
  },
];

const EventListing: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.ALL);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleCategory = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };

  useEffect(() => {
    const getFilteredCategories = () => {
      const selectedCategoryEvents =
        activeTab === categories.ALL
          ? events
          : events.filter((event) =>
              activeTab === categories.PAST ? event.isPast : !event.isPast,
            );

      return selectedCategoryEvents.filter((el) =>
        el.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    };

    setFilteredEvents(getFilteredCategories());
  }, [activeTab, searchTerm]);

  return (
    <Fragment>
      <Section className="!py-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="relative w-full max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
              type="text"
              value={searchTerm}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryOptions.map((tab) => {
              const { icon: Icon, label, value } = tab;

              return (
                <button
                  key={value}
                  onClick={() => handleCategory(value)}
                  type="button"
                  className={cn(
                    'flex items-center gap-2 rounded-lg border border-green-500/30 px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900',
                    activeTab === value
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-slate-800 text-green-400 hover:bg-slate-700',
                  )}
                >
                  <Icon className="size-4" />
                  <Typography as="span" variant="content" weight="medium">
                    {label}
                  </Typography>
                </button>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => {
              const { slug } = event;

              return (
                <ScrollReveal key={slug} delay={index * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div>
            <Typography as="p" className="text-center" color="gray-400" variant="xl">
              No events found
            </Typography>
          </div>
        )}
      </Section>
    </Fragment>
  );
};

export default EventListing;
