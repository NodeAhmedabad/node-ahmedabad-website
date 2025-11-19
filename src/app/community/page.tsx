import CommunityGuidelines from '@/components/community/CommunityGuidelines';
import HeroSection from '@/components/community/HeroSection';
import SocialPlatforms from '@/components/community/SocialPlatforms';
import CtaBlock from '@/components/CtaBlock';
import constants from '@/constants';
import ctaBlock from '@/data/community/ctaBlock';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Community', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const CommunityPage: Component = () => (
  <MainLayout>
    <HeroSection />
    <SocialPlatforms />
    <CommunityGuidelines />
    <CtaBlock {...ctaBlock} />
  </MainLayout>
);

export default CommunityPage;
