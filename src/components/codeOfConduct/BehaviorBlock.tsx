import ScrollReveal from '@/components/ScrollReveal';
import { behaviors } from '@/data/codeOfConduct/codeOfConduct';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const BehaviorBlock: Component = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {behaviors.map((item) => {
            const { icon: Icon, title, points, className, iconClassName } = item;

            return (
              <ScrollReveal key={title}>
                <div className={cn('h-full rounded-2xl border bg-gradient-to-br p-8', className)}>
                  <h3 className="mb-6 flex items-center text-3xl font-bold text-white">
                    <Icon className={cn('mr-3 size-8', iconClassName)} />
                    {title}
                  </h3>
                  <ul className="space-y-4">
                    {points.map((behavior) => (
                      <li key={behavior} className="flex items-start">
                        <Icon className={cn('mr-3 mt-0.5 size-5 shrink-0', iconClassName)} />
                        <span className="text-gray-300">{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default BehaviorBlock;
