import { Fragment } from 'react/jsx-runtime';

import AboutSection from '@/components/homepage/AboutSection';
import EventsSection from '@/components/homepage/EventsSection';
import HeroSection from '@/components/homepage/HeroSection';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Homepage | ${constants.APP_NAME}`,
} satisfies Metadata;

const HomePage: Component = () => (
  <Fragment>
    <HeroSection />
    <AboutSection />
    <EventsSection />
  </Fragment>
);

export default HomePage;
