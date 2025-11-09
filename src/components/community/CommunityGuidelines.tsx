import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import guidelines from '@/data/community/guidelines';

import type { Component } from '@/types';

const CommunityGuidelines: Component = () => {
  const { title, description, data } = guidelines;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.map((guideline, index) => {
          const { icon, label, content } = guideline;

          return (
            <Box key={label} content={content} delay={index * 100} icon={icon} label={label} />
          );
        })}
      </div>
    </Section>
  );
};

export default CommunityGuidelines;
