import { cva } from 'class-variance-authority';

import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import type { Component } from '@/types';

export const typographyVariants = cva('whitespace-pre-line', {
  variants: {
    variant: {
      banner: 'text-4xl font-bold md:text-5xl lg:text-6xl',
      title: 'text-3xl font-bold md:text-4xl',
      '3xl': 'text-3xl font-bold',
      '2xl': 'text-2xl font-bold',
      xl: 'text-xl font-bold',
      lg: 'text-lg',
      content: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
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
      content: 'text-gray-300',
      'green-400': 'text-green-400',
      'gray-500': 'text-gray-500',
    },
  },
});

type TypographyVariant = VariantProps<typeof typographyVariants>;

type ActualTypographyVariant = Omit<TypographyVariant, 'variant'> &
  Required<Pick<TypographyVariant, 'variant'>>;

export type TypographyProps = ActualTypographyVariant &
  ComponentProps<'h1'> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    classOnly?: boolean;
    children?: ReactNode;
  };

const Typography: Component<TypographyProps> = (props) => {
  const {
    children,
    className,
    as: Component,
    variant,
    weight,
    color,
    classOnly = false,
    ...restProps
  } = props;

  const classNames = cn(typographyVariants({ variant, weight, color }));

  if (classOnly) return classNames;

  return (
    <Component {...restProps} className={cn(classNames, className)}>
      {children}
    </Component>
  );
};

export default Typography;
