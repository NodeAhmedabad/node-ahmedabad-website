import cn from '@/lib/cn';

import type { ComponentProps } from 'react';

import type { Layout } from '@/types';

const Section: Layout<ComponentProps<'div'>> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <section>
      <div {...restProps} className={cn('container mx-auto px-6', className)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
