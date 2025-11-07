import ScrollReveal from '@/components/ScrollReveal';
import privacyPolicyContent from '@/data/privacyPolicy/privacyPolicyContent';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const PrivacyPolicyContent: Component = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-4xl">
        {privacyPolicyContent.map((item, index) => {
          const { icon: Icon, title, content, className, iconClassName } = item;

          return (
            <ScrollReveal key={title} delay={index * 50}>
              <div className="mb-8">
                <div
                  className={cn('rounded-xl border border-gray-700 bg-slate-800 p-8', className)}
                >
                  {Icon ? (
                    <Icon className={cn('mb-4 size-8 text-blue-400', iconClassName)} />
                  ) : null}
                  <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
                  <div className="whitespace-pre-line leading-relaxed text-gray-300">{content}</div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PrivacyPolicyContent;
