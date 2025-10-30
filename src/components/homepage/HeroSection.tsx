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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Code Elements */}
        <div className="absolute inset-0">
          {codeSnippets.map((code, index) => (
            <div
              key={code}
              className="absolute text-green-400/20 font-mono text-sm animate-float"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">
                    Welcome to Node Ahmedabad
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
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
                <div className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
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
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">2K+</div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">50+</div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Events
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">5+</div>
                    <div className="text-gray-400 text-sm">Years</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={1400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    href="/community"
                  >
                    Join Community
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    className="group border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                    href="/events"
                  >
                    <Play className="w-5 h-5 mr-2" />
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
                  <div className="bg-slate-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-gray-400 text-sm font-mono">node-ahmedabad.js</span>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <span className="text-green-400">$</span>
                          <AnimatedText
                            className="text-white ml-2"
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
                            className="text-white ml-2"
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
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                    <Code2 className="w-10 h-10 text-white" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xs">JS</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
