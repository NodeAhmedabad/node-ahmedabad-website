import {
  DiscordLogoIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr';

export const stats = {
  MEMBERS: '1.5k+',
  EVENTS: '2',
  SPEAKERS: '3',
  YEARS: '2',
};

export const socialMedias = {
  WHATSAPP: {
    slug: 'whatsapp',
    title: 'WhatsApp',
    url: 'https://chat.whatsapp.com/EqdK6ThyCk61QM0KarqTas',
    icon: WhatsappLogoIcon,
  },
  LINKEDIN: {
    slug: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/node-ahmedabad',
    icon: LinkedinLogoIcon,
  },
  INSTAGRAM: {
    slug: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/nodeahmedabad',
    icon: InstagramLogoIcon,
  },
  FACEBOOK: {
    slug: 'facebook',
    title: 'Facebook',
    url: 'http://facebook.com/nodeahmedabad',
    icon: FacebookLogoIcon,
  },
  X: {
    slug: 'x',
    title: 'X',
    url: 'https://x.com/nodeahmedabad',
    icon: XLogoIcon,
  },
  GITHUB: {
    slug: 'github',
    title: 'GitHub',
    url: 'https://github.com/nodeahmedabad',
    icon: GithubLogoIcon,
  },
  DISCORD: {
    slug: 'discord',
    title: 'Discord',
    url: 'https://discord.gg/Mu74pSvh',
    icon: DiscordLogoIcon,
  },
  EMAIL: {
    slug: 'email',
    title: 'Email',
    url: 'mailto:nodeahmedabad@gmail.com',
    icon: EnvelopeSimpleIcon,
  },
} as const;
