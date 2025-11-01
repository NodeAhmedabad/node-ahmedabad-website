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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center lg:mb-16">
            <AnimatedText
              className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
              text={title}
            />
            <p className="mx-auto max-w-3xl px-4 text-lg text-gray-300 sm:text-xl">{description}</p>
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
};

export default Banner;
