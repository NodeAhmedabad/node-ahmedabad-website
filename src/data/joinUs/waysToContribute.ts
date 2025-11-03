import { Mic, Users } from 'lucide-react';

const waysToContribute = [
  {
    icon: Mic,
    title: 'Become a Speaker',
    description:
      'Share your knowledge and expertise with the community through talks and workshops.',
    benefits: [
      'Build your personal brand',
      'Network with peers',
      'Give back to community',
      'Gain speaking experience',
    ],
    actions: [
      {
        label: 'Apply to Speak',
        variant: 'solid',
        href: 'https://forms.gle/mYP5sBhUchSm3uuQ6',
        target: '_blank',
      },
    ],
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Help organize events, moderate discussions, and support community operations.',
    benefits: [
      'Develop leadership skills',
      'Make connections',
      'Event planning experience',
      'Community impact',
    ],
    actions: [
      {
        label: 'Join the Team',
        variant: 'solid',
        href: 'https://forms.gle/mYP5sBhUchSm3uuQ6',
        target: '_blank',
      },
      {
        label: 'Learn More',
        variant: 'outlined',
        href: '/contribute#volunteerRoles',
        target: '_self',
      },
    ],
  },
];

export default waysToContribute;
