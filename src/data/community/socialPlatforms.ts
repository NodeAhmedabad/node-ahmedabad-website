import { socialMedias } from '@/data/information';

const socialPlatforms = {
  title: 'Connect With Us',
  description: 'Choose your preferred platform to join our vibrant community',
  platforms: [
    {
      ...socialMedias.WHATSAPP,
      content:
        'Join our WhatsApp community for instant updates, event alerts, and quick peer support.',
      color: 'from-green-500 to-green-600',
    },
    {
      ...socialMedias.LINKEDIN,
      content:
        'Connect with professionals, explore learning opportunities, and grow your network in the Node.js ecosystem.',
      color: 'from-blue-600 to-blue-800',
    },
    {
      ...socialMedias.INSTAGRAM,
      content:
        'Catch event highlights, behind-the-scenes moments, and community stories in a creative visual way.',
      color: 'from-pink-600 to-pink-800',
    },
    {
      ...socialMedias.X,
      content:
        'Stay informed with quick updates, developer tips, and tech news from the Node community.',
      color: 'from-gray-700 to-gray-800',
    },
    {
      ...socialMedias.DISCORD,
      content:
        'Join our Discord server for real-time discussions, coding help, and collaborative learning with other developers.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      ...socialMedias.GITHUB,
      content:
        'Explore our open-source projects, contribute code, and collaborate with other developers in the community.',
      color: 'from-slate-800 to-slate-900',
    },
  ],
};

export default socialPlatforms;
