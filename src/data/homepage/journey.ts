import { RouteIcon } from 'lucide-react';

import communityStats from '@/data/community/communityStats';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: RouteIcon,
  title: 'Ready to Join Our Journey?',
  description:
    "Whether you're just starting in Node.js or a seasoned developer, find your platform here to learn, collaborate, and contribute in the community.",
  actions: [
    {
      label: 'Learn More About Us',
      href: '/about',
      isOutlined: false,
      target: '_self',
    },
    {
      label: 'Join Community',
      href: '/community',
      isOutlined: true,
      target: '_self',
    },
  ],
  variant: 'default',
} satisfies CtaBlockProps;

const journey = {
  ...ctaBlock,
  stats: communityStats,
};

export default journey;
