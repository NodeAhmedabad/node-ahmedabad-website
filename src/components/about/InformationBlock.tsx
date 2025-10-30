import { Award, Target } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const values = [
  {
    icon: Target,
    label: 'Our Mission',
    description:
      'To create a thriving community of Node.js developers in Ahmedabad by providing high-quality learning opportunities, fostering collaboration, and supporting career growth in the JavaScript ecosystem.',
  },
  {
    icon: Award,
    label: 'Our Vision',
    description:
      'To establish Ahmedabad as a leading hub for Node.js innovation in India, where developers of all levels can learn, grow, and contribute to the global JavaScript community.',
  },
];

const InformationBlock: Component = () => (
  <section className="bg-slate-800/50 py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {values.map((item) => {
          const { icon: Icon, label, description } = item;

          return (
            <ScrollReveal key={label}>
              <div className="h-full rounded-2xl border border-gray-700 bg-slate-800 p-6 sm:p-8">
                <Icon
                  aria-hidden="true"
                  className="mb-4 size-10 text-green-400 sm:mb-6 sm:size-12"
                />
                <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">{label}</h2>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default InformationBlock;
