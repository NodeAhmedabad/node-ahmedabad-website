import CursorFollowEffect from '@/components/homepage/CursorFollowEffect';
import CircleFloatingElements from '@/components/homepage/hero/CircleFloatingElements';
import FloatingCodeSnippets from '@/components/homepage/hero/FloatingCodeSnippets';
import HeroContent from '@/components/homepage/hero/HeroContent';
import ScrollIndicator from '@/components/homepage/hero/ScrollIndicator';
import Terminal from '@/components/homepage/hero/Terminal';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const HeroSection: Component = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="absolute inset-0">
      <FloatingCodeSnippets />
      <CursorFollowEffect />
    </div>

    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <div className="relative">
            <ScrollReveal delay={800} direction="left">
              <div className="relative">
                <Terminal />
                <CircleFloatingElements />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
    <ScrollIndicator />
  </section>
);

export default HeroSection;
