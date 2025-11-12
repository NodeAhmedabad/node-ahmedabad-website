import { Fragment } from 'react';

import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type { ComponentProps } from 'react';

import type { Component } from '@/types';

type ContentWrapperProps = ComponentProps<'div'> & {
  title: string;
  description?: string;
  animation?: boolean;
};

const ContentWrapper: Component<ContentWrapperProps> = (props) => {
  const { className, title, description, animation = true } = props;

  const Component = animation ? ScrollReveal : Fragment;

  return (
    <Component>
      <div className={cn('mx-auto mb-8 max-w-4xl text-center sm:mb-16', className)}>
        <Typography as="h2" className="mb-2 sm:mb-6" color="white" variant="title">
          {title}
        </Typography>
        {description ? (
          <Typography as="p" className="mx-auto max-w-3xl" color="content" variant="lg">
            {description}
          </Typography>
        ) : null}
      </div>
    </Component>
  );
};

export default ContentWrapper;
