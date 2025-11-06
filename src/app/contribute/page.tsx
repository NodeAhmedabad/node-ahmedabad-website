import Banner from '@/components/Banner';
import GitHubContributions from '@/components/contribute/GitHubContributions';
import VolunteerRoles from '@/components/contribute/VolunteerRoles';
import WaysToContribute from '@/components/contribute/WaysToContribute';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Contribute', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const ContributePage: Component = () => (
  <MainLayout>
    <Banner
      description="Help us build an amazing community by contributing your skills, knowledge, and passion for Node.js and JavaScript."
      title="Contribute"
    />
    <WaysToContribute />
    <VolunteerRoles />
    <GitHubContributions />
  </MainLayout>
);

export default ContributePage;
