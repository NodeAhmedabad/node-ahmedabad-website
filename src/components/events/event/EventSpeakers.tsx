import ScrollReveal from '@/components/ScrollReveal';
import SocialLinks from '@/components/SocialLinks';
import socialMedia from '@/data/community/socialMedia';

import type { SocialMedias } from '@/components/SocialLinks';
import type events from '@/data/events/events';
import type { Component } from '@/types';

interface EventSpeakersProps {
  event: (typeof events)[number];
}

const EventSpeakers: Component<EventSpeakersProps> = (props) => {
  const { event } = props;
  const { speakers } = event;

  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {speakers.map((speaker) => {
            const { name, role, company, avatar, bio, socialMedia: social } = speaker;

            const socialMedias = socialMedia.reduce<SocialMedias[]>((acc, item) => {
              const { slug } = item;

              const url = social[slug as keyof typeof social];

              if (url) {
                acc.push({
                  ...item,
                  url,
                });
              }

              return acc;
            }, []);

            return (
              <ScrollReveal key={avatar}>
                <h2 className="mb-8 text-center text-3xl font-bold text-white">
                  Meet Your Speakers
                </h2>
                <div className="rounded-2xl border border-gray-700 bg-slate-800/50 p-8">
                  <div className="flex flex-col items-center gap-6 md:flex-row">
                    <img
                      alt={name}
                      className="size-32 rounded-full border-4 border-green-500/20"
                      src={avatar}
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
                      <p className="mb-1 font-medium text-green-400">{role}</p>
                      <p className="mb-4 text-gray-400">{company}</p>
                      <p className="mb-4 leading-relaxed text-gray-300">{bio}</p>
                      <SocialLinks socialMedias={socialMedias} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventSpeakers;
