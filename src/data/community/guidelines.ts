import { CodeIcon, HandshakeIcon, HeartIcon, ShieldIcon } from 'lucide-react';

const guidelines = {
  title: 'Community Guidelines',
  description: 'Help us maintain a welcoming and productive environment for everyone',
  data: [
    {
      icon: HeartIcon,
      label: 'Be Respectful',
      content:
        'Treat all community members with kindness and respect, regardless of their experience level.',
    },
    {
      icon: HandshakeIcon,
      label: 'Help Others',
      content:
        'Share your knowledge and help fellow developers solve problems and learn new skills.',
    },
    {
      icon: CodeIcon,
      label: 'Stay On Topic',
      content: 'Keep discussions relevant to Node.js, JavaScript, and related technologies.',
    },
    {
      icon: ShieldIcon,
      label: 'No Spam',
      content: 'Avoid excessive self-promotion and keep commercial content to designated channels.',
    },
  ],
};

export default guidelines;
