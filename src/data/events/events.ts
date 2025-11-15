import {
  BoxesIcon,
  ClipboardListIcon,
  ClipboardPenIcon,
  ClockIcon,
  GamepadDirectionalIcon,
  ShieldIcon,
  WebhookIcon,
} from 'lucide-react';

import event23Gallery from '@/components/gallery/galleryData';
import sponsors from '@/data/events/sponsors';
import persons from '@/data/persons/persons';

export const categories = {
  ALL: 'all',
  UPCOMING: 'upcoming',
  PAST: 'past',
};

const events = [
  {
    title: 'Node Ahmedabad Meetup 2026',
    slug: 'node-ahmedabad-meetup-2026',
    isTBD: true,
    startDate: '2026-12-31',
    endDate: null,
    startTime: '10:00 AM',
    endTime: '02:00 PM',
    location: '7 Span, Ahmedabad',
    mapLink: 'https://maps.app.goo.gl/xz2g4zgp1Q2Sj4qV9',
    registrationLink: 'https://nodeahmedabad.com',
    attendees: 180,
    shortDescription: 'Deep dive into Node.js',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    isFeatured: true,
    category: 'Event',
    agenda: [],
    speakers: [],
    sponsors: [],
    gallery: [],
  },
  {
    title: 'Node Ahmedabad Meetup',
    slug: 'node-ahmedabad-meetup-2023',
    isTBD: false,
    startDate: '2023-11-04',
    endDate: null,
    startTime: '10:00 AM',
    endTime: '02:00 PM',
    location: '7 Span, Ahmedabad',
    mapLink: 'https://maps.app.goo.gl/xz2g4zgp1Q2Sj4qV9',
    registrationLink: 'https://nodeahmedabad.com',
    attendees: 180,
    shortDescription: 'Deep dive into Node.js performance optimization techniques',
    description:
      'A gathering to kick off our first-ever community event, bringing developers together to learn, connect, and explore the world of Node.js.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    isFeatured: false,
    category: 'Event',
    agenda: [
      {
        icon: ClipboardPenIcon,
        time: '10:00 AM - 10:15 AM',
        title: 'Registration & Welcome Goodies',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        icon: ClipboardListIcon,
        time: '10:15 AM - 10:30 AM',
        title: 'Opening Keynote',
        description: 'Setting the technical roadmap for the community and meetup goals',
      },
      {
        icon: WebhookIcon,
        time: '10:30 AM - 11:15 AM',
        title: 'Building Modern APIs with NestJS by Hardik Khanesa',
        description:
          'Learn how to leverage the NestJS framework to create scalable, maintainable, and robust Node.js APIs.',
      },
      {
        icon: ShieldIcon,
        time: '11:30 AM - 12:15 PM',
        title: 'Securing APIs with Cryptography by Swapnil Soni',
        description:
          'Dive into essential cryptographic techniques and best practices to build secure & data-protected APIs.',
      },
      {
        icon: GamepadDirectionalIcon,
        time: '12:30 PM - 01:15 PM',
        title: 'Nodejs with Directus by Bhagyesh Radiya',
        description:
          'Discover how to combine Node.js with Directus to quickly build robust APIs and powerful CMS.',
      },
      {
        icon: BoxesIcon,
        time: '01:30 PM - 02:00 PM',
        title: 'Final Networking & Community Connection',
        description:
          'Conclude the event with light beverages and an open floor for networking, collaboration, and feedback.',
      },
    ],
    speakers: [persons['hardik-khanesa'], persons['swapnil-soni'], persons['bhagyesh-radiya']],
    sponsors: [sponsors['skill-gpt'], sponsors['7-span']],
    gallery: event23Gallery,
  },
  {
    title: 'Full Stack Innovations - Code, Create, Connect',
    slug: 'full-stack-innovations-2024',
    isTBD: false,
    startDate: '2024-01-23',
    endDate: '2024-01-27',
    startTime: '8:00 AM',
    endTime: '7:00 PM',
    location: 'Silver Oak University, Ahmedabad',
    mapLink: 'https://maps.google.com',
    registrationLink: 'https://nodeahmedabad.com',
    attendees: 240,
    shortDescription: 'Collaborated with GDSC SOU & Department of Computer Engineering, SOCET',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    isFeatured: false,
    category: 'Workshop',
    agenda: [
      {
        icon: ClockIcon,
        time: '10:00 PM - 10:30 PM',
        title: 'Registration & Welcome Coffee',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        icon: ClockIcon,
        time: '10:30 PM - 12:00 PM',
        title: 'Understanding Node.js Performance',
        description: 'Event loop, memory management, and profiling basics',
      },
      {
        icon: ClockIcon,
        time: '12:00 PM - 13:00 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with the community',
      },
      {
        icon: ClockIcon,
        time: '13:00 PM - 14:30 PM',
        title: 'Database Optimization',
        description: 'Query optimization, connection pooling, and indexing strategies',
      },
      {
        icon: ClockIcon,
        time: '14:30 PM - 14:45 PM',
        title: 'Coffee Break',
        description: 'Quick refreshment break',
      },
      {
        icon: ClockIcon,
        time: '14:45 PM - 16:00 PM',
        title: 'Caching & Scaling Strategies',
        description: 'Redis, clustering, and load balancing techniques',
      },
    ],
    speakers: [persons['nisharg-shah'], persons['swapnil-soni']],
    sponsors: [
      {
        name: 'Silver Oak University',
        logo: 'https://placehold.co/600x400?text=Google',
        partner: 'Gold',
      },
      {
        name: 'DevTools Inc',
        logo: 'https://placehold.co/600x400?text=Microsoft',
        partner: 'Silver',
      },
    ],
    gallery: [],
  },
].map((event) => ({
  ...event,
  isPast: new Date(event.startDate).getTime() < new Date(new Date().toDateString()).getTime(),
  time: `${event.startTime} - ${event.endTime}`,
}));

export default events;
