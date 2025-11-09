import { MailIcon } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: MailIcon,
  title: 'Contact Information',
  description:
    'If you experience or witness any violations of our code of conduct, please contact us:',
  actions: [
    {
      label: socialMedias.EMAIL.url.replace('mailto:', ''),
      href: socialMedias.EMAIL.url,
      icon: MailIcon,
      isOutlined: false,
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
