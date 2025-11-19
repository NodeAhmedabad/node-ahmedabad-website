const footerLinks = [
  {
    id: 'community',
    name: 'Community',
    links: [
      {
        name: 'About Us',
        path: '/about',
      },
      {
        name: 'Team',
        path: '/team',
      },
      {
        name: 'Events',
        path: '/events',
      },
    ],
  },
  {
    id: 'get-involved',
    name: 'Get Involved',
    links: [
      {
        name: 'Join Community',
        path: '/community',
      },
      {
        name: 'Volunteer',
        path: '/contribute',
      },
      {
        name: 'Become Speaker',
        path: '/contribute',
      },
    ],
  },
  {
    id: 'resources',
    name: 'Resources',
    links: [
      {
        name: 'Code of Conduct',
        path: '/code-of-conduct',
      },
      {
        name: 'FAQs',
        path: '/faqs',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ],
  },
  {
    id: 'legal',
    name: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        name: 'Terms and Conditions',
        path: '/terms-and-conditions',
        contentClassName: 'whitespace-nowrap sm:whitespace-pre-line',
      },
    ],
  },
];

export default footerLinks;
