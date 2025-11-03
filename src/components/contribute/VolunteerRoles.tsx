import { Clock, Star } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import volunteerRoles from '@/data/contribute/volunteerRoles';

import type { Component } from '@/types';

const VolunteerRoles: Component = () => (
  <section className="scroll-mt-20 py-20" id="volunteerRoles">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Volunteer Roles</h2>
          <p className="text-lg text-gray-300">
            Current opportunities to contribute to our community
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {volunteerRoles.map((role, index) => {
          const { title, description, commitments, skills } = role;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="flex h-full flex-col rounded-xl border border-gray-700 bg-slate-800 p-8 transition-colors duration-300 hover:border-green-500">
                <div className="flex flex-col">
                  <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
                  <p className="mb-6 text-gray-300">{description}</p>
                </div>

                <div className="flex flex-col">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center">
                      <Clock className="mr-2 size-5 text-green-400" />
                      <span className="font-semibold text-white">Time Commitment:</span>
                    </div>
                    <div className="flex flex-col">
                      {commitments.map((commitment) => (
                        <span key={commitment} className="text-gray-300">
                          {commitment}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center">
                      <Star className="mr-2 size-5 text-green-400" />
                      <span className="font-semibold text-white">Skills Needed:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default VolunteerRoles;
