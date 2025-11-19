import { notFound } from 'next/navigation';

import Connect from '@/components/team/teamMember/Connect';
import ProfileSection from '@/components/team/teamMember/ProfileSection';
import TeamMemberInformation from '@/components/team/teamMember/TeamMemberInformation';
import constants from '@/constants';
import persons from '@/data/persons/persons';
import MainLayout from '@/layouts/MainLayout';

import type { GenerateMetadata, ParamsComponent } from '@/types/next';

export const generateMetadata: GenerateMetadata<'id'> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const speaker = Object.values(persons).find((person) => person.slug === id);

  return {
    title: [...(speaker?.name ? [speaker.name] : []), constants.APP_NAME].join(' | '),
  };
};

const SpeakerPage: ParamsComponent<'id'> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const speaker = Object.values(persons).find((person) => person.slug === id);

  if (!speaker) return notFound();

  return (
    <MainLayout>
      <ProfileSection team={false} teamMember={speaker} />
      <TeamMemberInformation teamMember={speaker} />
      <Connect teamMember={speaker} />
    </MainLayout>
  );
};

export default SpeakerPage;
