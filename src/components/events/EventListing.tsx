'use client';

import { Fragment, useState } from 'react';

import { Calendar, Clock, Code, MapPin, Mic, Search, Users } from 'lucide-react';
import Link from 'next/link';

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

  const modifiedEvents = events.map((event) => ({
    ...event,
    isPast: new Date(event.date).getTime() < new Date(new Date().toDateString()).getTime(),
  }));

  const filteredEvents =
    activeTab === categories.ALL
      ? modifiedEvents
      : modifiedEvents.filter((event) =>
          activeTab === categories.PAST ? event.isPast : !event.isPast,
        );

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
              const {
                title,
                slug,
                date,
                time,
                location,
                attendees,
                description,
                speaker,
                image,
                isPast,
              } = event;

              return (
                <ScrollReveal key={slug} delay={index * 100}>
                  <Link className="group flex h-full" href={`/events/${slug}`}>
                    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-green-500">
                      <div className="relative">
                        <img
                          alt={title}
                          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          src={image}
                        />
                        <div className="absolute left-4 top-4">
                          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium capitalize text-white">
                            {isPast ? 'Past' : 'Upcoming'}
                          </span>
                        </div>
                      </div>

                      <div className="flex h-full flex-col p-6">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
                            {title}
                          </h3>
                          <p className="mb-4 text-gray-300">{description}</p>
                        </div>
                        <div>
                          <div className="mb-4 space-y-2">
                            <div className="flex items-center text-gray-400">
                              <Calendar className="mr-2 size-4" />
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
                              <Clock className="mr-2 size-4" />
                              <span>{time}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <MapPin className="mr-2 size-4" />
                              <span>{location}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Users className="mr-2 size-4" />
                              <span>
                                {attendees} {isPast ? 'attended' : 'attendees'}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Mic className="mr-2 size-4" />
                              <span>{speaker}</span>
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
