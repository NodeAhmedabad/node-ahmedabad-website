import aneriPatelImage from '@/assets/teams/aneriPatel.jpg';
import dharmikPatelImage from '@/assets/teams/dharmikPatel.jpg';
import kushalPathakImage from '@/assets/teams/kushalPathak.jpg';
import nishargShahImage from '@/assets/teams/nishargShah.png';
import priyeshShahImage from '@/assets/teams/priyeshShah.jpg';
import rajKhajanchiImage from '@/assets/teams/rajKhajanchi.jpg';
import shrutiLalotraImage from '@/assets/teams/shrutiLalotra.jpg';
import swapnilSoniImage from '@/assets/teams/swapnilSoni.jpg';

export const categories = {
  ALL: 'all',
  CORE: 'core',
  VOLUNTEER: 'volunteer',
  SPEAKER: 'speaker',
};

const persons = {
  'nisharg-shah': {
    name: 'Nisharg Shah',
    role: 'Organizer',
    designation: 'Senior Software Engineer',
    company: 'Codal',
    image: nishargShahImage,
    shortBio: 'Full Stack Developer | MERN Stack Developer | Tech Lead.',
    bio: 'Full Stack Developer | MERN Stack Developer | Tech Lead.',
    slug: 'nisharg-shah',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'September 2023',
    skills: ['Node.js', 'React.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Community Building'],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/nishargshah',
      instagram: 'https://instagram.com/iamnisharg',
      x: 'https://x.com/iamnisharg',
      github: 'https://github.com/NishargShah',
      email: 'mailto:nishargshah3101@gmail.com',
    },
    quote: 'Let your work speak, not your words and Let code quality lead, not the mad dash.',
  },
  'dharmik-patel': {
    name: 'Dharmik Patel',
    role: 'Co-Organizer',
    designation: 'Software Engineer',
    company: 'OpenXcell',
    image: dharmikPatelImage,
    shortBio:
      'Writes code, breaks things, fixes them… and still volunteers to help others break theirs too.',
    bio: 'Writes code, breaks things, fixes them… and still volunteers to help others break theirs too.',
    slug: 'dharmik-patel',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'September 2023',
    skills: ['Node.js', 'React', 'MongoDB', 'NextJS', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/dharmik298',
      email: 'mailto:dharmikpatel298@gmail.com',
    },
    quote:
      "The best communities grow not because of one person's effort, but because of everyone's belief",
  },
  'raj-khajanchi': {
    name: 'Raj Khajanchi',
    role: 'Co-Organizer',
    designation: 'Quality Analyst',
    company: 'Rivulet IQ',
    image: rajKhajanchiImage,
    shortBio: 'Ensuring quality in both code and community experiences with precision and care.',
    bio: 'Ensuring quality in both code and community experiences with precision and care.',
    slug: 'raj-khajanchi',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'September 2023',
    skills: ['Event Management', 'Quality Analyst', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/raj-khajanchi',
      instagram: 'https://www.instagram.com/__raj_khajanchi_',
      github: 'https://github.com/r2708',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'priyesh-shah': {
    name: 'Priyesh Shah',
    role: 'Co-Organizer',
    designation: 'Senior Business Analyst',
    company: 'OpenXcell',
    image: priyeshShahImage,
    shortBio:
      "A community-driven strategist who blends analytics with empathy — Priyesh brings structure to chaos, clarity to ideas, and energy to every initiative he's part of.",
    bio: "A community-driven strategist who blends analytics with empathy — Priyesh brings structure to chaos, clarity to ideas, and energy to every initiative he's part of.",
    slug: 'priyesh-shah',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'September 2023',
    skills: [
      'React',
      'Community Building',
      'Business Analysis',
      'Event Management',
      'Communication & Public Speaking',
      'Strategic Planning',
      'Anchoring',
      'Requirement Gathering & Elicitation',
      'Team Coordination',
    ],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/priyesh-shah-810',
      instagram: 'https://instagram.com/priyesh-shah-810',
      x: 'https://x.com/priyeshshah810',
      email: 'mailto:priyeshs810@gmail.com',
    },
    quote:
      "Communities don't grow by chance — they grow by intention, collaboration, and the spark of people who believe in something bigger than themselves.",
  },
  'swapnil-soni': {
    name: 'Swapnil Soni',
    role: 'Co-Organizer',
    designation: 'Senior Software Engineer',
    company: 'OmniNexus',
    image: swapnilSoniImage,
    shortBio:
      'Crafting code and connections that strengthen the developer ecosystem, one event at a time.',
    bio: 'Crafting code and connections that strengthen the developer ecosystem, one event at a time.',
    slug: 'swapnil-soni',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'September 2023',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS', 'Community Building'],
    socialMedia: {
      linkedin: 'https://lnkd.10xdev.me',
      instagram: 'https://instagr.am/soniswapnil',
      x: 'https://x.com/iamnisharg',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'kushal-pathak': {
    name: 'Kushal Pathak',
    role: 'Photographer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: kushalPathakImage,
    shortBio: 'Capturing innovation through code and creativity behind the lens.',
    bio: 'Capturing innovation through code and creativity behind the lens.',
    slug: 'kushal-pathak',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Flutter', 'Java', 'Android', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/kushalpathak317',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'shruti-lalotra': {
    name: 'Shruti Lalotra',
    role: 'Volunteer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: shrutiLalotraImage,
    shortBio: 'Debugs bugs, commits kindness, and pushes positivity to the community repo.',
    bio: 'Debugs bugs, commits kindness, and pushes positivity to the community repo.',
    slug: 'shruti-lalotra',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['React.js', 'Communication', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/shruti-lalotra-6261b31ab',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'aneri-patel': {
    name: 'Aneri Patel',
    role: 'Volunteer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: aneriPatelImage,
    shortBio: 'Codes a little, laughs a lot, and somehow makes it all work in the end.',
    bio: 'Codes a little, laughs a lot, and somehow makes it all work in the end.',
    slug: 'aneri-patel',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Java', 'Spring Boot', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/aneri-patel-068245288',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'hardik-khanesa': {
    name: 'Hardik Khanesa',
    role: 'Speaker',
    designation: 'Senior Software Engineer - Node JS',
    company: 'Talentica Software',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    shortBio: 'Hello',
    bio: 'Hardik Khanesa is a Software Engineer at Talentica Software, specializing in cloud-native solutions and scalable backend systems for the fintech domain. With a background in Computer Engineering, he leverages Node.js, AWS, and agile methodologies to design robust backend APIs and microservices. His expertise focuses on harnessing frameworks like NestJS to significantly enhance data querying and manipulation in event-driven architectures.',
    slug: 'hardik-khanesa',
    category: categories.SPEAKER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Node.js', 'Nest.js'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/hardik-khanesa',
      github: 'https://github.com/Hardikkhanesa/',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  'bhagyesh-radiya': {
    name: 'Bhagyesh Radiya',
    role: 'Speaker',
    designation: 'Senior Software Engineer',
    company: '7Span',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
    shortBio: 'Hello',
    bio: 'Bhagyesh Radiya is a highly capable Full Stack Engineer with seven years of experience across the entire stack, from React/Next.js to Node.js backends and multiple cloud platforms (AWS and Azure). He possesses deep knowledge of various databases and TDD methodology. His expertise is crucial for developing tools like the Directus Custom Query Panel, which enables users to extract meaningful, data-driven insights without complex endpoint creation.',
    slug: 'bhagyesh-radiya',
    category: categories.SPEAKER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Node.js', 'Nest.js'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/bhagyeshradiya/?originalSubdomain=in',
      github: 'https://github.com/7span/directus-extension-custom-query-panel',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
};

export default persons;
