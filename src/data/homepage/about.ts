import { HeartIcon, LightbulbIcon, TargetIcon, UsersIcon } from 'lucide-react';

const about = {
  title: 'Our Mission',
  description:
    'To operate an inclusive, high-value platform focused on developer mastery, empowering members to enhance skills, solve complex backend challenges, and collaboratively master microservices architecture.',
  values: [
    {
      icon: UsersIcon,
      label: 'Inclusive Community',
      content:
        'We are committed to an open and welcoming environment where developers—from beginners to seasoned architects—can collaborate, learn, and grow their skills without judgment.',
    },
    {
      icon: HeartIcon,
      label: 'Knowledge Sharing',
      content:
        'Our members actively contribute real-world insights through focused tech talks, hands-on workshops, and dedicated mentorship programs',
    },
    {
      icon: LightbulbIcon,
      label: 'Innovation Focus',
      content:
        'We encourage experimentation with cutting-edge technologies and creative problem solving.',
    },
    {
      icon: TargetIcon,
      label: 'Career Growth',
      content:
        'We provide networking opportunities and resources to advance your professional journey.',
    },
  ],
};

export default about;
