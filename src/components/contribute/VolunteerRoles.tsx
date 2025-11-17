import { CheckCircleIcon } from 'lucide-react';

import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import Typography from '@/components/ui/Typography';
import volunteerRoles from '@/data/contribute/volunteerRoles';

import type { Component } from '@/types';

const VolunteerRoles: Component = () => {
  const { title, description, roles } = volunteerRoles;

  return (
    <Section id="volunteer-roles">
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {roles.map((role, index) => {
          const { icon, label, content, commitments, skills } = role;

          return (
            <Box
              key={label}
              center={false}
              className="flex flex-col"
              content={content}
              contentProps={{ className: 'mb-4' }}
              delay={index * 100}
              icon={icon}
              label={label}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <Typography
                    as="h4"
                    className="mb-3"
                    color="white"
                    variant="content"
                    weight="semibold"
                  >
                    Time Commitment
                  </Typography>
                  <ul className="flex flex-col gap-y-2">
                    {commitments.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="mr-2 size-4 shrink-0 text-green-400" />
                        <Typography as="span" color="content" variant="content">
                          {benefit}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <Typography
                    as="h4"
                    className="mb-3"
                    color="white"
                    variant="content"
                    weight="semibold"
                  >
                    Skills Needed
                  </Typography>
                  <div className="flex flex-wrap gap-x-2 gap-y-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center rounded-full bg-green-500/20 px-3 py-2"
                      >
                        <Typography as="span" color="green-400" variant="xs">
                          {skill}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </Section>
  );
};

export default VolunteerRoles;
