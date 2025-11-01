import React, { useState } from 'react';

import { Calendar, Clock, Code, Lightbulb, MapPin, Mic, Search, Users } from 'lucide-react';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const Events: Component = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Advanced Node.js Performance Optimization',
      date: '2024-02-15',
      time: '7:00 PM',
      location: 'Tech Hub, Ahmedabad',
      attendees: 45,
      maxAttendees: 60,
      category: 'workshop',
      description: 'Deep dive into Node.js performance optimization techniques',
      speaker: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Express.js',
      date: '2024-02-22',
      time: '6:30 PM',
      location: 'Innovation Center, SG Highway',
      attendees: 32,
      maxAttendees: 50,
      category: 'meetup',
      description: 'Learn best practices for building scalable REST APIs',
      speaker: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    },
    {
      id: 3,
      title: 'Node.js Microservices Architecture',
      date: '2024-03-01',
      time: '2:00 PM',
      location: 'PDPU Campus',
      attendees: 28,
      maxAttendees: 40,
      category: 'conference',
      description: 'Comprehensive guide to microservices with Node.js',
      speaker: 'Amit Patel',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600',
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'JavaScript ES2023 Features',
      date: '2024-01-18',
      attendees: 65,
      category: 'workshop',
      description: 'Exploring the latest JavaScript features',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
    },
    {
      id: 5,
      title: 'MongoDB with Node.js Best Practices',
      date: '2024-01-10',
      attendees: 52,
      category: 'meetup',
      description: 'Database optimization and best practices',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'workshop', name: 'Workshops', icon: Code },
    { id: 'meetup', name: 'Meetups', icon: Users },
    { id: 'conference', name: 'Conferences', icon: Mic },
  ];

  const filteredUpcomingEvents = upcomingEvents.filter(
    (event) =>
      (activeFilter === 'all' || event.category === activeFilter) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredPastEvents = pastEvents.filter(
    (event) =>
      (activeFilter === 'all' || event.category === activeFilter) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <AnimatedText
                className="mb-6 text-5xl font-bold text-white md:text-6xl"
                text="Community Events"
              />
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Join our regular meetups, workshops, and conferences to learn, network, and grow
                with fellow Node.js developers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-slate-800/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Search */}
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

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  type="button"
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="size-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Upcoming Events</h2>
              <p className="text-lg text-gray-300">
                Don't miss out on these exciting learning opportunities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredUpcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <Link className="group" href={`/events/${event.id}`}>
                  <div className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-green-500">
                    <div className="relative">
                      <img
                        alt={event.title}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={event.image}
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium capitalize text-white">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
                        {event.title}
                      </h3>
                      <p className="mb-4 text-gray-300">{event.description}</p>

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="mr-2 size-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="mr-2 size-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="mr-2 size-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="mr-2 size-4" />
                          <span>
                            {event.attendees}/{event.maxAttendees} attendees
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Speaker: {event.speaker}</span>
                        <button
                          className="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                          type="button"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Past Events</h2>
              <p className="text-lg text-gray-300">
                Highlights from our previous successful events
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <div className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800">
                  <img alt={event.title} className="h-48 w-full object-cover" src={event.image} />

                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-white">{event.title}</h3>
                    <p className="mb-4 text-gray-300">{event.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="mr-2 size-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="mr-2 size-4" />
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
              <Lightbulb className="mx-auto mb-6 size-16 text-white" />
              <h2 className="mb-6 text-4xl font-bold text-white">Want to Host or Speak?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Have an idea for a workshop or want to share your knowledge with the community?
                We&apos;d love to hear from you!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
                  href="/get-involved"
                >
                  Become a Speaker
                </Link>
                <Link
                  className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
                  href="/contact"
                >
                  Propose an Event
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Events;
