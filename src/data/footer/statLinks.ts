import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';

import { stats } from '@/data/information';

const statLinks = [
  {
    icon: UsersIcon,
    value: stats.MEMBERS,
    name: 'Members',
  },
  {
    icon: CalendarIcon,
    value: stats.EVENTS,
    name: 'Events',
  },
  {
    icon: MapPinIcon,
    value: 'AMD',
    name: 'City',
  },
];

export default statLinks;
