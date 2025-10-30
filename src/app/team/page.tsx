import Banner from '@/components/Banner';
import TeamMembers from '@/components/team/TeamMembers';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Team | ${constants.APP_NAME}`,
} satisfies Metadata;

const TeamPage: Component = () => (
  <MainLayout className="pt-20">
    <Banner
      description="The passionate individuals who make our community thrive"
      title="Meet Our Team"
    />
    <TeamMembers />
  </MainLayout>
);

export default TeamPage;
