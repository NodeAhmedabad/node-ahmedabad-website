import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

import Section from '@/app/Section';
import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';

import type teamMembers from '@/data/team/teamMembers';
import type { Component } from '@/types';

interface ProfileSectionProps {
  teamMember: (typeof teamMembers)[number];
}

const ProfileSection: Component<ProfileSectionProps> = (props) => {
  const { teamMember } = props;
  const { name, image, role, location, joinedDate } = teamMember;

  const information = [
    {
      icon: MapPin,
      title: location,
    },
    {
      icon: Calendar,
      title: `Joined ${joinedDate}`,
    },
  ];

  return (
    // 80px fix height of header
    <Section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-28 pt-48">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="shrink-0">
              <Image
                alt={name}
                className="size-48 rounded-2xl border-4 border-green-400/20 object-cover"
                height={192}
                loading="lazy"
                src={image}
                width={192}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <AnimatedText
                className="mb-4 lg:text-5xl"
                text={name}
                typographyProps={{
                  as: 'h1',
                  variant: 'banner',
                  color: 'white',
                }}
              />
              <Typography as="p" className="mb-6" color="green-400" variant="2xl" weight="normal">
                {role}
              </Typography>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {information.map((item) => {
                  const { icon: Icon, title } = item;

                  return (
                    <div key={title} className="flex items-center gap-2">
                      <Icon className="size-4 text-gray-300" />
                      <Typography as="span" color="content" variant="content">
                        {title}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default ProfileSection;
