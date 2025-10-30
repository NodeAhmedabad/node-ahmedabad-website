import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const stats = {
  MEMBERS: {
    short: '1.5k+',
    long: '1,500+',
  },
  EVENTS: {
    short: '1',
    long: '1',
  },
  SPEAKERS: {
    short: '3',
    long: '3',
  },
  YEARS: {
    short: '2',
    long: '2',
  },
};

export const socialMedia = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/nodeahmedabad',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/nodeahmedabad',
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/nodeahmedabad',
    color: 'hover:text-blue-500',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:hello@nodeahmedabad.com',
    color: 'hover:text-green-400',
  },
];
