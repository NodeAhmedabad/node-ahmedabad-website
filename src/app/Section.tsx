import cn from '@/lib/cn';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { Children } from '@/types';

const defaultElement = 'section';
const defaultNestedElement = 'div';

type SectionElements = 'section' | 'div' | 'footer' | 'header' | 'nav';

type SectionProps<T extends SectionElements = typeof defaultElement> = ComponentPropsWithoutRef<T> &
  Children & {
    as?: T;
    nestedAs?: SectionElements;
  };

type SectionType = <T extends SectionElements = typeof defaultElement>(
  props: SectionProps<T>,
) => ReactNode;

const Section: SectionType = (props) => {
  const {
    children,
    as: Component = defaultElement,
    nestedAs: NestedComponent = defaultNestedElement,
    className,
    ...restProps
  } = props;

  return (
    <Component
      {...restProps}
      className={cn('scroll-mt-12 py-12 sm:scroll-mt-20 sm:py-20', className)}
    >
      <NestedComponent className="container mx-auto px-6">{children}</NestedComponent>
    </Component>
  );
};

export default Section;
