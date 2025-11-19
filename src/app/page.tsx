import CtaBlock from '@/components/CtaBlock';
import AboutSection from '@/components/homepage/AboutSection';
import EventsSection from '@/components/homepage/EventsSection';
import HeroSection from '@/components/homepage/HeroSection';
import JourneySection from '@/components/homepage/JourneySection';
import constants from '@/constants';
import ctaBlock from '@/data/homepage/ctaBlock';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Homepage', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const HomePage: Component = () => (
  <MainLayout>
    <HeroSection />
    <AboutSection />
    <JourneySection />
    <EventsSection />
    <CtaBlock {...ctaBlock} />
  </MainLayout>
);

export default HomePage;
