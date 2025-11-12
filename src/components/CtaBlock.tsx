import Link from 'next/link';

import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

import type { Component } from '@/types';

interface CtaBlockAction {
  label: string;
  href: string;
  icon?: LucideIcon;
  target?: ComponentProps<'a'>['target'];
  isOutlined?: boolean;
}

export interface CtaBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actions: CtaBlockAction[];
  variant: 'default' | 'white';
  content?: ReactNode;
}

const CtaBlock: Component<CtaBlockProps> = (props) => {
  const { icon: Icon, title, description, actions, variant, content } = props;

  const classNames = (() => {
    const outlinedClassName = 'border-2';

    if (variant === 'white') {
      return {
        iconClassName: 'text-white',
        linkSolidClassName: 'bg-white text-black hover:bg-gray-100',
        linkOutlineClassName: cn(
          outlinedClassName,
          'border-white text-white hover:bg-white hover:text-black',
        ),
      };
    }

    return {
      iconClassName: 'text-green-400',
      linkSolidClassName: 'bg-green-500 text-white hover:bg-green-600',
      linkOutlineClassName: cn(
        outlinedClassName,
        'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
      ),
    };
  })();

  return (
    <Section>
      <ScrollReveal>
        <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-8 text-center sm:p-12">
          <Icon className={cn('mx-auto mb-6 size-12 sm:size-16', classNames.iconClassName)} />
          <ContentWrapper description={description} title={title} />
          {content}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {actions.map((action) => {
              const { label, href, icon: ActionIcon, target, isOutlined = false } = action;

              return (
                <Link
                  key={label}
                  href={href}
                  target={target ?? '_blank'}
                  type="button"
                  className={cn(
                    'flex flex-wrap items-center justify-center gap-y-2 rounded-lg px-8 py-3 font-semibold transition-colors',
                    isOutlined ? classNames.linkOutlineClassName : classNames.linkSolidClassName,
                  )}
                >
                  {ActionIcon ? <ActionIcon className="mr-2 size-4 shrink-0" /> : null}
                  <Typography
                    as="span"
                    className="break-word"
                    color="white"
                    variant="content"
                    weight="semibold"
                  >
                    {label}
                  </Typography>
                </Link>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default CtaBlock;
