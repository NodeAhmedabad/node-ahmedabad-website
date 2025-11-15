'use client';

import { Fragment, useEffect, useState } from 'react';

import { CalendarArrowDownIcon, CalendarArrowUpIcon, CalendarIcon, Search } from 'lucide-react';

import Section from '@/app/Section';
import EventCard from '@/components/events/EventCard';
import ScrollReveal from '@/components/ScrollReveal';
import Select from '@/components/ui/Select';
import Typography from '@/components/ui/Typography';
import events, { categories } from '@/data/events/events';

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
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="relative w-full flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search events..."
              type="text"
              value={searchTerm}
            />
          </div>
          <div className="flex w-full shrink-0 flex-wrap gap-3 sm:w-auto">
            <div className="w-full min-w-52">
              <Select
                onValueChange={handleCategory}
                options={categoryOptions}
                placeholder="Select category"
                value={activeTab}
              />
            </div>
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
