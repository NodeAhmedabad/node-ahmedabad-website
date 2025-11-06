import CtaBlock from '@/components/CtaBlock';
import Typography from '@/components/ui/Typography';
import githubContributions from '@/data/contribute/githubContributions';

import type { Component } from '@/types';

const GitHubContributions: Component = () => {
  const { stats, ...ctaBlock } = githubContributions;

  return (
    <CtaBlock
      {...ctaBlock}
      content={
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => {
            const { value, label } = stat;

            return (
              <div key={label} className="text-center">
                <Typography as="h3" className="mb-2" color="green-400" variant="2xl">
                  {value}
                </Typography>
                <Typography as="p" color="content" variant="content">
                  {label}
                </Typography>
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default GitHubContributions;
