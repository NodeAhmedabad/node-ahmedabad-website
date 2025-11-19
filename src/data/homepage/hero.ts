import { CalendarDaysIcon, CalendarIcon, UsersIcon } from 'lucide-react';

import constants from '@/constants';
import { stats } from '@/data/information';

export const codeSnippets = [
  'const community = new NodeAhmedabad();',
  'community.learn().grow().connect();',
  'export { knowledge, friendship };',
];

export const heroSection = {
  tag: `Welcome to ${constants.APP_NAME}`,
  description:
    "Join Ahmedabad's most vibrant JavaScript community. Where developers meet, learn, grow, connect and build amazing things together.",
  heroStats: [
    {
      stat: stats.MEMBERS,
      icon: UsersIcon,
      label: 'Members',
    },
    {
      stat: stats.EVENTS,
      icon: CalendarIcon,
      label: 'Events',
    },
    {
      stat: stats.YEARS,
      icon: CalendarDaysIcon,
      label: 'Years',
    },
  ],
};
