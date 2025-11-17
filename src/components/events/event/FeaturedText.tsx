import { StarIcon } from 'lucide-react';

import Typography from '@/components/ui/Typography';

import type { Component } from '@/types';

const FeaturedText: Component = () => (
  <div className="mb-4 flex items-center">
    <StarIcon className="mr-2 size-4 text-yellow-400" />
    <Typography as="span" color="yellow-400" variant="sm" weight="medium">
      Featured Event
    </Typography>
  </div>
);

export default FeaturedText;
