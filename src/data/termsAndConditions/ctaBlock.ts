import { Mail } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  title: 'Questions About These Terms and Conditions?',
  description:
    "If you have any questions about these Terms and Conditions, please don't hesitate to contact us.",
  actions: [
    {
      label: socialMedias.EMAIL.url.replace('mailto:', ''),
      href: socialMedias.EMAIL.url,
      icon: Mail,
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
