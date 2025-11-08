import CursorFollowEffect from '@/components/homepage/CursorFollowEffect';
import CircleFloatingElements from '@/components/homepage/hero/CircleFloatingElements';
import FloatingCodeSnippets from '@/components/homepage/hero/FloatingCodeSnippets';
import HeroContent from '@/components/homepage/hero/HeroContent';
import ScrollIndicator from '@/components/homepage/hero/ScrollIndicator';
import Terminal from '@/components/homepage/hero/Terminal';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const HeroSection: Component = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-36 sm:pt-32 lg:pt-0">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      <CursorFollowEffect />
    </div>

    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <FloatingCodeSnippets />
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
