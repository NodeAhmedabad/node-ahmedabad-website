import { Calendar, Code, HelpCircle, Users } from 'lucide-react';

export const temp = [];

export const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: HelpCircle,
    faqs: [
      {
        id: 'what-is-the-node-ahmedabad-community',
        question: 'What is the Node Ahmedabad Community',
        answer:
          'We are the official local chapter and collective of developers, enthusiasts, and learners dedicated to Node.js, JavaScript, and related technologies in Ahmedabad. Our goal is to share knowledge, host events, and build a strong tech network in the city.',
      },
      {
        id: 'who-should-join-the-community',
        question: 'Who should join the community?',
        answer:
          'Anyone! Whether you are a beginner just starting with JavaScript, an experienced Node.js developer, a DevOps engineer, or a technical founder—if you have an interest in the Node.js ecosystem, you are welcome.',
      },
      {
        id: 'how-can-i-join-node-ahmedabad?',
        question: 'How can I join Node Ahmedabad?',
        answer:
          'You can join us by following our official pages on Linked In, Instagram, WhatsApp Channel. All our event announcements and updates are shared there first!',
      },
      {
        id: 'is-there-a-membership-fee-to-join',
        question: 'Is there a membership fee to join?',
        answer:
          'We are a community-driven initiative. All participation and event attendance (unless explicitly stated for specialized workshops) are completely free of cost.',
      },
    ],
  },
  {
    id: 'eventsAndMeetups',
    name: 'Events & Meetups',
    icon: Calendar,
    faqs: [
      {
        id: 'event-frequency',
        question: 'How often do you host meetups, and where are they held?',
        answer:
          'We typically aim for meetups in each 6 months. The location often rotates between various tech companies and co-working spaces across Ahmedabad to make them accessible to everyone. Check our [Events Page/Meetup Link] for the latest schedule and venue details.',
      },
      {
        id: 'event-registration',
        question: 'What kind of topics do you cover in the meetups?',
        answer:
          'Our topics span the entire Node.js and JavaScript ecosystem, including backend development, APIs, microservices, performance tuning, new ECMAScript features, testing, security, and cloud deployment (AWS, Azure, GCP).',
      },
      {
        id: 'can-i-give-a-talk-or-a-presentation-at-a-meetup',
        question: 'Can I give a talk or a presentation at a meetup?',
        answer:
          'Absolutely, we encourage it! Our community thrives on shared knowledge. Please fill out our Call for Speaker Form Link with your proposed topic. We will get in touch to schedule your session.',
      },
    ],
  },
  {
    id: 'communityInteraction',
    name: 'Community Interaction',
    icon: Code,
    faqs: [
      {
        id: 'skill-level-required',
        question: 'I have a technical question. Where can I ask it?',
        answer:
          'The best place for real-time technical Q&A and support is our Telegram/Discord Group Link. Our active members and senior developers are always happy to help you debug or brainstorm!',
      },
      {
        id: 'learning-resources',
        question: 'Our company wants to sponsor or host a Node Ahmedabad event. How do we do that?',
        answer:
          'We partner with organizations that support the local tech ecosystem. Please email us at nodeahmedabad@gmail.com with details about your proposal. We appreciate your support in helping us grow!',
      },
    ],
  },
  {
    id: 'career-job-search-support',
    name: 'Career & Job Search Support',
    icon: Users,
    faqs: [
      {
        id: 'does-the-community-help-with-job-opportunities-or-hiring',
        question: 'Does the community help with job opportunities or hiring?',
        answer:
          "While we don't act as a recruitment agency, we actively facilitate connections! We have a dedicated Link to Telegram/Discord Job Channel where sponsors and local companies regularly post Node.js, JavaScript, and Full-Stack openings in Ahmedabad. Our meetups are also excellent networking grounds.",
      },
      {
        id: 'is-there-a-mentorship-program-for-beginners-or-career-switchers',
        question: 'Is there a mentorship program for beginners or career switchers?',
        answer:
          'We currently run an informal mentorship program. Many of our senior members are happy to guide juniors. The best way to find a mentor is to actively participate in our meetups and ask questions in the Telegram/Discord Group. We are also working on formalizing a structured mentorship initiative!',
      },
      {
        id: 'how-can-i-promote-my-companys-open-roles-to-the-community',
        question: "How can I promote my company's open roles to the community?",
        answer:
          'Companies looking to hire Node.js talent can post their job openings directly in our designated Telegram/Discord. For wider promotion or to feature a company brief at a meetup, please reach out to our organizing team via email at nodeahmedabad@gmail.com regarding our sponsorship packages',
      },
    ],
  },
  {
    id: 'contributing-and-open-source',
    name: 'Contributing and Open Source',
    icon: Users,
    faqs: [
      {
        id: 'how-can-i-contribute-to-the-communitys-content-or-projects',
        question: "How can I contribute to the community's content or projects?",
        answer:
          "While we don't act as a recruitment agency, we actively facilitate connections! We have a dedicated Link to Telegram/Discord Job Channel where sponsors and local companies regularly post Node.js, JavaScript, and Full-Stack openings in Ahmedabad. Our meetups are also excellent networking grounds.",
      },
      {
        id: 'is-there-a-mentorship-program-for-beginners-or-career-switchers',
        question: 'Is there a mentorship program for beginners or career switchers?',
        answer:
          'We currently run an informal mentorship program. Many of our senior members are happy to guide juniors. The best way to find a mentor is to actively participate in our meetups and ask questions in the Telegram/Discord Group. We are also working on formalizing a structured mentorship initiative!',
      },
      {
        id: 'how-can-i-promote-my-companys-open-roles-to-the-community',
        question: "How can I promote my company's open roles to the community?",
        answer:
          'Companies looking to hire Node.js talent can post their job openings directly in our designated Telegram/Discord. For wider promotion or to feature a company brief at a meetup, please reach out to our organizing team via email at nodeahmedabad@gmail.com regarding our sponsorship packages',
      },
    ],
  },
];
