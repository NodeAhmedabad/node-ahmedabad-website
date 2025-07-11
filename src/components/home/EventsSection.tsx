
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Node.js Performance Optimization Workshop',
      date: 'December 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Tech Hub, Ahmedabad',
      speaker: 'John Doe',
      speakerRole: 'Senior Node.js Engineer',
      description: 'Deep dive into Node.js performance optimization techniques and best practices.',
      attendees: 45,
      maxAttendees: 60,
      tags: ['Workshop', 'Performance', 'Advanced'],
      featured: true,
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Express.js',
      date: 'December 22, 2024',
      time: '6:30 PM - 8:30 PM',
      location: 'Co-working Space, SG Highway',
      speaker: 'Jane Smith',
      speakerRole: 'Full Stack Developer',
      description: 'Learn how to build robust and scalable APIs using Express.js framework.',
      attendees: 32,
      maxAttendees: 40,
      tags: ['Talk', 'API', 'Beginner'],
      featured: false,
    },
    {
      id: 3,
      title: 'JavaScript Testing Strategies',
      date: 'January 5, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Center, Ahmedabad',
      speaker: 'Mike Johnson',
      speakerRole: 'QA Engineer',
      description: 'Comprehensive guide to testing JavaScript applications with modern tools.',
      attendees: 28,
      maxAttendees: 50,
      tags: ['Workshop', 'Testing', 'Intermediate'],
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'GraphQL with Node.js',
      date: 'November 20, 2024',
      attendees: 65,
      rating: 4.8,
      highlights: ['Live coding session', 'Q&A with experts', 'Networking'],
    },
    {
      id: 5,
      title: 'Microservices Architecture',
      date: 'November 5, 2024',
      attendees: 58,
      rating: 4.9,
      highlights: ['Case studies', 'Best practices', 'Hands-on workshop'],
    },
    {
      id: 6,
      title: 'Node.js Security Best Practices',
      date: 'October 18, 2024',
      attendees: 42,
      rating: 4.7,
      highlights: ['Security audit demo', 'Vulnerability testing', 'Real-world examples'],
    },
  ];

  const EventCard = ({ event, isPast = false }: { event: any; isPast?: boolean }) => (
    <div className={`bg-slate-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:translate-y-[-2px] ${event.featured ? 'ring-2 ring-green-500/20' : ''}`}>
      {event.featured && (
        <div className="flex items-center mb-4">
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-yellow-400 text-sm font-medium">Featured Event</span>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {(event.tags || []).map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 hover:text-green-400 transition-colors duration-300">
        {event.title}
      </h3>

      {!isPast && (
        <>
          <div className="space-y-2 mb-4 text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-gray-300">
                {event.attendees}/{event.maxAttendees} attending
              </span>
            </div>
            <div className="text-sm text-gray-400">
              by {event.speaker}
            </div>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
              style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
            ></div>
          </div>
        </>
      )}

      {isPast && (
        <>
          <div className="space-y-2 mb-4 text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-3 text-green-400" />
              <span>{event.attendees} attended</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-3 text-yellow-400" />
              <span>{event.rating}/5.0 rating</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Event Highlights:</h4>
            <div className="flex flex-wrap gap-2">
              {event.highlights.map((highlight: string) => (
                <span key={highlight} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
        {isPast ? 'View Summary' : 'Register Now'}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
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
                  {" "}Events
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join us for workshops, talks, and networking sessions designed to elevate your JavaScript skills
              </p>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center mb-12">
              <div className="bg-slate-800 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('upcoming')}
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
            {activeTab === 'upcoming' && upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={300 + index * 100}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
            
            {activeTab === 'past' && pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={300 + index * 100}>
                <EventCard event={event} isPast={true} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Want to Speak at Our Events?</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Share your knowledge and experience with our community. We're always looking for passionate speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  View All Events
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <Link
                  to="/get-involved"
                  className="group border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
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
