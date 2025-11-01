import { Clock } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventAgendaProps {
  event: (typeof events)[number];
}

const EventAgenda: Component<EventAgendaProps> = (props) => {
  const { event } = props;
  const { agenda } = event;

  return (
    <section className="bg-slate-800/30 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-white">Event Agenda</h2>
            <div className="space-y-6">
              {agenda.map((item) => {
                const { time, title, description } = item;

                return (
                  <div
                    key={time}
                    className="flex gap-6 rounded-xl border border-gray-700 bg-slate-900/50 p-6"
                  >
                    <div className="shrink-0">
                      <div className="flex size-20 items-center justify-center rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                        <Clock className="size-6 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-sm font-medium text-green-400">{time}</div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                      <p className="text-gray-300">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;
