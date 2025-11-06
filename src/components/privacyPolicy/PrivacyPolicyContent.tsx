import Box from '@/components/ui/Box';
import privacyPolicyContent from '@/data/privacyPolicy/privacyPolicyContent';

import type { Component } from '@/types';

const PrivacyPolicyContent: Component = () => (
  <section>
    <div className="container mx-auto px-6">
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
              icon={icon}
              label={label}
              sizes="icon-8"
              titleVariant="2xl"
              variant={variant}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default PrivacyPolicyContent;
