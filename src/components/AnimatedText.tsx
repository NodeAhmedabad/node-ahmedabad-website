'use client';

import { useEffect, useRef, useState } from 'react';

import Typography from '@/components/ui/Typography';

import type { TypographyElement, TypographyProps } from '@/components/ui/Typography';
import type { Component } from '@/types';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
  typographyProps?: TypographyProps<TypographyElement>;
}

const AnimatedText: Component<AnimatedTextProps> = (props) => {
  const { text, className, delay = 0, speed = 50, once = true, typographyProps = null } = props;

  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once, hasAnimated]);

  useEffect(() => {
    if (isVisible && (!once || !hasAnimated)) {
      const timer = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex += 1;
          } else {
            clearInterval(interval);
            setHasAnimated(true);
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }

    return () => null;
  }, [isVisible, text, delay, speed, once, hasAnimated]);

  return (
    <Typography ref={ref} as="p" variant="content" {...typographyProps} className={className}>
      {displayedText}
      {!hasAnimated && (
        <Typography as="span" className="animate-pulse" variant="inherit">
          |
        </Typography>
      )}
    </Typography>
  );
};

export default AnimatedText;
