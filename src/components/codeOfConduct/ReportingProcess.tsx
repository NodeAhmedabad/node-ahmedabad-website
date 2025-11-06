import ScrollReveal from '@/components/ScrollReveal';
import { reportingProcess } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const ReportingProcess: Component = () => {
  const { title, description, steps } = reportingProcess;

  return (
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const { label, content } = step;

              return (
                <ScrollReveal key={label} delay={index * 100}>
                  <div className="h-full rounded-xl border border-gray-700 bg-slate-800 p-6 text-center">
                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{label}</h3>
                    <p className="text-sm text-gray-300">{content}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingProcess;
