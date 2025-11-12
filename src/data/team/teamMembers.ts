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
};

const teamMembers = [
  {
    name: 'Nisharg Shah',
    role: 'Organizer',
    image: nishargShahImage,
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
  {
    name: 'Dharmik Patel',
    role: 'Co-Organizer',
    image: dharmikPatelImage,
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
  {
    name: 'Raj Khajanchi',
    role: 'Co-Organizer',
    image: rajKhajanchiImage,
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
  {
    name: 'Swapnil Soni',
    role: 'Co-Organizer',
    image: swapnilSoniImage,
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
  {
    name: 'Priyesh Shah',
    role: 'Co-Organizer',
    image: priyeshShahImage,
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
  {
    name: 'Kushal Pathak',
    role: 'Photographer',
    image: kushalPathakImage,
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
  {
    name: 'Shruti Lalotra',
    role: 'Volunteer',
    image: shrutiLalotraImage,
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
  {
    name: 'Aneri Patel',
    role: 'Volunteer',
    image: aneriPatelImage,
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
];

export default teamMembers;
