export const categories = {
  ALL: 'all',
  UPCOMING: 'upcoming',
  PAST: 'past',
};

const events = [
  {
    title: 'Advanced Node.js Performance Optimization',
    slug: 'advanced-nodejs-performance-optimization',
    date: '2025-11-01',
    time: '7:00 PM',
    location: 'Tech Hub, Ahmedabad',
    mapLink: 'https://maps.google.com',
    attendees: 45,
    maxAttendees: 60,
    shortDescription: 'Deep dive into Node.js performance optimization techniques',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    speaker: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    isFeatured: true,
    tags: ['Workshop', 'Performance', 'Advanced', 'Hands-on'],
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
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: '/api/placeholder/80/80',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    ],
    sponsors: [
      { name: 'Tech Hub', logo: '/api/placeholder/120/60', tier: 'Gold' },
      { name: 'DevTools Inc', logo: '/api/placeholder/120/60', tier: 'Silver' },
    ],
  },
  {
    title: 'Building Scalable APIs with Express.js',
    slug: '2',
    date: '2024-02-22',
    time: '6:30 PM',
    location: 'Innovation Center, SG Highway',
    mapLink: 'https://maps.google.com',
    attendees: 32,
    maxAttendees: 50,
    shortDescription: 'Learn best practices for building scalable REST APIs',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    speaker: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    isFeatured: false,
    tags: ['Workshop', 'Performance', 'Advanced', 'Hands-on'],
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
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: '/api/placeholder/80/80',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    ],
    sponsors: [
      { name: 'Tech Hub', logo: '/api/placeholder/120/60', tier: 'Gold' },
      { name: 'DevTools Inc', logo: '/api/placeholder/120/60', tier: 'Silver' },
    ],
  },
  {
    title: 'Node.js Microservices Architecture',
    slug: '3',
    date: '2024-03-01',
    time: '2:00 PM',
    location: 'PDPU Campus',
    mapLink: 'https://maps.google.com',
    attendees: 28,
    maxAttendees: 40,
    shortDescription: 'Comprehensive guide to microservices with Node.js',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    speaker: 'Amit Patel',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600',
    isFeatured: false,
    tags: ['Workshop', 'Performance', 'Advanced', 'Hands-on'],
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
    speakers: [
      {
        name: 'John Doe',
        role: 'Senior Node.js Engineer',
        company: 'Tech Solutions Inc.',
        avatar: '/api/placeholder/80/80',
        bio: 'John is a senior software engineer with 10+ years of experience in Node.js and scalable web applications. He has worked with startups and Fortune 500 companies to optimize their backend systems.',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    ],
    sponsors: [
      { name: 'Tech Hub', logo: '/api/placeholder/120/60', tier: 'Gold' },
      { name: 'DevTools Inc', logo: '/api/placeholder/120/60', tier: 'Silver' },
    ],
  },
].map((event) => ({
  ...event,
  isPast: new Date(event.date).getTime() < new Date(new Date().toDateString()).getTime(),
}));

export default events;
