import { notFound } from 'next/navigation';

import EventAgenda from '@/components/events/event/EventAgenda';
import EventHeader from '@/components/events/event/EventHeader';
import EventSpeakers from '@/components/events/event/EventSpeakers';
import EventSponsors from '@/components/events/event/EventSponsors';
import constants from '@/constants';
import events from '@/data/events/events';
import MainLayout from '@/layouts/MainLayout';

import type { GenerateMetadata, ParamsComponent } from '@/types/next';

export const generateMetadata: GenerateMetadata<'slug'> = async (props) => {
  const { params } = props;
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  return {
    title: [...(event?.title ? [event.title] : []), constants.APP_NAME].join(' | '),
  };
};

const TeamMemberPage: ParamsComponent<'slug'> = async (props) => {
  const { params } = props;
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) return notFound();

  return (
    <MainLayout className="pt-20">
      <EventHeader event={event} />
      <EventAgenda event={event} />
      <EventSpeakers event={event} />
      <EventSponsors event={event} />
    </MainLayout>
  );
};

export default TeamMemberPage;
