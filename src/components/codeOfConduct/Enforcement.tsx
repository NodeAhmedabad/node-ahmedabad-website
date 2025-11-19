import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';
import { enforcement } from '@/data/codeOfConduct/codeOfConduct';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const Enforcement: Component = () => {
  const { title, description, consequences } = enforcement;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6">
          {consequences.map((consequence, index) => {
            const { icon: Icon, label, content, className } = consequence;

            return (
              <ScrollReveal key={label} delay={index * 100}>
                <div className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800">
                  <div className={cn('bg-gradient-to-r p-1', className)} />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <Typography as="h3" color="white" variant="2xl">
                        {label}
                      </Typography>
                      <Icon className="size-6 text-gray-400" />
                    </div>
                    <Typography as="p" className="mt-2" color="content" variant="content">
                      {content}
                    </Typography>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Enforcement;
