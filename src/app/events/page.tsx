import Banner from '@/components/Banner';
import CtaSection from '@/components/events/CtaSection';
import EventListing from '@/components/events/EventListing';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Events', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const EventsPage: Component = () => (
  <MainLayout className="pt-20">
    <Banner
      description="Join our regular meetups, workshops, and conferences to learn, network, and grow with fellow Node.js developers."
      title="Events"
    />
    <EventListing />
    <CtaSection />
  </MainLayout>
);

export default EventsPage;
