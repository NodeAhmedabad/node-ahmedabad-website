import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const stats = [
  { number: '2,000+', label: 'Active Members' },
  { number: '50+', label: 'Events Hosted' },
  { number: '100+', label: 'Speakers' },
  { number: '5', label: 'Years Active' },
];

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
