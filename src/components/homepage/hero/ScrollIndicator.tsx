import type { Component } from '@/types';

const ScrollIndicator: Component = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600">
      <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-green-400" />
    </div>
  </div>
);

export default ScrollIndicator;
