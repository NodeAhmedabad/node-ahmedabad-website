import socialMedia from '@/data/footer/socialMedia';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const FooterLinks: Component = () => (
  <div className="flex space-x-4">
    {socialMedia.map((social) => {
      const { title, icon: Icon, url, color } = social;

      return (
        <a
          key={title}
          aria-label={title}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className={cn(
            'rounded-lg bg-slate-800 p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg',
            color,
          )}
        >
          <Icon className="size-5" />
        </a>
      );
    })}
  </div>
);

export default FooterLinks;
