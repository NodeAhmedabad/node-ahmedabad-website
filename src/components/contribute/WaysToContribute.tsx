import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import waysToContribute from '@/data/contribute/waysToContribute';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const WaysToContribute: Component = () => (
  <section>
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Ways to Contribute</h2>
          <p className="text-lg text-gray-300">
            Choose how you&apos;d like to make an impact in our community
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {waysToContribute.map((way, index) => {
          const { icon: Icon, title, description, benefits, actions } = way;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="h-full rounded-xl border border-gray-700 bg-slate-800 p-8 transition-all duration-300 hover:border-green-500">
                <Icon className="mb-6 size-12 text-green-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
                <p className="mb-6 text-gray-300">{description}</p>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-white">Benefits:</h4>
                  <ul className="space-y-2">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-300">
                        <CheckCircle className="mr-2 size-4 shrink-0 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                  {actions.map((action) => {
                    const { label, variant, href, target } = action;

                    return (
                      <button
                        key={label}
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
                          {label}
                        </Link>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WaysToContribute;
