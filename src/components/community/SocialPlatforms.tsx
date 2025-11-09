import Link from 'next/link';

import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import socialPlatforms from '@/data/community/socialPlatforms';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const SocialPlatforms: Component = () => {
  const { title, description, platforms } = socialPlatforms;

  return (
    <Section id="social-platforms">
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((item, index) => {
          const { title: platform, url, icon: Icon, color, content } = item;

          return (
            <ScrollReveal key={platform} delay={index * 100}>
              <div
                className={cn(
                  'group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white transition-transform duration-300 hover:scale-105',
                  color,
                )}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="mb-6 flex flex-col gap-4">
                    <Icon className="size-12" />
                    <Typography as="h2" color="white" variant="2xl">
                      {platform}
                    </Typography>
                    <Typography as="p" className="text-white/90" variant="lg">
                      {content}
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="rounded-lg bg-white/20 px-6 py-2 font-semibold transition-colors hover:bg-white/30"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
};

export default SocialPlatforms;
