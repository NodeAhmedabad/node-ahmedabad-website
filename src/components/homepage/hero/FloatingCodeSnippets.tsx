import { Fragment } from 'react';

import type { Component } from '@/types';

const FloatingCodeSnippets: Component = () => {
  const codeSnippets = [
    'const community = new NodeAhmedabad();',
    'community.learn().grow().connect();',
    'export { knowledge, friendship };',
  ];

  return (
    <Fragment>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)]" />
      <div className="absolute inset-0">
        {codeSnippets.map((code, index) => (
          <div
            key={code}
            className="absolute animate-float font-mono text-sm text-green-400/20"
            style={{
              top: `${20 + index * 30}%`,
              left: `${10 + index * 25}%`,
              animationDelay: `${index * 2}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FloatingCodeSnippets;
