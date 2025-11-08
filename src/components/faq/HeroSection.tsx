import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const HeroSection: Component = () => (
  <section className="relative overflow-hidden py-20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop)',
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-slate-900/80" />
    {/* Pattern Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />

    <div className="container relative z-10 mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <AnimatedText
            className="mb-6 text-5xl font-bold text-white md:text-6xl"
            text="Frequently Asked Questions"
          />
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Find answers to common questions about our Node.js community, events, and how to get
            involved.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
