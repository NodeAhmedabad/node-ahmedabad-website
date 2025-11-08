import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import collectedData from '@/data/privacyPolicy/collectedData';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const CollectedData: Component = () => {
  const { title, description, data } = collectedData;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index, array) => {
          const { icon, label, content } = item;
          const isLast = array.length - 1 === index;

          return (
            <Box
              key={label}
              content={content}
              delay={index * 100}
              icon={icon}
              label={label}
              scrollRevealClassName={cn(isLast && 'md:col-span-full lg:col-span-1')}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default CollectedData;
