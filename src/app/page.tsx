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
  <main>
    <HeroSection />
    <AboutSection />
    <EventsSection />
  </main>
);

export default HomePage;
