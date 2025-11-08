import { Mail, MapPin, Phone } from 'lucide-react';

import { socialMedias } from '@/data/information';

const contactInformation = [
  {
    icon: Mail,
    label: 'Email Us',
    content: socialMedias.EMAIL.url.replace('mailto:', ''),
    description: "Send us an email and we'll get back to you within 24 hours",
  },
  {
    icon: Phone,
    label: 'Call Us',
    content: '+91 87339 40250',
    description: 'Available Monday to Friday, 10 AM to 10 PM IST',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    content: 'Ahmedabad, Gujarat, India',
    description: 'Our events are hosted at various locations across the city',
  },
] as const;

export default contactInformation;
