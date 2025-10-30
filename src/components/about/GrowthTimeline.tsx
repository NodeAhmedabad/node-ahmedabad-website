import ScrollReveal from '@/components/ScrollReveal';
import timeline from '@/data/about/timeline';

import type { Component } from '@/types';

const GrowthTimeline: Component = () => (
  <section aria-labelledby="timeline-heading" className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
            id="timeline-heading"
          >
            Growth Timeline
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Key milestones in our community&apos;s journey
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-8 sm:left-12 lg:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500"
          />
          {timeline.map((item, index) => {
            const { year, event, description, icon: Icon, color } = item;

            return (
              <ScrollReveal key={year} delay={index * 150}>
                <div className="relative flex items-center mb-12 sm:mb-16 lg:mb-20 last:mb-0">
                  <div
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${color} rounded-full flex items-center justify-center absolute left-8 sm:left-12 lg:left-16 -translate-x-1/2 z-10 shadow-lg border-4 border-slate-900`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pl-24 sm:pl-28 lg:pl-32">
                    <div className="bg-slate-800 p-6 mb-7 sm:p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300 shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{event}</h3>
                        <span className="text-green-400 font-semibold text-lg sm:text-xl mt-1 sm:mt-0">
                          {year}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
