import Banner from '@/components/Banner';
import CommunityGuidelines from '@/components/community/CommunityGuidelines';
import CtaSection from '@/components/community/CtaSection';
import SocialBlock from '@/components/community/SocialBlock';
import ScrollReveal from '@/components/ScrollReveal';
import constants from '@/constants';
import communityStats from '@/data/community/communityStats';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Community', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const CommunityPage: Component = () => (
  <MainLayout className="pt-20">
    <Banner
      description="Connect with passionate Node.js developers, share knowledge, and grow your career in a supportive community environment."
      title="Join Our Community"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
        {communityStats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 100}>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-400 lg:text-4xl">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Banner>
    <SocialBlock />
    <CommunityGuidelines />
    <CtaSection />
  </MainLayout>
);

export default CommunityPage;
