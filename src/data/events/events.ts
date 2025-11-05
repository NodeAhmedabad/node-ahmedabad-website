export const categories = {
  ALL: 'all',
  UPCOMING: 'upcoming',
  PAST: 'past',
};

const events = [
  {
    title: 'Node Ahmedabad Meetup',
    slug: 'node-ahmedabad-meetup-2023',
    date: '2023-11-04',
    startTime: '10:00 AM',
    endTime: '02:00 PM',
    location: '7 Span, Ahmedabad',
    mapLink: 'https://maps.app.goo.gl/xz2g4zgp1Q2Sj4qV9',
    attendees: 180,
    shortDescription: 'Deep dive into Node.js performance optimization techniques',
    description:
      'Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js Comprehensive guide to microservices with Node.js',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    isFeatured: true,
    agenda: [
      {
        time: '10:00 AM - 10:15 AM',
        title: 'Registration & Welcome Goodies',
        description: 'Meet fellow developers and grab some refreshments',
      },
      {
        time: '10:15 AM - 10:30 AM',
        title: 'Opening Keynote',
        description: 'Setting the technical roadmap for the community and meetup goals',
      },
      {
        time: '10:30 AM - 11:15 AM',
        title: 'Building Modern APIs with NestJS by Hardik Khanesa',
        description: 'Learn how to leverage the NestJS framework to create scalable, maintainable, and robust Node.js APIs.',
      },
      {
        time: '11:30 AM - 12:15 PM',
        title: 'Securing APIs with Cryptography by Swapnil Soni',
        description: 'Dive into essential cryptographic techniques and best practices to build secure & data-protected APIs.',
      },
      {
        time: '12:30 PM - 01:15 PM',
        title: 'Nodejs with Directus by Bhagyesh Radiya',
        description: 'Discover how to combine Node.js with Directus to quickly build robust APIs and powerful CMS.',
      },
      {
        time: '01:30 PM - 02:00 PM',
        title: 'Final Networking & Community Connection',
        description: 'Conclude the event with light beverages and an open floor for networking, collaboration, and feedback.',
      },
    ],
    speakers: [
      {
        name: 'Hardik Khanesa',
        role: 'Senior Software Engineer - Node JS',
        company: 'Talentica Software',
        avatar: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
        bio: 'Hardik Khanesa is a Software Engineer at Talentica Software, specializing in cloud-native solutions and scalable backend systems for the fintech domain. With a background in Computer Engineering, he leverages Node.js, AWS, and agile methodologies to design robust backend APIs and microservices. His expertise focuses on harnessing frameworks like NestJS to significantly enhance data querying and manipulation in event-driven architectures.',
        socialMedia: {
          linkedin: 'https://www.linkedin.com/in/hardik-khanesa',
          github: 'https://github.com/Hardikkhanesa/',
        },
      },
      {
        name: 'Swapnil Soni',
        role: 'Senior Software Engineer - FullStack',
        company: 'Dogsofelon (DOE)',
        avatar: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
        bio: 'Swapnil Soni is a Full-Stack Engineer and active open-source contributor with six years of experience building production-grade software. Specializing in Node.js, web security, and high-performance scaling, he leads end-to-end development—from architecture to security hardening. He is recognized for successfully scaling systems to millions of requests and actively mentors through FOSS projects.',
        socialMedia: {
          linkedin: 'https://www.linkedin.com/in/swapnilsoni1999/',
          github: 'https://github.com/SwapnilSoni1999',
        },
      },
      {
        name: 'Bhagyesh Radiya',
        role: 'Senior Software Engineer',
        company: '7Span',
        avatar: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
        bio: 'Bhagyesh Radiya is a highly capable Full Stack Engineer with seven years of experience across the entire stack, from React/Next.js to Node.js backends and multiple cloud platforms (AWS and Azure). He possesses deep knowledge of various databases and TDD methodology. His expertise is crucial for developing tools like the Directus Custom Query Panel, which enables users to extract meaningful, data-driven insights without complex endpoint creation.',
        socialMedia: {
          linkedin: 'https://www.linkedin.com/in/bhagyeshradiya/?originalSubdomain=in',
          github: 'https://github.com/7span/directus-extension-custom-query-panel',
        },
      },
    ],
    sponsors: [
      {
        name: 'SkillGPT',
        logo: 'https://placehold.co/600x400?text=Google',
      },
      {
        name: '7Span',
        logo: 'https://placehold.co/600x400?text=Microsoft',
      },
    ],
  },
  {
    title: 'Full Stack Innovations - Code, Create, Connect',
    slug: 'full-stack-innovations-2024',
    date: '2024-01-23 to 2024-01-27',
    startTime: '8:00 AM',
    endTime: '7:00 PM',
    location: 'Silver Oak University, Ahmedabad',
    mapLink: 'https://maps.google.com',
    attendees: 240,
    shortDescription: 'Collaborated with GDSC SOU & Department of Computer Engineering, SOCET',
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
].map((event) => ({
  ...event,
  isPast: new Date(event.date).getTime() < new Date(new Date().toDateString()).getTime(),
  time: `${event.startTime} - ${event.endTime}`,
}));

export default events;
