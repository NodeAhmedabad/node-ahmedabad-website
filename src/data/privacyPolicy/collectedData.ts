import { EyeIcon, LockIcon, UserCheckIcon } from 'lucide-react';

const collectedData = {
  title: 'Types of Data We Collect',
  description: 'Understanding what information we gather and why',
  data: [
    {
      icon: UserCheckIcon,
      label: 'Personal Information',
      content:
        'Name, email address, profile information you provide when registering for events or joining our community.',
    },
    {
      icon: EyeIcon,
      label: 'Usage Data',
      content:
        'Information about how you use our website, including pages visited, time spent, and interaction patterns.',
    },
    {
      icon: LockIcon,
      label: 'Technical Data',
      content:
        'IP address, browser type, device information, and other technical details for security and functionality.',
    },
  ],
};

export default collectedData;
