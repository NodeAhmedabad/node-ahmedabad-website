import ScrollReveal from '@/components/ScrollReveal';
import timeline from '@/data/about/timeline';

import type { Component } from '@/types';

const GrowthTimeline: Component = () => (
  <section aria-labelledby="timeline-heading" className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-12 text-center lg:mb-16">
          <h2
            className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl"
            id="timeline-heading"
          >
            Growth Timeline
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            Key milestones in our community&apos;s journey
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500 sm:left-12 lg:left-16"
          />
          {timeline.map((item, index) => {
            const { year, event, description, icon: Icon, color } = item;

            return (
              <ScrollReveal key={year} delay={index * 150}>
                <div className="relative mb-12 flex items-center last:mb-0 sm:mb-16 lg:mb-20">
                  <div
                    className={`size-16 shrink-0 bg-gradient-to-br sm:size-20 lg:size-24 ${color} absolute left-8 z-10 flex -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 shadow-lg sm:left-12 lg:left-16`}
                  >
                    <Icon aria-hidden="true" className="size-6 text-white sm:size-8 lg:size-10" />
                  </div>
                  <div className="min-w-0 flex-1 pl-24 sm:pl-28 lg:pl-32">
                    <div className="mb-7 rounded-xl border border-gray-700 bg-slate-800 p-6 shadow-lg transition-colors duration-300 hover:border-green-500/50 sm:p-8">
                      <div className="mb-3 flex flex-col sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{event}</h3>
                        <span className="mt-1 text-lg font-semibold text-green-400 sm:mt-0 sm:text-xl">
                          {year}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default GrowthTimeline;
