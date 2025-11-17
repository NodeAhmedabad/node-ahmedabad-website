'use client';

import { useState } from 'react';

import EventCard from '@/components/events/EventCard';
import ScrollReveal from '@/components/ScrollReveal';
import events, { categories } from '@/data/events/events';

import type { Component } from '@/types';

const EventsSection: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.UPCOMING);

  const filteredEvents =
    activeTab === categories.ALL
      ? events
      : events.filter((event) => (activeTab === categories.PAST ? event.isPast : !event.isPast));

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 size-32 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 size-40 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our
                </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {' '}
                  Events
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                Join us for workshops, talks, and networking sessions designed to elevate your
                JavaScript skills
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mb-12 flex justify-center">
              <div className="rounded-lg border border-gray-700 bg-slate-800 p-1">
                <button
                  onClick={() => setActiveTab(categories.UPCOMING)}
                  type="button"
                  className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                    activeTab === categories.UPCOMING
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab(categories.PAST)}
                  type="button"
                  className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                    activeTab === categories.PAST
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default EventsSection;
