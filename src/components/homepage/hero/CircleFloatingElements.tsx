import { Code2 } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import ScrollIndicator from '@/components/homepage/hero/ScrollIndicator';

import type { Component } from '@/types';

const CircleFloatingElements: Component = () => (
  <Fragment>
    <div className="absolute -right-4 -top-4 flex size-20 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
      <Code2 className="size-10 text-white" />
    </div>

    <div className="absolute -bottom-4 -left-4 flex size-16 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
      <span className="text-xs font-bold text-white">JS</span>
    </div>
    <ScrollIndicator />
  </Fragment>
);

export default CircleFloatingElements;
