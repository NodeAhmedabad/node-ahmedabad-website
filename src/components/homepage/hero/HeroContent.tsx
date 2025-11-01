import { ArrowRight, Calendar, CalendarDays, Play, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import constants from '@/constants';
import { stats } from '@/data/information';

import type { Component } from '@/types';

const HeroContent: Component = () => (
  <div className="text-center lg:text-left">
    <ScrollReveal delay={200}>
      <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
        <Sparkles className="mr-2 size-4 text-green-400" />
        <span className="text-sm font-medium text-green-400">Welcome to {constants.APP_NAME}</span>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={400}>
      <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Learn. Grow.
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
          text="Join Ahmedabad's most vibrant JavaScript community. Where developers meet, learn, grow, connect and build amazing things together."
        />
      </div>
    </ScrollReveal>

    <ScrollReveal delay={1200}>
      <div className="mb-8 flex flex-wrap justify-center gap-8 lg:justify-start">
        <div className="text-center">
          <div className="mb-1 text-3xl font-bold text-green-400">{stats.MEMBERS.short}</div>
          <div className="flex items-center text-sm text-gray-400">
            <Users className="mr-1 size-4" />
            Members
          </div>
        </div>
        <div className="text-center">
          <div className="mb-1 text-3xl font-bold text-green-400">{stats.EVENTS.short}</div>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="mr-1 size-4" />
            Event
          </div>
        </div>
        <div className="text-center">
          <div className="mb-1 text-3xl font-bold text-green-400">{stats.YEARS.short}</div>
          <div className="flex items-center text-sm text-gray-400">
            <CalendarDays className="mr-1 size-4" />
            Years
          </div>
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
);

export default HeroContent;
