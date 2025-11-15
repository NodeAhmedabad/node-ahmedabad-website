import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import informationBlock from '@/data/about/informationBlock';

import type { Component } from '@/types';

const InformationBlock: Component = () => (
  <Section>
    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
      {informationBlock.map((item) => {
        const { icon, label, content } = item;

        return <Box key={label} content={content} icon={icon} label={label} />;
      })}
    </div>
  </Section>
);

export default InformationBlock;
