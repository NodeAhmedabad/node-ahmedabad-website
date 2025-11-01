'use client';

import { Fragment, useState } from 'react';

import { Calendar, Code, Search, Users } from 'lucide-react';

import EventCard from '@/components/events/EventCard';
import ScrollReveal from '@/components/ScrollReveal';
import events, { categories } from '@/data/events/events';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const categoryOptions = [
  {
    icon: Calendar,
    label: 'All Events',
    value: categories.ALL,
  },
  {
    icon: Code,
    label: 'Upcoming Events',
    value: categories.UPCOMING,
  },
  {
    icon: Users,
    label: 'Past Events',
    value: categories.PAST,
  },
];

const EventListing: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.ALL);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategory = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };

  const filteredEvents =
    activeTab === categories.ALL
      ? events
      : events.filter((event) => (activeTab === categories.PAST ? event.isPast : !event.isPast));

  return (
    <Fragment>
      <section className="bg-slate-800/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search events..."
                type="text"
                value={searchTerm}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((tab) => {
                const { icon: Icon, label, value } = tab;

                return (
                  <button
                    key={value}
                    onClick={() => handleCategory(value)}
                    type="button"
                    className={cn(
                      'flex items-center gap-2 rounded-lg border border-green-500/30 px-4 py-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900',
                      activeTab === value
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                        : 'bg-slate-800 text-green-400 hover:bg-slate-700',
                    )}
                  >
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Events</h2>
              <p className="text-lg text-gray-300">
                Don&apos;t miss out on these exciting learning opportunities
              </p>
            </div>
          </ScrollReveal>

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
        </div>
      </section>
    </Fragment>
  );
};

export default EventListing;
