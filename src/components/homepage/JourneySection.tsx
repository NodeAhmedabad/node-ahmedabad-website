import CtaBlock from '@/components/CtaBlock';
import Typography from '@/components/ui/Typography';
import journey from '@/data/homepage/journey';

import type { Component } from '@/types';

const JourneySection: Component = () => {
  const { stats, ...ctaBlock } = journey;

  return (
    <CtaBlock
      {...ctaBlock}
      content={
        <div className="mb-8 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => {
              const { value, label } = stat;

              return (
                <div key={label} className="flex flex-col gap-2">
                  <Typography as="p" color="green-400" variant="title">
                    {value}
                  </Typography>
                  <Typography as="p" color="content" variant="content">
                    {label}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
};

export default JourneySection;
