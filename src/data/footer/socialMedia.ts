import { socialMedias } from '@/data/information';

const socialMedia = [
  {
    ...socialMedias.WHATSAPP,
    color: 'hover:text-green-400',
  },
  {
    ...socialMedias.LINKEDIN,
    color: 'hover:text-blue-500',
  },
  {
    ...socialMedias.INSTAGRAM,
    color: 'hover:text-pink-400',
  },
  {
    ...socialMedias.X,
    color: 'hover:text-black/40',
  },
  {
    ...socialMedias.EMAIL,
    color: 'hover:text-blue-400',
  },
];

export default socialMedia;
