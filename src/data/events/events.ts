import {
  AtomIcon,
  BoxesIcon,
  ClipboardListIcon,
  ClipboardPenIcon,
  CodeIcon,
  GamepadDirectionalIcon,
  GraduationCapIcon,
  ShieldIcon,
  WebhookIcon,
  WrenchIcon,
} from 'lucide-react';

import sponsors from '@/data/events/sponsors';
import persons from '@/data/persons/persons';
import getFormattedDate from '@/utils/getFormattedDate';

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
  },
  {
    title: 'Node Ahmedabad Meetup 2024',
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
  },
  {
    title: 'Full Stack Innovations - Code, Create, Connect',
    slug: 'full-stack-innovations-2024',
    isTBD: false,
    startDate: '2024-01-23',
    endDate: '2024-01-27',
    startTime: '10:00 AM',
    endTime: '2:00 PM',
    location: 'Silver Oak University, Ahmedabad',
    mapLink: 'https://maps.app.goo.gl/uwp2jkqtSr2J463T8',
    registrationLink: 'https://nodeahmedabad.com',
    attendees: 240,
    shortDescription: 'Collaborated with GDSC SOU & Department of Computer Engineering, SOCET',
    description:
      'Deep dive into JavaScript and React fundamentals with a practical, hands-on approach. Master core programming concepts and modern frontend development to build a solid foundation for your full-stack journey. Gain skills directly applicable to industry needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    isFeatured: false,
    category: 'Workshop',
    agenda: [
      {
        icon: AtomIcon,
        time: getFormattedDate('2024-01-23'),
        title: 'React JS Fundamentals & Core Functionality',
        description:
          'Focus: Introduction to the core concepts and basic functionality of the React library.',
      },
      {
        icon: CodeIcon,
        time: getFormattedDate('2024-01-24'),
        title: 'JavaScript Fundamentals & Core Functionality',
        description:
          'Focus: Deep dive into the foundational concepts and essential functionality of the JavaScript language.',
      },
      {
        icon: WrenchIcon,
        time: getFormattedDate('2024-01-25'),
        title: 'Workshop for JavaScript Fundamentals',
        description:
          'Focus: Practical, hands-on session applying the core JavaScript knowledge learned on Day 2.',
      },
      {
        icon: GraduationCapIcon,
        time: getFormattedDate('2024-01-26'),
        title: 'Query, Doubt Solving, Execution, and Closure',
        description:
          'Focus: Interactive session for clearing doubts, executing code examples, addressing queries, and closing the event.',
      },
    ],
    speakers: [persons['nisharg-shah'], persons['swapnil-soni']],
    sponsors: [sponsors.ieee, sponsors['silver-oak-university']],
  },
].map((event) => ({
  ...event,
  isPast: new Date(event.startDate).getTime() < new Date(new Date().toDateString()).getTime(),
  time: `${event.startTime} - ${event.endTime}`,
}));

export default events;
