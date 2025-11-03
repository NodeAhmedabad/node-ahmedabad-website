import { Calendar, MapPin, Users } from 'lucide-react';

import { stats } from '@/data/information';

const statLinks = [
  {
    icon: Users,
    value: stats.MEMBERS,
    name: 'Members',
  },
  {
    icon: Calendar,
    value: stats.EVENTS,
    name: 'Events',
  },
  {
    icon: MapPin,
    value: 'AMD',
    name: 'City',
  },
];

export default statLinks;
