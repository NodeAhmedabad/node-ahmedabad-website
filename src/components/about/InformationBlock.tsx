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
  <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {values.map((item) => {
          const { icon: Icon, label, description } = item;

          return (
            <ScrollReveal key={label}>
              <div className="bg-slate-800 h-full p-6 sm:p-8 rounded-2xl border border-gray-700">
                <Icon
                  aria-hidden="true"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 sm:mb-6"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{label}</h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default InformationBlock;
