import { MessageCircleQuestionIcon } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: MessageCircleQuestionIcon,
  title: 'Still Have Questions?',
  description:
    "Can't find what you're looking for? We're here to help, reach out through any of these channels.",
  actions: [
    {
      label: `Join ${socialMedias.WHATSAPP.title}`,
      href: socialMedias.WHATSAPP.url,
      icon: socialMedias.WHATSAPP.icon,
      isOutlined: false,
    },
    {
      label: 'Community',
      href: '/community',
      isOutlined: true,
      target: '_self',
    },
  ],
  variant: 'default',
} satisfies CtaBlockProps;

export default ctaBlock;
