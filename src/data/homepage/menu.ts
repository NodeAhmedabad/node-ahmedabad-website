import { Calendar, Code2, Info, Mail, Star, Users } from 'lucide-react';

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
    name: 'Community',
    path: '/community',
    icon: Star,
  },
  {
    name: 'About',
    path: '/about',
    icon: Info,
  },
  {
    name: 'Team',
    path: '/team',
    icon: Users,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Mail,
  },
];

export default menu;
