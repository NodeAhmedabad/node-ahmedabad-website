'use client';

import { Fragment, useState } from 'react';

import ContentWrapper from '@/components/ContentWrapper';
import EventCard from '@/components/events/EventCard';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';
import events, { categories } from '@/data/events/events';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const actions = [
  {
    label: 'Upcoming Events',
    value: categories.UPCOMING,
  },
  {
    label: 'Past Events',
    value: categories.PAST,
  },
];

const EventsSection: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.UPCOMING);

  const filteredEvents =
    activeTab === categories.ALL
      ? events
      : events.filter((event) => (activeTab === categories.PAST ? event.isPast : !event.isPast));

  return (
    <Section className="relative overflow-hidden bg-slate-900 py-20">
      <ContentWrapper
        className="sm:mb-8"
        description="Join us for workshops, talks, and networking sessions designed to elevate your JavaScript skills"
        title={
          <Fragment>
            <Typography
              as="span"
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              variant="inherit"
            >
              Our
            </Typography>
            <Typography
              as="span"
              className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
              variant="inherit"
            >
              {' '}
              Events
            </Typography>
          </Fragment>
        }
      />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={200}>
          <div className="mb-12 flex justify-center">
            <div className="rounded-lg border border-gray-700 bg-slate-800 p-1">
              {actions.map((action) => {
                const { label, value } = action;

                return (
                  <button
                    key={value}
                    onClick={() => setActiveTab(value)}
                    type="button"
                    className={cn(
                      'rounded-lg px-6 py-3 font-medium transition-all duration-300',
                      activeTab === value
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'text-gray-400 hover:text-white',
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => {
            const { slug } = event;

            return (
              <ScrollReveal key={slug} delay={300 + index * 100}>
                <EventCard event={event} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default EventsSection;
