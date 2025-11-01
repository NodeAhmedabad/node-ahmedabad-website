import { Calendar, MapPin, Users } from 'lucide-react';

import { stats } from '@/data/information';

const statLinks = [
  {
    icon: Users,
    value: stats.MEMBERS.short,
    name: 'Members',
  },
  {
    icon: Calendar,
    value: stats.EVENTS.short,
    name: 'Event',
  },
  {
    icon: MapPin,
    value: 'AMD',
    name: 'City',
  },
];

export default statLinks;
