import cn from '@/lib/cn';

import type { LucideIcon } from 'lucide-react';

import type { Component } from '@/types';

export interface SocialMedias {
  title: string;
  url: string;
  icon: LucideIcon;
  className?: string;
}

interface SocialLinksProps {
  socialMedias: readonly SocialMedias[];
}

const SocialLinks: Component<SocialLinksProps> = (props) => {
  const { socialMedias } = props;

  return (
    <div className="flex flex-wrap gap-4">
      {socialMedias.map((social) => {
        const { title, icon: Icon, url, className } = social;

        return (
          <a
            key={title}
            aria-label={title}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              'rounded-lg bg-slate-800 p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg',
              className,
            )}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
