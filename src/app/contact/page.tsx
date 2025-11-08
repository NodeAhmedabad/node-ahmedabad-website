import contactImage from '@/assets/contact.jpg';
import Banner from '@/components/Banner';
import ContactInformation from '@/components/contact/ContactInformation';
import LetsConnect from '@/components/contact/LetsConnect';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Contact', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const ContactPage: Component = () => (
  <MainLayout>
    <Banner
      description="Have questions, suggestions, or want to collaborate? We'd love to hear from you and help you get involved in our community."
      image={contactImage.src}
      title="Get In Touch"
    />
    <ContactInformation />
    <LetsConnect />
  </MainLayout>
);

export default ContactPage;
