'use client';

import { useState } from 'react';

import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import EventCard from '@/components/homepage/EventCard';
import pastEvents from '@/data/homepage/pastEvents';
import upcomingEvents from '@/data/homepage/upcomingEvents';

import type { Component } from '@/types';

const EventsSection: Component = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our
                </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {' '}
                  Events
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join us for workshops, talks, and networking sessions designed to elevate your
                JavaScript skills
              </p>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center mb-12">
              <div className="bg-slate-800 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  type="button"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  type="button"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activeTab === 'upcoming' &&
              upcomingEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={300 + index * 100}>
                  <EventCard event={event} isPast={false} />
                </ScrollReveal>
              ))}

            {activeTab === 'past' &&
              pastEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={300 + index * 100}>
                  <EventCard isPast event={event} />
                </ScrollReveal>
              ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Want to Speak at Our Events?</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Share your knowledge and experience with our community. We're always looking for
                passionate speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  href="/events"
                >
                  View All Events
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <Link
                  className="group border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                  href="/get-involved"
                >
                  Become a Speaker
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
