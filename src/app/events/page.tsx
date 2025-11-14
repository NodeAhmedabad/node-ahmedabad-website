import eventsImage from '@/assets/events.jpg';
import Banner from '@/components/Banner';
import CtaBlock from '@/components/CtaBlock';
import EventListing from '@/components/events/EventListing';
import constants from '@/constants';
import ctaBlock from '@/data/events/ctaBlock';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Events', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const EventsPage: Component = () => (
  <MainLayout>
    <Banner
      description="Join our regular meetups, workshops, and conferences to learn, network, and grow with fellow Node.js developers."
      image={eventsImage.src}
      title="Events"
    />
    <EventListing />
    <CtaBlock {...ctaBlock} />
  </MainLayout>
);

export default EventsPage;
