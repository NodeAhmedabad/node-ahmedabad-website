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
          name: 'Apply to Speak',
          variant: 'solid',
          href: 'https://forms.gle/mYP5sBhUchSm3uuQ6',
          target: '_blank',
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
          name: 'Join the Team',
          variant: 'solid',
          href: 'https://forms.gle/eJKWWn8Kikw8SyXy5',
          target: '_blank',
        },
        {
          name: 'Learn More',
          variant: 'outlined',
          href: '/contribute#volunteer-roles',
          target: '_self',
        },
      ],
    },
  ],
};

export default waysToContribute;
