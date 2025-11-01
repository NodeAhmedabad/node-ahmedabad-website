export const categories = {
  ALL: 'all',
  UPCOMING: 'upcoming',
  PAST: 'past',
};

const events = [
  {
    title: 'Advanced Node.js Performance Optimization',
    slug: '1',
    date: '2025-11-01',
    time: '7:00 PM',
    location: 'Tech Hub, Ahmedabad',
    attendees: 45,
    maxAttendees: 60,
    description: 'Deep dive into Node.js performance optimization techniques',
    speaker: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
  },
  {
    title: 'Building Scalable APIs with Express.js',
    slug: '2',
    date: '2024-02-22',
    time: '6:30 PM',
    location: 'Innovation Center, SG Highway',
    attendees: 32,
    maxAttendees: 50,
    description: 'Learn best practices for building scalable REST APIs',
    speaker: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    title: 'Node.js Microservices Architecture',
    slug: '3',
    date: '2024-03-01',
    time: '2:00 PM',
    location: 'PDPU Campus',
    attendees: 28,
    maxAttendees: 40,
    description: 'Comprehensive guide to microservices with Node.js',
    speaker: 'Amit Patel',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600',
  },
];

export default events;
