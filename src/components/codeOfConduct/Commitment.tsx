import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import { commitment } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const Commitment: Component = () => {
  const { title, description } = commitment;

  return (
    <Section>
      <ContentWrapper className="mb-0" description={description} title={title} />
    </Section>
  );
};

export default Commitment;
