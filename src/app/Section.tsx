import cn from '@/lib/cn';

import type { ComponentProps } from 'react';

import type { Layout } from '@/types';

const Section: Layout<ComponentProps<'section'>> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <section {...restProps} className={cn('scroll-mt-20 py-20', className)}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
