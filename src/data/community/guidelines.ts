import { Code, Handshake, Heart, Shield } from 'lucide-react';

const guidelines = {
  title: 'Community Guidelines',
  description: 'Help us maintain a welcoming and productive environment for everyone',
  data: [
    {
      icon: Heart,
      label: 'Be Respectful',
      content:
        'Treat all community members with kindness and respect, regardless of their experience level.',
    },
    {
      icon: Handshake,
      label: 'Help Others',
      content:
        'Share your knowledge and help fellow developers solve problems and learn new skills.',
    },
    {
      icon: Code,
      label: 'Stay On Topic',
      content: 'Keep discussions relevant to Node.js, JavaScript, and related technologies.',
    },
    {
      icon: Shield,
      label: 'No Spam',
      content: 'Avoid excessive self-promotion and keep commercial content to designated channels.',
    },
  ],
};

export default guidelines;
