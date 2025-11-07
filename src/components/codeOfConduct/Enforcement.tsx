import { AlertTriangle } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import { enforcement } from '@/data/codeOfConduct/codeOfConduct';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const Enforcement: Component = () => {
  const { title, description, consequences, note } = enforcement;

  return (
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {consequences.map((consequence, index) => {
              const { label, content, className } = consequence;

              return (
                <ScrollReveal key={label} delay={index * 100}>
                  <div className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800">
                    <div className={cn('bg-gradient-to-r p-1', className)} />
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{label}</h3>
                        <AlertTriangle className="size-6 text-gray-400" />
                      </div>
                      <p className="mt-2 text-gray-300">{content}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
              <p className="text-center text-gray-300">
                <strong className="text-white">Note:</strong> {note}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Enforcement;
