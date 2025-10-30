import { ArrowRight, Calendar, Code2, Play, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import CursorFollowEffect from '@/components/homepage/CursorFollowEffect';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const HeroSection: Component = () => {
  const codeSnippets = [
    'const community = new NodeAhmedabad();',
    'community.learn().share().grow();',
    'export { knowledge, friendship };',
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Code Elements */}
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

        <CursorFollowEffect />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <ScrollReveal delay={200}>
                <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
                  <Sparkles className="mr-2 size-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">
                    Welcome to Node Ahmedabad
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Build. Learn.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Connect.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="mb-8 text-xl leading-relaxed text-gray-300 lg:text-2xl">
                  <AnimatedText
                    className="font-light"
                    delay={800}
                    speed={30}
                    text="Join Ahmedabad's most vibrant JavaScript community. Where developers meet, learn, and build amazing things together."
                  />
                </div>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal delay={1200}>
                <div className="mb-8 flex flex-wrap justify-center gap-8 lg:justify-start">
                  <div className="text-center">
                    <div className="mb-1 text-3xl font-bold text-green-400">2K+</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="mr-1 size-4" />
                      Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-3xl font-bold text-green-400">50+</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="mr-1 size-4" />
                      Events
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-3xl font-bold text-green-400">5+</div>
                    <div className="text-sm text-gray-400">Years</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={1400}>
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <Link
                    className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                    href="/community"
                  >
                    Join Community
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    className="group flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                    href="/events"
                  >
                    <Play className="mr-2 size-5" />
                    Watch Highlights
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Code Animation */}
            <div className="relative">
              <ScrollReveal delay={800} direction="left">
                <div className="relative">
                  {/* Terminal Window */}
                  <div className="overflow-hidden rounded-lg border border-gray-700 bg-slate-800 shadow-2xl">
                    {/* Terminal Header */}
                    <div className="flex items-center border-b border-gray-700 bg-slate-900 px-4 py-3">
                      <div className="flex space-x-2">
                        <div className="size-3 rounded-full bg-red-500" />
                        <div className="size-3 rounded-full bg-yellow-500" />
                        <div className="size-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="font-mono text-sm text-gray-400">node-ahmedabad.js</span>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <span className="text-green-400">$</span>
                          <AnimatedText
                            className="ml-2 text-white"
                            delay={1000}
                            speed={80}
                            text=" npm install @node-ahmedabad/community"
                          />
                        </div>

                        <div className="text-gray-400">
                          <AnimatedText
                            delay={3000}
                            speed={60}
                            text="✓ Installing awesome developers..."
                          />
                        </div>

                        <div className="text-gray-400">
                          <AnimatedText
                            delay={4500}
                            speed={60}
                            text="✓ Setting up knowledge sharing..."
                          />
                        </div>

                        <div className="text-gray-400">
                          <AnimatedText delay={6000} speed={60} text="✓ Building connections..." />
                        </div>

                        <div className="flex items-center">
                          <span className="text-green-400">$</span>
                          <AnimatedText
                            className="ml-2 text-white"
                            delay={7500}
                            speed={80}
                            text=" node community.start()"
                          />
                        </div>

                        <div className="text-green-400">
                          <AnimatedText
                            delay={9000}
                            speed={60}
                            text="🚀 Community is now running on port 3000!"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -right-4 -top-4 flex size-20 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                    <Code2 className="size-10 text-white" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 flex size-16 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                    <span className="text-xs font-bold text-white">JS</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-green-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
