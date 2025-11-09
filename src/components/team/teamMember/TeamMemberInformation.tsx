import { Award } from 'lucide-react';

import Section from '@/app/Section';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';

import type teamMembers from '@/data/team/teamMembers';
import type { Component } from '@/types';

interface TeamMemberInformationProps {
  teamMember: (typeof teamMembers)[number];
}

const TeamMemberInformation: Component<TeamMemberInformationProps> = (props) => {
  const { teamMember } = props;
  const { name, bio, quote, skills } = teamMember;

  return (
    <Section>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col rounded-2xl border border-gray-700 bg-slate-800 p-8">
            <Typography as="h2" className="mb-3" color="white" variant="2xl">
              About {name}
            </Typography>
            <Typography as="p" className="mb-6" color="content" variant="lg">
              {bio}
            </Typography>

            <div className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6">
              <Typography as="blockquote" className="italic" color="content" variant="lg">
                &quot;{quote}&quot;
              </Typography>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-6">
              <Award className="mr-3 size-6 text-green-400" />
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Typography
                    key={skill}
                    as="span"
                    className="cursor-text rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2"
                    color="green-400"
                    variant="sm"
                  >
                    {skill}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default TeamMemberInformation;
