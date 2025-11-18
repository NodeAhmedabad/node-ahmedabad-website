import { Fragment } from 'react';

import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Box from '@/components/ui/Box';
import Typography from '@/components/ui/Typography';
import about from '@/data/homepage/about';

import type { Component } from '@/types';

const AboutSection: Component = () => {
  const { title, description, values } = about;

  return (
    <Section>
      <ContentWrapper
        description="We're a passionate community of JavaScript developers in Ahmedabad, dedicated to accelerating growth, fostering collaboration, and driving innovation in the Node.js ecosystem."
        title={
          <Fragment>
            <Typography
              as="span"
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              variant="inherit"
            >
              About
            </Typography>
            <Typography
              as="span"
              className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
              variant="inherit"
            >
              {' '}
              Node Ahmedabad
            </Typography>
          </Fragment>
        }
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-y-8">
        <ScrollReveal delay={200}>
          <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50 p-8 backdrop-blur-sm">
            <div className="text-center">
              <Typography as="h3" className="mb-4" color="white" variant="2xl">
                {title}
              </Typography>
              <Typography as="p" className="mb-4" color="content" variant="lg">
                {description}
              </Typography>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value, index) => {
            const { icon: Icon, label, content } = value;

            return (
              <Box
                key={label}
                content={content}
                delay={300 + index * 100}
                icon={Icon}
                label={label}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
