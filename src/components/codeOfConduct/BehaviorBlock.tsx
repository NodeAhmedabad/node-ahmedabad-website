import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';
import { behaviors } from '@/data/codeOfConduct/codeOfConduct';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const BehaviorBlock: Component = () => (
  <Section>
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
        {behaviors.map((item) => {
          const { icon: Icon, title, points, className, iconClassName } = item;

          return (
            <ScrollReveal key={title}>
              <div className={cn('h-full rounded-2xl border bg-gradient-to-br p-8', className)}>
                <div className="mb-6 flex items-center gap-3">
                  <Typography as="h3" color="white" variant="2xl">
                    {title}
                  </Typography>
                </div>
                <ul className="flex flex-col gap-4">
                  {points.map((behavior) => (
                    <li key={behavior} className="flex items-start gap-3">
                      <Icon className={cn('mt-0.5 size-5 shrink-0', iconClassName)} />
                      <Typography as="span" color="content" variant="content">
                        {behavior}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </Section>
);

export default BehaviorBlock;
