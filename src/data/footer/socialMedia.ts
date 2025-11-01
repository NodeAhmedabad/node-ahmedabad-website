import { socialMedias } from '@/data/information';

const socialMedia = [
  {
    ...socialMedias.WHATSAPP,
    className: 'hover:text-green-400',
  },
  {
    ...socialMedias.LINKEDIN,
    className: 'hover:text-blue-500',
  },
  {
    ...socialMedias.INSTAGRAM,
    className: 'hover:text-pink-400',
  },
  {
    ...socialMedias.X,
    className: 'hover:text-black/40',
  },
  {
    ...socialMedias.GITHUB,
    className: 'hover:text-black/40',
  },
  {
    ...socialMedias.EMAIL,
    className: 'hover:text-blue-400',
  },
] as const;

export default socialMedia;
