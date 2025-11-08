import Link from 'next/link';

import cn from '@/lib/cn';

import type { LucideIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

import type { Component } from '@/types';

export interface SocialMedias {
  title: string;
  url: string;
  icon: LucideIcon;
  className?: string;
}

interface SocialLinksProps extends ComponentProps<'div'> {
  socialMedias: readonly SocialMedias[];
}

const SocialLinks: Component<SocialLinksProps> = (props) => {
  const { socialMedias, className, ...restProps } = props;

  return (
    <div {...restProps} className={cn('flex flex-wrap gap-4', className)}>
      {socialMedias.map((social) => {
        const { title, icon: Icon, url, className: innerClassName } = social;

        return (
          <Link
            key={title}
            aria-label={title}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              'rounded-lg bg-slate-800 p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg',
              innerClassName,
            )}
          >
            <Icon className="size-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
