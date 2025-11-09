import { CodeIcon } from 'lucide-react';

import type { CtaBlockProps } from '@/components/CtaBlock';

const ctaBlock = {
  icon: CodeIcon,
  title: 'Contribute to Our Website',
  description:
    "Join us in building and maintaining our community website. Whether you're a developer, designer, or content creator, your contributions help us make learning Node.js more accessible to everyone.",
  actions: [
    {
      label: 'View Repository',
      href: 'https://github.com/NodeAhmedabad/node-ahmedabad-website',
      isOutlined: false,
    },
    {
      label: 'Contribution Guide',
      href: 'https://github.com/NodeAhmedabad/node-ahmedabad-website/blob/master/CONTRIBUTING.md',
      isOutlined: true,
    },
  ],
  variant: 'default',
} satisfies CtaBlockProps;

const githubContributions = {
  ...ctaBlock,
  stats: [
    {
      value: '2+',
      label: 'Active Maintainers',
    },
    {
      value: '5+',
      label: 'Community Contributors',
    },
    {
      value: '200+',
      label: 'Commits',
    },
  ],
};

export default githubContributions;
