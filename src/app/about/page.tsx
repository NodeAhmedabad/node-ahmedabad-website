import CoreValues from '@/components/about/CoreValues';
import GrowthTimeline from '@/components/about/GrowthTimeline';
import InformationBlock from '@/components/about/InformationBlock';
import OurStory from '@/components/about/OurStory';
import Banner from '@/components/Banner';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['About', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const AboutPage: Component = () => (
  <MainLayout className="pt-20">
    <Banner description={constants.APP_DESCRIPTION} title={constants.APP_NAME} />
    <InformationBlock />
    <OurStory />
    <CoreValues />
    <GrowthTimeline />
  </MainLayout>
);

export default AboutPage;
