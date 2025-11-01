import { Award } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type teamMembers from '@/data/team/teamMembers';
import type { Component } from '@/types';

interface TeamMemberInformationProps {
  teamMember: (typeof teamMembers)[number];
}

const TeamMemberInformation: Component<TeamMemberInformationProps> = (props) => {
  const { teamMember } = props;
  const { name, bio, quote, skills } = teamMember;

  return (
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 rounded-2xl border border-gray-700 bg-slate-800 p-8">
              <h3 className="mb-6 text-2xl font-bold text-white">About {name}</h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">{bio}</p>

              <div className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6">
                <blockquote className="text-lg italic leading-relaxed text-gray-300">
                  &quot;{quote}&quot;
                </blockquote>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-6">
                <Award className="mr-3 size-6 text-green-400" />
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 text-sm text-green-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberInformation;
