export const categories = {
  ALL: 'All',
  CORE: 'Core',
  VOLUNTEER: 'Volunteer',
};

const teamMembers = [
  {
    name: 'Nisharg Shah',
    role: 'Organizer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Passionate about building tech communities and organizing impactful events',
    slug: 'nisharg-shah',
    category: categories.CORE,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'January 2020',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS', 'Community Building'],
    contributions: [
      'Founded Node Ahmedabad community',
      'Organized 50+ meetups and workshops',
      'Mentored 100+ junior developers',
      'Speaker at 20+ tech conferences',
    ],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/nishargshah',
      instagram: 'https://instagram.com/iamnisharg',
      x: 'https://x.com/iamnisharg',
      github: 'https://github.com/NishargShah',
      email: 'mailto:nishargshah3101@gmail.com',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
  {
    name: 'Kushal Pathak',
    role: 'Photographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Helps organize and run community events.',
    slug: 'kushal-pathak',
    category: categories.VOLUNTEER,
    location: 'Ahmedabad, Gujarat',
    joinedDate: 'January 2020',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS', 'Community Building'],
    contributions: [
      'Founded Node Ahmedabad community',
      'Organized 50+ meetups and workshops',
      'Mentored 100+ junior developers',
      'Speaker at 20+ tech conferences',
    ],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/rajeshpatel',
      email: 'rajesh@nodeahmedabad.com',
    },
    quote:
      "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
  },
];

export default teamMembers;
