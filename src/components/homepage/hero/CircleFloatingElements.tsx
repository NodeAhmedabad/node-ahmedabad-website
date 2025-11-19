import { Code2Icon } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import Typography from '@/components/ui/Typography';

import type { Component } from '@/types';

const CircleFloatingElements: Component = () => (
  <Fragment>
    <div className="absolute -right-4 -top-4 flex size-12 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 sm:size-16">
      <Code2Icon className="size-6 text-white sm:size-8" />
    </div>

    <div className="absolute -bottom-6 -left-4 flex size-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 sm:size-16 md:-bottom-10">
      <Typography as="span" color="white" variant="content" weight="bold">
        JS
      </Typography>
    </div>
  </Fragment>
);

export default CircleFloatingElements;
