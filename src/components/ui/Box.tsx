import { cva } from 'class-variance-authority';

import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import type { ScrollRevealProps } from '@/components/ScrollReveal';
import type { TypographyProps } from '@/components/ui/Typography';
import type { Component } from '@/types';

const boxVariants = cva('', {
  variants: {
    variant: {
      default: 'border-gray-700 bg-slate-800 [&>svg]:text-green-400',
      blue: 'border-blue-500/20 bg-blue-500/10 [&>svg]:text-blue-400',
      red: 'border-red-500/20 bg-red-500/10 [&>svg]:text-red-400',
    },
    sizes: {
      default: '[&>svg]:size-12',
      'icon-8': '[&>svg]:size-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    sizes: 'default',
  },
});

type BoxVariant = VariantProps<typeof boxVariants>;

export type BoxProps = ComponentProps<'div'> &
  Pick<ScrollRevealProps, 'delay' | 'direction'> &
  BoxVariant & {
    icon?: LucideIcon;
    label: string;
    content: string;
    scrollRevealClassName?: string;
    titleVariant?: TypographyProps['variant'];
    center?: boolean;
  };

const Box: Component<BoxProps> = (props) => {
  const {
    variant,
    sizes,
    icon: Icon,
    label,
    content,
    delay,
    direction,
    scrollRevealClassName,
    className,
    titleVariant,
    center = true,
    ...restProps
  } = props;

  return (
    <ScrollReveal className={scrollRevealClassName} delay={delay} direction={direction}>
      <div
        {...restProps}
        className={cn(
          'h-full rounded-xl border p-8',
          center && 'text-center',
          boxVariants({ variant, sizes }),
          className,
        )}
      >
        {Icon ? <Icon className={cn('mb-6', center && 'mx-auto')} /> : null}
        <Typography as="h3" className="mb-4" color="white" variant={titleVariant ?? 'xl'}>
          {label}
        </Typography>
        <Typography as="p" color="content" variant="content">
          {content}
        </Typography>
      </div>
    </ScrollReveal>
  );
};

export default Box;
