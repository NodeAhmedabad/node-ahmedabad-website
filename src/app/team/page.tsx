import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import TeamMembers from '@/components/team/TeamMembers';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Team | ${constants.APP_NAME}`,
} satisfies Metadata;

const TeamPage: Component = () => (
  <main className="pt-20">
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              text="Meet Our Team"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The passionate individuals who make our community thrive
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <TeamMembers />
  </main>
);

export default TeamPage;
