import bhagyeshRadiyaImage from '@/assets/speakers/bhagyesh-radiya.jpg';
import hardikKhanesaImage from '@/assets/speakers/hardik-khanesa.jpg';
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
    bio: 'I Like to learn code and debug new UI technologies and frameworks. Have a serious passion for UI effects and dynamic user experiences. Love to challenge myself to learn new ideas & skills and to implement them into my projects. Having Excellent Knowledge in MongoDB Database, as well as Good Knowledge in Server Management/DevOps.',
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
    bio: "I'm Dharmik Patel, a Full Stack Developer at Openxcell with a deep interest in Node.js and the JavaScript ecosystem. I enjoy contributing to communities, connecting with developers, and helping others grow. For me, building isn't just about code—it's about people, collaboration, and impact.",
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
    bio: 'Raj Khajanachi is a meticulous Quality Analyst who ensures seamless user experiences across mobile games, apps, and payment systems, leveraging Cypress automation.',
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
      'A strategist blending analytics with empathy to bring clarity, structure, and energy to every initiative.',
    bio: "A community-driven strategist who blends analytics with empathy, Priyesh brings structure to chaos, clarity to ideas, and energy to every initiative he's part of.",
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
    bio: ' Swapnil Soni excels at the intersection of development and community building. He is dedicated to crafting quality code and building the vital connections that actively strengthen the developer ecosystem, one impactful event at a time.',
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
      'Building better software is only half the job; the other half is building the community that sustains it.',
  },
  'kushal-pathak': {
    name: 'Kushal Pathak',
    role: 'Photographer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: kushalPathakImage,
    shortBio: 'Capturing innovation through code and creativity behind the lens.',
    bio: 'Kushal Pathak operates at the intersection of technology and art, using code and development logic to build solutions. He complements this with a creative eye behind the lens, focusing on visual storytelling and expressing innovation.',
    slug: 'kushal-pathak',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Flutter', 'Java', 'Android', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/kushalpathak317',
    },
    quote:
      'Code and the camera lens are just different tools for the same purpose: capturing and expressing innovation.',
  },
  'shruti-lalotra': {
    name: 'Shruti Lalotra',
    role: 'Volunteer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: shrutiLalotraImage,
    shortBio: 'Debugs bugs, commits kindness, and pushes positivity to the community repo.',
    bio: 'Shruti Lalotra is a meticulous debugger committed to technical quality and problem-solving. She actively "commits kindness" and "pushes positivity" to foster a robust and supportive community culture.',
    slug: 'shruti-lalotra',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['React.js', 'Communication', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/shruti-lalotra-6261b31ab',
    },
    quote:
      'Every great piece of software is built on robust code and a positive culture. I specialize in debugging both the bugs and the negativity',
  },
  'aneri-patel': {
    name: 'Aneri Patel',
    role: 'Volunteer',
    designation: 'Senior Software Engineer',
    company: 'OpenXcell',
    image: aneriPatelImage,
    shortBio: 'Codes a little, laughs a lot, and somehow makes it all work in the end.',
    bio: 'Aneri Patel is an efficient technologist who relies on strategic code and exceptional problem-solving to "make it all work." Her infectious laughter ensures a resilient and high-energy team environment.',
    slug: 'aneri-patel',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Java', 'Spring Boot', 'Community Building'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/aneri-patel-068245288',
    },
    quote:
      "The best tool for solving a tough problem isn't always another line of code; sometimes, it's just a little bit of laughter.",
  },
  'hardik-khanesa': {
    name: 'Hardik Khanesa',
    role: 'Speaker',
    designation: 'Senior Software Engineer - Node JS',
    company: 'Talentica Software',
    image: hardikKhanesaImage,
    shortBio:
      'Cloud-native Software Engineer for fintech, building scalable Node.js/AWS microservices using NestJS for data performance.',
    bio: 'Hardik Khanesa is a Software Engineer at Talentica Software, specializing in cloud-native solutions and scalable backend systems for the fintech domain. With a background in Computer Engineering, he leverages Node.js, AWS, and agile methodologies to design robust backend APIs and microservices. His expertise focuses on harnessing frameworks like NestJS to significantly enhance data querying and manipulation in event-driven architectures.',
    slug: 'hardik-khanesa',
    category: categories.SPEAKER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'November 2023',
    skills: ['Node.js', 'Nest.js', 'AWS'],
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/hardik-khanesa',
      github: 'https://github.com/Hardikkhanesa/',
    },
    quote:
      "The challenge isn't just writing the code; it's architecting a backend that can handle tomorrow's scale while delivering today's peak performance.",
  },
  'bhagyesh-radiya': {
    name: 'Bhagyesh Radiya',
    role: 'Speaker',
    designation: 'Senior Software Engineer',
    company: '7Span',
    image: bhagyeshRadiyaImage,
    shortBio:
      'Full Stack Engineer (7 years), mastering React/Node.js, multi-cloud, TDD, and building high-impact, data-driven tools.',
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
      "True full-stack competence isn't just knowing the entire architecture; it's engineering the direct path for users to access and act on meaningful data.",
  },
};

export default persons;
