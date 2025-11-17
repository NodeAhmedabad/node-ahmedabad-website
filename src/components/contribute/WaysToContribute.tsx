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
              className="flex flex-col"
              content={content}
              contentProps={{ className: 'mb-4' }}
              delay={index * 100}
              icon={icon}
              label={label}
            >
              <div className="flex flex-col gap-6">
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
                    const { name, variant, href, target } = action;

                    return (
                      <button
                        key={name}
                        type="button"
                        className={cn(
                          'rounded-lg font-semibold transition-colors hover:bg-green-600',
                          actions.length === 1 ? 'w-full' : 'basis-1/2',
                          variant === 'solid' && 'bg-green-500 text-white',
                          variant === 'outlined' &&
                            'border-2 border-green-500 text-green-500 hover:text-white',
                        )}
                      >
                        <Link className="flex justify-center py-3" href={href} target={target}>
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
