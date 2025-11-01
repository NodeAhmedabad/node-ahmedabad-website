import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';

export const stats = {
  MEMBERS: {
    short: '1.5K+',
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

export const socialMedias = {
  WHATSAPP: {
    slug: 'whatsapp',
    title: 'WhatsApp',
    url: 'https://chat.whatsapp.com/EqdK6ThyCk61QM0KarqTas',
    icon: MessageCircle,
  },
  LINKEDIN: {
    slug: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/node-ahmedabad',
    icon: Linkedin,
  },
  INSTAGRAM: {
    slug: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/nodeahmedabad',
    icon: Instagram,
  },
  FACEBOOK: {
    slug: 'facebook',
    title: 'Facebook',
    url: 'http://facebook.com/nodeahmedabad',
    icon: Facebook,
  },
  X: {
    slug: 'x',
    title: 'X',
    url: 'https://x.com/nodeahmedabad',
    icon: Twitter,
  },
  GITHUB: {
    slug: 'github',
    title: 'GitHub',
    url: 'https://github.com/nodeahmedabad',
    icon: Github,
  },
  DISCORD: {
    slug: 'discord',
    title: 'Discord',
    url: 'https://discord.gg/Mu74pSvh',
    icon: MessageCircle,
  },
  EMAIL: {
    slug: 'email',
    title: 'Email',
    url: 'mailto:nodeahmedabad@gmail.com',
    icon: Mail,
  },
} as const;
