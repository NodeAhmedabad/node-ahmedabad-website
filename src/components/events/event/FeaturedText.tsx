import { Star } from 'lucide-react';

import type { Component } from '@/types';

const FeaturedText: Component = () => (
  <div className="mb-4 flex items-center">
    <Star className="mr-2 size-4 text-yellow-400" />
    <span className="text-sm font-medium text-yellow-400">Featured Event</span>
  </div>
);

export default FeaturedText;
