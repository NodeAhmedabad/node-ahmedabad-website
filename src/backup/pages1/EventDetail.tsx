import React, { useState } from 'react';

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
import { Link, useParams } from 'react-router-dom';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ScrollReveal from '../components/ui/ScrollReveal';

const EventDetail = () => {
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

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    // In real app, this would make an API call
    console.log('Registration data:', registrationData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <section className="pt-24 pb-8 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 group"
              to="/events"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Events
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Header */}
      <section className="py-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  {event.featured ? (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Event</span>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {event.title}
                  </h1>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{event.description}</p>

                  {/* Event Details */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-800/50 border border-gray-700 rounded-lg">
                      <Calendar className="w-5 h-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Date</div>
                        <div className="text-white font-medium">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-slate-800/50 border border-gray-700 rounded-lg">
                      <Clock className="w-5 h-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Time</div>
                        <div className="text-white font-medium">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-slate-800/50 border border-gray-700 rounded-lg">
                      <MapPin className="w-5 h-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="text-white font-medium">{event.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-slate-800/50 border border-gray-700 rounded-lg">
                      <Users className="w-5 h-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Attendees</div>
                        <div className="text-white font-medium">
                          {event.attendees}/{event.maxAttendees}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button
                      className="flex items-center justify-center px-6 py-3 bg-slate-700 border border-gray-600 text-white rounded-lg hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
                      onClick={addToCalendar}
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </button>
                    <button className="flex items-center justify-center px-6 py-3 bg-slate-700 border border-gray-600 text-white rounded-lg hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </button>
                    <a
                      className="flex items-center justify-center px-6 py-3 bg-slate-700 border border-gray-600 text-white rounded-lg hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
                      href={event.mapLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Map
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Registration Card */}
              <div className="lg:col-span-1">
                <ScrollReveal delay={200}>
                  <div className="sticky top-24">
                    <div className="bg-slate-800/50 border border-gray-700 rounded-2xl p-6">
                      {isRegistered ? (
                        <div className="text-center">
                          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Registration Successful!
                          </h3>
                          <p className="text-gray-300 mb-6">
                            We've sent a confirmation email to {registrationData.email}
                          </p>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <p className="text-green-400 text-sm">
                              You'll receive event updates and joining instructions via email.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <React.Fragment>
                          <h3 className="text-2xl font-bold text-white mb-4">Register for Event</h3>
                          <div className="text-3xl font-bold text-green-400 mb-6">
                            {event.price}
                          </div>

                          <form className="space-y-4" onSubmit={handleRegistration}>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name
                              </label>
                              <input
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                                name="name"
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                type="text"
                                value={registrationData.name}
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                              </label>
                              <input
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                type="email"
                                value={registrationData.email}
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone
                              </label>
                              <input
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
                                name="phone"
                                onChange={handleInputChange}
                                placeholder="+91 XXXXX XXXXX"
                                type="tel"
                                value={registrationData.phone}
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Experience Level
                              </label>
                              <select
                                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none"
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
                              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
                              type="submit"
                            >
                              Register Now
                            </button>
                          </form>
                        </React.Fragment>
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
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-8">About This Workshop</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {event.longDescription}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-8">Requirements</h2>
              <div className="grid gap-4">
                {event.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-slate-800/50 border border-gray-700 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-8">Event Agenda</h2>
              <div className="space-y-6">
                {event.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-6 bg-slate-900/50 border border-gray-700 rounded-xl"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-400 font-medium mb-1">{item.time}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
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
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-8">Meet Your Speaker</h2>
              <div className="bg-slate-800/50 border border-gray-700 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    alt={event.speaker.name}
                    className="w-32 h-32 rounded-full border-4 border-green-500/20"
                    src={event.speaker.avatar}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.speaker.name}</h3>
                    <p className="text-green-400 font-medium mb-1">{event.speaker.role}</p>
                    <p className="text-gray-400 mb-4">{event.speaker.company}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{event.speaker.bio}</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        href={event.speaker.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      <a
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-white mb-8">Event Sponsors</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {event.sponsors.map((sponsor, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        alt={sponsor.name}
                        className="h-16 w-auto mb-2 filter grayscale hover:grayscale-0 transition-all duration-300"
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
