import ScrollReveal from '@/components/ScrollReveal';
import guidelines from '@/data/community/guidelines';

import type { Component } from '@/types';

const CommunityGuidelines: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Community Guidelines</h2>
          <p className="text-lg text-gray-300">
            Help us maintain a welcoming and productive environment for everyone
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {guidelines.map((guideline, index) => {
          const { icon: Icon, title, description } = guideline;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="rounded-xl border border-gray-700 bg-slate-800 p-6 text-center transition-colors duration-300 hover:bg-slate-700">
                <Icon className="mx-auto mb-4 size-12 text-green-400" />
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default CommunityGuidelines;
