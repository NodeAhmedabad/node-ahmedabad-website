import AnimatedText from '@/components/AnimatedText';

import type { Component } from '@/types';

const Terminal: Component = () => (
  <div className="overflow-hidden rounded-lg border border-gray-700 bg-slate-800 shadow-2xl">
    <div className="flex items-center border-b border-gray-700 bg-slate-900 px-4 py-3">
      <div className="flex space-x-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
      </div>
      <div className="flex-1 text-center">
        <span className="font-mono text-sm text-gray-400">node-ahmedabad.js</span>
      </div>
    </div>

    <div className="p-6 font-mono text-sm">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-green-400">$</span>
          <AnimatedText
            className="ml-2 text-white"
            delay={1000}
            speed={80}
            text=" npm install @node-ahmedabad/community"
          />
        </div>

        <div className="text-gray-400">
          <AnimatedText delay={3000} speed={60} text="✓ Installing awesome developers..." />
        </div>

        <div className="text-gray-400">
          <AnimatedText delay={4500} speed={60} text="✓ Setting up knowledge sharing..." />
        </div>

        <div className="text-gray-400">
          <AnimatedText delay={6000} speed={60} text="✓ Building connections..." />
        </div>

        <div className="flex items-center">
          <span className="text-green-400">$</span>
          <AnimatedText
            className="ml-2 text-white"
            delay={7500}
            speed={80}
            text=" node community.start()"
          />
        </div>

        <div className="text-green-400">
          <AnimatedText delay={9000} speed={60} text="🚀 Community is now running on port 3000!" />
        </div>
      </div>
    </div>
  </div>
);

export default Terminal;
