import { cva } from 'class-variance-authority';

import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

import type { ScrollRevealProps } from '@/components/ScrollReveal';
import type { TypographyProps } from '@/components/ui/Typography';
import type { Component } from '@/types';

const boxVariants = cva('', {
  variants: {
    variant: {
      default: 'border-gray-700 bg-slate-800 hover:border-green-500 [&>svg]:text-green-400',
      blue: 'border-blue-500/20 bg-blue-500/10 hover:border-blue-500 [&>svg]:text-blue-400',
      red: 'border-red-500/20 bg-red-500/10 hover:border-red-500 [&>svg]:text-red-400',
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

export type BoxProps = Omit<ComponentProps<'div'>, 'content'> &
  Pick<ScrollRevealProps, 'delay' | 'direction'> &
  BoxVariant & {
    icon?: LucideIcon;
    label: ReactNode;
    content: ReactNode;
    description?: ReactNode;
    scrollRevealClassName?: string;
    labelProps?: Partial<TypographyProps>;
    contentProps?: Partial<TypographyProps>;
    descriptionProps?: Partial<TypographyProps>;
    customIcon?: ReactNode;
    center?: boolean;
  };

const Box: Component<BoxProps> = (props) => {
  const {
    variant,
    sizes,
    icon: Icon,
    label,
    content,
    description,
    delay,
    direction,
    scrollRevealClassName,
    className,
    labelProps,
    contentProps,
    descriptionProps,
    customIcon,
    children,
    center = true,
    ...restProps
  } = props;

  return (
    <ScrollReveal className={scrollRevealClassName} delay={delay} direction={direction}>
      <div
        {...restProps}
        className={cn(
          'h-full rounded-xl border p-6 transition-[border-color] duration-300 sm:p-8',
          center && 'text-center',
          boxVariants({ variant, sizes }),
          className,
        )}
      >
        {customIcon}
        {Icon ? <Icon className={cn('mb-4 sm:mb-6', center && 'mx-auto')} /> : null}
        <Typography
          color="white"
          variant="xl"
          {...labelProps}
          as="h3"
          className={cn('mb-4', labelProps?.className)}
          {...(typeof label === 'string'
            ? {
                dangerouslySetInnerHTML: {
                  __html: label,
                },
              }
            : null)}
        >
          {typeof label === 'string' ? undefined : label}
        </Typography>
        <Typography
          color="content"
          variant="content"
          {...contentProps}
          as="p"
          className={cn('mb-2', contentProps?.className)}
          {...(typeof content === 'string'
            ? {
                dangerouslySetInnerHTML: {
                  __html: content,
                },
              }
            : null)}
        >
          {typeof content === 'string' ? undefined : content}
        </Typography>
        {description ? (
          <Typography
            color="content"
            variant="sm"
            {...descriptionProps}
            as="p"
            {...(typeof description === 'string'
              ? {
                  dangerouslySetInnerHTML: {
                    __html: description,
                  },
                }
              : null)}
          >
            {typeof description === 'string' ? undefined : description}
          </Typography>
        ) : null}
        {children}
      </div>
    </ScrollReveal>
  );
};

export default Box;
