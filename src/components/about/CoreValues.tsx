import ScrollReveal from '@/components/ScrollReveal';
import coreValues from '@/data/about/coreValues';

import type { Component } from '@/types';

const CoreValues: Component = () => (
  <section className="bg-slate-800/30 py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
            These values guide everything we do and shape the culture of our community.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {coreValues.map((item, index) => {
          const { icon: Icon, title, description } = item;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="h-full rounded-xl border border-gray-700 bg-slate-800 p-6 text-center transition-colors duration-300 focus-within:ring-2 focus-within:ring-green-400 hover:bg-slate-700">
                <Icon
                  aria-hidden="true"
                  className="mx-auto mb-4 size-10 text-green-400 sm:size-12"
                />
                <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">{title}</h3>
                <p className="text-sm text-gray-300 sm:text-base">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default CoreValues;
