import { stats } from '@/data/information';

const communityStats = [
  {
    value: stats.MEMBERS.long,
    label: 'Active Members',
  },
  {
    value: stats.EVENTS.long,
    label: 'Events Hosted',
  },
  {
    value: stats.SPEAKERS.long,
    label: 'Speakers',
  },
  {
    value: stats.YEARS.long,
    label: 'Years Active',
  },
];

export default communityStats;
