import { socialMedias } from '@/data/information';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  title: 'Ready to Get Started?',
  description:
    'Join thousands of developers who are already part of our amazing community. Start your journey today!',
  actions: [
    {
      label: `Join ${socialMedias.WHATSAPP.title}`,
      href: socialMedias.WHATSAPP.url,
      icon: socialMedias.WHATSAPP.icon,
      isOutlined: false,
    },
    {
      label: 'Learn More',
      href: '/community#social-platforms',
      isOutlined: true,
      target: '_self',
    },
  ],
  variant: 'default',
} satisfies CtaBlockProps;

export default ctaBlock;
