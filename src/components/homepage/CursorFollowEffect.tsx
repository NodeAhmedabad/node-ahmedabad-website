'use client';

import { useEffect, useState } from 'react';

import type { Component } from '@/types';

const CursorFollowEffect: Component = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => globalThis.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="absolute w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
    />
  );
};

export default CursorFollowEffect;
