import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventAgendaProps {
  event: (typeof events)[number];
}

const EventAgenda: Component<EventAgendaProps> = (props) => {
  const { event } = props;
  const { agenda } = event;

  return (
    <Section>
      <ContentWrapper
        description="An organized breakdown of the event schedule to help you navigate each session effectively."
        title="Event Agenda"
      />
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            {agenda.map((item) => {
              const { icon: Icon, time, title, description } = item;

              return (
                <div
                  key={time}
                  className="flex items-center gap-6 rounded-xl border border-gray-700 bg-slate-900/50 p-6"
                >
                  <div className="hidden shrink-0 sm:flex">
                    <div className="flex size-20 items-center justify-center rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                      <Icon className="size-6 text-green-400" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Typography as="p" color="green-400" variant="sm" weight="medium">
                      {time}
                    </Typography>
                    <Typography as="h3" color="white" variant="xl" weight="semibold">
                      {title}
                    </Typography>
                    <Typography as="p" color="content" variant="content">
                      {description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default EventAgenda;
