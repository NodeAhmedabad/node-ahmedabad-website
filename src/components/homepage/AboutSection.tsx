import { Fragment } from 'react';

import { ArrowRightIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';

import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Box from '@/components/ui/Box';
import Typography from '@/components/ui/Typography';
import about from '@/data/homepage/about';

import type { Component } from '@/types';

const AboutSection: Component = () => {
  const { title, description, values, stats } = about;

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

        <ScrollReveal>
          <div className="rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {stats.map((stat) => {
                const { value, label } = stat;

                return (
                  <div key={label} className="flex flex-col gap-2">
                    <Typography as="p" color="green-400" variant="title">
                      {value}
                    </Typography>
                    <Typography as="p" color="content" variant="content">
                      {label}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="mb-6 text-3xl font-bold text-white">Ready to Join Our Journey?</h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Whether you&apos;re just starting in Node.js or a seasoned developer, find your
              platform here to learn, collaborate, and contribute in the community.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                href="/about"
              >
                Learn More About Us
                <ArrowRightIcon className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                className="group flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                href="/community"
              >
                Join Community
                <UsersIcon className="ml-2 size-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default AboutSection;
