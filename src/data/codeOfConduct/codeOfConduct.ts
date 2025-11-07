import { AlertTriangle, CheckCircle, Heart, Info, Shield, Users } from 'lucide-react';

export const commitment = {
  title: 'Our Commitment',
  description:
    'In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.',
};

export const coreValues = {
  title: 'Our Core Values',
  description: 'The principles that guide our community',
  values: [
    {
      icon: Heart,
      label: 'Respect & Kindness',
      content:
        'We treat all community members with respect, kindness, and empathy, regardless of their background or experience level.',
    },
    {
      icon: Users,
      label: 'Inclusivity',
      content:
        'We welcome and support people of all backgrounds and identities. Our community is open to everyone.',
    },
    {
      icon: Shield,
      label: 'Safety',
      content:
        'We are committed to providing a harassment-free experience for everyone, in all community spaces.',
    },
  ],
};

export const behaviors = [
  {
    icon: CheckCircle,
    title: 'Expected Behavior',
    points: [
      'Use welcoming and inclusive language',
      'Be respectful of differing viewpoints and experiences',
      'Gracefully accept constructive criticism',
      'Focus on what is best for the community',
      'Show empathy towards other community members',
      'Help maintain a positive learning environment',
      'Be patient with newcomers and those learning',
      'Encourage and support fellow developers',
    ],
    className: 'border-green-500/20 from-green-500/10 to-emerald-500/10',
    iconClassName: 'text-green-400',
  },
  {
    icon: AlertTriangle,
    title: 'Unacceptable Behavior',
    points: [
      'Harassment, discrimination, or hate speech',
      'Trolling, insulting, or derogatory comments',
      'Personal or political attacks',
      'Public or private harassment',
      "Publishing others' private information without permission",
      'Spam, excessive self-promotion, or off-topic discussions',
      'Any conduct that could reasonably be considered inappropriate',
      'Disrupting events or community activities',
    ],
    className: 'border-red-500/20 from-red-500/10 to-red-700/10',
    iconClassName: 'text-red-400',
  },
];

export const reportingProcess = {
  title: 'Reporting Process',
  description: 'How to report violations of our code of conduct',
  steps: [
    {
      label: 'Document the Incident',
      content: 'Record details about what happened, when, and who was involved.',
    },
    {
      label: 'Contact Moderators',
      content: 'Reach out to community moderators via email or direct message.',
    },
    {
      label: 'Investigation',
      content: 'Our team will investigate the matter promptly and fairly.',
    },
    {
      label: 'Resolution',
      content: 'Appropriate action will be taken based on our findings.',
    },
  ],
};

export const enforcement = {
  title: 'Enforcement',
  description: 'Consequences for violations of our code of conduct',
  consequences: [
    {
      icon: AlertTriangle,
      label: 'Warning',
      content: 'A private, written warning for minor violations',
      className: 'from-yellow-500 to-orange-500',
    },
    {
      icon: AlertTriangle,
      label: 'Temporary Ban',
      content: 'Temporary removal from community spaces for serious violations',
      className: 'from-orange-500 to-red-500',
    },
    {
      icon: AlertTriangle,
      label: 'Permanent Ban',
      content: 'Permanent removal from all community spaces for severe or repeated violations',
      className: 'from-red-500 to-red-700',
    },
    {
      icon: Info,
      label: 'Note',
      content:
        'All enforcement decisions are made at the discretion of the community moderators and leadership team. We reserve the right to take any action deemed necessary to maintain a safe and welcoming environment.',
      className: 'from-slate-500 to-slate-700',
    },
  ],
};
