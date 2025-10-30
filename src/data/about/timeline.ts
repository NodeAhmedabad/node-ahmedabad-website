import { Award, Heart, History, Target, Users } from 'lucide-react';

const timeline = [
  {
    year: '2020',
    event: 'Community Founded',
    description: 'Started with 25 passionate developers in Ahmedabad',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
  },
  {
    year: '2021',
    event: 'First Meetup',
    description: 'Hosted our inaugural Node.js workshop with 50+ attendees',
    icon: Target,
    color: 'from-green-500 to-green-600',
  },
  {
    year: '2022',
    event: '100+ Members',
    description: 'Reached our first major milestone with active community participation',
    icon: Award,
    color: 'from-purple-500 to-purple-600',
  },
  {
    year: '2023',
    event: 'Tech Conference',
    description: 'Organized the first Node Ahmedabad Conference with 300+ developers',
    icon: History,
    color: 'from-orange-500 to-orange-600',
  },
  {
    year: '2024',
    event: '2000+ Members',
    description: 'Became the largest Node.js community in Gujarat with monthly events',
    icon: Heart,
    color: 'from-red-500 to-red-600',
  },
];

export default timeline;
