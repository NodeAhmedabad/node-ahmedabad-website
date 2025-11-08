import { Calendar, Code2, HandHelping, Mail, Users } from 'lucide-react';

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: Code2,
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
  },
  {
    name: 'Team',
    path: '/team',
    icon: Users,
  },
  {
    name: 'Contribute',
    path: '/contribute',
    icon: HandHelping,
    className: 'lg:hidden xl:flex',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Mail,
  },
];

export const menuButtonText = 'Join Community';

export default menu;
