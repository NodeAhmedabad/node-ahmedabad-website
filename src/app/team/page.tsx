import teamImage from '@/assets/team.jpg';
import Banner from '@/components/Banner';
import TeamMembers from '@/components/team/TeamMembers';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Team', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const TeamPage: Component = () => (
  <MainLayout>
    <Banner
      // 80px fix height of header
      className="xl:pb-52 xl:pt-72"
      description="The passionate individuals who make our community thrive"
      image={teamImage.src}
      title="Meet Our Team"
    />
    <TeamMembers />
  </MainLayout>
);

export default TeamPage;
