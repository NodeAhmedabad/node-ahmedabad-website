import ScrollReveal from '@/components/ScrollReveal';
import coreValues from '@/data/about/coreValues';

import type { Component } from '@/types';

const CoreValues: Component = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            These values guide everything we do and shape the culture of our community.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {coreValues.map((item, index) => {
          const { icon: Icon, title, description } = item;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="h-full bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 transition-colors duration-300 focus-within:ring-2 focus-within:ring-green-400">
                <Icon
                  aria-hidden="true"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default CoreValues;
