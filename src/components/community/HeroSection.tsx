import communityImage from '@/assets/community.jpg';
import Banner from '@/components/Banner';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import communityStats from '@/data/community/communityStats';

import type { Component } from '@/types';

const HeroSection: Component = () => (
  <Banner
    description="Connect with passionate Node.js developers, share knowledge, and grow your career in a supportive community environment."
    image={communityImage.src}
    title="Join Our Community"
  >
    <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
      {communityStats.map((stat, index) => {
        const { value, label } = stat;

        return (
          <ScrollReveal
            key={stat.label}
            className="flex flex-col gap-2 text-center"
            delay={index * 100}
          >
            <Typography as="p" color="green-400" variant="title">
              {value}
            </Typography>
            <Typography as="p" color="content" variant="content">
              {label}
            </Typography>
          </ScrollReveal>
        );
      })}
    </div>
  </Banner>
);

export default HeroSection;
