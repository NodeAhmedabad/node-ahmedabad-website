import { notFound } from 'next/navigation';

import Connect from '@/components/team/teamMember/Connect';
import ProfileSection from '@/components/team/teamMember/ProfileSection';
import TeamMemberInformation from '@/components/team/teamMember/TeamMemberInformation';
import constants from '@/constants';
import teamMembers from '@/data/team/teamMembers';
import MainLayout from '@/layouts/MainLayout';

import type { GenerateMetadata, ParamsComponent } from '@/types/next';

export const generateMetadata: GenerateMetadata<'id'> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const teamMember = teamMembers.find((member) => member.slug === id);

  return {
    title: [...(teamMember?.name ? [teamMember.name] : []), constants.APP_NAME].join(' | '),
  };
};

const TeamMemberPage: ParamsComponent<'id'> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const teamMember = teamMembers.find((member) => member.slug === id);

  if (!teamMember) return notFound();

  return (
    <MainLayout>
      <ProfileSection team teamMember={teamMember} />
      <TeamMemberInformation teamMember={teamMember} />
      <Connect teamMember={teamMember} />
    </MainLayout>
  );
};

export default TeamMemberPage;
