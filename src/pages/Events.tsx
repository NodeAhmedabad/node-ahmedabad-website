import React, { useState } from 'react';

import { Calendar, Clock, Code, Lightbulb, MapPin, Mic, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import AnimatedText from '../components/ui/AnimatedText';
import ScrollReveal from '../components/ui/ScrollReveal';

const Events = () => {
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
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <AnimatedText
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                  text="Community Events"
                />
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our regular meetups, workshops, and conferences to learn, network, and grow
                  with fellow Node.js developers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
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
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
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
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Upcoming Events</h2>
                <p className="text-gray-300 text-lg">
                  Don't miss out on these exciting learning opportunities
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcomingEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 100}>
                  <Link className="group" to={`/events/${event.id}`}>
                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <img
                          alt={event.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          src={event.image}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                            {event.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{event.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
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
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            <span>
                              {event.attendees}/{event.maxAttendees} attendees
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Speaker: {event.speaker}</span>
                          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
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
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Past Events</h2>
                <p className="text-gray-300 text-lg">
                  Highlights from our previous successful events
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPastEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 100}>
                  <div className="bg-slate-800 rounded-xl overflow-hidden border border-gray-700">
                    <img alt={event.title} className="w-full h-48 object-cover" src={event.image} />

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
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
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-center">
                <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-6">Want to Host or Speak?</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Have an idea for a workshop or want to share your knowledge with the community?
                  We'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    to="/get-involved"
                  >
                    Become a Speaker
                  </Link>
                  <Link
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                    to="/contact"
                  >
                    Propose an Event
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
