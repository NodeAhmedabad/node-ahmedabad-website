import { MicIcon, UsersIcon } from 'lucide-react';

const waysToContribute = {
  title: 'Ways to Contribute',
  description: "Choose how you'd like to make an impact in our community",
  ways: [
    {
      icon: MicIcon,
      label: 'Become a Speaker',
      content: 'Share your knowledge and expertise with the community through talks and workshops.',
      benefits: [
        'Build your personal brand',
        'Network with peers',
        'Give back to community',
        'Gain speaking experience',
      ],
      actions: [
        {
          name: 'Coming Soon...',
          variant: 'solid',
          href: 'https://forms.gle/mYP5sBhUchSm3uuQ6',
          target: '_blank',
          disabled: true,
        },
      ],
    },
    {
      icon: UsersIcon,
      label: 'Volunteer',
      content: 'Help organize events, moderate discussions, and support community operations.',
      benefits: [
        'Make connections',
        'Event planning experience',
        'Community impact',
        'Free Goodies',
      ],
      actions: [
        {
          name: 'Coming Soon...',
          variant: 'solid',
          href: 'https://forms.gle/eJKWWn8Kikw8SyXy5',
          target: '_blank',
          disabled: true,
        },
        {
          name: 'Learn More',
          variant: 'outlined',
          href: '/contribute#volunteer-roles',
          target: '_self',
          disabled: false,
        },
      ],
    },
  ],
};

export default waysToContribute;
