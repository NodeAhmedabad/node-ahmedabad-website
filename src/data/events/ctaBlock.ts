import { FileTextIcon } from 'lucide-react';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: FileTextIcon,
  title: 'Become a Speaker or Volunteer',
  description:
    "Got a topic you're passionate about or skills you'd like to contribute? Whether it's speaking or volunteering, we'd love to collaborate with you for upcoming events.",
  actions: [
    {
      label: 'Contribute',
      href: '/contribute',
      isOutlined: false,
      target: '_self',
    },
    {
      label: 'Contact Form',
      href: '/contact',
      isOutlined: true,
      target: '_self',
    },
  ],
  variant: 'default',
} satisfies CtaBlockProps;

export default ctaBlock;
