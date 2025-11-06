import { Code } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import cn from '@/lib/cn';

import type { Component } from '@/types';
import ctaBlock from '@/data/privacyPolicy/ctaBlock';

const GitHubContributions: Component = () => {
  const { title, description, stats, actions } = ctaBlock;

  return (
    <section>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 p-12 text-center">
            <Code className="mx-auto mb-6 size-16 text-green-400" />
            <h2 className="mb-6 text-4xl font-bold text-white">{title}</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">{description}</p>

            <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat) => {
                const { value, label } = stat;

                return (
                  <div key={label} className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-green-400">{value}</h3>
                    <p className="text-gray-300">{label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {actions.map((action) => {
                const { label, variant, href } = action;

                return (
                  <button
                    key={label}
                    type="button"
                    className={cn(
                      'rounded-lg font-semibold transition-colors hover:bg-green-600',
                      variant === 'solid' && 'bg-green-500 text-white',
                      variant === 'outlined' &&
                        'border-2 border-green-500 text-green-500 hover:text-white',
                    )}
                  >
                    <Link className="flex justify-center px-8 py-3" href={href} target="_blank">
                      {label}
                    </Link>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubContributions;
