import { Calendar, Code2, Mail, PersonStanding, Users } from 'lucide-react';

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
    name: 'About',
    path: '/about',
    icon: PersonStanding,
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
