import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import { heroSection } from '@/data/homepage/hero';

import type { Component } from '@/types';

const HeroContent: Component = () => {
  const { tag, description, heroStats } = heroSection;

  return (
    <div className="text-center lg:text-left">
      <ScrollReveal delay={200}>
        <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
          <SparklesIcon className="mr-2 size-4 text-green-400" />
          <Typography as="span" color="green-400" variant="sm" weight="medium">
            {tag}
          </Typography>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <Typography as="h1" className="mb-6 text-5xl font-bold lg:text-7xl" variant="inherit">
          <Typography
            as="span"
            className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variant="inherit"
          >
            Learn. Grow.
          </Typography>
          <br />
          <Typography
            as="span"
            className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
            variant="inherit"
          >
            Connect.
          </Typography>
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <div className="mb-8">
          <AnimatedText
            className="font-light lg:text-2xl"
            delay={800}
            speed={30}
            text={description}
            typographyProps={{
              as: 'h2',
              variant: 'xl',
              color: 'content',
            }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={1200}>
        <div className="mb-8 flex flex-wrap justify-center gap-8 lg:justify-start">
          {heroStats.map((stats) => {
            const { stat, icon: Icon, label } = stats;

            return (
              <div key={label} className="flex flex-col justify-center gap-1 text-center">
                <Typography as="span" color="green-400" variant="3xl">
                  {stat}
                </Typography>
                <div className="flex items-center gap-1">
                  <Icon className="size-4 text-gray-400" />
                  <Typography as="span" color="gray-400" variant="sm">
                    {label}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={1400}>
        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          <Link
            className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            href="/community"
          >
            <Typography as="span" variant="inherit">
              Join Community
            </Typography>
            <ArrowRightIcon className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default HeroContent;
