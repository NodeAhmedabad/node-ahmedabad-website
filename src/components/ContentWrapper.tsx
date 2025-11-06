import { Fragment } from 'react';

import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';

import type { ComponentProps } from 'react';

import type { Component } from '@/types';

type ContentWrapperProps = ComponentProps<'div'> & {
  title: string;
  description: string;
  animation?: boolean;
};

const ContentWrapper: Component<ContentWrapperProps> = (props) => {
  const { title, description, animation = true } = props;

  const Component = animation ? ScrollReveal : Fragment;

  return (
    <Component>
      <div className="mb-16 text-center">
        <Typography as="h2" className="mb-6" color="white" variant="title">
          {title}
        </Typography>
        <Typography as="p" color="content" variant="lg">
          {description}
        </Typography>
      </div>
    </Component>
  );
};

export default ContentWrapper;
