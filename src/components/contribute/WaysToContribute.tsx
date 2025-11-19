import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';

import ContentWrapper from '@/components/ContentWrapper';
import Section from '@/components/Section';
import Box from '@/components/ui/Box';
import Typography from '@/components/ui/Typography';
import waysToContribute from '@/data/contribute/waysToContribute';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const WaysToContribute: Component = () => {
  const { title, description, ways } = waysToContribute;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {ways.map((way, index) => {
          const { icon, label, content, benefits, actions } = way;

          return (
            <Box
              key={label}
              center={false}
              className="flex flex-col [&>svg]:shrink-0"
              content={content}
              contentProps={{ className: 'mb-4' }}
              delay={index * 100}
              icon={icon}
              label={label}
            >
              <div className="flex h-full flex-col gap-6">
                <div className="flex flex-col">
                  <Typography
                    as="h4"
                    className="mb-3"
                    color="white"
                    variant="content"
                    weight="semibold"
                  >
                    Benefits
                  </Typography>
                  <ul className="flex flex-col gap-y-2">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="mr-2 size-4 shrink-0 text-green-400" />
                        <Typography as="span" color="content" variant="content">
                          {benefit}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                  {actions.map((action) => {
                    const { name, variant, href, target, disabled } = action;

                    return (
                      <button
                        key={name}
                        disabled={disabled}
                        type="button"
                        className={cn(
                          'rounded-lg font-semibold transition-all duration-300 disabled:opacity-50',
                          actions.length === 1 ? 'w-full' : 'basis-1/2',
                          variant === 'solid' &&
                            'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500/25',
                          variant === 'outlined' &&
                            'border-2 border-gray-600 text-white hover:border-green-500 hover:bg-green-500/10 hover:text-white',
                        )}
                      >
                        <Link
                          href={href}
                          target={target}
                          className={cn(
                            'flex justify-center py-3',
                            disabled && 'pointer-events-none',
                          )}
                        >
                          {name}
                        </Link>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </Section>
  );
};

export default WaysToContribute;
