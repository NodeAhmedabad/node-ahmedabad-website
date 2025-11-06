import { cva } from 'class-variance-authority';

import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import type { Layout } from '@/types';

const typographyVariants = cva('whitespace-pre-line', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold md:text-5xl lg:text-6xl',
      h2: 'text-3xl font-bold md:text-4xl lg:text-5xl',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h5: 'text-lg',
      h6: '',
      p: 'text-base',
      span: '',
    },
    decoration: {
      lineThrough: 'line-through',
      underline: 'underline',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    color: {
      white: 'text-white',
      'gray-300': 'text-gray-300',
    },
  },
});

type TypographyVariant = VariantProps<typeof typographyVariants>;

type ActualTypographyVariant = Omit<TypographyVariant, 'variant'> &
  Required<Pick<TypographyVariant, 'variant'>>;

type TypographyProps = ActualTypographyVariant &
  ComponentProps<'h1'> & {
    as: NonNullable<TypographyVariant['variant']>;
    classOnly?: boolean;
  };

const Typography: Layout<TypographyProps> = (props) => {
  const {
    children,
    className,
    as: Component,
    variant,
    decoration,
    weight,
    color,
    classOnly = false,
    ...restProps
  } = props;

  const classNames = cn(typographyVariants({ variant, decoration, weight, color }));

  if (classOnly) return classNames;

  return (
    <Component {...restProps} className={cn(classNames, className)}>
      {children}
    </Component>
  );
};

export default Typography;
