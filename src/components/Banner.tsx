import { Fragment } from 'react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';

import type { ReactNode } from 'react';

import type { Component } from '@/types';

interface BannerProps {
  title: string;
  description: string;
  image?: string;
  content?: ReactNode;
  children?: ReactNode;
}

const Banner: Component<BannerProps> = (props) => {
  const { title, description, image, content, children } = props;

  return (
    // 80px fix height of header
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-28 pt-48">
      {image ? (
        <Fragment>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </Fragment>
      ) : null}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <AnimatedText
              className="mb-4 sm:mb-6"
              text={title}
              typographyProps={{
                as: 'h1',
                variant: 'banner',
                color: 'white',
              }}
            />
            <Typography as="p" className="mx-auto max-w-3xl px-4" color="content" variant="lg">
              {description}
            </Typography>
            {content}
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
};

export default Banner;
