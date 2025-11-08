import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import privacyPolicyContent from '@/data/privacyPolicy/privacyPolicyContent';

import type { Component } from '@/types';

const PrivacyPolicyContent: Component = () => (
  <Section>
    <div className="mx-auto max-w-5xl">
      {privacyPolicyContent.map((item, index, array) => {
        const { icon, label, content, variant } = item;
        const isLast = array.length - 1 === index;

        return (
          <Box
            key={label}
            center={false}
            className={isLast ? '' : 'mb-8'}
            content={content}
            delay={index * 50}
            h3Props={{ variant: '2xl' }}
            icon={icon}
            label={label}
            sizes="icon-8"
            variant={variant}
          />
        );
      })}
    </div>
  </Section>
);

export default PrivacyPolicyContent;
