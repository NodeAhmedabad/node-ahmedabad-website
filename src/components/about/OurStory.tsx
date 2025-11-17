import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';
import ourStory from '@/data/about/ourStort';

import type { Component } from '@/types';

const OurStory: Component = () => {
  const { title, description, story } = ourStory;

  return (
    <Section>
      <ContentWrapper className="sm:mb-8" description={description} title={title} />
      <ScrollReveal>
        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-gray-700 px-4 py-6 text-center md:p-8">
          {story.map((item) => (
            <Typography key={item} as="p" color="content" variant="content">
              {item}
            </Typography>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default OurStory;
