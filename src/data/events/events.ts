export const categories = {
  ALL: 'all',
  UPCOMING: 'upcoming',
  PAST: 'past',
};

const events = [
  {
    title: 'Advanced Node.js Performance Optimization',
    slug: 'advanced-nodejs-performance-optimization',
    date: '2025-11-02',
    startTime: '8:00 AM',
    endTime: '7:00 PM',
    location: 'Tech Hub, Ahmedabad',
    mapLink: 'https://maps.google.com',
    attendees: 45,
    shortDescription: 'Deep dive into Node.js performance optimization techniques',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    isFeatured: true,
    agenda: [
      {
        time: '10:00 PM - 10:30 PM',
        title: 'Registration & Welcome Coffee',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        time: '10:30 PM - 12:00 PM',
        title: 'Understanding Node.js Performance',
        description: 'Event loop, memory management, and profiling basics',
      },
      {
        time: '12:00 PM - 13:00 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with the community',
      },
      {
        time: '13:00 PM - 14:30 PM',
        title: 'Database Optimization',
        description: 'Query optimization, connection pooling, and indexing strategies',
      },
      {
        time: '14:30 PM - 14:45 PM',
        title: 'Coffee Break',
        description: 'Quick refreshment break',
      },
      {
        time: '14:45 PM - 16:00 PM',
        title: 'Caching & Scaling Strategies',
        description: 'Redis, clustering, and load balancing techniques',
      },
    ],
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        socialMedia: {
          linkedin: 'https://linkedin.com/in/johndoe',
          x: 'https://x.com/johndoe',
        },
      },
    ],
    sponsors: [
      {
        name: 'Tech Hub',
        logo: 'https://placehold.co/600x400?text=Google',
        tier: 'Gold',
      },
      {
        name: 'DevTools Inc',
        logo: 'https://placehold.co/600x400?text=Microsoft',
        tier: 'Silver',
      },
    ],
  },
  {
    title: 'Building Scalable APIs with Express.js',
    slug: '2',
    date: '2024-02-22',
    startTime: '8:00 AM',
    endTime: '7:00 PM',
    location: 'Innovation Center, SG Highway',
    mapLink: 'https://maps.google.com',
    attendees: 32,
    shortDescription: 'Learn best practices for building scalable REST APIs',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    isFeatured: false,
    agenda: [
      {
        time: '10:00 PM - 10:30 PM',
        title: 'Registration & Welcome Coffee',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        time: '10:30 PM - 12:00 PM',
        title: 'Understanding Node.js Performance',
        description: 'Event loop, memory management, and profiling basics',
      },
      {
        time: '12:00 PM - 13:00 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with the community',
      },
      {
        time: '13:00 PM - 14:30 PM',
        title: 'Database Optimization',
        description: 'Query optimization, connection pooling, and indexing strategies',
      },
      {
        time: '14:30 PM - 14:45 PM',
        title: 'Coffee Break',
        description: 'Quick refreshment break',
      },
      {
        time: '14:45 PM - 16:00 PM',
        title: 'Caching & Scaling Strategies',
        description: 'Redis, clustering, and load balancing techniques',
      },
    ],
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: '/api/placeholder/80/80',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        socialMedia: {
          linkedin: 'https://linkedin.com/in/johndoe',
          x: 'https://x.com/johndoe',
        },
      },
    ],
    sponsors: [
      {
        name: 'Tech Hub',
        logo: 'https://placehold.co/600x400?text=Google',
        tier: 'Gold',
      },
      {
        name: 'DevTools Inc',
        logo: 'https://placehold.co/600x400?text=Microsoft',
        tier: 'Silver',
      },
    ],
  },
  {
    title: 'Node.js Microservices Architecture',
    slug: '3',
    date: '2024-03-01',
    startTime: '8:00 AM',
    endTime: '7:00 PM',
    location: 'PDPU Campus',
    mapLink: 'https://maps.google.com',
    attendees: 28,
    shortDescription: 'Comprehensive guide to microservices with Node.js',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600',
    isFeatured: false,
    agenda: [
      {
        time: '10:00 PM - 10:30 PM',
        title: 'Registration & Welcome Coffee',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        time: '10:30 PM - 12:00 PM',
        title: 'Understanding Node.js Performance',
        description: 'Event loop, memory management, and profiling basics',
      },
      {
        time: '12:00 PM - 13:00 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with the community',
      },
      {
        time: '13:00 PM - 14:30 PM',
        title: 'Database Optimization',
        description: 'Query optimization, connection pooling, and indexing strategies',
      },
      {
        time: '14:30 PM - 14:45 PM',
        title: 'Coffee Break',
        description: 'Quick refreshment break',
      },
      {
        time: '14:45 PM - 16:00 PM',
        title: 'Caching & Scaling Strategies',
        description: 'Redis, clustering, and load balancing techniques',
      },
    ],
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: '/api/placeholder/80/80',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        socialMedia: {
          linkedin: 'https://linkedin.com/in/johndoe',
          x: 'https://x.com/johndoe',
        },
      },
    ],
    sponsors: [
      {
        name: 'Tech Hub',
        logo: 'https://placehold.co/600x400?text=Google',
        tier: 'Gold',
      },
      {
        name: 'DevTools Inc',
        logo: 'https://placehold.co/600x400?text=Microsoft',
        tier: 'Silver',
      },
    ],
  },
].map((event) => ({
  ...event,
  isPast: new Date(event.date).getTime() < new Date(new Date().toDateString()).getTime(),
  time: `${event.startTime} - ${event.endTime}`,
}));

export default events;
