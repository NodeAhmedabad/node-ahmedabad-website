import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import termsAndConditionsContent from '@/data/termsAndConditions/termsAndConditionsContent';

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
            className={isLast ? '' : 'mb-8'}
            content={content}
            delay={index * 50}
            icon={icon}
            label={label}
            sizes="icon-8"
            titleVariant="2xl"
            variant={variant}
          />
        );
      })}
    </div>
  </Section>
);

export default TermsAndConditionsContent;
