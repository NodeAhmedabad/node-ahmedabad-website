import { cva } from 'class-variance-authority';

import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';

const defaultElement = 'p';

export const typographyVariants = cva('whitespace-pre-line', {
  variants: {
    variant: {
      banner: 'text-4xl font-bold md:text-5xl lg:text-6xl',
      title: 'text-[28px] font-bold sm:text-3xl md:text-4xl',
      '3xl': 'text-3xl font-bold',
      '2xl': 'text-2xl font-bold',
      xl: 'text-xl font-bold',
      lg: 'text-base sm:text-lg',
      content: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
      inherit: 'text-inherit',
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
      'gray-400': 'text-gray-400',
      'gray-500': 'text-gray-500',
      'gray-600': 'text-gray-600',
    },
  },
});

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyVariant = VariantProps<typeof typographyVariants>;

type ActualTypographyVariant = Omit<TypographyVariant, 'variant'> &
  Required<Pick<TypographyVariant, 'variant'>>;

export type TypographyProps<T extends TypographyElement = typeof defaultElement> =
  ActualTypographyVariant &
    ComponentPropsWithoutRef<T> & {
      as: T;
      children?: ReactNode;
      ref?: RefObject<HTMLHeadingElement | null>;
    };

type TypographyType = <T extends TypographyElement = typeof defaultElement>(
  props: TypographyProps<T>,
) => ReactNode;

const Typography: TypographyType = (props) => {
  const {
    children,
    className,
    as: Component = defaultElement,
    variant,
    weight,
    color,
    ...restProps
  } = props;

  const classNames = cn(typographyVariants({ variant, weight, color }));

  return (
    <Component {...restProps} className={cn(classNames, className)}>
      {children}
    </Component>
  );
};

export default Typography;
