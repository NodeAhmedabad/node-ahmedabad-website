import Typography from '@/components/ui/Typography';
import { codeSnippets } from '@/data/homepage/hero';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const FloatingCodeSnippets: Component = () => (
  <div className="absolute inset-0">
    {codeSnippets.map((code, index) => (
      <div
        key={code}
        className={cn('absolute animate-float', {
          '-top-[5%] left-[5%] lg:-top-[10%] lg:left-[5%]': index === 0,
          'right-[5%] top-[20%] lg:left-[40%] lg:right-auto lg:top-[10%]': index === 1,
          'bottom-[55%] left-[5%] lg:bottom-[5%] lg:left-auto lg:right-[5%]': index === 2,
        })}
      >
        <Typography as="span" className="font-mono text-green-400/20" variant="sm">
          {code}
        </Typography>
      </div>
    ))}
  </div>
);

export default FloatingCodeSnippets;
