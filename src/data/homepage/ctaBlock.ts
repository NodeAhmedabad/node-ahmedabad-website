import { MicVocalIcon } from 'lucide-react';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: MicVocalIcon,
  title: 'Want to Speak at Our Events?',
  description:
    "Share your knowledge and experience with our community. We're always looking for passionate speakers.",
  actions: [
    {
      label: 'Become a Speaker',
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
