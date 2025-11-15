import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import coreValues from '@/data/about/coreValues';

import type { Component } from '@/types';

const CoreValues: Component = () => {
  const { title, description, values } = coreValues;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {values.map((item, index) => {
          const { icon, label, content } = item;

          return (
            <Box key={label} content={content} delay={index * 100} icon={icon} label={label} />
          );
        })}
      </div>
    </Section>
  );
};

export default CoreValues;
