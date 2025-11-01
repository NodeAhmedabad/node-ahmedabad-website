import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type teamMembers from '@/data/team/teamMembers';
import type { Component } from '@/types';

interface ProfileSectionProps {
  teamMember: (typeof teamMembers)[number];
}

const ProfileSection: Component<ProfileSectionProps> = (props) => {
  const { teamMember } = props;
  const { name, image, role, location, joinedDate } = teamMember;

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-6">
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
                  className="mb-4 text-4xl font-bold text-white md:text-5xl"
                  text={name}
                />
                <p className="mb-6 text-2xl text-green-400">{role}</p>
                <div className="flex flex-wrap justify-center gap-4 text-gray-300 md:justify-start">
                  <div className="flex items-center">
                    <MapPin className="mr-2 size-4" />
                    {location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 size-4" />
                    Joined {joinedDate}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
