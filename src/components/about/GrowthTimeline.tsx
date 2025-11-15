import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Box from '@/components/ui/Box';
import growthTimeline from '@/data/about/timeline';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const GrowthTimeline: Component = () => {
  const { title, description, timeline } = growthTimeline;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-20 left-8 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500 sm:left-12 lg:left-16"
          />
          {timeline.map((item, index) => {
            const { year, event, content, icon: Icon, color } = item;

            return (
              <ScrollReveal key={year} delay={index * 150}>
                <div className="relative mb-7 flex items-center">
                  <div
                    className={cn(
                      'absolute left-8 z-10 flex size-16 shrink-0 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br shadow-lg sm:left-12 sm:size-20 lg:left-16',
                      color,
                    )}
                  >
                    <Icon className="size-6 text-white sm:size-8" />
                  </div>
                  <div className="flex-1 pl-24 sm:pl-28 lg:pl-32">
                    <Box
                      className="text-left"
                      content={year}
                      contentProps={{ color: 'green-400', weight: 'bold', variant: 'lg' }}
                      description={content}
                      label={event}
                      labelProps={{ className: 'mb-1' }}
                    />
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

export default GrowthTimeline;
