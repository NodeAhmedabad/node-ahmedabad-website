import { socialMedias } from '@/data/information';

const socialMedia = [
  {
    ...socialMedias.WHATSAPP,
    description: 'Get instant updates about events and quick community support.',
    color: 'from-green-500 to-green-600',
  },
  {
    ...socialMedias.LINKEDIN,
    description: 'Join our active Discord server for real-time discussions, help, and networking.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    ...socialMedias.INSTAGRAM,
    description: 'Contribute to open-source projects and collaborate on community initiatives.',
    color: 'from-pink-600 to-pink-800',
  },
  {
    ...socialMedias.X,
    description: 'Contribute to open-source projects and collaborate on community initiatives.',
    color: 'from-gray-700 to-gray-800',
  },
  {
    ...socialMedias.DISCORD,
    description: 'Join our active Discord server for real-time discussions, help, and networking.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    ...socialMedias.GITHUB,
    description: 'Get instant updates about events and quick community support.',
    color: 'from-slate-800 to-slate-900',
  },
];

export default socialMedia;
