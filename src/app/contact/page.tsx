import Banner from '@/components/Banner';
import ContactForm from '@/components/contact/ContactForm';
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
  <MainLayout className="pt-20">
    <Banner
      description="Have questions, suggestions, or want to collaborate? We'd love to hear from you and help you get involved in our community."
      title="Get In Touch"
    />
    <ContactInformation />

    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactForm />
          <LetsConnect />
        </div>
      </div>
    </section>
  </MainLayout>
);

export default ContactPage;
