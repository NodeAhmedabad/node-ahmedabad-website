import { Briefcase, Calendar, Code, HelpCircle, Settings, Users } from 'lucide-react';

const faqCategories = [
  {
    id: 'aboutTheCommunity',
    name: 'About the Community',
    icon: HelpCircle,
    faqs: [
      {
        id: 'what-is-the-node-ahmedabad-community',
        question: 'What is the Node Ahmedabad Community?',
        answer:
          'Node Ahmedabad is the official local chapter of developers, enthusiasts, and learners passionate about Node.js, JavaScript, and modern web technologies. Our mission is to share knowledge, host engaging events, and strengthen the tech ecosystem in Ahmedabad.',
      },
      {
        id: 'who-should-join-the-community',
        question: 'Who should join the community?',
        answer:
          'Anyone interested in the Node.js ecosystem is welcome! Whether you’re a beginner learning JavaScript, an experienced Node.js developer, a DevOps engineer, or a tech founder — there’s a place for you here.',
      },
      {
        id: 'how-can-i-join-node-ahmedabad',
        question: 'How can I join Node Ahmedabad?',
        answer:
          'Simply stay connected with us through our community platforms and event announcements. You’ll find all participation options and updates on our <b>Home</b> and <b>Events</b> pages.',
      },
      {
        id: 'is-there-a-membership-fee-to-join',
        question: 'Is there a membership fee to join?',
        answer:
          'No, not at all. Node Ahmedabad is a community-driven initiative. Joining and attending our regular events are completely free of charge, unless otherwise stated for specialized workshops.',
      },
    ],
  },
  {
    id: 'eventsAndMeetups',
    name: 'Events and Meetups',
    icon: Calendar,
    faqs: [
      {
        id: 'how-often-do-you-host-meetups-and-where-are-they-held',
        question: 'How often do you host meetups, and where are they held?',
        answer:
          'We typically organize community meetups every six months. Venues rotate among tech companies and co-working spaces across Ahmedabad to ensure accessibility for everyone. For the latest schedule and details, visit our <b>Events page<b>.',
      },
      {
        id: 'what-kind-of-topics-do-you-cover-in-the-meetups',
        question: 'What kind of topics do you cover in the meetups?',
        answer:
          'Our meetups explore the entire Node.js and JavaScript ecosystem — including backend architecture, APIs, microservices, performance tuning, testing, security, and cloud deployments. We also dive into new ECMAScript features and emerging tech trends.',
      },
      {
        id: 'can-i-give-a-talk-or-presentation-at-a-meetup',
        question: 'Can I give a talk or presentation at a meetup?',
        answer:
          'Absolutely! We encourage members to share their experiences and insights. If you’d like to speak, propose your session through the <b>Contribute page</b> — our organizing team will get in touch to coordinate the details.',
      },
    ],
  },
  {
    id: 'communityInteraction',
    name: 'Community Interaction',
    icon: Users,
    faqs: [
      {
        id: 'how-can-i-stay-updated-about-upcoming-events-and-announcements',
        question: 'How can I stay updated about upcoming events and announcements?',
        answer:
          'All event updates, calls for speakers, and community news are posted first on our <b>Home</b> and <b>Events</b> pages. Keep an eye there to stay in the loop.',
      },
      {
        id: 'i-have-a-technical-question-where-can-i-ask-it',
        question: 'I have a technical question. Where can I ask it?',
        answer:
          'We have active discussion groups where members exchange ideas and support each other with technical challenges. Join our community conversation spaces listed on the <b>Contact page</b>.',
      },
      {
        id: 'our-company-wants-to-sponsor-or-host-a-node-ahmedabad-event',
        question: 'Our company wants to sponsor or host a Node Ahmedabad event. How do we do that?',
        answer:
          'We love partnering with organizations that support local tech growth. To sponsor or host an event, reach out to us via our <b>Contact page</b> or email <a href="mailto:nodeahmedabad@gmail.com"><b>nodeahmedabad@gmail.com</b></a> with your proposal.',
      },
    ],
  },
  {
    id: 'careerAndMentorship',
    name: 'Career & Mentorship',
    icon: Briefcase,
    faqs: [
      {
        id: 'does-the-community-help-with-job-opportunities-or-hiring',
        question: 'Does the community help with job opportunities or hiring?',
        answer:
          'Yes — while we’re not a recruitment agency, we actively connect talent with opportunities. Companies often share job openings during meetups, and we regularly highlight relevant positions within the community.',
      },
      {
        id: 'is-there-a-mentorship-program-for-beginners-or-career-switchers',
        question: 'Is there a mentorship program for beginners or career switchers?',
        answer:
          'Yes, we currently run an informal mentorship setup where experienced members guide newcomers. The best way to find a mentor is by participating in our meetups and being active in our discussion spaces. A formal mentorship program is in the works!',
      },
      {
        id: 'how-can-my-company-promote-open-roles-to-the-community',
        question: 'How can my company promote open roles to the community?',
        answer:
          'You can share job openings by connecting with our organizing team via the <b>Contact page</b> or email <a href="mailto:nodeahmedabad@gmail.com"><b>nodeahmedabad@gmail.com</b></a>. Sponsoring a meetup is also a great way to spotlight your company and engage directly with developers.',
      },
    ],
  },
  {
    id: 'contributingAndOpenSource',
    name: 'Contributing & Open Source',
    icon: Code,
    faqs: [
      {
        id: 'how-can-i-contribute-to-the-communitys-content-or-projects',
        question: 'How can I contribute to the community’s content or projects?',
        answer:
          'We welcome contributions of all kinds — from speaking at events to writing technical articles or collaborating on open-source initiatives. Visit our <b>Contribute page</b> to learn how to get involved.',
      },
      {
        id: 'does-the-community-have-a-code-of-conduct',
        question: 'Does the community have a Code of Conduct?',
        answer:
          'Yes. We’re committed to maintaining a safe, respectful, and inclusive environment for all members. You can read our full policy on the <b>Code of Conduct page</b>.',
      },
      {
        id: 'i-have-an-idea-for-a-hands-on-workshop-how-do-i-propose-it',
        question: 'I have an idea for a hands-on workshop. How do I propose it?',
        answer:
          'That’s fantastic! We love interactive sessions. Please share your proposal via the <b>Contribute page</b> — mention that it’s a workshop idea, and include key details like duration and setup requirements.',
      },
    ],
  },
  {
    id: 'technicalAndLogistics',
    name: 'Technical & Logistics',
    icon: Settings,
    faqs: [
      {
        id: 'which-nodejs-version-should-i-use-to-stay-aligned-with-the-community',
        question: 'Which Node.js version should I use to stay aligned with the community?',
        answer:
          'We recommend using the current Long-Term Support (LTS) version of Node.js for production projects. We also highlight version updates and new features during our community meetups.',
      },
      {
        id: 'is-food-or-refreshments-provided-at-meetups',
        question: 'Is food or refreshments provided at meetups?',
        answer:
          'Yes! Thanks to our sponsors, most in-person meetups include light snacks and refreshments. Vegetarian options are always available, and we do our best to accommodate other dietary needs when informed in advance.',
      },
      {
        id: 'im-traveling-from-outside-ahmedabad-can-you-help-with-accommodation',
        question: 'I’m traveling from outside Ahmedabad. Can you help with accommodation?',
        answer:
          'While we don’t arrange formal stays, our community members often share recommendations for nearby, affordable accommodations. You can connect with them through the channels listed on our <b>Contact page</b>.',
      },
    ],
  },
];

export default faqCategories;
