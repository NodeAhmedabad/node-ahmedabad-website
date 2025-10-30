'use client';

import { useEffect, useRef, useState } from 'react';

import type { ReactNode } from 'react';

import type { Component } from '@/types';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const ScrollReveal: Component<ScrollRevealProps> = (props) => {
  const {
    children,
    direction = 'up',
    delay = 0,
    duration = 600,
    distance = 60,
    className = '',
    once = true,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, once, hasAnimated]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';

    switch (direction) {
      case 'up': {
        return `translate3d(0, ${distance}px, 0)`;
      }
      case 'down': {
        return `translate3d(0, -${distance}px, 0)`;
      }
      case 'left': {
        return `translate3d(${distance}px, 0, 0)`;
      }
      case 'right': {
        return `translate3d(-${distance}px, 0, 0)`;
      }
      default: {
        return `translate3d(0, ${distance}px, 0)`;
      }
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
