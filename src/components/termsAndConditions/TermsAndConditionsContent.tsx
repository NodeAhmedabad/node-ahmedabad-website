import Section from '@/components/Section';
import Box from '@/components/ui/Box';
import termsAndConditionsContent from '@/data/termsAndConditions/termsAndConditionsContent';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const TermsAndConditionsContent: Component = () => (
  <Section>
    <div className="mx-auto max-w-5xl">
      {termsAndConditionsContent.map((item, index, array) => {
        const { icon, label, content, variant } = item;
        const isLast = array.length - 1 === index;

        return (
          <Box
            key={label}
            center={false}
            className={cn(!isLast && 'mb-8')}
            content={content}
            delay={index * 50}
            icon={icon}
            label={label}
            labelProps={{ variant: '2xl' }}
            sizes="icon-8"
            variant={variant}
          />
        );
      })}
    </div>
  </Section>
);

export default TermsAndConditionsContent;
