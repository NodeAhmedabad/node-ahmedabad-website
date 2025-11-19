import { useEffect, useState } from 'react';

import type { Component } from '@/types';

const characters = 'NodeAhmedbadNodeAhmedbad';

const MatrixBackground: Component = () => {
  const [columns, setColumns] = useState(50);

  useEffect(() => {
    const updateColumns = () => {
      setColumns(globalThis.innerWidth < 940 ? 20 : 50);
    };

    updateColumns();
    globalThis.addEventListener('resize', updateColumns);
    return () => globalThis.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: columns }).map((_, i) => {
        const randomChars = Array.from(
          { length: Math.floor(Math.random() * 15) + 8 },
          () => characters[Math.floor(Math.random() * characters.length)],
        ).join('\n');

        const columnId = `matrix-col-${i}-${Math.random().toString(36).slice(2, 9)}`;

        return (
          <div
            key={columnId}
            className="absolute -top-full animate-matrix-rain whitespace-pre font-mono text-sm tracking-wider text-green-500 opacity-30 max-[940px]:text-[11px] max-[940px]:tracking-tight max-[940px]:opacity-20"
            style={{
              left: `${(i / columns) * 100}%`,
              animationDuration: `${Math.random() * 3 + 5}s`,
              animationDelay: `${Math.random() * 3}s`,
              textShadow: '0 0 8px #0f0',
            }}
          >
            {randomChars}
          </div>
        );
      })}
    </div>
  );
};

export default MatrixBackground;
