import { CalendarIcon, Code2Icon, HeartHandshakeIcon, MailIcon, UsersIcon } from 'lucide-react';

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: Code2Icon,
  },
  {
    name: 'Events',
    path: '/events',
    icon: CalendarIcon,
  },
  {
    name: 'Team',
    path: '/team',
    icon: UsersIcon,
  },
  {
    name: 'Contribute',
    path: '/contribute',
    icon: HeartHandshakeIcon,
    className: 'lg:hidden xl:flex',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: MailIcon,
  },
];

export const menuButtonText = 'Join Community';

export default menu;
