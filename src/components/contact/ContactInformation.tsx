import { Mail, MapPin, Phone } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import { socialMedias } from '@/data/information';

import type { Component } from '@/types';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: socialMedias.EMAIL.url.replace('mailto:', ''),
    description: "Send us an email and we'll get back to you within 24 hours",
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 87339 40250',
    description: 'Available Monday to Friday, 10 AM to 10 PM IST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Ahmedabad, Gujarat, India',
    description: 'Our events are hosted at various locations across the city',
  },
];

const ContactInformation: Component = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {contactInfo.map((item, index) => {
          const { icon: Icon, title, content, description } = item;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="rounded-xl border border-gray-700 bg-slate-800 p-8 text-center transition-colors duration-300 hover:bg-slate-700">
                <Icon className="mx-auto mb-4 size-12 text-green-400" />
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="mb-3 font-semibold text-green-400">{content}</p>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactInformation;
