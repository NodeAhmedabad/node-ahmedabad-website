import { Fragment, useState } from 'react';

import {
  ArrowLeft,
  Calendar,
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  ExternalLink,
  MapPin,
  Share2,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollReveal from '@/components/ScrollReveal';

import type { ChangeEvent, FormEvent } from 'react';

import type { Component } from '@/types';

const EventDetail: Component = () => {
  const { slug } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
  });

  // Mock event data - in real app, this would come from API/database
  const event = {
    id: 1,
    title: 'Node.js Performance Optimization Workshop',
    slug: 'nodejs-performance-optimization-workshop',
    description:
      'Deep dive into Node.js performance optimization techniques and best practices. Learn how to identify bottlenecks, implement caching strategies, and scale your applications effectively.',
    longDescription: `
      Join us for an intensive workshop on Node.js performance optimization. This hands-on session will cover:
      
      • Understanding the Node.js event loop and its impact on performance
      • Memory management and garbage collection optimization
      • Database query optimization and connection pooling
      • Implementing effective caching strategies (Redis, in-memory caching)
      • Load balancing and clustering techniques
      • Monitoring and profiling tools for Node.js applications
      • Real-world case studies and optimization examples
      
      This workshop is perfect for developers who want to take their Node.js skills to the next level and build high-performance applications that can handle scale.
    `,
    date: '2024-12-15',
    time: '10:00 AM - 4:00 PM',
    duration: '6 hours',
    location: 'Tech Hub, Ahmedabad',
    address: 'Science City Road, Sola, Ahmedabad, Gujarat 380060',
    mapLink: 'https://maps.google.com',
    speaker: {
      name: 'John Doe',
      role: 'Senior Node.js Engineer',
      company: 'Tech Solutions Inc.',
      avatar: '/api/placeholder/80/80',
      bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    attendees: 45,
    maxAttendees: 60,
    price: 'Free',
    tags: ['Workshop', 'Performance', 'Advanced', 'Hands-on'],
    featured: true,
    status: 'upcoming', // upcoming, ongoing, completed, cancelled
    requirements: [
      'Basic knowledge of Node.js and JavaScript',
      'Laptop with Node.js installed (v16 or higher)',
      'Code editor of your choice',
      'Basic understanding of databases',
    ],
    agenda: [
      {
        time: '10:00 - 10:30',
        title: 'Registration & Welcome Coffee',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        time: '10:30 - 12:00',
        title: 'Understanding Node.js Performance',
        description: 'Event loop, memory management, and profiling basics',
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch Break',
        description: 'Networking lunch with the community',
      },
      {
        time: '13:00 - 14:30',
        title: 'Database Optimization',
        description: 'Query optimization, connection pooling, and indexing strategies',
      },
      {
        time: '14:30 - 14:45',
        title: 'Coffee Break',
        description: 'Quick refreshment break',
      },
      {
        time: '14:45 - 16:00',
        title: 'Caching & Scaling Strategies',
        description: 'Redis, clustering, and load balancing techniques',
      },
    ],
    sponsors: [
      { name: 'Tech Hub', logo: '/api/placeholder/120/60', tier: 'Gold' },
      { name: 'DevTools Inc', logo: '/api/placeholder/120/60', tier: 'Silver' },
    ],
  };

  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    // In real app, this would make an API call
    console.log('Registration data:', registrationData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const addToCalendar = () => {
    const startDate = new Date(`${event.date} ${event.time.split(' - ')[0]}`);
    const endDate = new Date(`${event.date} ${event.time.split(' - ')[1]}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replaceAll(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replaceAll(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.address)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Back Navigation */}
      <section className="bg-slate-900 pb-8 pt-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link
              className="group inline-flex items-center text-green-400 transition-colors duration-300 hover:text-green-300"
              href="/events"
            >
              <ArrowLeft className="mr-2 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Events
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Header */}
      <section className="relative overflow-hidden bg-slate-900 py-12">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-20 size-32 rounded-full bg-green-500/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 size-40 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  {event.featured ? (
                    <div className="mb-4 flex items-center">
                      <Star className="mr-2 size-4 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">Featured Event</span>
                    </div>
                  ) : null}

                  <div className="mb-6 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                    {event.title}
                  </h1>

                  <p className="mb-8 text-xl leading-relaxed text-gray-300">{event.description}</p>

                  {/* Event Details */}
                  <div className="mb-8 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4">
                      <Calendar className="mr-3 size-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Date</div>
                        <div className="font-medium text-white">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4">
                      <Clock className="mr-3 size-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Time</div>
                        <div className="font-medium text-white">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4">
                      <MapPin className="mr-3 size-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="font-medium text-white">{event.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center rounded-lg border border-gray-700 bg-slate-800/50 p-4">
                      <Users className="mr-3 size-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Attendees</div>
                        <div className="font-medium text-white">
                          {event.attendees}/{event.maxAttendees}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                    <button
                      className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
                      onClick={addToCalendar}
                      type="button"
                    >
                      <CalendarIcon className="mr-2 size-4" />
                      Add to Calendar
                    </button>
                    <button
                      className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
                      type="button"
                    >
                      <Share2 className="mr-2 size-4" />
                      Share Event
                    </button>
                    <a
                      className="flex items-center justify-center rounded-lg border border-gray-600 bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10"
                      href={event.mapLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 size-4" />
                      View Map
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Registration Card */}
              <div className="lg:col-span-1">
                <ScrollReveal delay={200}>
                  <div className="sticky top-24">
                    <div className="rounded-2xl border border-gray-700 bg-slate-800/50 p-6">
                      {isRegistered ? (
                        <div className="text-center">
                          <CheckCircle className="mx-auto mb-4 size-16 text-green-400" />
                          <h3 className="mb-2 text-2xl font-bold text-white">
                            Registration Successful!
                          </h3>
                          <p className="mb-6 text-gray-300">
                            We&apos;ve sent a confirmation email to {registrationData.email}
                          </p>
                          <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                            <p className="text-sm text-green-400">
                              You&apos;ll receive event updates and joining instructions via email.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Fragment>
                          <h3 className="mb-4 text-2xl font-bold text-white">Register for Event</h3>
                          <div className="mb-6 text-3xl font-bold text-green-400">
                            {event.price}
                          </div>

                          <form className="space-y-4" onSubmit={handleRegistration}>
                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Full Name
                              </label>
                              <input
                                required
                                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                                name="name"
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                type="text"
                                value={registrationData.name}
                              />
                            </div>

                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Email
                              </label>
                              <input
                                required
                                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                type="email"
                                value={registrationData.email}
                              />
                            </div>

                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Phone
                              </label>
                              <input
                                required
                                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                                name="phone"
                                onChange={handleInputChange}
                                placeholder="+91 XXXXX XXXXX"
                                type="tel"
                                value={registrationData.phone}
                              />
                            </div>

                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-300">
                                Experience Level
                              </label>
                              <select
                                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                                name="experience"
                                onChange={handleInputChange}
                                value={registrationData.experience}
                              >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                              </select>
                            </div>

                            <button
                              className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                              type="submit"
                            >
                              Register Now
                            </button>
                          </form>
                        </Fragment>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-white">About This Workshop</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="whitespace-pre-line leading-relaxed text-gray-300">
                  {event.longDescription}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-white">Requirements</h2>
              <div className="grid gap-4">
                {event.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start rounded-lg border border-gray-700 bg-slate-800/50 p-4"
                  >
                    <CheckCircle className="mr-3 mt-0.5 size-5 shrink-0 text-green-400" />
                    <span className="text-gray-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-white">Event Agenda</h2>
              <div className="space-y-6">
                {event.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 rounded-xl border border-gray-700 bg-slate-900/50 p-6"
                  >
                    <div className="shrink-0">
                      <div className="flex size-20 items-center justify-center rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                        <Clock className="size-6 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-sm font-medium text-green-400">{item.time}</div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-white">Meet Your Speaker</h2>
              <div className="rounded-2xl border border-gray-700 bg-slate-800/50 p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <img
                    alt={event.speaker.name}
                    className="size-32 rounded-full border-4 border-green-500/20"
                    src={event.speaker.avatar}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-2 text-2xl font-bold text-white">{event.speaker.name}</h3>
                    <p className="mb-1 font-medium text-green-400">{event.speaker.role}</p>
                    <p className="mb-4 text-gray-400">{event.speaker.company}</p>
                    <p className="mb-4 leading-relaxed text-gray-300">{event.speaker.bio}</p>
                    <div className="flex justify-center gap-4 md:justify-start">
                      <a
                        className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
                        href={event.speaker.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      <a
                        className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
                        href={event.speaker.twitter}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      {event.sponsors.length > 0 && (
        <section className="bg-slate-800/30 py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <ScrollReveal>
                <h2 className="mb-8 text-3xl font-bold text-white">Event Sponsors</h2>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {event.sponsors.map((sponsor, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        alt={sponsor.name}
                        className="mb-2 h-16 w-auto grayscale transition-all duration-300 hover:grayscale-0"
                        src={sponsor.logo}
                      />
                      <span className="text-xs text-gray-400">{sponsor.tier} Sponsor</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default EventDetail;
