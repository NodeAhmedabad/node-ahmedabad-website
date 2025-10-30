import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type { ReactNode } from 'react';

import type { Component } from '@/types';

interface BannerProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Banner: Component<BannerProps> = (props) => {
  const { title, description, children } = props;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              text={title}
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{description}</p>
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
};

export default Banner;
