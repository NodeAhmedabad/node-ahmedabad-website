import { LockIcon, MailIcon } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: LockIcon,
  title: 'Privacy Questions?',
  description:
    "We're committed to transparency about our privacy practices. If you have any questions or concerns, please reach out to us.",
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
