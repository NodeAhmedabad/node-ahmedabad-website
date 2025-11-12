import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import privacyPolicyContent from '@/data/privacyPolicy/privacyPolicyContent';
import cn from '@/lib/cn';

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
            content={content}
            delay={index * 50}
            icon={icon}
            label={label}
            labelProps={{ variant: '2xl' }}
            sizes="icon-8"
            variant={variant}
            className={cn(
              !isLast &&
                'mb-8 [&_ol]:ml-4 [&_ol]:flex [&_ol]:list-disc [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:whitespace-normal',
            )}
          />
        );
      })}
    </div>
  </Section>
);

export default PrivacyPolicyContent;
