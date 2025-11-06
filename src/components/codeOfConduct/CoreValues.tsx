import ScrollReveal from '@/components/ScrollReveal';
import { coreValues } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const CoreValues: Component = () => {
  const { title, description, values } = coreValues;

  return (
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const { icon: Icon, label, content } = value;

            return (
              <ScrollReveal key={label} delay={index * 100}>
                <div className="h-full rounded-xl border border-gray-700 bg-slate-800 p-8 text-center">
                  <Icon className="mx-auto mb-6 size-16 text-green-400" />
                  <h3 className="mb-4 text-2xl font-bold text-white">{label}</h3>
                  <p className="leading-relaxed text-gray-300">{content}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
