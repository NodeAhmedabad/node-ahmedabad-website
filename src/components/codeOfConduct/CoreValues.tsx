import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import { coreValues } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const CoreValues: Component = () => {
  const { title, description, values } = coreValues;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => {
          const { icon, label, content } = value;

          return (
            <Box key={label} content={content} delay={index * 100} icon={icon} label={label} />
          );
        })}
      </div>
    </Section>
  );
};

export default CoreValues;
